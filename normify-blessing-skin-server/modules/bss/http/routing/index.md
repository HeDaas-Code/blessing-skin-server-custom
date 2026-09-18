---
uid: 28d1be61
id: bss.http.routing
parent: bss.http
name: {zh: "路由注册", en: "Route Registration"}
description:
  zh: >
      三套路由表及其装载：带会话的 web、无状态的 api（含 throttle 与 Passport 作用域）、免会话的静态资源与材质公开接口。
  en: >
      The three route tables and their loading: session-based web, stateless api (with throttle and Passport scopes), and session-free static/texture public endpoints.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T15:59:24Z"
fingerprint: dc2722bb0ef92dba526ff443a141878814104cde77e3574e3c8342c10d752766
source:
  - path: "app/Providers/RouteServiceProvider.php"
  - path: "routes/web.php"
  - path: "routes/api.php"
  - path: "routes/static.php"
---
