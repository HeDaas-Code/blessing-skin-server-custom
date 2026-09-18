---
uid: 486648f1
id: bss.frontend.cli.commands
parent: bss.frontend.cli
name: {zh: "终端命令", en: "Terminal Commands"}
description:
  zh: >
      内置命令：apt/dnf/pacman 包管理、rm 删除、closet 衣橱操作，与前端网络层联动。
  en: >
      Built-in commands: apt/dnf/pacman package managers, rm and closet operations, wired to the front-end HTTP layer.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:15:40Z"
fingerprint: d51f1bc5c55b48b8df53a9ea199d2c96ed2d2f85efa5383a8cc6ae040704bfc5
source:
  - path: "resources/assets/src/scripts/cli/AptCommand.ts"
  - path: "resources/assets/src/scripts/cli/DnfCommand.ts"
  - path: "resources/assets/src/scripts/cli/PacmanCommand.ts"
  - path: "resources/assets/src/scripts/cli/RmCommand.ts"
  - path: "resources/assets/src/scripts/cli/ClosetCommand.ts"
apis:
  - protocol: file
    path: "resources/assets/src/scripts/cli/ClosetCommand.ts"
    description:
      zh: >
          衣橱命令
      en: >
          Closet command
  - protocol: file
    path: "resources/assets/src/scripts/cli/RmCommand.ts"
    description:
      zh: >
          删除命令
      en: >
          Remove command
---
