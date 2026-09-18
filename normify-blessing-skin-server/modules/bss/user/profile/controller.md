---
uid: 62323f23
id: bss.user.profile.controller
parent: bss.user.profile
name: {zh: "资料控制器", en: "Profile Controller"}
description:
  zh: >
      处理资料页渲染、字段更新（昵称/邮箱/密码）、头像上传缩放与深浅色切换，触发 UserProfileUpdated 事件。
  en: >
      Handles profile rendering, field updates (nickname/email/password), avatar upload & scaling, and the dark-mode toggle, firing UserProfileUpdated.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:00:50Z"
fingerprint: 51697fbbf32b8db121989672df31628288ff5b27539102675279b003f058c59b
source:
  - path: "app/Http/Controllers/UserController.php"
apis:
  - protocol: http
    method: GET
    path: "/user/profile"
    description:
      zh: >
          资料页
      en: >
          Profile page
  - protocol: http
    method: POST
    path: "/user/profile"
    description:
      zh: >
          保存资料
      en: >
          Save profile
  - protocol: http
    method: POST
    path: "/user/profile/avatar"
    description:
      zh: >
          上传头像
      en: >
          Upload avatar
  - protocol: http
    method: PUT
    path: "/user/dark-mode"
    description:
      zh: >
          切换深浅色
      en: >
          Toggle dark mode
deps:
  - kind: call
    to: bss.user.model
    label: {zh: "更新用户字段", en: "Update user fields"}
  - kind: event
    to: bss.event
    label: {zh: "广播资料更新事件", en: "Fire profile updated"}
---
