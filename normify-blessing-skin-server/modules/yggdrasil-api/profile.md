---
uid: 07dea03b
id: yggdrasil-api.profile
parent: yggdrasil-api
name: {zh: "角色档案接口", en: "Profile API"}
description:
  zh: >
      按 UUID/名字查询角色档案并按需签名皮肤披风材质：profile/{uuid} 与 api/profiles/minecraft 批量查询。
      
  en: >
      Looks up profiles by UUID/name and signs skin/cape textures on demand: profile/{uuid} and api/profiles/minecraft batch query.
      
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T17:24:17.751Z"
fingerprint: 092f02e9e338042bce5e691f7da8bdbe2b4aa01740458af49b4f60c59e72f03e
source:
  - path: "plugins/yggdrasil-api/src/Controllers/ProfileController.php"
  - path: "plugins/yggdrasil-api/src/Models/Profile.php"
apis:
  - protocol: http
    method: GET
    path: "/api/yggdrasil/sessionserver/session/minecraft/profile/{uuid}"
    description:
      zh: >
          按 UUID 查档案
          
      en: >
          Profile by UUID
          
  - protocol: http
    method: POST
    path: "/api/yggdrasil/api/profiles/minecraft"
    description:
      zh: >
          批量查档案
          
      en: >
          Batch query profiles
          
deps:
  - kind: call
    to: bss.player.model
    label: {zh: "读取角色与材质", en: "Read players and textures"}
  - kind: call
    to: yggdrasil-api.utils
    label: {zh: "UUID 派生与签名", en: "UUID derivation and signing"}
  - kind: call
    to: yggdrasil-api.binding.model
    label: {zh: "同名角色取官方 UUID", en: "Same-name official UUID"}
---
