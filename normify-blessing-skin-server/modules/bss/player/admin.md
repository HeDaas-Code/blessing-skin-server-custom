---
uid: 78eb4a34
id: bss.player.admin
parent: bss.player
name: {zh: "后台角色管理", en: "Admin Player Management"}
description:
  zh: >
      管理员查看全站角色、改名、转移归属、强制设置/清空材质与删除；前端为卡片列表加模态框。
  en: >
      Admin list of all players, rename, owner transfer, force-set/clear textures and delete; the front end is a card list with modals.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:05:17Z"
fingerprint: ea787551bdc5a42ca06e549ceb2c6df84858b6a125b09b174c9b5682489bca7c
source:
  - path: "app/Http/Controllers/PlayersManagementController.php"
  - path: "resources/views/admin/players.twig"
  - path: "resources/assets/src/views/admin/PlayersManagement/index.tsx"
  - path: "resources/assets/src/views/admin/PlayersManagement/Card.tsx"
  - path: "resources/assets/src/views/admin/PlayersManagement/LoadingCard.tsx"
  - path: "resources/assets/src/views/admin/PlayersManagement/LoadingRow.tsx"
  - path: "resources/assets/src/views/admin/PlayersManagement/ModalUpdateTexture.tsx"
  - path: "resources/assets/src/views/admin/PlayersManagement/Row.tsx"
  - path: "resources/assets/src/views/admin/PlayersManagement/styles.ts"
apis:
  - protocol: http
    method: GET
    path: "/admin/players"
    description:
      zh: >
          后台角色管理页
      en: >
          Admin players page
  - protocol: http
    method: GET
    path: "/admin/players/list"
    description:
      zh: >
          全站角色列表
      en: >
          All players list
  - protocol: http
    method: PUT
    path: "/admin/players/{player}/name"
    description:
      zh: >
          后台角色改名
      en: >
          Admin rename player
  - protocol: http
    method: PUT
    path: "/admin/players/{player}/owner"
    description:
      zh: >
          转移角色归属
      en: >
          Transfer player owner
  - protocol: http
    method: PUT
    path: "/admin/players/{player}/textures"
    description:
      zh: >
          后台设置角色材质
      en: >
          Admin set player textures
  - protocol: http
    method: DELETE
    path: "/admin/players/{player}"
    description:
      zh: >
          后台删除角色
      en: >
          Admin delete player
  - protocol: http
    method: GET
    path: "/api/admin/players"
    description:
      zh: >
          全站角色列表（OAuth）
      en: >
          All players list (OAuth)
  - protocol: http
    method: PUT
    path: "/api/admin/players/{player}/name"
    description:
      zh: >
          后台角色改名（OAuth）
      en: >
          Admin rename player (OAuth)
  - protocol: http
    method: PUT
    path: "/api/admin/players/{player}/owner"
    description:
      zh: >
          转移角色归属（OAuth）
      en: >
          Transfer player owner (OAuth)
  - protocol: http
    method: PUT
    path: "/api/admin/players/{player}/textures"
    description:
      zh: >
          后台设置角色材质（OAuth）
      en: >
          Admin set player textures (OAuth)
  - protocol: http
    method: DELETE
    path: "/api/admin/players/{player}"
    description:
      zh: >
          后台删除角色（OAuth）
      en: >
          Admin delete player (OAuth)
deps:
  - kind: call
    to: bss.player.model
    label: {zh: "查询并更新角色", en: "Query and update players"}
---
