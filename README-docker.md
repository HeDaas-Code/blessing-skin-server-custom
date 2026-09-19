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

## 七、启用 HTTPS

### 7.1 局域网/无公网域名：内置自签证书方案（开箱即用）

适用于「用 IP 访问、没有域名」的场景；由项目自带脚本生成一个**本地 CA + 服务器证书**，
客户端只要安装一次 `certs/ca.crt`（根证书），浏览器就不再告警。

```bash
# 1) 生成证书（IP/域名可写多个，全部进 SAN）
./docker/gen-certs.sh 10.63.127.239 192.168.1.10 skin.lan

# 2) 修改 deploy.env
#    BS_SITE_URL=https://10.63.127.239:8443
#    BS_HTTPS_PORT=8443            # 服务器上 443 常被系统服务占用，故默认 8443

# 3) 启动（app + web 两个容器）
docker compose -f docker-compose.yml -f docker-compose.https.yml --env-file deploy.env up -d
```

访问 `https://<服务器IP>:8443`。首次访问浏览器会提示证书不受信任，两种处理方式：

- **推荐**：把服务器上的 `certs/ca.crt` 拷到客户端（Windows：双击 → 安装到"受信任的根证书颁发机构"；
  macOS：钥匙串 → 系统 → 始终信任；Android/iOS：安装后在"证书信任设置"里开启），之后不再告警。
- 临时：在浏览器中选择"继续访问"。

证书有效期 825 天；续期只需重新执行 `./docker/gen-certs.sh`（复用已有 CA，客户端无需重新安装）。
更换 IP/域名时同样重新执行，并把新地址作为参数传入。

> `certs/` 已被 `.gitignore` 忽略，私钥不会进版本库。

### 7.2 有域名和公网 IP：使用真实证书

把证书放到 `certs/server.crt` 与 `certs/server.key`（或改写 `docker/nginx/https.conf` 中的路径），
再按 7.1 的第 3 步启动；`BS_SITE_URL` 填 `https://你的域名`。
免费证书可用 acme.sh / certbot 以 DNS 方式签发后拷贝进 `certs/`。

### 7.3 已有外部反向代理（Nginx/Caddy/Traefik）

此时不需要 `docker-compose.https.yml`，直接反代 8080 端口：

```nginx
server {
    listen 443 ssl http2;
    server_name skin.example.com;
    ssl_certificate     /path/fullchain.pem;
    ssl_certificate_key /path/privkey.pem;

    client_max_body_size 64m;

    location / {
        proxy_pass http://127.0.0.1:8080;
        proxy_set_header Host              $http_host;
        proxy_set_header X-Real-IP         $remote_addr;
        proxy_set_header X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_read_timeout 300s;
    }
}
```

同时把 `deploy.env` 中的 `BS_SITE_URL` 设为 `https://skin.example.com`。
注意 `Host` 要带上端口（`$http_host`），否则应用在非 443 端口下生成的链接会丢端口。

### 7.4 游戏启动器（authlib-injector）报 PKIX / 证书错误怎么办

Minecraft 客户端的 authlib-injector 跑在 **JVM** 里，而 JVM 使用自己的信任库（`lib/security/cacerts`），
**不会**自动读取浏览器的信任设置，所以自签证书会报：

```
javax.net.ssl.SSLHandshakeException: PKIX path building failed:
sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target
```

三种解法，任选其一：

**A. 让 JVM 信任本站 CA（推荐，HTTPS 全程可用）**

先下载根证书（两个地址都可）：
```
https://<host>:<BS_HTTPS_PORT>/ca.crt          # 如 https://10.63.127.239:8443/ca.crt
http://<host>:8080/ca/ca.crt                   # HTTP 端口也能下，无需先信任证书
```

然后二选一：

- **导入启动器所用 JRE 的 cacerts**（最通用，Windows 示例）：
  ```bat
  :: 找到启动器的 java 目录后执行（默认口令 changeit）
  "C:\Path\To\Launcher\jre\bin\keytool" -importcert -noprompt -trustcacerts ^
      -alias blessing-skin -file blessing-skin-ca.crt ^
      -keystore "C:\Path\To\Launcher\jre\lib\security\cacerts" -storepass changeit
  ```
  Linux/macOS 同理，把路径换成对应的 `$JAVA_HOME`。
- **用 Windows 系统证书库**：先把 `ca.crt` 双击安装到"受信任的根证书颁发机构"，
  再在启动器的「JVM 参数」里加：
  ```
  -Djavax.net.ssl.trustStoreType=WINDOWS-ROOT
  ```

**B. 该客户端改用 HTTP 地址（零配置，局域网内最省事）**

启动器里把认证服务器地址填成：
```
http://<host>:8080/api/yggdrasil
```
（HTTP 端口一直保留可用；代价是账号密码在局域网内明文传输。）

**C. 换成公网可信证书（玩家零配置，需要域名）**

有域名且能被公网访问时，按 7.2 换成 Let's Encrypt 等公共 CA 签发的证书，
客户端无需任何设置。私网 IP 无法申请公共 CA 证书。

### 7.5 MSLX（MCServerLauncher）面板里的服务器

如果你的 Minecraft 服务器由 **mslx-daemon** 容器管理（面板 + 服务器都在该容器内），
服务端需要同时满足两点，`authlib-injector` 才会用本站 Yggdrasil API 完成正版校验：

1. 实例配置里带上 javaagent（MSLX 里写在实例「参数」中）：
   `-javaagent:authlib-injector-1.2.8.jar=https://<host>:8443/api/yggdrasil`
   并把 `authlib-injector-1.2.8.jar` 放进该实例目录。
2. 实例所用 JVM（MSLX 里 `MSLX://Java/<版本>` 对应容器内 `/app/DaemonData/Tools/Java/<版本>`）
   信任本站 `ca.crt`。本项目提供一条命令完成导入：

```bash
# 在部署目录执行（自动导入 mslx-daemon 内 Java 17/21/25 的 cacerts）
./docker/mslx-trust-ca.sh
```

之后到面板**重启服务器实例**即可生效。验证（容器内，应返回 STATUS=200）：

```bash
docker exec mslx-daemon /app/DaemonData/Tools/Java/25/bin/java \
  /tmp/Fetch.java https://<host>:8443/api/yggdrasil
```

注意：
- 该脚本把 `ca.crt` 导入的是**容器内的 JVM**；若 mslx-daemon 被删除重建，需要重新执行。
- 若实例是 `online-mode=false`（离线模式），不需要配置 Yggdrasil，跳过本步骤。
- 客户端（玩家启动器）仍然要按 7.4 处理证书信任。

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
| 启动器报 PKIX / 证书错误 | JVM 有自己的信任库；见 7.4（导入 `ca.crt`，或客户端改用 HTTP 地址） |
| MSLX 服务器实例报 PKIX | 执行 `./docker/mslx-trust-ca.sh` 导入 CA 到容器内 JVM 后重启实例（见 7.5） |
| 无法下载 `/ca.crt` | 检查 `certs/` 目录权限为 755、`ca.crt`/`server.crt` 为 644（`docker/gen-certs.sh` 已自动设置） |
| 页面 500 | `docker compose exec app tail -50 storage/logs/laravel.log` |
| 插件未启用 | `docker compose exec app php artisan plugin:enable <name>` 查看报错 |
| 样式/脚本 404 | 确认镜像是完整构建版（`docker compose exec app ls public/app` 有 hash 文件名） |
| 想完全重装 | `docker compose down -v` 后重新启动（**会删除所有数据**） |
