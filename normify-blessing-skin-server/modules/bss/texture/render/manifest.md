---
uid: 5fb3d241
id: bss.texture.render.manifest
parent: bss.texture.render
name: {zh: "材质清单 JSON", en: "Texture Manifest JSON"}
description:
  zh: >
      {player}.json 与 csl/{player}.json：返回角色皮肤/披风哈希与模型签名，供离线服务器插件拉取。
  en: >
      {player}.json and csl/{player}.json: return the skin/cape hash and model signature for a player, consumed by offline-server plugins.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:07:26Z"
fingerprint: e0ea06020d4bb32ba1b5cb3d30bdb25521ce9f19b31cf2287595bd2c4fb12fa5
source:
  - path: "app/Http/Controllers/TextureController.php"
apis:
  - protocol: http
    method: GET
    path: "/{player}.json"
    description:
      zh: >
          角色材质清单
      en: >
          Player texture manifest
  - protocol: http
    method: GET
    path: "/csl/{player}.json"
    description:
      zh: >
          CSL 角色材质清单
      en: >
          CSL player texture manifest
deps:
  - kind: call
    to: bss.player.model
    label: {zh: "读取角色材质", en: "Read player textures"}
---
