---
uid: 2d875fe3
id: bss.plugin.commands
parent: bss.plugin
name: {zh: "插件命令", en: "Plugin Artisan Commands"}
description:
  zh: >
      命令行启用/禁用插件（plugin:enable / plugin:disable），便于脚本化运维。
  en: >
      Enable/disable plugins from the CLI (plugin:enable / plugin:disable) for scripted operations.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:12:11Z"
fingerprint: 6b91a0f0640bd235901d523f93166115ae0bf3609cea59dcc1162ad0782bb713
source:
  - path: "app/Console/Commands/PluginEnableCommand.php"
  - path: "app/Console/Commands/PluginDisableCommand.php"
apis:
  - protocol: file
    path: "app/Console/Commands/PluginEnableCommand.php"
    description:
      zh: >
          plugin:enable 命令
      en: >
          plugin:enable command
  - protocol: file
    path: "app/Console/Commands/PluginDisableCommand.php"
    description:
      zh: >
          plugin:disable 命令
      en: >
          plugin:disable command
deps:
  - kind: call
    to: bss.plugin.manager
    label: {zh: "切换插件状态", en: "Toggle plugin state"}
---
