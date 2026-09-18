---
uid: 75bc7869
id: bss.user.auth.password-reset
parent: bss.user.auth
name: {zh: "找回与重置密码", en: "Password Reset"}
description:
  zh: >
      通过邮箱发送带时效签名的重置链接，校验链接有效性后更新密码并清空会话，邮件模板可本地化。
  en: >
      Sends a signed, time-limited reset link by email, validates the link and updates the password while clearing sessions; the mail template is localizable.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:00:50Z"
fingerprint: 261e190827aa369d14f2c977d89cc583b171fa4c529ef2ce93c55691669f227a
source:
  - path: "app/Http/Controllers/AuthController.php"
  - path: "app/Mail/ForgotPassword.php"
  - path: "resources/views/auth/forgot.twig"
  - path: "resources/views/auth/reset.twig"
  - path: "resources/views/mails/password-reset.blade.php"
  - path: "resources/assets/src/views/auth/Forgot.tsx"
  - path: "resources/assets/src/views/auth/Reset.tsx"
apis:
  - protocol: http
    method: GET
    path: "/auth/forgot"
    description:
      zh: >
          忘记密码页
      en: >
          Forgot password page
  - protocol: http
    method: POST
    path: "/auth/forgot"
    description:
      zh: >
          发送重置邮件
      en: >
          Send reset mail
  - protocol: http
    method: GET
    path: "/auth/reset/{uid}"
    description:
      zh: >
          重置密码页
      en: >
          Reset password page
  - protocol: http
    method: POST
    path: "/auth/reset/{uid}"
    description:
      zh: >
          提交新密码
      en: >
          Submit new password
deps:
  - kind: call
    to: bss.user.model
    label: {zh: "更新密码哈希", en: "Update password hash"}
---
