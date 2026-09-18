---
uid: 5260c666
id: bss.player.texture
parent: bss.player
name: {zh: "角色材质绑定", en: "Player Texture Binding"}
description:
  zh: >
      给角色绑定或清空皮肤/披风材质，支持按名字自动搜索材质库；私有材质校验所有权。
  en: >
      Binds or clears the skin/cape texture of a player, supports searching the library by name; verifies ownership for private textures.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:05:17Z"
fingerprint: 877c9cd8b01876eb6fe8dfd9edb7fe8f6b87fb941ad2d6d0e2b417cd9997f3e0
source:
  - path: "app/Http/Controllers/PlayerController.php"
apis:
  - protocol: http
    method: PUT
    path: "/user/player/{player}/textures"
    description:
      zh: >
          绑定角色材质
      en: >
          Bind player textures
  - protocol: http
    method: DELETE
    path: "/user/player/{player}/textures"
    description:
      zh: >
          清空角色材质
      en: >
          Clear player textures
  - protocol: http
    method: PUT
    path: "/api/players/{player}/textures"
    description:
      zh: >
          绑定角色材质（OAuth）
      en: >
          Bind player textures (OAuth)
  - protocol: http
    method: DELETE
    path: "/api/players/{player}/textures"
    description:
      zh: >
          清空角色材质（OAuth）
      en: >
          Clear player textures (OAuth)
deps:
  - kind: call
    to: bss.texture
    label: {zh: "查找并校验材质", en: "Find and validate textures"}
---
