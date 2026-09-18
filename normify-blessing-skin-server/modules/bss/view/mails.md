---
uid: 4f0e07bb
id: bss.view.mails
parent: bss.view
name: {zh: "邮件模板", en: "Mail Templates"}
description:
  zh: >
      邮箱验证与找回密码两封邮件视图。
  en: >
      Mail views for email verification and password reset.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:14:26Z"
fingerprint: 01eaf1800a3e3bea238aafa85211374c163563965a85b063134105478f4cc56e
source:
  - path: "resources/views/mails/email-verification.blade.php"
  - path: "resources/views/mails/password-reset.blade.php"
apis:
  - protocol: file
    path: "resources/views/mails/email-verification.blade.php"
    description:
      zh: >
          验证邮件视图
      en: >
          Verification mail view
  - protocol: file
    path: "resources/views/mails/password-reset.blade.php"
    description:
      zh: >
          找回密码邮件视图
      en: >
          Password reset mail view
---
