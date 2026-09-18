---
uid: a86c156f
id: bss.view.setup
parent: bss.view
name: {zh: "安装向导模板", en: "Setup Wizard Templates"}
description:
  zh: >
      安装向导（欢迎/数据库/信息/完成）与安装锁定提示页模板。
  en: >
      Setup wizard (welcome/database/info/finish) and the install-locked notice templates.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:14:26Z"
fingerprint: c684cf44b8063c067ce9c9a19179219bd5a74416d3f9b902555420817bf302ca
source:
  - path: "resources/views/setup/base.twig"
  - path: "resources/views/setup/locked.twig"
  - path: "resources/views/setup/wizard/welcome.twig"
  - path: "resources/views/setup/wizard/database.twig"
  - path: "resources/views/setup/wizard/info.twig"
  - path: "resources/views/setup/wizard/finish.twig"
apis:
  - protocol: file
    path: "resources/views/setup/wizard/welcome.twig"
    description:
      zh: >
          安装欢迎页
      en: >
          Wizard welcome
---
