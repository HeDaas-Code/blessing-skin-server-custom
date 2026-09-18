---
uid: 4faeadd9
id: bss.view.auth
parent: bss.view
name: {zh: "认证页模板", en: "Auth Page Templates"}
description:
  zh: >
      登录/注册/忘记/重置/验证/绑定的 Twig 模板及其行级分片。
  en: >
      Twig templates for login/register/forgot/reset/verify/bind and their row-level partials.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:14:26Z"
fingerprint: 477bf2699f6c09318c0ddd819a430600dcc6f1553c8b953be40cbf49b4589d20
source:
  - path: "resources/views/auth/base.twig"
  - path: "resources/views/auth/login.twig"
  - path: "resources/views/auth/register.twig"
  - path: "resources/views/auth/forgot.twig"
  - path: "resources/views/auth/reset.twig"
  - path: "resources/views/auth/verify.twig"
  - path: "resources/views/auth/bind.twig"
  - path: "resources/views/auth/rows/login/form.twig"
  - path: "resources/views/auth/rows/login/message.twig"
  - path: "resources/views/auth/rows/login/notice.twig"
  - path: "resources/views/auth/rows/login/registration-link.twig"
  - path: "resources/views/auth/rows/register/form.twig"
  - path: "resources/views/auth/rows/register/notice.twig"
apis:
  - protocol: file
    path: "resources/views/auth/base.twig"
    description:
      zh: >
          认证页布局
      en: >
          Auth layout
  - protocol: file
    path: "resources/views/auth/login.twig"
    description:
      zh: >
          登录页
      en: >
          Login page
---
