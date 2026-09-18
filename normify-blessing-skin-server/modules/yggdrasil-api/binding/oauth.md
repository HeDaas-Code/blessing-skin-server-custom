---
uid: fec55fa4
id: yggdrasil-api.binding.oauth
parent: yggdrasil-api.binding
name: {zh: "微软 OAuth 客户端", en: "Microsoft OAuth Client"}
description:
  zh: >
      发起微软 OAuth 授权（MSA→XBL→XSTS→Minecraft Profile），回调后取得官方 UUID/角色名/令牌并写入绑定记录。
      
  en: >
      Runs the Microsoft OAuth grant (MSA→XBL→XSTS→Minecraft Profile), then stores the official UUID/name/tokens into the binding record.
      
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-18T01:47:46.048Z"
fingerprint: d9d0da134d7b41e6ce11015d5db6da0f1b49f161bc4d82a363d16beefbe881eb
source:
  - path: "plugins/yggdrasil-api/src/Services/MicrosoftAuth.php"
apis: []
deps:
  - kind: call
    to: yggdrasil-api.binding.model
    label: {zh: "写入绑定记录", en: "Write binding record"}
  - kind: call
    to: bss.user.model
    label: {zh: "绑定到站内用户", en: "Bind to site user"}
---
