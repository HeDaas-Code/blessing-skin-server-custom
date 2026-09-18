---
uid: c27cc0f8
id: bss.event.listeners.user
parent: bss.event.listeners
name: {zh: "用户事件监听", en: "User Event Listeners"}
description:
  zh: >
      注册完成后发送验证邮件，登录认证成功后应用用户语言偏好。
  en: >
      Sends the verification mail after registration and applies the user locale after authentication.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:10:16Z"
fingerprint: 423b669b69ddfe90179f79dcfec266043d26a0fd11747c76067424939576e0d4
source:
  - path: "app/Listeners/SendEmailVerification.php"
apis:
  - protocol: file
    path: "app/Listeners/SendEmailVerification.php"
    description:
      zh: >
          发送验证邮件
      en: >
          Send verification mail
---
