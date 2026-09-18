---
uid: d3b37fe7
id: bss.http.middleware.lifecycle
parent: bss.http.middleware
name: {zh: "请求预处理与维护模式", en: "Request Preprocessing & Maintenance"}
description:
  zh: >
      全局中间件：空字符串转 null、浏览器语言偏好探测、旧浏览器（EverGreen）拦截与维护模式提示。
  en: >
      Global middleware: empty-string-to-null conversion, browser locale detection, and the EverGreen (outdated browser) block with maintenance notice.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T15:59:24Z"
fingerprint: 7ebea09c08d8c56f3464455efa3e701f00ea2645254c96014df6561a205052cc
source:
  - path: "app/Http/Middleware/ConvertEmptyStringsToNull.php"
  - path: "app/Http/Middleware/DetectLanguagePrefer.php"
  - path: "app/Http/Middleware/EnforceEverGreen.php"
apis:
  - protocol: file
    path: "app/Http/Middleware/ConvertEmptyStringsToNull.php"
    description:
      zh: >
          空字符串归一化
      en: >
          Normalize empty strings
  - protocol: file
    path: "app/Http/Middleware/DetectLanguagePrefer.php"
    description:
      zh: >
          语言偏好探测
      en: >
          Detect preferred locale
  - protocol: file
    path: "app/Http/Middleware/EnforceEverGreen.php"
    description:
      zh: >
          浏览器版本拦截
      en: >
          EverGreen browser check
deps:
  - kind: call
    to: bss.i18n
    label: {zh: "设置应用语言", en: "Set app locale"}
---
