---
uid: 338dabed
id: bss.user
parent: bss
name: {zh: "用户与账号域", en: "User & Account Domain"}
description:
  zh: >
      账号全生命周期：登录/注册/找回密码/邮箱验证、个人资料与头像、积分与签到、站内通知、OAuth2 客户端管理及用户模型。
  en: >
      Full account lifecycle: login/registration/password reset/email verification, profile & avatar, score & daily sign-in, site notifications, OAuth2 client management and the user model.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T15:52:59Z"
fingerprint: 020003977752e45649447394da3d61ceedd9d424f96c963564785fad3985573b
source:
  - path: "app/Http/Controllers/AuthController.php"
  - path: "app/Http/Controllers/UserController.php"
  - path: "app/Models/User.php"
  - path: "app/Models/Concerns/HasPassword.php"
  - path: "resources/views/auth/login.twig"
  - path: "resources/assets/src/views/auth/Login.tsx"
---
