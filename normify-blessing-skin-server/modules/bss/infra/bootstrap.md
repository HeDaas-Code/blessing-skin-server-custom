---
uid: ebd5d018
id: bss.infra.bootstrap
parent: bss.infra
name: {zh: "应用引导", en: "App Bootstrap"}
description:
  zh: >
      入口文件：bootstrap/app.php 创建应用实例、public/index.php 处理 Web 请求、artisan 控制台入口与 server.php 兼容入口。
  en: >
      Entry points: bootstrap/app.php creates the app, public/index.php handles web requests, artisan is the console entry, and server.php is a compat entry.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:14:26Z"
fingerprint: f9a51b2feb492fb3706ae7c849ace36a1c9e378600246d6f5d8cfafd5ccd689b
source:
  - path: "bootstrap/app.php"
  - path: "bootstrap/chkenv.php"
  - path: "public/index.php"
  - path: "artisan"
  - path: "server.php"
apis:
  - protocol: file
    path: "bootstrap/app.php"
    description:
      zh: >
          应用实例创建
      en: >
          App instance creation
  - protocol: file
    path: "public/index.php"
    description:
      zh: >
          Web 请求入口
      en: >
          Web request entry
---
