<?php

namespace Yggdrasil\Services;

use Http;
use Log;
use Yggdrasil\Models\Binding;

class MicrosoftAuth
{
    public static function authMethod()
    {
        return option('ygg_official_auth_method') ?: 'device_code';
    }

    public static function deviceClientId()
    {
        return option('ygg_official_device_client_id') ?: 'c36a9fb6-4f2a-41ff-90bd-ae7cc92031eb';
    }

    public static function authorizeUrl($state)
    {
        $query = http_build_query([
            'client_id' => option('ygg_official_client_id'),
            'response_type' => 'code',
            'scope' => 'XboxLive.signin offline_access',
            'redirect_uri' => static::redirectUri(),
            'state' => $state,
            'prompt' => 'select_account',
        ]);

        return 'https://login.microsoftonline.com/consumers/oauth2/v2.0/authorize?'.$query;
    }

    public static function redirectUri()
    {
        return option('ygg_official_redirect_uri') ?: url('user/yggdrasil-binding/callback');
    }

    public static function startDeviceCode()
    {
        $timeout = (int) (option('ygg_official_timeout') ?: 5);
        $response = Http::timeout($timeout)->asForm()->post('https://login.microsoftonline.com/consumers/oauth2/v2.0/devicecode', [
            'client_id' => static::deviceClientId(),
            'scope' => 'XboxLive.signin offline_access',
        ]);

        if (! $response->ok()) {
            Log::channel('ygg')->error('DEVICE_CODE_START_FAIL', [
                'status' => $response->status(),
                'body' => $response->body(),
            ]);

            throw new \RuntimeException('Microsoft device code flow failed: '.$response->status());
        }

        return $response->json();
    }

    public static function pollDeviceCode($deviceCode)
    {
        $timeout = (int) (option('ygg_official_timeout') ?: 5);
        $response = Http::timeout($timeout)->asForm()->post('https://login.microsoftonline.com/consumers/oauth2/v2.0/token', [
            'grant_type' => 'urn:ietf:params:oauth:grant-type:device_code',
            'client_id' => static::deviceClientId(),
            'device_code' => $deviceCode,
        ]);

        if ($response->ok()) {
            $tokens = $response->json();

            return [
                'status' => 'done',
                'profile' => static::completeChain($tokens['access_token'], $tokens['refresh_token']),
            ];
        }

        $error = $response->json('error');
        if ($error === 'authorization_pending') {
            return ['status' => 'pending'];
        }

        if ($error === 'slow_down') {
            return ['status' => 'pending', 'slow_down' => true];
        }

        if ($error === 'expired_token' || $error === 'authorization_declined' || $error === 'bad_verification_code') {
            return ['status' => 'expired', 'message' => $error];
        }

        Log::channel('ygg')->error('DEVICE_CODE_POLL_FAIL', [
            'status' => $response->status(),
            'body' => $response->body(),
        ]);

        return ['status' => 'error', 'message' => $error];
    }

    public static function handleCallback($code)
    {
        $tokens = static::msaTokens([
            'client_id' => option('ygg_official_client_id'),
            'client_secret' => option('ygg_official_client_secret'),
            'code' => $code,
            'grant_type' => 'authorization_code',
            'redirect_uri' => static::redirectUri(),
        ]);

        return static::completeChain($tokens['access_token'], $tokens['refresh_token']);
    }

    public static function verify(Binding $binding)
    {
        if (static::authMethod() === 'device_code') {
            $tokens = static::deviceRefreshTokens($binding->refresh_token);
        } else {
            $tokens = static::msaTokens([
                'client_id' => option('ygg_official_client_id'),
                'client_secret' => option('ygg_official_client_secret'),
                'refresh_token' => $binding->refresh_token,
                'grant_type' => 'refresh_token',
                'redirect_uri' => static::redirectUri(),
            ]);
        }

        return static::completeChain($tokens['access_token'], $tokens['refresh_token']);
    }

    protected static function msaTokens($payload)
    {
        $response = Http::asForm()->post('https://login.microsoftonline.com/consumers/oauth2/v2.0/token', $payload);

        if (! $response->ok()) {
            throw new \RuntimeException('Microsoft OAuth token exchange failed: '.$response->status());
        }

        return $response->json();
    }

    protected static function deviceRefreshTokens($refreshToken)
    {
        $timeout = (int) (option('ygg_official_timeout') ?: 5);
        $response = Http::timeout($timeout)->asForm()->post('https://login.microsoftonline.com/consumers/oauth2/v2.0/token', [
            'client_id' => static::deviceClientId(),
            'scope' => 'XboxLive.signin offline_access',
            'refresh_token' => $refreshToken,
            'grant_type' => 'refresh_token',
        ]);

        if (! $response->ok()) {
            throw new \RuntimeException('Microsoft device refresh failed: '.$response->status());
        }

        return $response->json();
    }

    protected static function completeChain($msaToken, $msaRefreshToken)
    {
        $jwtParts = explode('.', $msaToken);
        if (count($jwtParts) === 3) {
            $payload = json_decode(base64_decode(strtr($jwtParts[1], '-_', '+/')), true);
            Log::channel('ygg')->info('MSA_TOKEN_CLAIMS', array_intersect_key(
                is_array($payload) ? $payload : [],
                array_flip(['puid', 'aud', 'scp', 'azp', 'tid', 'preferred_username', 'email'])
            ));
        }

        $xbl = Http::post('https://user.auth.xboxlive.com/user/authenticate', [
            'properties' => [
                'AuthMethod' => 'RPS',
                'SiteName' => 'user.auth.xboxlive.com',
                'RpsTicket' => 'd='.$msaToken,
            ],
            'RelyingParty' => 'http://auth.xboxlive.com',
            'TokenType' => 'JWT',
        ]);

        $xblToken = $xbl->json('Token');
        if (! $xbl->ok() || ! $xblToken) {
            throw new \RuntimeException('XBL authentication failed: '.$xbl->status().' '.$xbl->body());
        }
        Log::channel('ygg')->info('XBL_OK', ['display_claims' => $xbl->json('DisplayClaims')]);

        $xsts = Http::post('https://xsts.auth.xboxlive.com/xsts/authorize', [
            'properties' => [
                'SandboxId' => 'RETAIL',
                'UserTokens' => [$xblToken],
            ],
            'RelyingParty' => 'rp://api.minecraftservices.com/',
            'TokenType' => 'JWT',
        ]);

        $xstsToken = $xsts->json('Token');
        $uhs = $xsts->json('DisplayClaims.xui.0.uhs');
        if (! $xsts->ok() || ! $xstsToken) {
            throw new \RuntimeException('XSTS authentication failed: '.$xsts->status().' '.json_encode($xsts->json()));
        }
        Log::channel('ygg')->info('XSTS_OK', ['uhs' => $uhs, 'xsts_json' => $xsts->json()]);

        $minecraft = Http::post('https://api.minecraftservices.com/authentication/login_with_xbox', [
            'identityToken' => 'XBL3.0 x='.$uhs.';'.$xstsToken,
        ]);

        if (! $minecraft->ok()) {
            Log::channel('ygg')->error('MC_LOGIN_FAIL', [
                'status' => $minecraft->status(),
                'body' => $minecraft->body(),
                'headers' => $minecraft->headers(),
                'identity_token' => 'XBL3.0 x='.$uhs.';'.$xstsToken,
            ]);

            throw new \RuntimeException('Minecraft login failed: '.$minecraft->status().' '.$minecraft->body());
        }
        $accessToken = $minecraft->json('access_token');

        $profile = Http::withToken($accessToken)->get('https://api.minecraftservices.com/minecraft/profile');

        if (! $profile->ok()) {
            throw new \RuntimeException('Minecraft profile lookup failed: '.$profile->status());
        }

        $mojangUuid = $profile->json('id');
        $playerName = $profile->json('name');
        if (! $mojangUuid || ! $playerName) {
            throw new \RuntimeException('Minecraft profile is missing id or name');
        }

        $skins = $profile->json('skins') ?: [];
        $capes = $profile->json('capes') ?: [];

        $activeSkin = null;
        foreach ($skins as $skin) {
            if (($skin['state'] ?? '') === 'ACTIVE' && ! empty($skin['url'])) {
                $activeSkin = $skin;
                break;
            }
        }

        $activeCape = null;
        foreach ($capes as $cape) {
            if (($cape['state'] ?? '') === 'ACTIVE' && ! empty($cape['url'])) {
                $activeCape = $cape;
                break;
            }
        }

        return [
            'mojang_uuid' => str_replace('-', '', $mojangUuid),
            'player_name' => $playerName,
            'access_token' => $accessToken,
            'refresh_token' => $msaRefreshToken,
            'skin_url' => $activeSkin['url'] ?? null,
            'skin_variant' => ($activeSkin['variant'] ?? 'CLASSIC') === 'SLIM' ? 'alex' : 'steve',
            'cape_url' => $activeCape['url'] ?? null,
        ];
    }
}
