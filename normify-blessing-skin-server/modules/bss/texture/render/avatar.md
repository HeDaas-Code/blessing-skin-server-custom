---
uid: 52e1786f
id: bss.texture.render.avatar
parent: bss.texture.render
name: {zh: "头像渲染", en: "Avatar Rendering"}
description:
  zh: >
      avatar/player|user|hash|{tid}：把皮肤按正脸/头肩比例渲染为 PNG 头像，支持按角色名、用户、哈希或材质 ID 寻址。
  en: >
      avatar/player|user|hash|{tid}: renders the skin face/head-shoulder into a PNG avatar, addressable by player name, user, hash or texture ID.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:07:26Z"
fingerprint: e0ea06020d4bb32ba1b5cb3d30bdb25521ce9f19b31cf2287595bd2c4fb12fa5
source:
  - path: "app/Http/Controllers/TextureController.php"
apis:
  - protocol: http
    method: GET
    path: "/avatar/player/{name}"
    description:
      zh: >
          角色头像
      en: >
          Avatar by player name
  - protocol: http
    method: GET
    path: "/avatar/user/{uid}"
    description:
      zh: >
          用户头像
      en: >
          Avatar by user
  - protocol: http
    method: GET
    path: "/avatar/hash/{hash}"
    description:
      zh: >
          哈希头像
      en: >
          Avatar by hash
  - protocol: http
    method: GET
    path: "/avatar/{tid}"
    description:
      zh: >
          材质头像
      en: >
          Avatar by texture ID
deps:
  - kind: call
    to: bss.texture.model
    label: {zh: "加载材质渲染", en: "Load texture to render"}
---
