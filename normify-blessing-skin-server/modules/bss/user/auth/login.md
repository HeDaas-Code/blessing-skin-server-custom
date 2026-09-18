---
uid: 898b5601
id: bss.user.auth.login
parent: bss.user.auth
name: {zh: "登录与登出", en: "Login & Logout"}
description:
  zh: >
      渲染登录页并按邮箱/角色名与密码校验，触发 UserTryToLogin、UserLoggedIn 事件，登出时清理会话。
  en: >
      Renders the login page and validates email/player name with password, firing UserTryToLogin and UserLoggedIn, and clears the session on logout.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:00:50Z"
fingerprint: 06738de4ae59c7a0049a377a2767be53aa89598ce7ac6e14366365a329ab952a
source:
  - path: "app/Http/Controllers/AuthController.php"
  - path: "resources/views/auth/login.twig"
  - path: "resources/views/auth/rows/login/form.twig"
  - path: "resources/views/auth/rows/login/message.twig"
  - path: "resources/views/auth/rows/login/notice.twig"
  - path: "resources/views/auth/rows/login/registration-link.twig"
  - path: "resources/assets/src/views/auth/Login.tsx"
apis:
  - protocol: http
    method: GET
    path: "/auth/login"
    description:
      zh: >
          登录页
      en: >
          Login page
  - protocol: http
    method: POST
    path: "/auth/login"
    description:
      zh: >
          提交登录
      en: >
          Submit credentials
  - protocol: http
    method: POST
    path: "/auth/logout"
    description:
      zh: >
          登出
      en: >
          Log out
deps:
  - kind: event
    to: bss.event
    label: {zh: "广播登录事件", en: "Fire login events"}
---
