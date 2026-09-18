---
uid: 01ef811a
id: yggdrasil-api.session
parent: yggdrasil-api
name: {zh: "会话接口", en: "Session API"}
description:
  zh: >
      Yggdrasil sessionserver 端点：join 记录进服状态并校验令牌与角色归属，hasJoined 供服务端查询玩家是否已登录。
  en: >
      Yggdrasil sessionserver endpoints: join records the session and verifies token/profile ownership; hasJoined lets servers check whether a player has logged in.
revision: 7eb2ceb124b9b7e2d14c90d4473543c7ce920f9c
updated_at: "2026-09-17T16:38:39Z"
fingerprint: e3b7b52d7f0054e2a964447aadb4732c9312cff190eb559b04170804d45f7db4
source:
  - path: "plugins/yggdrasil-api/src/Controllers/SessionController.php"
apis:
  - protocol: http
    method: POST
    path: "/api/yggdrasil/sessionserver/session/minecraft/join"
    description:
      zh: >
          进服校验与登记
      en: >
          Join validation and registration
  - protocol: http
    method: GET
    path: "/api/yggdrasil/sessionserver/session/minecraft/hasJoined"
    description:
      zh: >
          查询进服状态
      en: >
          Query joined status
deps:
  - kind: call
    to: yggdrasil-api.token
    label: {zh: "校验 accessToken", en: "Verify access token"}
  - kind: call
    to: bss.player.model
    label: {zh: "校验角色归属", en: "Verify player ownership"}
---
