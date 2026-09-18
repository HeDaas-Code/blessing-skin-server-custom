---
uid: 5b81c926
id: bss.admin.users.list
parent: bss.admin.users
name: {zh: "用户列表", en: "User List"}
description:
  zh: >
      分页查询全站用户（可搜索），渲染管理表格头部与加载骨架。
  en: >
      Paginated query of all users (searchable), rendering the table header and loading skeletons.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:12:11Z"
fingerprint: 55d0ffd7e350c211ee10f936b6753822e1f249baec89ab2343e9284f74ab623a
source:
  - path: "app/Http/Controllers/UsersManagementController.php"
  - path: "resources/assets/src/views/admin/UsersManagement/index.tsx"
  - path: "resources/assets/src/views/admin/UsersManagement/Header.tsx"
  - path: "resources/assets/src/views/admin/UsersManagement/LoadingRow.tsx"
apis:
  - protocol: http
    method: GET
    path: "/admin/users"
    description:
      zh: >
          用户管理页
      en: >
          User management page
  - protocol: http
    method: GET
    path: "/admin/users/list"
    description:
      zh: >
          用户列表数据
      en: >
          User list data
  - protocol: http
    method: GET
    path: "/api/admin/users"
    description:
      zh: >
          用户列表（OAuth）
      en: >
          User list (OAuth)
deps:
  - kind: call
    to: bss.user.model
    label: {zh: "查询用户", en: "Query users"}
---
