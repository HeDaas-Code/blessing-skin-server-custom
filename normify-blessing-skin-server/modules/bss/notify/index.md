---
uid: eb200e56
id: bss.notify
parent: bss
name: {zh: "通知与邮件", en: "Notifications & Mail"}
description:
  zh: >
      站内信与邮件两条通道：SiteMessage 通知（队列）、邮件验证与找回密码邮件模板、管理员群发通知接口。
  en: >
      Two delivery channels: SiteMessage notifications (queued), email verification and password-reset mails, and the admin broadcast endpoint.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T15:52:59Z"
fingerprint: 11799059addbe20c0e867cfa2b9743934ecfd40e7b9c31f4c5ce63ba53a5b860
source:
  - path: "app/Notifications/SiteMessage.php"
  - path: "app/Http/Controllers/NotificationsController.php"
  - path: "app/Mail/EmailVerification.php"
  - path: "app/Mail/ForgotPassword.php"
  - path: "resources/views/mails/email-verification.blade.php"
---
