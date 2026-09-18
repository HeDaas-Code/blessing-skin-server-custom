---
uid: ee733e6a
id: bss.user.dashboard
parent: bss.user
name: {zh: "用户中心首页", en: "User Dashboard"}
description:
  zh: >
      用户中心概览：公告、积分与使用量卡片、角色与衣橱入口，同时提供当前用户的 API 接口。
  en: >
      User center overview: announcement, score and usage cards, player and closet entries, plus the current-user API endpoint.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:00:50Z"
fingerprint: 26ae3561d37d6ebc255c2938141833404c93bde8752780f918d49012ebcf09f8
source:
  - path: "app/Http/Controllers/UserController.php"
  - path: "resources/views/user/index.twig"
  - path: "resources/views/user/widgets/dashboard/announcement.twig"
  - path: "resources/views/user/widgets/dashboard/usage.twig"
  - path: "resources/assets/src/views/user/Dashboard/index.tsx"
apis:
  - protocol: http
    method: GET
    path: "/user"
    description:
      zh: >
          用户中心首页
      en: >
          User dashboard
  - protocol: http
    method: GET
    path: "/api/user"
    description:
      zh: >
          获取当前用户信息（OAuth）
      en: >
          Get current user (OAuth)
deps:
  - kind: call
    to: bss.option
    label: {zh: "读取站点选项", en: "Read site options"}
  - kind: reference
    to: bss.notify
    label: {zh: "展示未读通知", en: "Show unread notifications"}
---
