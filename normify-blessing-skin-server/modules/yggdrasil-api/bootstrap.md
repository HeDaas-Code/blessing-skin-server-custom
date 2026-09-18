---
uid: 6d12b961
id: yggdrasil-api.bootstrap
parent: yggdrasil-api
name: {zh: "插件引导", en: "Plugin Bootstrap"}
description:
  zh: >
      插件入口：配置日志通道、自动生成 RSA 私钥、注册 API 与后台路由、挂用户首页配置板块、后台菜单与日志页面，并按需注入 ALI 响应头中间件。
      
  en: >
      Plugin entry: configures the log channel, auto-generates the RSA private key, registers API and admin routes, mounts the user-home config widget and admin menu, and pushes the ALI header middleware when enabled.
      
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-18T01:47:46.049Z"
fingerprint: 2d5c992e2fa62f976dc6af64537be0db4a58d3c6cf5ea09d348cf19dcb5be8c7
source:
  - path: "plugins/yggdrasil-api/bootstrap.php"
  - path: "plugins/yggdrasil-api/callbacks.php"
  - path: "plugins/yggdrasil-api/package.json"
apis:
  - protocol: file
    path: "plugins/yggdrasil-api/bootstrap.php"
    description:
      zh: >
          引导与路由注册
          
      en: >
          Bootstrap and route registration
          
  - protocol: file
    path: "plugins/yggdrasil-api/callbacks.php"
    description:
      zh: >
          启用回调：建表与默认选项
          
      en: >
          Enable callback: tables and defaults
          
deps:
  - kind: call
    to: bss.option
    label: {zh: "读写插件选项", en: "Read/write options"}
  - kind: event
    to: bss.event
    label: {zh: "用 Hook 注册扩展点", en: "Register hooks"}
  - kind: reference
    to: bss.plugin
    label: {zh: "插件生命周期", en: "Plugin lifecycle"}
  - kind: call
    to: yggdrasil-api.binding.ui
    label: {zh: "挂载绑定页面路由", en: "Mount binding page routes"}
---
