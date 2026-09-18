#!/usr/bin/env bash
#
# Blessing Skin Server 容器入口
#
# 首次启动自动完成：生成 .env、等待数据库、建表、创建超级管理员、启用内置插件、
# 拷贝插件前端资源；之后每次启动只做幂等的目录/权限/配置刷新，可安全反复重启。
#
set -Eeuo pipefail

APP_DIR=/app
DATA_DIR="$APP_DIR/storage"
ENV_FILE="$DATA_DIR/.env"
INSTALL_LOCK="$DATA_DIR/install.lock"

log()  { printf '\033[1;34m[blessing-skin]\033[0m %s\n' "$*"; }
warn() { printf '\033[1;33m[blessing-skin]\033[0m %s\n' "$*"; }
die()  { printf '\033[1;31m[blessing-skin]\033[0m %s\n' "$*" >&2; exit 1; }

# 以 www-data 身份执行（-p 保留环境变量；命令体用单引号，密码中的特殊字符不受影响）
as_app() { su -p -s /bin/bash www-data -c "cd $APP_DIR && $1"; }

# 写入/更新 .env 中的一项：值加双引号并转义 \ " $（用 awk 定位，避免 sed 定界符冲突）
set_env() {
    local key="$1" value="$2" esc tmp
    esc="$(printf '%s' "$value" | sed -e 's/\\/\\\\/g' -e 's/"/\\"/g' -e 's/\$/\\$/g')"
    if grep -q "^${key}=" "$ENV_FILE"; then
        tmp="$(mktemp)"
        KEY="$key" VALUE="$esc" awk 'BEGIN { k = ENVIRON["KEY"]; v = ENVIRON["VALUE"] }
            $0 ~ "^" k "=" { print k "=\"" v "\""; next } { print }' "$ENV_FILE" > "$tmp"
        cat "$tmp" > "$ENV_FILE"
        rm -f "$tmp"
    else
        printf '%s="%s"\n' "$key" "$esc" >> "$ENV_FILE"
    fi
    chown www-data:www-data "$ENV_FILE" 2>/dev/null || true
    chmod 640 "$ENV_FILE" 2>/dev/null || true
    return 0
}

# 只刷新运维显式提供的变量；未提供的保留 .env 现值，便于手工微调
refresh_env() {
    [ -n "${APP_ENV:-}" ]             && set_env APP_ENV "$APP_ENV"
    [ -n "${APP_DEBUG:-}" ]           && set_env APP_DEBUG "$APP_DEBUG"
    [ -n "${APP_URL:-}" ]             && set_env APP_URL "$APP_URL"
    [ -n "${APP_KEY:-}" ]             && set_env APP_KEY "$APP_KEY"
    [ -n "${APP_FALLBACK_LOCALE:-}" ] && set_env APP_FALLBACK_LOCALE "$APP_FALLBACK_LOCALE"
    [ -n "${DB_CONNECTION:-}" ]       && set_env DB_CONNECTION "$DB_CONNECTION"
    [ -n "${DB_HOST:-}" ]             && set_env DB_HOST "$DB_HOST"
    [ -n "${DB_PORT:-}" ]             && set_env DB_PORT "$DB_PORT"
    [ -n "${DB_DATABASE:-}" ]         && set_env DB_DATABASE "$DB_DATABASE"
    [ -n "${DB_USERNAME:-}" ]         && set_env DB_USERNAME "$DB_USERNAME"
    [ -n "${DB_PASSWORD:-}" ]         && set_env DB_PASSWORD "$DB_PASSWORD"
    [ -n "${DB_PREFIX:-}" ]           && set_env DB_PREFIX "$DB_PREFIX"
    [ -n "${MAIL_MAILER:-}" ]         && set_env MAIL_MAILER "$MAIL_MAILER"
    [ -n "${MAIL_HOST:-}" ]           && set_env MAIL_HOST "$MAIL_HOST"
    [ -n "${MAIL_PORT:-}" ]           && set_env MAIL_PORT "$MAIL_PORT"
    [ -n "${MAIL_USERNAME:-}" ]       && set_env MAIL_USERNAME "$MAIL_USERNAME"
    [ -n "${MAIL_PASSWORD:-}" ]       && set_env MAIL_PASSWORD "$MAIL_PASSWORD"
    [ -n "${MAIL_ENCRYPTION:-}" ]     && set_env MAIL_ENCRYPTION "$MAIL_ENCRYPTION"
    [ -n "${MAIL_FROM_ADDRESS:-}" ]   && set_env MAIL_FROM_ADDRESS "$MAIL_FROM_ADDRESS"
    [ -n "${MAIL_FROM_NAME:-}" ]      && set_env MAIL_FROM_NAME "$MAIL_FROM_NAME"
    [ -n "${SESSION_LIFETIME:-}" ]    && set_env SESSION_LIFETIME "$SESSION_LIFETIME"
    [ -n "${YGG_VERBOSE_LOG:-}" ]     && set_env YGG_VERBOSE_LOG "$YGG_VERBOSE_LOG"
    return 0
}

generate_env() {
    log "生成配置文件 $ENV_FILE"
    umask 027
    cat > "$ENV_FILE" <<'ENVEOF'
APP_NAME="Blessing Skin"
APP_ENV=production
APP_KEY=
APP_DEBUG=false
APP_URL="http://localhost"
APP_FALLBACK_LOCALE=en

LOG_CHANNEL=stack
LOG_LEVEL=warning

DB_CONNECTION=sqlite
DB_HOST=db
DB_PORT=3306
DB_DATABASE=/app/storage/database.db
DB_USERNAME=blessing
DB_PASSWORD=
DB_PREFIX=

PWD_METHOD=BCRYPT

CACHE_DRIVER=file
SESSION_DRIVER=file
QUEUE_CONNECTION=sync
SESSION_LIFETIME=120

MAIL_MAILER=log
MAIL_HOST=
MAIL_PORT=465
MAIL_USERNAME=
MAIL_PASSWORD=
MAIL_ENCRYPTION=
MAIL_FROM_ADDRESS=
MAIL_FROM_NAME="Blessing Skin"

PLUGINS_DIR=null
PLUGINS_URL=null

YGG_VERBOSE_LOG=false
ENVEOF
    chown www-data:www-data "$ENV_FILE"
    chmod 640 "$ENV_FILE"
}

wait_for_db() {
    case "${DB_CONNECTION:-sqlite}" in
        mysql|mariadb|pgsql)
            log "等待数据库 ${DB_HOST:-db}:${DB_PORT:-3306} ..."
            local i
            for i in $(seq 1 60); do
                if php -r '
                    $driver = str_starts_with(getenv("DB_CONNECTION") ?: "", "pgsql") ? "pgsql" : "mysql";
                    $dsn = sprintf("%s:host=%s;port=%s;dbname=%s", $driver, getenv("DB_HOST") ?: "db", getenv("DB_PORT") ?: "3306", getenv("DB_DATABASE") ?: "blessing");
                    new PDO($dsn, getenv("DB_USERNAME") ?: "root", getenv("DB_PASSWORD") ?: "");
                ' 2>/dev/null; then
                    log "数据库已就绪"
                    return 0
                fi
                sleep 2
            done
            warn "等待数据库超时，继续启动（应用可能报连接错误）"
            ;;
        sqlite)
            local db="${DB_DATABASE:-/app/storage/database.db}"
            mkdir -p "$(dirname "$db")"
            touch "$db"
            chown www-data:www-data "$db"
            ;;
    esac
}

# 把插件前端资源同步到 public/plugins（等价于 PluginWasEnabled 监听器的行为）
sync_plugin_assets() {
    local src name dst
    for src in plugins/*/assets; do
        [ -d "$src" ] || continue
        name="$(basename "$(dirname "$src")")"
        dst="public/plugins/$name/assets"
        mkdir -p "$dst"
        cp -a "$src/." "$dst/"
    done
    chown -R www-data:www-data public/plugins
}

# 写入一次性 PHP 小脚本（避免在 shell 里拼接 PHP 代码）
write_option_script() {
    cat > /usr/local/share/bs-set-options.php <<'PHPEOF'
<?php

require '/app/vendor/autoload.php';
$app = require '/app/bootstrap/app.php';
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();

$map = [
    'site_name' => 'BS_SITE_NAME',
    'site_url' => 'BS_SITE_URL',
];
$set = [];
foreach ($map as $option => $env) {
    $value = getenv($env);
    if ($value !== false && $value !== '') {
        $set[$option] = $value;
    }
}
if ($set !== []) {
    option($set);
}
PHPEOF
    chmod 644 /usr/local/share/bs-set-options.php
}

bootstrap() {
    cd "$APP_DIR"

    mkdir -p storage/framework/cache storage/framework/sessions storage/framework/views \
             storage/logs storage/app storage/packages storage/plugins storage/debugbar \
             bootstrap/cache public/lang public/plugins /usr/local/share

    if [ "$(stat -c '%u' "$DATA_DIR")" != "$(id -u www-data)" ]; then
        log "修复 storage 属主（首次挂载数据卷时执行一次）"
        chown -R www-data:www-data "$DATA_DIR"
    fi
    chown -R www-data:www-data bootstrap/cache public/lang public/plugins 2>/dev/null || true

    if [ ! -f "$ENV_FILE" ]; then
        generate_env
    fi
    refresh_env
    ln -sfn "storage/.env" "$APP_DIR/.env"

    wait_for_db

    if [ ! -f "$INSTALL_LOCK" ]; then
        [ -n "${BS_ADMIN_EMAIL:-}" ]    || die "首次启动需要设置 BS_ADMIN_EMAIL（超级管理员邮箱）"
        [ -n "${BS_ADMIN_PASSWORD:-}" ] || die "首次启动需要设置 BS_ADMIN_PASSWORD（超级管理员密码）"
        log "首次启动：建表并创建超级管理员 ${BS_ADMIN_EMAIL}"
        as_app 'php artisan migrate --force'
        as_app 'php artisan key:generate --force'
        as_app 'php artisan passport:keys --force'
        as_app 'php artisan bs:install "$BS_ADMIN_EMAIL" "$BS_ADMIN_PASSWORD" "${BS_ADMIN_NICKNAME:-admin}"'
    else
        as_app 'php artisan migrate --force'
    fi

    # 站点名称 / 站点地址（可选，仅设置显式提供的项）
    write_option_script
    if [ -n "${BS_SITE_NAME:-}${BS_SITE_URL:-}" ]; then
        as_app 'php /usr/local/share/bs-set-options.php' \
            || warn "写入站点名称/地址失败，可在后台「站点设置」中修改"
    fi

    local plugins="${BS_PLUGINS:-}"
    if [ -z "$plugins" ]; then
        plugins="$(find plugins -maxdepth 1 -mindepth 1 -type d -printf '%f ' 2>/dev/null || true)"
    fi
    if [ -n "$plugins" ]; then
        log "启用插件：$plugins"
        local name
        for name in $plugins; do
            # 启用是幂等的；失败（如依赖不满足）只告警，不阻塞启动
            as_app "php artisan plugin:enable '$name'" || warn "插件 $name 启用失败，请在后台插件页查看原因"
        done
    fi

    sync_plugin_assets

    as_app 'php artisan view:clear' >/dev/null 2>&1 || true

    log "就绪 —— 数据目录 $DATA_DIR"
}

if [ "${1:-apache2-foreground}" = "apache2-foreground" ] || [ "${1:-}" = "apache2" ]; then
    bootstrap
    exec "$@"
fi

# 执行一次性命令（如 php artisan xxx）时，仅保证 .env 软链存在
if [ "${BS_SKIP_BOOTSTRAP:-0}" != "1" ] && [ -f "$ENV_FILE" ]; then
    ln -sfn "storage/.env" "$APP_DIR/.env"
fi
exec "$@"
