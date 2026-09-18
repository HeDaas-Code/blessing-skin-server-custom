---
uid: 2864c94f
id: bss.user.auth.email-verification
parent: bss.user.auth
name: {zh: "邮箱验证与绑定", en: "Email Verification & Binding"}
description:
  zh: >
      注册后发送验证邮件，通过签名链接激活账号；未填邮箱的老账号被强制跳转到绑定页补齐邮箱。
  en: >
      Sends the verification mail after registration and activates the account via a signed link; legacy accounts without an email are forced to the binding page.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:02:43Z"
fingerprint: d7d93d3d5d1f19f45c887a36c901524f3f0eb008912c8f9d802dd692bcb122f2
source:
  - path: "app/Http/Controllers/AuthController.php"
  - path: "app/Listeners/SendEmailVerification.php"
  - path: "app/Mail/EmailVerification.php"
  - path: "resources/views/auth/verify.twig"
  - path: "resources/views/auth/bind.twig"
  - path: "resources/views/user/widgets/email-verification.twig"
  - path: "resources/views/mails/email-verification.blade.php"
  - path: "resources/assets/src/views/widgets/EmailVerification.tsx"
  - path: "resources/assets/src/scripts/emailVerification.tsx"
apis:
  - protocol: http
    method: GET
    path: "/auth/verify/{user}"
    description:
      zh: >
          验证邮箱页
      en: >
          Verification page
  - protocol: http
    method: POST
    path: "/auth/verify/{user}"
    description:
      zh: >
          提交验证码
      en: >
          Submit verification code
  - protocol: http
    method: GET
    path: "/auth/bind"
    description:
      zh: >
          绑定邮箱页
      en: >
          Bind email page
  - protocol: http
    method: POST
    path: "/auth/bind"
    description:
      zh: >
          提交邮箱
      en: >
          Submit email
  - protocol: http
    method: POST
    path: "/user/email-verification"
    description:
      zh: >
          重新发送验证邮件
      en: >
          Resend verification mail
deps:
  - kind: event
    to: bss.event
    label: {zh: "订阅注册完成事件", en: "On registration done"}
---
