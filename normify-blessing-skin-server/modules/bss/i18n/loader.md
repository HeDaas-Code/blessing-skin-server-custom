---
uid: f4cf5518
id: bss.i18n.loader
parent: bss.i18n
name: {zh: "翻译加载与前端表", en: "Translation Loader & Front-end Table"}
description:
  zh: >
      YAML 语言包加载（含 overrides 覆盖机制）、按语言组读取，以及生成前端 window.i18n 数据并管理缓存失效。
  en: >
      YAML language pack loading (with overrides), per-group reads, and generation of the front-end window.i18n table with cache invalidation.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:09:13Z"
fingerprint: d1302d5dc8f378b0660d917d88a6cd4f782ee240962e9b993df070f6020421ee
source:
  - path: "app/Services/Translations/Loader.php"
  - path: "app/Services/Translations/Yaml.php"
  - path: "app/Services/Translations/JavaScript.php"
  - path: "config/translation-loader.php"
  - path: "config/locales.php"
apis:
  - protocol: file
    path: "app/Services/Translations/Loader.php"
    description:
      zh: >
          翻译组加载
      en: >
          Translation group loading
  - protocol: file
    path: "app/Services/Translations/Yaml.php"
    description:
      zh: >
          YAML 解析与缓存
      en: >
          YAML parsing with cache
  - protocol: file
    path: "app/Services/Translations/JavaScript.php"
    description:
      zh: >
          前端 i18n 表生成
      en: >
          Front-end i18n table generation
---
