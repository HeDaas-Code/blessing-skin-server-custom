---
uid: 1ccb8fc5
id: bss.security.rules
parent: bss.security
name: {zh: "输入校验规则", en: "Input Validation Rules"}
description:
  zh: >
      角色名规则：official 模式（大小写字母/数字/下划线、3-16 位）或自定义正则；验证码规则校验会话中的答案。
  en: >
      Player-name rule: official mode (letters/digits/underscore, 3-16 chars) or a custom regex; the captcha rule checks the session answer.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:09:13Z"
fingerprint: 0642db4aac643eb66a62e7bfb75b2b2acae6c7b4fcd1a4ced9ae199c1936ffb6
source:
  - path: "app/Rules/PlayerName.php"
apis:
  - protocol: file
    path: "app/Rules/PlayerName.php"
    description:
      zh: >
          角色名规则
      en: >
          Player-name rule
deps:
  - kind: reference
    to: bss.player.manage
    label: {zh: "角色名校验", en: "Player-name checks"}
---
