---
uid: 821613af
id: yggdrasil-api.middleware.ali
parent: yggdrasil-api.middleware
name: {zh: "ALI 响应头", en: "ALI Response Header"}
description:
  zh: >
      为兼容旧版 authlib-agent 客户端注入 X-Authlib-Injector-API-Location 响应头（新协议已不需要）。
  en: >
      Injects the X-Authlib-Injector-API-Location header for legacy authlib-agent clients (no longer required by the new protocol).
revision: 7eb2ceb124b9b7e2d14c90d4473543c7ce920f9c
updated_at: "2026-09-17T16:38:39Z"
fingerprint: fe074a032ffa7d4a2bad79f5fcbe80fbed26afb7b44f7f8ae101516b2fc5259c
source:
  - path: "plugins/yggdrasil-api/src/Middleware/AddApiIndicationHeader.php"
apis:
  - protocol: file
    path: "plugins/yggdrasil-api/src/Middleware/AddApiIndicationHeader.php"
    description:
      zh: >
          ALI 头注入
      en: >
          ALI header injection
---
