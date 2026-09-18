---
uid: 42bb9af6
id: bss.http.routing.registration
parent: bss.http.routing
name: {zh: "路由装载器", en: "Route Loader"}
description:
  zh: >
      按 web/api/static 依次 map 路由文件，给 Passport 自带路由补上登录与邮箱验证中间件，最后广播 ConfigureRoutes 事件供插件追加路由。
  en: >
      Maps the web/api/static route files in order, hardens Passport routes with auth and verified middleware, and finally fires ConfigureRoutes so plugins can add routes.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T15:59:24Z"
fingerprint: 59789c42ec4f014036394397097b5e061995f92d5c42caeaf974409cd10e8159
source:
  - path: "app/Providers/RouteServiceProvider.php"
apis:
  - protocol: file
    path: "app/Providers/RouteServiceProvider.php"
    description:
      zh: >
          路由装载与插件路由扩展点
      en: >
          Route loading and the plugin route extension point
deps:
  - kind: call
    to: bss.http.routing.web
    label: {zh: "装载 Web 路由", en: "Load web routes"}
  - kind: call
    to: bss.http.routing.api
    label: {zh: "装载 API 路由", en: "Load API routes"}
  - kind: call
    to: bss.http.routing.static
    label: {zh: "装载静态路由", en: "Load static routes"}
  - kind: event
    to: bss.event
    label: {zh: "广播 ConfigureRoutes", en: "Fire ConfigureRoutes"}
---
