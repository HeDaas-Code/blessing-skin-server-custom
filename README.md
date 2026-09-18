# blessing-skin-server-custom

基于 [blessing-skin-server](https://github.com/bs-community/blessing-skin-server) 6.x 的定制版皮肤站与 Yggdrasil 认证服务器，用于学习 Yggdrasil 认证协议与皮肤站工作流。

## 定制内容

### 1. 微软账号绑定（插件 yggdrasil-api 增强）

- 用户中心侧边栏入口 + 后台绑定管理
- OAuth 绑定微软官方 Minecraft 档案，保存官方 UUID / 角色名 / 令牌
- 绑定时自动同步官方 ACTIVE 皮肤/披风到站内同名角色（私有纹理、不扣积分、按 hash 去重）

### 2. 双向容灾认证（P0 / P1 / P2）

| 路径 | 条件 | 行为 |
|---|---|---|
| P0 | 未绑定微软账号 | 现有离线 UUID（v3/v4） |
| P1 | 已绑定且官方服务健康 | 用保存的微软令牌在线校验官方档案 |
| P2 | 已绑定但官方服务不可用 | 本地密码认证，发放**同一个官方 UUID**（UUID 恒定，不切换不掉物品） |

### 3. 角色名冲突解决页

官方角色名与站内角色名不一致时，玩家可选择：

- 保留站内原名称（继续使用离线 UUID）
- 将某个站内角色改名为官方名称并应用官方档案 + 同步皮肤

官方名称被其他用户占用时只允许保留原名。

### 4. 架构图

- 结构数据：`normify-blessing-skin-server/`
- 渲染产物：`normify-blessing-skin-server/normify.html`（2 棵树、171 模块、312 API、88 依赖）

## 目录结构

```
app/                          # 主程序（未改动，保持上游）
plugins/yggdrasil-api/        # 增强版 Yggdrasil 认证插件（核心定制）
normify-blessing-skin-server/ # 架构图源数据与 HTML
database/                     # 数据库迁移（不包含 SQLite 数据文件）
```

## 快速开始

```bash
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate --force
php artisan serve
```

首次安装也可以直接访问 `/` 走 Web 安装向导。安装完成后：

1. 后台「插件管理」启用 `yggdrasil-api`
2. 插件配置页配置「官方认证路由」

## 官方认证前置条件（重要）

1. 在 Azure 注册应用（平台选 Web，重定向 URI 与插件配置一致）
2. 新应用必须到 <https://aka.ms/mce-reviewappid> 申请 Minecraft API 白名单，约一周
3. 将 client_id / client_secret / redirect_uri 填入插件配置页
4. 未过白名单前绑定会返回 `Invalid app registration`，站内 P0 离线认证不受影响

## 安全说明

- 本仓库不包含 `.env`、`database/*.sqlite`、日志、纹理缓存与 OAuth 密钥
- 请勿提交任何访问令牌、客户端密码或生产密钥
- 联调完成后请在 Azure 轮换客户端密码

## 许可

上游 blessing-skin-server 与 yggdrasil-api 均采用 MIT 许可，本仓库改动同样以 MIT 发布。
