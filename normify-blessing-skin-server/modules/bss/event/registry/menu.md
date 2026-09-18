---
uid: b41afb21
id: bss.event.registry.menu
parent: bss.event.registry
name: {zh: "菜单与路由事件", en: "Menu & Route Events"}
description:
  zh: >
      ConfigureAdminMenu / ConfigureUserMenu / ConfigureExploreMenu / ConfigureRoutes：让插件往三套菜单和路由表注入条目。
  en: >
      ConfigureAdminMenu / ConfigureUserMenu / ConfigureExploreMenu / ConfigureRoutes: let plugins inject entries into the three menus and the route table.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:10:16Z"
fingerprint: bae66f3bbd506382747f974ea8a78342e876f8d7545b2e2cc6a00ebb6608c159
source:
  - path: "app/Events/ConfigureAdminMenu.php"
  - path: "app/Events/ConfigureUserMenu.php"
  - path: "app/Events/ConfigureExploreMenu.php"
  - path: "app/Events/ConfigureRoutes.php"
apis:
  - protocol: file
    path: "app/Events/ConfigureAdminMenu.php"
    description:
      zh: >
          后台菜单事件
      en: >
          Admin menu event
  - protocol: file
    path: "app/Events/ConfigureUserMenu.php"
    description:
      zh: >
          用户菜单事件
      en: >
          User menu event
  - protocol: file
    path: "app/Events/ConfigureExploreMenu.php"
    description:
      zh: >
          探索菜单事件
      en: >
          Explore menu event
  - protocol: file
    path: "app/Events/ConfigureRoutes.php"
    description:
      zh: >
          路由扩展事件
      en: >
          Route extension event
---
