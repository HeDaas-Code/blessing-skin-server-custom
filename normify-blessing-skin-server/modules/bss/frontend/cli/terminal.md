---
uid: dd82450c
id: bss.frontend.cli.terminal
parent: bss.frontend.cli
name: {zh: "终端会话", en: "Terminal Session"}
description:
  zh: >
      xterm 挂载、Draggable 窗口、Spinner 与 readline/stdio 配置，复用 blessing-skin-shell 的 Shell。
  en: >
      xterm mount, draggable window, spinner and readline/stdio setup, reusing the Shell from blessing-skin-shell.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:15:40Z"
fingerprint: 6e206d6d44cccc78a648a77cc8d20c50bf2471d57dd875161c99765b3949e21f
source:
  - path: "resources/assets/src/scripts/cli.tsx"
  - path: "resources/assets/src/scripts/cli/Spinner.ts"
  - path: "resources/assets/src/scripts/cli/configureStdio.ts"
  - path: "resources/assets/src/scripts/cli/readline.ts"
  - path: "resources/assets/src/scripts/cli/pluginManager.ts"
apis:
  - protocol: file
    path: "resources/assets/src/scripts/cli.tsx"
    description:
      zh: >
          终端启动器
      en: >
          Terminal launcher
---
