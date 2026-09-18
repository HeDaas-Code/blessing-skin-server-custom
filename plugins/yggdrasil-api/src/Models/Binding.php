<?php

namespace Yggdrasil\Models;

use DB;
use Crypt;
use Carbon\Carbon;

class Binding
{
    public $user_id;
    public $mojang_uuid;
    public $player_name;
    public $access_token;
    public $refresh_token;
    public $skin_url;
    public $skin_variant;
    public $cape_url;
    public $bound_at;
    public $last_verified_at;

    public static function find($userId)
    {
        $row = DB::table('ygg_bindings')->where('user_id', $userId)->first();

        return $row ? static::fromRow($row) : null;
    }

    public static function fromRow($row)
    {
        $binding = new static();
        $binding->user_id = $row->user_id;
        $binding->mojang_uuid = $row->mojang_uuid;
        $binding->player_name = $row->player_name;
        $binding->access_token = $row->access_token ? Crypt::decryptString($row->access_token) : null;
        $binding->refresh_token = $row->refresh_token ? Crypt::decryptString($row->refresh_token) : null;
        $binding->skin_url = $row->skin_url ?? null;
        $binding->skin_variant = $row->skin_variant ?? 'steve';
        $binding->cape_url = $row->cape_url ?? null;
        $binding->bound_at = $row->bound_at;
        $binding->last_verified_at = $row->last_verified_at;

        return $binding;
    }

    public static function upsert($userId, $mojangUuid, $playerName, $accessToken, $refreshToken, $skinUrl = null, $skinVariant = 'steve', $capeUrl = null)
    {
        DB::table('ygg_bindings')->updateOrInsert(
            ['user_id' => $userId],
            [
                'mojang_uuid' => $mojangUuid,
                'player_name' => $playerName,
                'access_token' => Crypt::encryptString($accessToken),
                'refresh_token' => Crypt::encryptString($refreshToken),
                'skin_url' => $skinUrl,
                'skin_variant' => $skinVariant,
                'cape_url' => $capeUrl,
                'bound_at' => Carbon::now(),
                'last_verified_at' => Carbon::now(),
            ]
        );
    }

    public static function updateTokens($userId, $accessToken, $refreshToken)
    {
        DB::table('ygg_bindings')->where('user_id', $userId)->update([
            'access_token' => Crypt::encryptString($accessToken),
            'refresh_token' => Crypt::encryptString($refreshToken),
            'last_verified_at' => Carbon::now(),
        ]);
    }

    public static function remove($userId)
    {
        DB::table('ygg_bindings')->where('user_id', $userId)->delete();
    }
}
