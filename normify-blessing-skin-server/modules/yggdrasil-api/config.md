---
uid: c98c9830
id: yggdrasil-api.config
parent: yggdrasil-api
name: {zh: "后台配置与日志", en: "Admin Config & Log"}
description:
  zh: >
      插件配置页（UUID 算法/令牌有效期/限流/皮肤域名等）、API 根路径探测、后台 Yggdrasil 日志页与重新生成私钥按钮。
      
  en: >
      Plugin config page (UUID algorithm/token expiry/rate limit/skin domain), API root probe, admin Yggdrasil log page and the regenerate-key action.
      
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T17:24:17.752Z"
fingerprint: 24304966a6d69386fc1f41295654198837b7ab3c960685186095e319d162c04b
source:
  - path: "plugins/yggdrasil-api/src/Controllers/ConfigController.php"
  - path: "plugins/yggdrasil-api/views/config.twig"
  - path: "plugins/yggdrasil-api/views/dnd.twig"
  - path: "plugins/yggdrasil-api/views/log.twig"
  - path: "plugins/yggdrasil-api/assets/config.ts"
  - path: "plugins/yggdrasil-api/assets/dnd.ts"
apis:
  - protocol: http
    method: GET
    path: "/api/yggdrasil"
    description:
      zh: >
          API 根路径探测
          
      en: >
          API root probe
          
  - protocol: http
    method: GET
    path: "/admin/yggdrasil-log"
    description:
      zh: >
          Yggdrasil 日志页
          
      en: >
          Yggdrasil log page
          
  - protocol: http
    method: POST
    path: "/admin/plugins/config/yggdrasil-api/generate"
    description:
      zh: >
          重新生成私钥
          
      en: >
          Regenerate private key
          
deps:
  - kind: call
    to: bss.option
    label: {zh: "读写插件选项", en: "Read/write options"}
  - kind: call
    to: yggdrasil-api.utils
    label: {zh: "生成 RSA 密钥", en: "Generate RSA keys"}
---
