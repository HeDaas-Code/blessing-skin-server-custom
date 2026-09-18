---
uid: 9770bc35
id: yggdrasil-api.utils
parent: yggdrasil-api
name: {zh: "工具与 UUID", en: "Utils & UUID"}
description:
  zh: >
      RSA 密钥生成（openssl 配置）、HTTP 请求/响应日志、UUID 生成（v3/v4）与 Minecraft 离线 UUID 派生。
  en: >
      RSA key generation (openssl config), HTTP request/response logging, UUID generation (v3/v4) and Minecraft offline-UUID derivation.
revision: 7eb2ceb124b9b7e2d14c90d4473543c7ce920f9c
updated_at: "2026-09-17T16:38:39Z"
fingerprint: 7252a30a19d691b8a2cb7f7312724d0fae07b32d21a2db04d66e5396350ec562
source:
  - path: "plugins/yggdrasil-api/src/Utils/helpers.php"
  - path: "plugins/yggdrasil-api/src/Utils/UUID.php"
  - path: "plugins/yggdrasil-api/assets/openssl.cnf"
apis:
  - protocol: file
    path: "plugins/yggdrasil-api/src/Utils/helpers.php"
    description:
      zh: >
          RSA 与日志辅助
      en: >
          RSA and logging helpers
  - protocol: file
    path: "plugins/yggdrasil-api/src/Utils/UUID.php"
    description:
      zh: >
          UUID 生成与派生
      en: >
          UUID generation and derivation
deps:
  - kind: reference
    to: bss.option
    label: {zh: "私钥与算法选项", en: "Key and algorithm options"}
---
