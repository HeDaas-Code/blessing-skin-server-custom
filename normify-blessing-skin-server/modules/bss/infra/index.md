---
uid: 6376cac5
id: bss.infra
parent: bss
name: {zh: "基础设施与交付", en: "Infrastructure & Delivery"}
description:
  zh: >
      应用引导与配置、数据库迁移、安装向导与版本升级、构建工具链（webpack/tsconfig/urls 生成）、Docker/CI 与测试套件。
  en: >
      Application bootstrap and configuration, database migrations, install wizard and version upgrades, build toolchain (webpack/tsconfig/url generation), Docker/CI and the test suite.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T15:52:59Z"
fingerprint: dd5c9554e9e5892587d2aad8a6c0f1cfc07db371dbe2c4ead208608c571d3d9b
source:
  - path: "bootstrap/app.php"
  - path: "config/app.php"
  - path: "database/migrations/2016_11_18_133939_create_all_tables.php"
  - path: "app/Http/Controllers/SetupController.php"
  - path: "Dockerfile"
  - path: "phpunit.xml"
  - path: "tools/generateUrls.ts"
---
