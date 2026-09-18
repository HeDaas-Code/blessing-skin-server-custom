---
uid: 8d9d160f
id: bss.http
parent: bss
name: {zh: "HTTP 传输骨架", en: "HTTP Transport Skeleton"}
description:
  zh: >
      请求入口层：HTTP 内核与中间件栈装配、三套路由表（web/api/静态资源）的注册、中间件与视图组合器。
  en: >
      Request entry layer: HTTP kernel and middleware stack, registration of the three route tables (web/api/static assets), middleware and view composers.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T15:52:59Z"
fingerprint: eccd4161d1eb4f85f5cee4021ba4a68acb71d670db14e149a70bfebc8be213b9
source:
  - path: "app/Http/Kernel.php"
  - path: "app/Providers/RouteServiceProvider.php"
  - path: "routes/web.php"
  - path: "routes/api.php"
  - path: "routes/static.php"
---
