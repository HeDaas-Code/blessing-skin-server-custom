---
uid: 1bdbafc3
id: yggdrasil-api.auth
parent: yggdrasil-api
name: {zh: "认证接口", en: "Authentication API"}
description:
  zh: >
      Yggdrasil authserver 端点：authenticate/refresh/validate/signout/invalidate，校验站点账号密码并签发/刷新/吊销 accessToken。
      
  en: >
      Yggdrasil authserver endpoints: authenticate/refresh/validate/signout/invalidate, verifying site credentials and issuing/refreshing/revoking access tokens.
      
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T17:24:17.751Z"
fingerprint: daa0a89df18dcf4c12f998e00906e8a043a3d8bb3622a701e28037261a1f683e
source:
  - path: "plugins/yggdrasil-api/src/Controllers/AuthController.php"
apis:
  - protocol: http
    method: POST
    path: "/api/yggdrasil/authserver/authenticate"
    description:
      zh: >
          登录并签发令牌
          
      en: >
          Authenticate and issue tokens
          
  - protocol: http
    method: POST
    path: "/api/yggdrasil/authserver/refresh"
    description:
      zh: >
          刷新 accessToken
          
      en: >
          Refresh access token
          
  - protocol: http
    method: POST
    path: "/api/yggdrasil/authserver/validate"
    description:
      zh: >
          校验令牌有效性
          
      en: >
          Validate access token
          
  - protocol: http
    method: POST
    path: "/api/yggdrasil/authserver/signout"
    description:
      zh: >
          登出
          
      en: >
          Sign out
          
  - protocol: http
    method: POST
    path: "/api/yggdrasil/authserver/invalidate"
    description:
      zh: >
          吊销令牌
          
      en: >
          Invalidate tokens
          
deps:
  - kind: call
    to: bss.user.model
    label: {zh: "校验站点账号", en: "Verify site accounts"}
  - kind: call
    to: yggdrasil-api.token
    label: {zh: "签发与查询令牌", en: "Issue and look up tokens"}
  - kind: call
    to: yggdrasil-api.profile
    label: {zh: "返回可用角色", en: "Return available profiles"}
  - kind: call
    to: yggdrasil-api.binding.model
    label: {zh: "读取官方绑定", en: "Read official binding"}
  - kind: call
    to: yggdrasil-api.official.router
    label: {zh: "选择 P0/P1/P2 路径", en: "Pick P0/P1/P2 path"}
---
