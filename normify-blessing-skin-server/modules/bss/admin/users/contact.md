---
uid: d579f41f
id: bss.admin.users.contact
parent: bss.admin.users
name: {zh: "用户联系信息", en: "User Contact Fields"}
description:
  zh: >
      修改用户邮箱、验证状态与昵称，操作后广播资料更新事件。
  en: >
      Edit user email, verification state and nickname, firing profile-updated events afterwards.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:12:11Z"
fingerprint: 0965bd15a0d8ebae4aaa3c982010a005a7f66be6664baea9541ec6ea684e7359
source:
  - path: "app/Http/Controllers/UsersManagementController.php"
  - path: "resources/assets/src/views/admin/UsersManagement/Row.tsx"
apis:
  - protocol: http
    method: PUT
    path: "/admin/users/{user}/email"
    description:
      zh: >
          修改用户邮箱
      en: >
          Edit user email
  - protocol: http
    method: PUT
    path: "/admin/users/{user}/verification"
    description:
      zh: >
          修改验证状态
      en: >
          Edit verification
  - protocol: http
    method: PUT
    path: "/admin/users/{user}/nickname"
    description:
      zh: >
          修改用户昵称
      en: >
          Edit nickname
  - protocol: http
    method: PUT
    path: "/api/admin/users/{user}/email"
    description:
      zh: >
          修改用户邮箱（OAuth）
      en: >
          Edit email (OAuth)
  - protocol: http
    method: PUT
    path: "/api/admin/users/{user}/verification"
    description:
      zh: >
          修改验证状态（OAuth）
      en: >
          Edit verification (OAuth)
  - protocol: http
    method: PUT
    path: "/api/admin/users/{user}/nickname"
    description:
      zh: >
          修改用户昵称（OAuth）
      en: >
          Edit nickname (OAuth)
deps:
  - kind: call
    to: bss.user.model
    label: {zh: "更新用户字段", en: "Update user fields"}
---
