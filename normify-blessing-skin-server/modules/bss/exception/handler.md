---
uid: b40fe96d
id: bss.exception.handler
parent: bss.exception
name: {zh: "异常渲染器", en: "Exception Renderer"}
description:
  zh: >
      统一异常出口：判断 AJAX/JSON 请求返回结构化错误体，否则渲染 PrettyPage 或 403/404/500/503 错误页，并处理 CSRF 过期与会话丢失。
  en: >
      Unified exception outlet: returns structured JSON for AJAX/JSON requests, otherwise renders the PrettyPage or 403/404/500/503 pages, handling expired CSRF and lost sessions.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T15:59:24Z"
fingerprint: 094b5b688b287813aa62c7f972f60849cca80cabcbf8ae228f23bae256d38916
source:
  - path: "app/Exceptions/Handler.php"
  - path: "app/Exceptions/PrettyPageException.php"
apis:
  - protocol: file
    path: "app/Exceptions/Handler.php"
    description:
      zh: >
          异常响应转换
      en: >
          Convert exceptions to responses
  - protocol: file
    path: "app/Exceptions/PrettyPageException.php"
    description:
      zh: >
          友好错误页异常
      en: >
          Friendly error page exception
---
