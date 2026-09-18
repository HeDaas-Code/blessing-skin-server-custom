---
uid: 2327ede4
id: bss.event.hook
parent: bss.event
name: {zh: "Hook 门面", en: "Hook Facade"}
description:
  zh: >
      插件扩展入口：菜单/路由/样式/脚本/徽章/通知/中间件七类静态方法，本质是监听内置事件并按位置插入。
  en: >
      Plugin extension entry points: menu/route/style/script/badge/notification/middleware static methods, listening on built-in events and inserting by position.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:10:16Z"
fingerprint: cc63b045612d8c47db9b3dfa226f815d8505fa03aa551b2d4cf609b1f4a554c7
source:
  - path: "app/Services/Hook.php"
apis:
  - protocol: file
    path: "app/Services/Hook.php"
    description:
      zh: >
          七类扩展钩子
      en: >
          Seven extension hooks
deps:
  - kind: event
    to: bss.event.registry.menu
    label: {zh: "监听菜单事件", en: "Listen menu events"}
  - kind: event
    to: bss.event.registry.rendering
    label: {zh: "监听渲染事件", en: "Listen render events"}
---
