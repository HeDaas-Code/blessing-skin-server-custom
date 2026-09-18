---
uid: 84aeb167
id: yggdrasil-api.middleware.throttle
parent: yggdrasil-api.middleware
name: {zh: "登录限流", en: "Login Throttle"}
description:
  zh: >
      按 IP/账号限制认证请求频率（ygg_rate_limit），防暴力破解密码。
  en: >
      Rate-limits authentication requests by IP/account (ygg_rate_limit) to prevent password brute force.
revision: 7eb2ceb124b9b7e2d14c90d4473543c7ce920f9c
updated_at: "2026-09-17T16:38:39Z"
fingerprint: a5801459257a3abf5c72c812e1de1815cba00b7c88e1ae991ce1e08e0dfe7278
source:
  - path: "plugins/yggdrasil-api/src/Middleware/Throttle.php"
apis:
  - protocol: file
    path: "plugins/yggdrasil-api/src/Middleware/Throttle.php"
    description:
      zh: >
          频率限制
      en: >
          Rate limiting
deps:
  - kind: reference
    to: bss.option
    label: {zh: "限流阈值选项", en: "Rate-limit option"}
---
