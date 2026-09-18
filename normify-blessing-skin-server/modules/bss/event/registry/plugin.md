---
uid: 954b33d3
id: bss.event.registry.plugin
parent: bss.event.registry
name: {zh: "插件生命周期事件", en: "Plugin Lifecycle Events"}
description:
  zh: >
      插件启用/禁用/删除/启动失败事件，触发资源拷贝、前端语言清理与失败告警。
  en: >
      Plugin enabled/disabled/deleted/boot-failed events, triggering asset copying, front-end locale cleanup and failure alerts.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:10:16Z"
fingerprint: de6a49a49bf810b632e4dc94205a2af7771ea34ef8bbc921779182cef0a2cd74
source:
  - path: "app/Events/PluginWasEnabled.php"
  - path: "app/Events/PluginWasDisabled.php"
  - path: "app/Events/PluginWasDeleted.php"
  - path: "app/Events/PluginBootFailed.php"
apis:
  - protocol: file
    path: "app/Events/PluginWasEnabled.php"
    description:
      zh: >
          插件启用事件
      en: >
          Enabled event
  - protocol: file
    path: "app/Events/PluginWasDisabled.php"
    description:
      zh: >
          插件禁用事件
      en: >
          Disabled event
  - protocol: file
    path: "app/Events/PluginWasDeleted.php"
    description:
      zh: >
          插件删除事件
      en: >
          Deleted event
  - protocol: file
    path: "app/Events/PluginBootFailed.php"
    description:
      zh: >
          启动失败事件
      en: >
          Boot-failed event
---
