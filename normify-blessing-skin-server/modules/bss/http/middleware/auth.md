---
uid: cb1f9ea0
id: bss.http.middleware.auth
parent: bss.http.middleware
name: {zh: "登录与账号状态拦截", en: "Authentication & Account State Guards"}
description:
  zh: >
      authorize 中间件组：登录校验与重定向、已登录用户禁止访问访客页、封禁用户拦截、登录后广播 UserAuthenticated。
  en: >
      The authorize group: authentication check and redirect, guest-page guard for signed-in users, banned-user rejection, and the UserAuthenticated event after login.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T15:59:24Z"
fingerprint: 5d0d95ea7c296e829fcebedecdfebe98c6094b76faf71224d5dd901207365c8e
source:
  - path: "app/Http/Middleware/Authenticate.php"
  - path: "app/Http/Middleware/RedirectIfAuthenticated.php"
  - path: "app/Http/Middleware/RejectBannedUser.php"
  - path: "app/Http/Middleware/FireUserAuthenticated.php"
apis:
  - protocol: file
    path: "app/Http/Middleware/Authenticate.php"
    description:
      zh: >
          登录态校验
      en: >
          Require authentication
  - protocol: file
    path: "app/Http/Middleware/RedirectIfAuthenticated.php"
    description:
      zh: >
          访客页守卫
      en: >
          Guest-only guard
  - protocol: file
    path: "app/Http/Middleware/RejectBannedUser.php"
    description:
      zh: >
          封禁拦截
      en: >
          Reject banned users
  - protocol: file
    path: "app/Http/Middleware/FireUserAuthenticated.php"
    description:
      zh: >
          广播已认证事件
      en: >
          Fire UserAuthenticated
---
