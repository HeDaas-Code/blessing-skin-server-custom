---
uid: c0c6658d
id: bss.admin.reports.submit
parent: bss.admin.reports
name: {zh: "举报提交", en: "Report Submission"}
description:
  zh: >
      登录用户提交举报（材质、理由、证据图），可追踪自己举报的处理进度。
  en: >
      Signed-in users submit reports (texture, reason, evidence image) and track the progress of their own reports.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:12:11Z"
fingerprint: 3eefc7fb455ae58bc377676b5e1e7779a00c0f0b56d0959f5ffb4b901564646f
source:
  - path: "app/Http/Controllers/ReportController.php"
  - path: "resources/views/user/report.twig"
  - path: "resources/assets/src/views/skinlib/Show/addClosetItem.ts"
apis:
  - protocol: http
    method: POST
    path: "/skinlib/report"
    description:
      zh: >
          提交举报
      en: >
          Submit report
  - protocol: http
    method: GET
    path: "/user/reports"
    description:
      zh: >
          我的举报
      en: >
          My reports
deps:
  - kind: call
    to: bss.texture.model
    label: {zh: "校验被举报材质", en: "Verify reported texture"}
---
