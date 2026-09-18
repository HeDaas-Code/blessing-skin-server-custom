---
uid: 10eaf881
id: bss.http.composers.navigation
parent: bss.http.composers
name: {zh: "导航与用户面板", en: "Navigation & User Panel"}
description:
  zh: >
      组装侧边菜单（用户/后台/探索，含插件配置入口）、用户头像下拉与语言切换菜单的数据。
  en: >
      Builds the sidebar menu (user/admin/explore, including plugin config entries), the user avatar dropdown and the language switcher data.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T15:59:24Z"
fingerprint: e5b3f80b414779b9f33ce93192fdb556d6d873a62db23f3bfb8cafaf930889c4
source:
  - path: "app/Http/View/Composers/SideMenuComposer.php"
  - path: "app/Http/View/Composers/UserMenuComposer.php"
  - path: "app/Http/View/Composers/UserPanelComposer.php"
  - path: "app/Http/View/Composers/LanguagesMenuComposer.php"
apis:
  - protocol: file
    path: "app/Http/View/Composers/SideMenuComposer.php"
    description:
      zh: >
          侧边菜单组装
      en: >
          Compose sidebar menu
  - protocol: file
    path: "app/Http/View/Composers/UserMenuComposer.php"
    description:
      zh: >
          用户菜单组装
      en: >
          Compose user menu
  - protocol: file
    path: "app/Http/View/Composers/UserPanelComposer.php"
    description:
      zh: >
          用户面板组装
      en: >
          Compose user panel
  - protocol: file
    path: "app/Http/View/Composers/LanguagesMenuComposer.php"
    description:
      zh: >
          语言菜单组装
      en: >
          Compose language menu
deps:
  - kind: event
    to: bss.event
    label: {zh: "读取菜单扩展事件", en: "Read menu extension events"}
---
