---
uid: c3601390
id: bss.notify.mail
parent: bss.notify
name: {zh: "邮件模板与发送", en: "Mail Templates & Sending"}
description:
  zh: >
      邮箱验证与找回密码两封可本地化邮件（Mailable），支持 SMTP 配置、退订头与邮件视图。
  en: >
      Two localizable mails (verification and password reset) with SMTP config, list-unsubscribe headers and mail views.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:09:13Z"
fingerprint: fa91fc6fee671bd8e8c5d8dcf37db129bfecc20d6f5f1439623255b246befafa
source:
  - path: "app/Mail/EmailVerification.php"
  - path: "app/Mail/ForgotPassword.php"
  - path: "resources/views/mails/email-verification.blade.php"
  - path: "resources/views/mails/password-reset.blade.php"
  - path: "config/mail.php"
apis:
  - protocol: file
    path: "app/Mail/EmailVerification.php"
    description:
      zh: >
          验证邮件
      en: >
          Verification mail
  - protocol: file
    path: "app/Mail/ForgotPassword.php"
    description:
      zh: >
          找回密码邮件
      en: >
          Password reset mail
---
