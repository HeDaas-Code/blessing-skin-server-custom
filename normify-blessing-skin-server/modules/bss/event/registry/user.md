---
uid: 63b6ae3c
id: bss.event.registry.user
parent: bss.event.registry
name: {zh: "用户事件", en: "User Events"}
description:
  zh: >
      注册、登录尝试、登录成功、认证、资料更新事件，是邮件验证、本地化等监听的锚点。
  en: >
      Registration, login attempt, logged-in, authenticated and profile-updated events; anchors for mail verification and localization listeners.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:10:16Z"
fingerprint: d39821629b03820f0c1389e18b5f11a610b58dfb9ffc5065414e0f1ddc3d98f9
source:
  - path: "app/Events/UserRegistered.php"
  - path: "app/Events/UserTryToLogin.php"
  - path: "app/Events/UserLoggedIn.php"
  - path: "app/Events/UserAuthenticated.php"
  - path: "app/Events/UserProfileUpdated.php"
apis:
  - protocol: file
    path: "app/Events/UserRegistered.php"
    description:
      zh: >
          注册完成事件
      en: >
          Registered event
  - protocol: file
    path: "app/Events/UserTryToLogin.php"
    description:
      zh: >
          登录尝试事件
      en: >
          Login attempt event
  - protocol: file
    path: "app/Events/UserLoggedIn.php"
    description:
      zh: >
          登录成功事件
      en: >
          Logged-in event
  - protocol: file
    path: "app/Events/UserAuthenticated.php"
    description:
      zh: >
          已认证事件
      en: >
          Authenticated event
---
