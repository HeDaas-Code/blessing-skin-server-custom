---
uid: bd442f76
id: yggdrasil-api.token
parent: yggdrasil-api
name: {zh: "令牌模型", en: "Token Model"}
description:
  zh: >
      clientToken/accessToken 的生成、查找、有效期（两次过期时间）与序列化，存储于 ygg_log 之外的令牌表。
  en: >
      clientToken/accessToken generation, lookup, dual expiry and serialization, stored in the token table alongside ygg_log.
revision: 7eb2ceb124b9b7e2d14c90d4473543c7ce920f9c
updated_at: "2026-09-17T16:38:39Z"
fingerprint: 8eaf59a4f26c20882a1a14d72bbf097c0c91a5ac4162f3c4073425c0bdfb17e3
source:
  - path: "plugins/yggdrasil-api/src/Models/Token.php"
apis:
  - protocol: file
    path: "plugins/yggdrasil-api/src/Models/Token.php"
    description:
      zh: >
          令牌实体与校验
      en: >
          Token entity and validation
deps:
  - kind: reference
    to: bss.option
    label: {zh: "令牌过期选项", en: "Token expiry options"}
---
