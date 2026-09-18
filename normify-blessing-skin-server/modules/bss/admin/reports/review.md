---
uid: 3e34e84e
id: bss.admin.reports.review
parent: bss.admin.reports
name: {zh: "举报处理", en: "Report Review"}
description:
  zh: >
      审核队列：查看证据、标记通过/驳回，通过时按规则下架材质、扣分或奖励举报人。
  en: >
      Review queue: view evidence, approve or reject; approval delists the texture and applies score penalties/rewards per rules.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:12:11Z"
fingerprint: 55c70144b7bf3783e8be75c1d2b642c126fe40a486d5ce75a582fe97611f411f
source:
  - path: "app/Http/Controllers/ReportController.php"
  - path: "resources/views/admin/reports.twig"
  - path: "resources/assets/src/views/admin/ReportsManagement/index.tsx"
  - path: "resources/assets/src/views/admin/ReportsManagement/ImageBox.tsx"
  - path: "resources/assets/src/views/admin/ReportsManagement/types.ts"
apis:
  - protocol: http
    method: GET
    path: "/admin/reports"
    description:
      zh: >
          举报管理页
      en: >
          Report management page
  - protocol: http
    method: GET
    path: "/admin/reports/list"
    description:
      zh: >
          举报列表
      en: >
          Report list
  - protocol: http
    method: PUT
    path: "/admin/reports/{report}"
    description:
      zh: >
          审核举报
      en: >
          Review report
  - protocol: http
    method: GET
    path: "/api/admin/reports"
    description:
      zh: >
          举报列表（OAuth）
      en: >
          Report list (OAuth)
  - protocol: http
    method: PUT
    path: "/api/admin/reports/{report}"
    description:
      zh: >
          审核举报（OAuth）
      en: >
          Review report (OAuth)
deps:
  - kind: call
    to: bss.texture.model
    label: {zh: "下架违规材质", en: "Delist textures"}
  - kind: call
    to: bss.user.model
    label: {zh: "调整用户积分", en: "Adjust user score"}
---
