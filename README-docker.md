# Docker 一键部署

本目录提供 Blessing Skin Server（含 Yggdrasil API 等内置插件）的完整容器化方案：
**一条命令启动，首次启动自动完成建表、创建超级管理员、启用插件。**

---

## 一、快速开始（推荐）

```bash
cp deploy.env.example deploy.env
vi deploy.env                                  # 至少修改 BS_ADMIN_PASSWORD
docker compose --env-file deploy.env up -d
```

然后访问 `http://<服务器IP>:8080`，用 `deploy.env` 中的管理员邮箱与密码登录。

> **必须带 `--env-file deploy.env`**：端口、数据库等变量的替换来自该文件。
> 也可以直接使用 `./docker/deploy.sh`，它会自动带上该参数并等待站点就绪。

默认使用 **SQLite**，不需要任何外部数据库；数据全部存放在 Docker 卷 `storage` 中。

---

## 二、配置项

| 变量 | 默认 | 说明 |
| --- | --- | --- |
| `BS_ADMIN_EMAIL` | — | **必填**，超级管理员邮箱（仅首次启动创建） |
| `BS_ADMIN_PASSWORD` | — | **必填**，超级管理员密码（首次启动前务必修改） |
| `BS_ADMIN_NICKNAME` | `admin` | 昵称 |
| `BS_PORT` | `8080` | 宿主机端口 |
| `BS_SITE_NAME` | `Blessing Skin` | 站点名称 |
| `BS_SITE_URL` | 自动探测 | 反代/域名场景下的站点地址，如 `https://skin.example.com` |
| `BS_PLUGINS` | 全部内置插件 | 指定要启用的插件，如 `yggdrasil-api` |
| `TZ` | `Asia/Shanghai` | 时区 |
| `DB_CONNECTION` | `sqlite` | 改为 `mysql` 即切换 MySQL |
| `MAIL_*` | 无 | 邮件配置，用于找回密码 |

> **注意**：`deploy.env` 里的 `$` 会被 Docker Compose 解析。密码含 `$` 时请写成 `$$`，
> 或用单引号包裹：`BS_ADMIN_PASSWORD='Abc$123'`。
>
> 修改管理员邮箱/密码**不会**影响已安装的站点，请在后台「用户」中修改。

---

## 三、使用 MySQL

```bash
# deploy.env 中启用这几行（DB_HOST 必须是 mysql，即 compose 的服务名）
#   DB_CONNECTION=mysql
#   DB_DATABASE=blessingskin
#   DB_HOST=mysql
#   DB_USERNAME=blessing
#   DB_PASSWORD=blessing
#   DB_ROOT_PASSWORD=root

docker compose --env-file deploy.env --profile mysql up -d
```

MySQL 数据保存在卷 `mysql` 中。切换数据库前请先备份原数据。

---

## 四、离线部署

在**有网络**的机器上构建并导出镜像：

```bash
./docker/build.sh blessing-skin:6.0.2
# 产物：dist/blessing-skin-6.0.2-image.tar.gz
```

把 `dist/*.tar.gz`、`docker-compose.yml`、`deploy.env.example`、`docker/deploy.sh` 拷到目标服务器：

```bash
docker load -i blessing-skin-6.0.2-image.tar.gz
./docker/deploy.sh
```

或用 `./docker/deploy.sh blessing-skin-6.0.2-image.tar.gz` 一步完成导入 + 启动。

---

## 五、数据与备份

| 位置 | 内容 |
| --- | --- |
| 卷 `storage`（容器内 `/app/storage`） | SQLite 数据库、`.env`、`install.lock`、Passport 私钥、上传的材质、日志 |
| 卷 `mysql`（可选） | MySQL 数据目录 |

备份（SQLite 全量）：

```bash
docker compose stop app
docker run --rm -v blessing-skin-server_storage:/data -v "$PWD:/backup" alpine \
  tar czf /backup/blessing-skin-$(date +%F).tar.gz -C /data .
docker compose start app
```

---

## 六、升级

```bash
docker compose --env-file deploy.env pull      # 或 docker load -i 新镜像
docker compose --env-file deploy.env up -d     # 入口脚本自动执行数据库迁移
```

应用代码在镜像内是只读的，可变数据都在 `storage` 卷里，升级不会丢数据。

---

## 七、反向代理（HTTPS）

```nginx
server {
    listen 443 ssl http2;
    server_name skin.example.com;
    # ssl_certificate ...

    client_max_body_size 64m;

    location / {
        proxy_pass http://127.0.0.1:8080;
        proxy_set_header Host              $host;
        proxy_set_header X-Real-IP         $remote_addr;
        proxy_set_header X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_read_timeout 300s;
    }
}
```

同时把 `deploy.env` 中的 `BS_SITE_URL` 设为 `https://skin.example.com`。

---

## 八、常用运维

```bash
docker compose logs -f app                    # 查看日志（含首次安装进度）
docker compose restart app                    # 重启（幂等，不会重装）
docker compose down                           # 停止（保留数据卷）
docker compose down -v                        # 停止并删除数据（慎用）

docker compose exec app php artisan plugin:enable yggdrasil-api   # 启用插件
docker compose exec app php artisan options:cache                 # 刷新配置缓存
docker compose exec app php artisan route:list                    # 查看路由
docker compose exec app tail -50 storage/logs/laravel.log         # 查看应用日志
```

---

## 九、镜像内部说明

- 基础镜像 `php:8.3-apache`，扩展 `gd / zip / imagick / pdo_mysql / opcache`。
- 前端资源（`public/app`、`resources/views/assets/*.twig`）由构建阶段 `yarn build` 生成，运行期不需要 node。
- 内置插件：`yggdrasil-api`、`config-generator`、`hide-advanced-menu`、`204-for-unexisted-players`。
- 站点根目录 `/app/public`，应用目录 `/app`，数据目录 `/app/storage`（卷），入口脚本 `/usr/local/bin/blessing-skin-entrypoint`。
- 镜像内置健康检查（`curl http://127.0.0.1/`），`docker compose ps` 可看到 `healthy`。

### 首次启动做了什么

1. 生成 `/app/storage/.env`（含随机 `APP_KEY`；若外部传入 `APP_KEY` 则沿用）。
2. 等待外部数据库就绪（MySQL 场景），并为 SQLite 准备数据库文件。
3. `php artisan migrate --force` 建表，创建超级管理员，生成 Passport 密钥，写入 `install.lock`。
4. 逐个 `plugin:enable` 内置插件（Yggdrasil 的表结构与默认选项在此建立）。
5. 同步插件前端资源到 `public/plugins/`，清理视图缓存。

再次启动时这些步骤会自动跳过或幂等重放（日志中不再出现「首次启动」）。

---

## 十、故障排查

| 现象 | 处理 |
| --- | --- |
| 容器反复重启 | `docker compose logs app`；多为首次启动未填 `BS_ADMIN_EMAIL/BS_ADMIN_PASSWORD` |
| 端口不是 8080 | 启动命令漏了 `--env-file deploy.env` |
| 密码登录失败 | `deploy.env` 中的 `$` 需写成 `$$` 或用单引号包裹 |
| 页面 500 | `docker compose exec app tail -50 storage/logs/laravel.log` |
| 插件未启用 | `docker compose exec app php artisan plugin:enable <name>` 查看报错 |
| 样式/脚本 404 | 确认镜像是完整构建版（`docker compose exec app ls public/app` 有 hash 文件名） |
| 想完全重装 | `docker compose down -v` 后重新启动（**会删除所有数据**） |
