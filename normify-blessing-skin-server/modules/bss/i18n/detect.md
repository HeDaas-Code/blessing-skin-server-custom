---
uid: 9d1b7154
id: bss.i18n.detect
parent: bss.i18n
name: {zh: "语言偏好应用", en: "Locale Detection & Application"}
description:
  zh: >
      请求时按浏览器/会话偏好选择语言，登录成功后应用用户语言设置，切换语言后清理前端语言缓存。
  en: >
      Chooses the locale per request from browser/session preferences, applies the user locale after login, and clears the front-end cache on switch.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:09:13Z"
fingerprint: 5c6b310236d40e9a7baae319303b893deac835c18bb48b0549db8b82e3d58016
source:
  - path: "app/Listeners/SetAppLocale.php"
apis:
  - protocol: file
    path: "app/Listeners/SetAppLocale.php"
    description:
      zh: >
          应用用户语言
      en: >
          Apply user locale
deps:
  - kind: call
    to: bss.i18n.loader
    label: {zh: "设置应用语言", en: "Set app locale"}
---
