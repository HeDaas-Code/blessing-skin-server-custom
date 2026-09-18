---
uid: 4a164721
id: bss.user.auth.captcha
parent: bss.user.auth
name: {zh: "图形验证码", en: "Captcha"}
description:
  zh: >
      生成验证码图片并把答案写入会话，供注册/找回等表单通过 Captcha 规则校验。
  en: >
      Generates the captcha image and stores the answer in the session, validated by the Captcha rule in registration and reset forms.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:00:50Z"
fingerprint: 524d0b615cf4db6c7293467cfb7d25fb233df1e91b12a5a70ac4f809835a4dc0
source:
  - path: "app/Http/Controllers/AuthController.php"
  - path: "app/Rules/Captcha.php"
  - path: "resources/assets/src/components/Captcha.tsx"
apis:
  - protocol: http
    method: GET
    path: "/auth/captcha"
    description:
      zh: >
          获取验证码图片
      en: >
          Fetch captcha image
  - protocol: file
    path: "app/Rules/Captcha.php"
    description:
      zh: >
          验证码校验规则
      en: >
          Captcha validation rule
---
