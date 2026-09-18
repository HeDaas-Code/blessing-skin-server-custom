<?php

namespace Yggdrasil\Services;

use Cache;
use Http;
use Yggdrasil\Models\Binding;

class OfficialRouter
{
    public static function decide($binding)
    {
        if (! $binding) {
            return 'p0';
        }

        if (! option('ygg_official_enabled')) {
            return 'p2';
        }

        return static::isHealthy() ? 'p1' : 'p2';
    }

    public static function isHealthy()
    {
        $ttl = (int) (option('ygg_official_health_ttl') ?: 60);
        $key = 'ygg_official_status';
        $cached = Cache::get($key);

        if ($cached !== null) {
            return $cached === 'up';
        }

        $status = 'up';
        try {
            $timeout = (int) (option('ygg_official_timeout') ?: 5);
            Http::timeout($timeout)->head('https://api.minecraftservices.com/');
        } catch (\Throwable $e) {
            $status = 'down';
        }

        Cache::put($key, $status, $ttl);

        return $status === 'up';
    }
}
