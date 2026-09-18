---
uid: e1dd52b5
id: yggdrasil-api.middleware
parent: yggdrasil-api
name: {zh: "协议中间件", en: "Protocol Middleware"}
description:
  zh: >
      Yggdrasil 请求的前置处理：Content-Type 校验、暴力破解限流、ALI 兼容响应头。
  en: >
      Pre-flight handling for Yggdrasil requests: content-type check, brute-force throttling and the ALI-compatible response header.
revision: 7eb2ceb124b9b7e2d14c90d4473543c7ce920f9c
updated_at: "2026-09-17T16:38:39Z"
fingerprint: 78399a7a68e83a363f4f3b5e647b6a8ce203b8e66daf3514395959b37071fc89
source:
  - path: "plugins/yggdrasil-api/src/Middleware/CheckContentType.php"
  - path: "plugins/yggdrasil-api/src/Middleware/Throttle.php"
  - path: "plugins/yggdrasil-api/src/Middleware/AddApiIndicationHeader.php"
---
