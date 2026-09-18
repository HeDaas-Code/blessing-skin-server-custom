# Blessing Skin Server —— 一体化生产镜像（自带前端构建产物与内置插件）
#
# 阶段：vendor(composer 依赖) -> frontend(yarn build) -> 运行时(php:8.3-apache)
# 构建上下文由 Dockerfile.dockerignore 过滤（旧构建器回退到 .dockerignore）。
#
ARG PHP_VERSION=8.3
ARG NODE_VERSION=20
ARG COMPOSER_VERSION=2

######################## 1. PHP 依赖 ########################
FROM composer:${COMPOSER_VERSION} AS vendor

# 默认使用国内 composer 镜像，失败时回退 packagist 官方源
ARG COMPOSER_MIRROR=https://mirrors.aliyun.com/composer/

WORKDIR /app

COPY composer.json composer.lock ./

RUN set -eux; \
    if [ -n "${COMPOSER_MIRROR}" ]; then \
        composer config -g repo.packagist composer "${COMPOSER_MIRROR}" || true; \
    fi; \
    if ! composer install \
            --prefer-dist \
            --no-dev \
            --no-progress \
            --no-interaction \
            --no-scripts \
            --no-autoloader \
            --ignore-platform-reqs; then \
        echo "== composer 镜像源失败，回退官方源 =="; \
        composer config -g --unset repo.packagist || true; \
        composer install \
            --prefer-dist \
            --no-dev \
            --no-progress \
            --no-interaction \
            --no-scripts \
            --no-autoloader \
            --ignore-platform-reqs; \
    fi

######################## 2. 前端构建 ########################
FROM node:${NODE_VERSION}-alpine AS frontend

# 默认走国内镜像源，失败时回退官方源
ARG NPM_REGISTRY=https://registry.npmmirror.com

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile --network-timeout 900000 --registry "${NPM_REGISTRY}" \
    || (echo "== npm 镜像源失败，回退官方源 ==" && yarn install --frozen-lockfile --network-timeout 900000)

COPY postcss.config.js tsconfig.json tsconfig.build.json webpack.config.ts ./
COPY tools ./tools
COPY resources ./resources

# 产出 public/app/* 与 resources/views/assets/*.twig
RUN mkdir -p resources/views/assets \
    && yarn build \
    && cp resources/assets/src/images/bg.webp public/app/ \
    && cp resources/assets/src/images/favicon.ico public/app/

######################## 3. 运行时 ########################
FROM php:${PHP_VERSION}-apache

SHELL ["/bin/bash", "-o", "pipefail", "-c"]

ENV DEBIAN_FRONTEND=noninteractive \
    COMPOSER_ALLOW_SUPERUSER=1 \
    APACHE_DOCUMENT_ROOT=/app/public \
    TZ=Asia/Shanghai

# 依次尝试 jsDelivr / Raw GitHub / GitHub Release 三个源获取扩展安装器
RUN set -eux; \
    for url in \
        "https://cdn.jsdelivr.net/gh/mlocati/docker-php-extension-installer@latest/install-php-extensions" \
        "https://raw.githubusercontent.com/mlocati/docker-php-extension-installer/main/install-php-extensions" \
        "https://github.com/mlocati/docker-php-extension-installer/releases/latest/download/install-php-extensions"; \
    do \
        if curl -fsSL "$url" -o /usr/local/bin/install-php-extensions; then \
            break; \
        fi; \
    done; \
    chmod +x /usr/local/bin/install-php-extensions; \
    install-php-extensions gd zip imagick pdo_mysql opcache \
    && apt-get update \
    && apt-get install -y --no-install-recommends ca-certificates tzdata \
    && rm -rf /var/lib/apt/lists/*

COPY --from=vendor /usr/bin/composer /usr/bin/composer

WORKDIR /app

# 应用源码（由 docker/Dockerfile.dockerignore 过滤）
COPY . /app

# 补上被忽略的构建产物与依赖
COPY --from=vendor /app/vendor ./vendor
COPY --from=frontend /app/public/app ./public/app
COPY --from=frontend /app/resources/views/assets ./resources/views/assets

# Apache / PHP 配置与入口脚本
COPY docker/apache/blessing-skin.conf /etc/apache2/sites-available/blessing-skin.conf
COPY docker/apache/security.conf /etc/apache2/conf-available/blessing-skin-security.conf
COPY docker/php/zz-blessing-skin.ini /usr/local/etc/php/conf.d/zz-blessing-skin.ini
COPY docker/entrypoint.sh /usr/local/bin/blessing-skin-entrypoint

# 清理仅构建期需要的文件，重建自动加载
RUN rm -rf resources/assets tools node_modules \
        webpack.config.ts postcss.config.js tsconfig.json tsconfig.dev.json \
        tsconfig.build.json tsconfig.eslint.json .husky .github .devcontainer \
        .gitpod.yml crowdin.yml phpunit.xml tests _ide_helper.php \
    && composer dump-autoload --optimize --no-dev --no-interaction --no-scripts \
    && chmod +x /usr/local/bin/blessing-skin-entrypoint \
    && a2dissite 000-default \
    && a2ensite blessing-skin \
    && a2enconf blessing-skin-security \
    && a2enmod rewrite headers expires \
    && mkdir -p storage/framework/cache storage/framework/sessions storage/framework/views \
        storage/logs storage/app storage/packages storage/plugins storage/debugbar \
        public/lang public/plugins bootstrap/cache resources/views/overrides \
    && chown -R www-data:www-data /app

VOLUME ["/app/storage"]

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=60s --retries=5 \
    CMD curl -fsS -o /dev/null http://127.0.0.1/ || exit 1

ENTRYPOINT ["/usr/local/bin/blessing-skin-entrypoint"]
CMD ["apache2-foreground"]
