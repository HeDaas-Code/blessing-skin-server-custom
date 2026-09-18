---
uid: b983dec4
id: bss.user.profile.ui
parent: bss.user.profile
name: {zh: "资料页视图", en: "Profile Views"}
description:
  zh: >
      资料表单的 Twig 分片（头像/昵称/邮箱/密码/注销）与前端脚本，负责即时校验与交互反馈。
  en: >
      Twig partials for the profile form (avatar/nickname/email/password/delete-account) and the front-end scripts handling inline validation and feedback.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:00:50Z"
fingerprint: 25324f3d924a1a1b6ed5f9ef91fde4e52c25a897e8cfc0c349c5aed69e472e71
source:
  - path: "resources/views/user/widgets/profile/avatar.twig"
  - path: "resources/views/user/widgets/profile/nickname.twig"
  - path: "resources/views/user/widgets/profile/email.twig"
  - path: "resources/views/user/widgets/profile/password.twig"
  - path: "resources/views/user/widgets/profile/delete-account.twig"
  - path: "resources/assets/src/views/user/profile/index.ts"
  - path: "resources/assets/src/views/user/profile/nickname.ts"
  - path: "resources/assets/src/views/user/profile/password.ts"
  - path: "resources/assets/src/views/user/profile/email.ts"
  - path: "resources/assets/src/views/user/profile/resetAvatar.ts"
  - path: "resources/assets/src/views/user/profile/deleteAccount.ts"
apis:
  - protocol: file
    path: "resources/views/user/widgets/profile/password.twig"
    description:
      zh: >
          修改密码表单
      en: >
          Change password form
  - protocol: file
    path: "resources/assets/src/views/user/profile/index.ts"
    description:
      zh: >
          资料页脚本入口
      en: >
          Profile page script entry
---
