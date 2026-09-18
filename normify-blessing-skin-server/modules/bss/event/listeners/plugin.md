---
uid: fbdfe76d
id: bss.event.listeners.plugin
parent: bss.event.listeners
name: {zh: "插件资源同步", en: "Plugin Asset Sync"}
description:
  zh: >
      插件启用/升级时拷贝静态资源到 public/plugins 并清理前端语言缓存；启动失败时向管理员发送通知。
  en: >
      On plugin enable/upgrade: copy assets to public/plugins and clear the front-end locale cache; on boot failure, notify the admin.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:10:16Z"
fingerprint: 9d5e0b3af8670f636bd2c8b046db42ea29d3654d7acc4bd0ee0244990d5b7c64
source:
  - path: "app/Listeners/CopyPluginAssets.php"
  - path: "app/Listeners/CleanUpFrontEndLocaleFiles.php"
  - path: "app/Listeners/NotifyFailedPlugin.php"
apis:
  - protocol: file
    path: "app/Listeners/CopyPluginAssets.php"
    description:
      zh: >
          拷贝插件资源
      en: >
          Copy plugin assets
  - protocol: file
    path: "app/Listeners/CleanUpFrontEndLocaleFiles.php"
    description:
      zh: >
          清理前端语言缓存
      en: >
          Clear front-end locale cache
  - protocol: file
    path: "app/Listeners/NotifyFailedPlugin.php"
    description:
      zh: >
          插件失败告警
      en: >
          Plugin failure alert
---
