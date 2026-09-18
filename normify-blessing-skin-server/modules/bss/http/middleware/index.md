---
uid: c79775d2
id: bss.http.middleware
parent: bss.http
name: {zh: "中间件", en: "Middleware"}
description:
  zh: >
      请求生命周期上的横切逻辑：安装状态闸门、登录与封禁拦截、邮箱验证与角色权限、语言偏好探测。
  en: >
      Cross-cutting request lifecycle logic: installation gate, authentication and ban interception, email verification and role checks, locale detection.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T15:59:24Z"
fingerprint: 6a7df0e4e3a1e3fb1350fb28dc8f9eb6958c97c1aa1f8efae6d014a44d67bf02
source:
  - path: "app/Http/Middleware/Authenticate.php"
  - path: "app/Http/Middleware/CheckInstallation.php"
  - path: "app/Http/Middleware/DetectLanguagePrefer.php"
---
