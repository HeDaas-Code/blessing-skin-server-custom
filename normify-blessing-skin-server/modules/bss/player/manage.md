---
uid: b9220bad
id: bss.player.manage
parent: bss.player
name: {zh: "角色管理", en: "Player Management"}
description:
  zh: >
      角色列表、新增、改名、删除与前端列表视图；角色名规则校验、同一玩家名不可重复，删除前广播事件。
  en: >
      Player list, add, rename, delete and the front-end list view; validates name rules and uniqueness, and fires events before deletion.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:05:17Z"
fingerprint: ea611da5c2fa94703edbb1a1d2c128ce99cacf615f9ce89af4a98d1bd01e09c0
source:
  - path: "app/Http/Controllers/PlayerController.php"
  - path: "resources/views/user/player.twig"
  - path: "resources/views/user/widgets/players/list.twig"
  - path: "resources/views/user/widgets/players/notice.twig"
  - path: "resources/assets/src/views/user/Players/index.tsx"
  - path: "resources/assets/src/views/user/Players/Row.tsx"
  - path: "resources/assets/src/views/user/Players/LoadingRow.tsx"
  - path: "resources/assets/src/views/user/Players/ModalAddPlayer.tsx"
  - path: "resources/assets/src/views/user/Players/ModalReset.tsx"
  - path: "resources/assets/src/views/user/Players/Previewer.tsx"
  - path: "resources/assets/src/views/user/Players/Viewer2d.tsx"
apis:
  - protocol: http
    method: GET
    path: "/user/player"
    description:
      zh: >
          角色管理页
      en: >
          Player page
  - protocol: http
    method: GET
    path: "/user/player/list"
    description:
      zh: >
          角色列表
      en: >
          Player list
  - protocol: http
    method: POST
    path: "/user/player"
    description:
      zh: >
          新增角色
      en: >
          Add player
  - protocol: http
    method: PUT
    path: "/user/player/{player}/name"
    description:
      zh: >
          角色改名
      en: >
          Rename player
  - protocol: http
    method: DELETE
    path: "/user/player/{player}"
    description:
      zh: >
          删除角色
      en: >
          Delete player
  - protocol: http
    method: GET
    path: "/api/players"
    description:
      zh: >
          角色列表（OAuth）
      en: >
          Player list (OAuth)
  - protocol: http
    method: POST
    path: "/api/players"
    description:
      zh: >
          新增角色（OAuth）
      en: >
          Add player (OAuth)
  - protocol: http
    method: PUT
    path: "/api/players/{player}/name"
    description:
      zh: >
          角色改名（OAuth）
      en: >
          Rename player (OAuth)
  - protocol: http
    method: DELETE
    path: "/api/players/{player}"
    description:
      zh: >
          删除角色（OAuth）
      en: >
          Delete player (OAuth)
deps:
  - kind: call
    to: bss.player.model
    label: {zh: "读写角色实体", en: "Read/write players"}
---
