---
uid: 564f2968
id: bss.admin.dashboard
parent: bss.admin
name: {zh: "后台仪表盘", en: "Admin Dashboard"}
description:
  zh: >
      管理面板首页：使用量/通知/图表小组件与数据接口（chart/status），前端加载图表并轮询状态。
  en: >
      Admin home: usage/notification/chart widgets and data endpoints (chart/status); the front end loads charts and polls status.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:12:11Z"
fingerprint: 3a9766c238d49b26fba618be121c034bbab23a942da6ba670bd6fc92772ecc1e
source:
  - path: "app/Http/Controllers/AdminController.php"
  - path: "resources/views/admin/index.twig"
  - path: "resources/views/admin/status.twig"
  - path: "resources/views/admin/widgets/dashboard/chart.twig"
  - path: "resources/views/admin/widgets/dashboard/notification.twig"
  - path: "resources/views/admin/widgets/dashboard/usage.twig"
  - path: "resources/views/admin/widgets/status/info.twig"
  - path: "resources/views/admin/widgets/status/plugins.twig"
  - path: "resources/assets/src/views/admin/Dashboard.ts"
apis:
  - protocol: http
    method: GET
    path: "/admin"
    description:
      zh: >
          后台首页
      en: >
          Admin home
  - protocol: http
    method: GET
    path: "/admin/chart"
    description:
      zh: >
          图表数据
      en: >
          Chart data
  - protocol: http
    method: GET
    path: "/admin/status"
    description:
      zh: >
          系统状态数据
      en: >
          System status data
deps:
  - kind: call
    to: bss.option
    label: {zh: "读取仪表盘选项", en: "Read dashboard options"}
---
