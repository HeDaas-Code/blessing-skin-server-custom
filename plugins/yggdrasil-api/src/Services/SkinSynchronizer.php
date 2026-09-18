<?php

namespace Yggdrasil\Services;

use Http;
use Storage;
use App\Events\PlayerWasAdded;
use App\Models\Player;
use App\Models\Texture;

class SkinSynchronizer
{
    public static function sync($user, $profile)
    {
        $name = $profile['player_name'];
        $player = Player::where('uid', $user->uid)
            ->where('name', $name)
            ->first();

        $created = false;
        if (! $player) {
            $occupied = Player::where('name', $name)->where('uid', '!=', $user->uid)->exists();
            if ($occupied) {
                return ['synced' => false, 'reason' => 'name-occupied'];
            }

            $player = new Player();
            $player->uid = $user->uid;
            $player->name = $name;
            $player->tid_skin = 0;
            $player->tid_cape = 0;
            $player->save();

            event(new PlayerWasAdded($player));
            $created = true;
        }

        $skinTid = null;
        if (! empty($profile['skin_url'])) {
            $skinTid = static::import($user, $name, $profile['skin_url'], $profile['skin_variant'] ?? 'steve');
        }

        $capeTid = null;
        if (! empty($profile['cape_url'])) {
            $capeTid = static::import($user, $name, $profile['cape_url'], 'cape');
        }

        if ($skinTid) {
            $player->tid_skin = $skinTid;
        }
        if ($capeTid) {
            $player->tid_cape = $capeTid;
        }
        $player->save();

        return ['synced' => true, 'created' => $created, 'skin_tid' => $skinTid, 'cape_tid' => $capeTid];
    }

    protected static function import($user, $playerName, $url, $type)
    {
        try {
            $content = Http::timeout(15)->get($url)->body();
        } catch (\Throwable $e) {
            return null;
        }

        if (empty($content)) {
            return null;
        }

        $hash = hash('sha256', $content);

        $existing = Texture::where('hash', $hash)
            ->where(function ($query) use ($user) {
                $query->where('public', true)->orWhere('uploader', $user->uid);
            })
            ->first();
        if ($existing) {
            return $existing->tid;
        }

        $texture = new Texture();
        $texture->name = $playerName.' '.($type === 'cape' ? 'cape' : 'skin');
        $texture->type = $type;
        $texture->hash = $hash;
        $texture->size = (int) ceil(strlen($content) / 1024);
        $texture->public = false;
        $texture->uploader = $user->uid;
        $texture->likes = 1;
        $texture->save();

        $disk = Storage::disk('textures');
        if ($disk->missing($hash)) {
            $disk->put($hash, $content);
        }

        return $texture->tid;
    }
}
