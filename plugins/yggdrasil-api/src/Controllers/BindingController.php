<?php

namespace Yggdrasil\Controllers;

use DB;
use Log;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use App\Models\Player;
use Yggdrasil\Models\Binding;
use Yggdrasil\Services\MicrosoftAuth;
use Yggdrasil\Services\SkinSynchronizer;

class BindingController extends Controller
{
    public function show()
    {
        $binding = Binding::find(auth()->id());

        return view('Yggdrasil::binding', [
            'binding' => $binding,
            'auth_method' => MicrosoftAuth::authMethod(),
            'conflict' => $binding ? $this->detectConflict($binding, auth()->user()) : null,
        ]);
    }

    public function startDevice(Request $request)
    {
        try {
            $device = MicrosoftAuth::startDeviceCode();
        } catch (\Throwable $e) {
            Log::channel('ygg')->error('Device code start failed: '.$e->getMessage(), ['trace' => $e->getTraceAsString()]);
            Log::error('Device code start failed: '.$e->getMessage(), ['trace' => $e->getTraceAsString()]);

            return redirect('user/yggdrasil-binding')->withErrors([trans('Yggdrasil::binding.device-start-failed')]);
        }

        $request->session()->put('ygg_binding_device_code', $device['device_code']);
        $request->session()->put('ygg_binding_device_user_code', $device['user_code']);
        $request->session()->put('ygg_binding_device_verification_uri', $device['verification_uri']);
        $request->session()->put('ygg_binding_device_message', $device['message'] ?? '');
        $request->session()->put('ygg_binding_device_expires_in', $device['expires_in'] ?? 900);

        return redirect('user/yggdrasil-binding/device');
    }

    public function showDevice(Request $request)
    {
        if (! $request->session()->get('ygg_binding_device_code')) {
            return redirect('user/yggdrasil-binding')->withErrors([trans('Yggdrasil::binding.device-not-started')]);
        }

        return view('Yggdrasil::device', [
            'user_code' => $request->session()->get('ygg_binding_device_user_code'),
            'verification_uri' => $request->session()->get('ygg_binding_device_verification_uri'),
            'message' => $request->session()->get('ygg_binding_device_message'),
            'expires_in' => $request->session()->get('ygg_binding_device_expires_in', 900),
        ]);
    }

    public function pollDevice(Request $request)
    {
        $deviceCode = $request->session()->get('ygg_binding_device_code');
        if (! $deviceCode) {
            return json(['status' => 'error', 'message' => trans('Yggdrasil::binding.device-not-started')]);
        }

        try {
            $result = MicrosoftAuth::pollDeviceCode($deviceCode);
        } catch (\Throwable $e) {
            Log::channel('ygg')->error('Device code poll failed: '.$e->getMessage(), ['trace' => $e->getTraceAsString()]);
            Log::error('Device code poll failed: '.$e->getMessage(), ['trace' => $e->getTraceAsString()]);

            return json(['status' => 'error', 'message' => trans('Yggdrasil::binding.failed')]);
        }

        if ($result['status'] === 'pending') {
            return json(['status' => 'pending', 'slow_down' => $result['slow_down'] ?? false]);
        }

        if ($result['status'] !== 'done') {
            $request->session()->forget([
                'ygg_binding_device_code',
                'ygg_binding_device_user_code',
                'ygg_binding_device_verification_uri',
                'ygg_binding_device_message',
                'ygg_binding_device_expires_in',
            ]);

            return json(['status' => 'error', 'message' => trans('Yggdrasil::binding.failed')]);
        }

        $profile = $result['profile'];

        try {
            Binding::upsert(
                auth()->id(),
                $profile['mojang_uuid'],
                $profile['player_name'],
                $profile['access_token'],
                $profile['refresh_token'],
                $profile['skin_url'] ?? null,
                $profile['skin_variant'] ?? 'steve',
                $profile['cape_url'] ?? null
            );

            $request->session()->forget([
                'ygg_binding_device_code',
                'ygg_binding_device_user_code',
                'ygg_binding_device_verification_uri',
                'ygg_binding_device_message',
                'ygg_binding_device_expires_in',
            ]);

            $binding = Binding::find(auth()->id());
            if ($this->detectConflict($binding, auth()->user())) {
                $request->session()->flash('status', trans('Yggdrasil::binding.conflict-title'));

                return json(['status' => 'done', 'redirect' => url('user/yggdrasil-binding/resolve')]);
            }

            $sync = SkinSynchronizer::sync(auth()->user(), $profile);
            if (($sync['synced'] ?? false) === false && ($sync['reason'] ?? '') === 'name-occupied') {
                $request->session()->flash('errors', new \Illuminate\Support\MessageBag([trans('Yggdrasil::binding.name-occupied')]));

                return json(['status' => 'done', 'redirect' => url('user/yggdrasil-binding')]);
            }
        } catch (\Throwable $e) {
            Log::channel('ygg')->error('Device binding save failed: '.$e->getMessage(), ['trace' => $e->getTraceAsString()]);
            Log::error('Device binding save failed: '.$e->getMessage(), ['trace' => $e->getTraceAsString()]);

            return json(['status' => 'error', 'message' => trans('Yggdrasil::binding.failed')]);
        }

        $request->session()->flash('status', trans('Yggdrasil::binding.success'));

        return json(['status' => 'done', 'redirect' => url('user/yggdrasil-binding')]);
    }

    public function redirectToMicrosoft(Request $request)
    {
        if (MicrosoftAuth::authMethod() === 'device_code') {
            return redirect('user/yggdrasil-binding');
        }

        $state = Str::random(40);
        $request->session()->put('ygg_binding_state', $state);

        return redirect(MicrosoftAuth::authorizeUrl($state));
    }

    public function handleCallback(Request $request)
    {
        if (MicrosoftAuth::authMethod() === 'device_code') {
            return redirect('user/yggdrasil-binding');
        }

        $state = $request->input('state');
        $expected = $request->session()->pull('ygg_binding_state');

        if (! $state || ! hash_equals((string) $expected, (string) $state)) {
            return redirect('user/yggdrasil-binding')->withErrors([trans('Yggdrasil::binding.state-mismatch')]);
        }

        try {
            $profile = MicrosoftAuth::handleCallback($request->input('code'));
            Binding::upsert(
                auth()->id(),
                $profile['mojang_uuid'],
                $profile['player_name'],
                $profile['access_token'],
                $profile['refresh_token'],
                $profile['skin_url'] ?? null,
                $profile['skin_variant'] ?? 'steve',
                $profile['cape_url'] ?? null
            );

            $binding = Binding::find(auth()->id());
            if ($this->detectConflict($binding, auth()->user())) {
                return redirect('user/yggdrasil-binding/resolve')->with('status', trans('Yggdrasil::binding.conflict-title'));
            }

            $sync = SkinSynchronizer::sync(auth()->user(), $profile);
            if (($sync['synced'] ?? false) === false && ($sync['reason'] ?? '') === 'name-occupied') {
                return redirect('user/yggdrasil-binding')->withErrors([trans('Yggdrasil::binding.name-occupied')]);
            }

            return redirect('user/yggdrasil-binding')->with('status', trans('Yggdrasil::binding.success'));
        } catch (\Throwable $e) {
            Log::channel('ygg')->error('Microsoft binding callback failed: '.$e->getMessage(), ['trace' => $e->getTraceAsString()]);
            Log::error('Microsoft binding callback failed: '.$e->getMessage(), ['trace' => $e->getTraceAsString()]);

            return redirect('user/yggdrasil-binding')->withErrors([trans('Yggdrasil::binding.failed')]);
        }
    }

    public function unbind()
    {
        Binding::remove(auth()->id());

        return redirect('user/yggdrasil-binding')->with('status', trans('Yggdrasil::binding.unbound'));
    }

    public function sync()
    {
        $binding = Binding::find(auth()->id());
        if (! $binding) {
            return redirect('user/yggdrasil-binding')->withErrors([trans('Yggdrasil::binding.not-bound')]);
        }

        try {
            $profile = MicrosoftAuth::verify($binding);
            Binding::updateTokens(auth()->id(), $profile['access_token'], $profile['refresh_token']);
            $sync = SkinSynchronizer::sync(auth()->user(), $profile);
            if (($sync['synced'] ?? false) === false && ($sync['reason'] ?? '') === 'name-occupied') {
                return redirect('user/yggdrasil-binding')->withErrors([trans('Yggdrasil::binding.name-occupied')]);
            }

            return redirect('user/yggdrasil-binding')->with('status', trans('Yggdrasil::binding.sync-done'));
        } catch (\Throwable $e) {
            Log::channel('ygg')->error('Official skin sync failed: '.$e->getMessage(), ['trace' => $e->getTraceAsString()]);
            Log::error('Official skin sync failed: '.$e->getMessage(), ['trace' => $e->getTraceAsString()]);

            return redirect('user/yggdrasil-binding')->withErrors([trans('Yggdrasil::binding.sync-failed')]);
        }
    }

    public function resolve()
    {
        $binding = Binding::find(auth()->id());
        if (! $binding) {
            return redirect('user/yggdrasil-binding');
        }

        $conflict = $this->detectConflict($binding, auth()->user());
        if (! $conflict) {
            return redirect('user/yggdrasil-binding')->with('status', trans('Yggdrasil::binding.no-conflict'));
        }

        return view('Yggdrasil::resolve', ['binding' => $binding, 'conflict' => $conflict]);
    }

    public function resolveRename(Request $request)
    {
        $binding = Binding::find(auth()->id());
        if (! $binding) {
            return redirect('user/yggdrasil-binding');
        }

        $player = Player::find($request->input('player_id'));
        if (! $player || $player->uid !== auth()->id()) {
            return back()->withErrors([trans('Yggdrasil::binding.conflict-invalid-player')]);
        }

        $name = $request->validate([
            'name' => [
                'required',
                new \App\Rules\PlayerName(),
                'min:'.option('player_name_length_min'),
                'max:'.option('player_name_length_max'),
                Rule::unique('players', 'name')->ignore($player->pid, 'pid'),
            ],
        ])['name'];

        if (strtolower($name) !== strtolower($binding->player_name)) {
            return back()->withErrors([trans('Yggdrasil::binding.conflict-name-mismatch')]);
        }

        $dispatcher = app(\Illuminate\Contracts\Events\Dispatcher::class);
        $dispatcher->dispatch('player.renaming', [$player, $name]);

        $old = $player->replicate();
        $player->name = $name;
        $player->save();

        $dispatcher->dispatch('player.renamed', [$player, $old]);

        SkinSynchronizer::sync(auth()->user(), [
            'player_name' => $binding->player_name,
            'skin_url' => $binding->skin_url,
            'skin_variant' => $binding->skin_variant,
            'cape_url' => $binding->cape_url,
        ]);

        return redirect('user/yggdrasil-binding')->with('status', trans('Yggdrasil::binding.conflict-renamed', ['name' => $name]));
    }

    protected function detectConflict($binding, $user)
    {
        if (! $binding) {
            return null;
        }

        $players = $user->players;
        if ($players->isEmpty()) {
            return null;
        }

        foreach ($players as $player) {
            if (strtolower($player->name) === strtolower($binding->player_name)) {
                return null;
            }
        }

        $occupied = Player::where('name', $binding->player_name)->where('uid', '!=', $user->uid)->exists();

        return [
            'official' => $binding->player_name,
            'players' => $players,
            'occupied' => $occupied,
        ];
    }

    public function adminList()
    {
        $rows = DB::table('ygg_bindings')
            ->orderBy('bound_at', 'desc')
            ->paginate(20);

        return view('Yggdrasil::admin-bindings', ['rows' => $rows]);
    }
}
