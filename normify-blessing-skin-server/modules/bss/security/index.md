---
uid: cb9c2379
id: bss.security
parent: bss
name: {zh: "安全与鉴权", en: "Security & Authorization"}
description:
  zh: >
      密码哈希算法族（Cipher）、验证码与角色名校验规则、Passport OAuth2 scope 注册与缓存、角色中间件的权限判定依据。
  en: >
      Password hash algorithm family (Cipher), captcha and player-name validation rules, Passport OAuth2 scope registration and caching, and the role checks behind the role middleware.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T15:52:59Z"
fingerprint: 95b49d4aec4071665d43b8b2880d48bd0f124bf7c3e0a8feec847fdea8fb5f4b
source:
  - path: "app/Services/Cipher/BaseCipher.php"
  - path: "app/Rules/Captcha.php"
  - path: "app/Rules/PlayerName.php"
  - path: "app/Models/Scope.php"
  - path: "app/Observers/ScopeObserver.php"
  - path: "app/Providers/AuthServiceProvider.php"
---
