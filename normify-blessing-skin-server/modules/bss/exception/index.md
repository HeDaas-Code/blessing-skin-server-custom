---
uid: 8c3607d8
id: bss.exception
parent: bss
name: {zh: "异常与错误页", en: "Exceptions & Error Pages"}
description:
  zh: >
      统一异常渲染：JSON/AJAX 与页面两套响应、PrettyPageException 友好错误页、403/404/500/503 模板。
  en: >
      Unified exception rendering: JSON/AJAX and full-page responses, the PrettyPageException friendly error page, and 403/404/500/503 templates.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T15:52:59Z"
fingerprint: f5bef1da2f2d32dab969459df6cff9ca773fc58f8d98710b167c5d77aa06a31e
source:
  - path: "app/Exceptions/Handler.php"
  - path: "app/Exceptions/PrettyPageException.php"
  - path: "resources/views/errors/500.twig"
  - path: "resources/views/errors/pretty.twig"
---
