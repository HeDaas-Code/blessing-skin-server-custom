---
uid: c5488c96
id: bss.admin.users.account
parent: bss.admin.users
name: {zh: "用户账户处置", en: "User Account Disposal"}
description:
  zh: >
      重置密码、调整积分、变更权限等级与删除用户（删除会级联清理角色与衣橱）。
  en: >
      Reset password, adjust score, change permission level and delete users (deleting cascades to players and closet).
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:12:11Z"
fingerprint: 8a9b53209adac97fbb277f854923d6bc83389b485a7f2036eefe385a3f954818
source:
  - path: "app/Http/Controllers/UsersManagementController.php"
  - path: "resources/assets/src/views/admin/UsersManagement/Card.tsx"
  - path: "resources/assets/src/views/admin/UsersManagement/utils.ts"
apis:
  - protocol: http
    method: PUT
    path: "/admin/users/{user}/password"
    description:
      zh: >
          重置密码
      en: >
          Reset password
  - protocol: http
    method: PUT
    path: "/admin/users/{user}/score"
    description:
      zh: >
          调整积分
      en: >
          Adjust score
  - protocol: http
    method: PUT
    path: "/admin/users/{user}/permission"
    description:
      zh: >
          变更权限
      en: >
          Change permission
  - protocol: http
    method: DELETE
    path: "/admin/users/{user}"
    description:
      zh: >
          删除用户
      en: >
          Delete user
  - protocol: http
    method: PUT
    path: "/api/admin/users/{user}/password"
    description:
      zh: >
          重置密码（OAuth）
      en: >
          Reset password (OAuth)
  - protocol: http
    method: PUT
    path: "/api/admin/users/{user}/score"
    description:
      zh: >
          调整积分（OAuth）
      en: >
          Adjust score (OAuth)
  - protocol: http
    method: PUT
    path: "/api/admin/users/{user}/permission"
    description:
      zh: >
          变更权限（OAuth）
      en: >
          Change permission (OAuth)
  - protocol: http
    method: DELETE
    path: "/api/admin/users/{user}"
    description:
      zh: >
          删除用户（OAuth）
      en: >
          Delete user (OAuth)
deps:
  - kind: call
    to: bss.security.cipher
    label: {zh: "生成密码哈希", en: "Hash password"}
---
