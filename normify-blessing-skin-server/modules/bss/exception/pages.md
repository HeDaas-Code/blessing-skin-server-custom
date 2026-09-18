---
uid: 5e7d5ff4
id: bss.exception.pages
parent: bss.exception
name: {zh: "错误页模板", en: "Error Page Templates"}
description:
  zh: >
      403/404/500/503 与 pretty 调试错误页模板，附带语言切换与版权信息。
  en: >
      403/404/500/503 and the pretty debug error page templates, with language switcher and copyright fragments.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T15:59:24Z"
fingerprint: 064262e4007603e0316b5a6c307355626c19a4ae03d8dd291df302862a77780c
source:
  - path: "resources/views/errors/403.twig"
  - path: "resources/views/errors/404.twig"
  - path: "resources/views/errors/500.twig"
  - path: "resources/views/errors/503.twig"
  - path: "resources/views/errors/base.twig"
  - path: "resources/views/errors/exception.twig"
  - path: "resources/views/errors/languages.twig"
  - path: "resources/views/errors/pretty.twig"
apis:
  - protocol: file
    path: "resources/views/errors/500.twig"
    description:
      zh: >
          服务器错误页
      en: >
          Server error page
  - protocol: file
    path: "resources/views/errors/pretty.twig"
    description:
      zh: >
          调试错误页
      en: >
          Debug error page
---
