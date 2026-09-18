---
uid: 9db7d02a
id: bss.i18n
parent: bss
name: {zh: "国际化与本地化", en: "Internationalization"}
description:
  zh: >
      站点多语言：YAML 语言包加载、前端 i18n 表生成与缓存清理、浏览器语言偏好探测、语言列表与后台翻译词条管理。
  en: >
      Site localization: YAML language pack loading, front-end i18n table generation and cache cleanup, browser locale detection, language menus and admin translation management.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T15:52:59Z"
fingerprint: 46ca3da09927263863345dee729073db2cabbbbca3a5af43448f171793d3dc5b
source:
  - path: "app/Services/Translations/Loader.php"
  - path: "app/Services/Translations/Yaml.php"
  - path: "app/Services/Translations/JavaScript.php"
  - path: "config/locales.php"
  - path: "app/Http/Middleware/DetectLanguagePrefer.php"
---
