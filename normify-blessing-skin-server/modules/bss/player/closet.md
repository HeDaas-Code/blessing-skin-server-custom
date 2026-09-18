---
uid: 6bc72101
id: bss.player.closet
parent: bss.player
name: {zh: "衣橱", en: "Closet"}
description:
  zh: >
      把皮肤库材质加入衣橱收藏、改名与移除，支持批量移除与把衣橱项设为头像/应用到角色。
  en: >
      Favorites texture-library items into the closet, with rename and removal (incl. batch), and supports applying items as avatar or to a player.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:06:43Z"
fingerprint: 101ff5bac0f13a85e4d577c83091c5da2664a5e8eb6eb35e044010c10978ad06
source:
  - path: "app/Http/Controllers/ClosetController.php"
  - path: "resources/views/user/closet.twig"
  - path: "resources/views/user/widgets/closet/list.twig"
  - path: "resources/assets/src/views/user/Closet/index.tsx"
  - path: "resources/assets/src/views/user/Closet/ClosetItem.tsx"
  - path: "resources/assets/src/views/user/Closet/LoadingClosetItem.tsx"
  - path: "resources/assets/src/views/user/Closet/ModalApply.tsx"
  - path: "resources/assets/src/views/user/Closet/Previewer.tsx"
  - path: "resources/assets/src/views/user/Closet/removeClosetItem.ts"
  - path: "resources/assets/src/views/user/Closet/setAsAvatar.ts"
  - path: "resources/assets/src/views/user/Closet/styles.ts"
apis:
  - protocol: http
    method: GET
    path: "/user/closet"
    description:
      zh: >
          衣橱页
      en: >
          Closet page
  - protocol: http
    method: GET
    path: "/user/closet/list"
    description:
      zh: >
          衣橱列表
      en: >
          Closet list
  - protocol: http
    method: GET
    path: "/user/closet/ids"
    description:
      zh: >
          衣橱材质 ID 列表
      en: >
          Closet texture IDs
  - protocol: http
    method: POST
    path: "/user/closet"
    description:
      zh: >
          加入衣橱
      en: >
          Add to closet
  - protocol: http
    method: PUT
    path: "/user/closet/{tid}"
    description:
      zh: >
          衣橱项改名
      en: >
          Rename closet item
  - protocol: http
    method: DELETE
    path: "/user/closet/{tid}"
    description:
      zh: >
          移出衣橱
      en: >
          Remove from closet
  - protocol: http
    method: GET
    path: "/api/closet"
    description:
      zh: >
          衣橱列表（OAuth）
      en: >
          Closet list (OAuth)
  - protocol: http
    method: POST
    path: "/api/closet"
    description:
      zh: >
          加入衣橱（OAuth）
      en: >
          Add to closet (OAuth)
  - protocol: http
    method: PUT
    path: "/api/closet/{tid}"
    description:
      zh: >
          衣橱项改名（OAuth）
      en: >
          Rename closet item (OAuth)
  - protocol: http
    method: DELETE
    path: "/api/closet/{tid}"
    description:
      zh: >
          移出衣橱（OAuth）
      en: >
          Remove from closet (OAuth)
deps:
  - kind: call
    to: bss.texture
    label: {zh: "读取并校验材质", en: "Load and verify textures"}
---
