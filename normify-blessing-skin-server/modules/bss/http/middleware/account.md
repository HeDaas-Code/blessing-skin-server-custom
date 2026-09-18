---
uid: 6f1661d8
id: bss.http.middleware.account
parent: bss.http.middleware
name: {zh: "邮箱验证与角色权限", en: "Verification & Role Checks"}
description:
  zh: >
      verified 角色必须已激活、authorize 组内强制补齐邮箱，role 别名按等级（admin/super-admin）放行后台路由。
  en: >
      The verified alias requires an activated account, the authorize group forces a filled email, and the role alias gates admin routes by level (admin/super-admin).
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T15:59:24Z"
fingerprint: fa8f08cd9272a9b0794c78d838e9c8a04227f484047457f16ebfc049045094f2
source:
  - path: "app/Http/Middleware/CheckUserVerified.php"
  - path: "app/Http/Middleware/EnsureEmailFilled.php"
  - path: "app/Http/Middleware/CheckRole.php"
apis:
  - protocol: file
    path: "app/Http/Middleware/CheckUserVerified.php"
    description:
      zh: >
          账号激活校验
      en: >
          Require activated account
  - protocol: file
    path: "app/Http/Middleware/EnsureEmailFilled.php"
    description:
      zh: >
          强制补全邮箱
      en: >
          Require filled email
  - protocol: file
    path: "app/Http/Middleware/CheckRole.php"
    description:
      zh: >
          角色等级校验
      en: >
          Check user role level
---
