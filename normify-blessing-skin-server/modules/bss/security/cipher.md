---
uid: 50a4ac03
id: bss.security.cipher
parent: bss.security
name: {zh: "密码哈希算法族", en: "Password Cipher Family"}
description:
  zh: >
      可插拔的密码哈希实现（BCRYPT/ARGON2I/PHP_PASSWORD_HASH/MD5/SHA256/SHA512 及加盐变体），由 secure.cipher 选项选择，供登录校验与密码修改使用。
  en: >
      Pluggable password hash implementations (BCRYPT/ARGON2I/PHP_PASSWORD_HASH/MD5/SHA256/SHA512 and salted variants), selected via secure.cipher and used for login checks and password changes.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:09:13Z"
fingerprint: a89d739aa40b7b0532cfbd868be376a3b916ec9429b71b547c84ec4f9c72cda2
source:
  - path: "app/Services/Cipher/BaseCipher.php"
  - path: "app/Services/Cipher/BCRYPT.php"
  - path: "app/Services/Cipher/ARGON2I.php"
  - path: "app/Services/Cipher/PHP_PASSWORD_HASH.php"
  - path: "app/Services/Cipher/MD5.php"
  - path: "app/Services/Cipher/SALTED2MD5.php"
  - path: "app/Services/Cipher/SHA256.php"
  - path: "app/Services/Cipher/SALTED2SHA256.php"
  - path: "app/Services/Cipher/SHA512.php"
  - path: "app/Services/Cipher/SALTED2SHA512.php"
  - path: "config/secure.php"
apis:
  - protocol: file
    path: "app/Services/Cipher/BaseCipher.php"
    description:
      zh: >
          哈希/校验抽象基类
      en: >
          Hash/verify abstract base
  - protocol: file
    path: "app/Services/Cipher/BCRYPT.php"
    description:
      zh: >
          BCRYPT 实现
      en: >
          BCRYPT implementation
  - protocol: file
    path: "config/secure.php"
    description:
      zh: >
          算法选择与盐配置
      en: >
          Algorithm and salt config
deps:
  - kind: reference
    to: bss.user.model
    label: {zh: "供密码字段使用", en: "Used by password field"}
---
