---
uid: 8a156f24
id: bss.user.oauth
parent: bss.user
name: {zh: "OAuth2 客户端管理", en: "OAuth2 Client Management"}
description:
  zh: >
      用户自助管理已授权的第三方应用：查看、创建与撤销 OAuth 客户端，并渲染 Passport 授权确认页。
  en: >
      Self-service management of authorized third-party apps: list, create and revoke OAuth clients, plus the Passport authorization consent page.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:00:50Z"
fingerprint: 8cadcdb4cd471ef44d9003535eae21ba7a4290d08cff4bcaec47828beef5487d
source:
  - path: "resources/views/user/oauth.twig"
  - path: "resources/views/vendor/passport/authorize.twig"
  - path: "resources/assets/src/views/user/OAuth/index.tsx"
  - path: "resources/assets/src/views/user/OAuth/ModalCreate.tsx"
  - path: "resources/assets/src/views/user/OAuth/Row.tsx"
  - path: "resources/assets/src/views/user/OAuth/types.ts"
apis:
  - protocol: http
    method: GET
    path: "/user/oauth/manage"
    description:
      zh: >
          OAuth 应用管理页
      en: >
          OAuth apps page
  - protocol: http
    method: GET
    path: "/oauth/authorize"
    description:
      zh: >
          授权确认页（Passport）
      en: >
          Authorization consent page (Passport)
deps:
  - kind: reference
    to: bss.security
    label: {zh: "使用作用域定义", en: "Use scope definitions"}
---
