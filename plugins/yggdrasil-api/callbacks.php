<?php

require __DIR__.'/src/Utils/helpers.php';

return [
    App\Events\PluginWasEnabled::class => function () {
        if (! Schema::hasTable('uuid')) {
            Schema::create('uuid', function ($table) {
                $table->increments('id');
                $table->string('name');
                $table->string('uuid', 255);
            });
        }

        if (! Schema::hasTable('ygg_log')) {
            Schema::create('ygg_log', function ($table) {
                $table->increments('id');
                $table->string('action');
                $table->integer('user_id');
                $table->integer('player_id');
                $table->string('parameters')->default('');
                $table->string('ip')->default('');
                $table->dateTime('time');
            });
        }

        if (! Schema::hasTable('ygg_bindings')) {
            Schema::create('ygg_bindings', function ($table) {
                $table->increments('id');
                $table->integer('user_id')->unique();
                $table->string('mojang_uuid', 255);
                $table->string('player_name');
                $table->text('access_token')->nullable();
                $table->text('refresh_token')->nullable();
                $table->string('skin_url')->nullable();
                $table->string('skin_variant')->nullable();
                $table->string('cape_url')->nullable();
                $table->dateTime('bound_at')->nullable();
                $table->dateTime('last_verified_at')->nullable();
            });
        } elseif (! Schema::hasColumn('ygg_bindings', 'skin_url')) {
            Schema::table('ygg_bindings', function ($table) {
                $table->string('skin_url')->nullable();
                $table->string('skin_variant')->nullable();
                $table->string('cape_url')->nullable();
            });
        }

        $items = [
            'ygg_uuid_algorithm' => 'v3',
            'ygg_token_expire_1' => '259200', // 3 days
            'ygg_token_expire_2' => '604800', // 7 days
            'ygg_rate_limit' => '1000',
            'ygg_skin_domain' => '',
            'ygg_search_profile_max' => '5',
            'ygg_private_key' => '',
            'ygg_show_config_section' => 'true',
            'ygg_show_activities_section' => 'true',
            'ygg_enable_ali' => 'true',
            'ygg_official_enabled' => 'false',
            'ygg_official_auth_method' => 'device_code',
            'ygg_official_device_client_id' => 'c36a9fb6-4f2a-41ff-90bd-ae7cc92031eb',
            'ygg_official_client_id' => '',
            'ygg_official_client_secret' => '',
            'ygg_official_redirect_uri' => '',
            'ygg_official_timeout' => '5',
            'ygg_official_health_ttl' => '60'
        ];

        foreach ($items as $key => $value) {
            if (! Option::get($key)) {
                Option::set($key, $value);
            }
        }

        $originalDefaultValue = [
            'ygg_token_expire_1' => '600',
            'ygg_token_expire_2' => '1200'
        ];

        // 原来的令牌过期时间默认值太低了，调高点
        foreach ($originalDefaultValue as $key => $value) {
            if (Option::get($key) == $value) {
                Option::set($key, $items[$key]);
            }
        }

        if (! env('YGG_VERBOSE_LOG')) {
            @unlink(ygg_log_path());
            @unlink(storage_path('logs/yggdrasil.log'));
        }
    },
];
