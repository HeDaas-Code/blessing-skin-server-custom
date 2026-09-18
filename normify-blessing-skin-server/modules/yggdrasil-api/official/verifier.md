---
uid: e494368f
id: yggdrasil-api.official.verifier
parent: yggdrasil-api.official
name: {zh: "官方档案校验器", en: "Official Profile Verifier"}
description:
  zh: >
      用绑定令牌在线刷新微软凭据并核对官方 UUID/角色名（refresh→XBL→XSTS→profile），失败抛出可降级异常。
      
  en: >
      Refreshes Microsoft credentials with the bound token and verifies the official UUID/name (refresh→XBL→XSTS→profile); throws a degradable exception on failure.
      
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-18T01:47:46.049Z"
fingerprint: d9d0da134d7b41e6ce11015d5db6da0f1b49f161bc4d82a363d16beefbe881eb
source:
  - path: "plugins/yggdrasil-api/src/Services/MicrosoftAuth.php"
apis: []
deps:
  - kind: call
    to: yggdrasil-api.binding.model
    label: {zh: "读取并回写令牌", en: "Read and refresh tokens"}
---
