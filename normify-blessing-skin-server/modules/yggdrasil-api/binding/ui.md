---
uid: 64d3fde9
id: yggdrasil-api.binding.ui
parent: yggdrasil-api.binding
name: {zh: "绑定界面", en: "Binding UI"}
description:
  zh: >
      用户中心绑定/解绑页与后台绑定管理页，以及启动器配置引导（dnd 板块扩展）。
      
  en: >
      User-center bind/unbind page, admin binding management page, and the launcher-config guidance (dnd widget extension).
      
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-18T01:48:17.773Z"
fingerprint: 4c64f90076b233a25140a6033fc8e56d2f0d99d34e0fd47a3d4a1e5193bf7e65
source:
  - path: "plugins/yggdrasil-api/src/Controllers/BindingController.php"
  - path: "plugins/yggdrasil-api/views/binding.twig"
  - path: "plugins/yggdrasil-api/views/resolve.twig"
  - path: "plugins/yggdrasil-api/views/admin-bindings.twig"
apis:
  - protocol: http
    method: GET
    path: "/user/yggdrasil-binding"
    description:
      zh: >
          绑定状态页
      en: >
          Binding status page
  - protocol: http
    method: GET
    path: "/user/yggdrasil-binding/redirect"
    description:
      zh: >
          发起微软绑定
      en: >
          Start Microsoft binding
  - protocol: http
    method: GET
    path: "/user/yggdrasil-binding/callback"
    description:
      zh: >
          微软 OAuth 回调
      en: >
          Microsoft OAuth callback
  - protocol: http
    method: POST
    path: "/user/yggdrasil-binding/unbind"
    description:
      zh: >
          解绑微软账号
      en: >
          Unbind Microsoft account
  - protocol: http
    method: POST
    path: "/user/yggdrasil-binding/sync"
    description:
      zh: >
          同步官方皮肤
      en: >
          Sync official skin
  - protocol: http
    method: GET
    path: "/user/yggdrasil-binding/resolve"
    description:
      zh: >
          角色名冲突处理页
      en: >
          Name conflict page
  - protocol: http
    method: POST
    path: "/user/yggdrasil-binding/resolve/rename"
    description:
      zh: >
          改名应用官方档案
      en: >
          Rename to official name
  - protocol: http
    method: GET
    path: "/admin/yggdrasil-bindings"
    description:
      zh: >
          后台绑定管理
      en: >
          Admin binding list
deps:
  - kind: call
    to: yggdrasil-api.binding.oauth
    label: {zh: "发起授权与解绑", en: "Start grant and unbind"}
  - kind: call
    to: yggdrasil-api.binding.model
    label: {zh: "查询绑定状态", en: "Query binding state"}
  - kind: call
    to: yggdrasil-api.binding.sync
    label: {zh: "同步官方皮肤", en: "Sync official skin"}
---
