---
uid: cf518b0d
id: bss.plugin.provider
parent: bss.plugin
name: {zh: "插件服务提供者", en: "Plugin Service Provider"}
description:
  zh: >
      把 PluginManager 注册为单例并别名 plugins，应用启动时引导全部启用插件；配置文件声明插件目录与市场 registry。
  en: >
      Registers PluginManager as a singleton aliased plugins, boots all enabled plugins on startup; config declares the plugin dir and market registry.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:12:11Z"
fingerprint: f5ec812bb7361829905e2505b3ed35978157a9f470639a8395f16d4f8415d39b
source:
  - path: "app/Providers/PluginServiceProvider.php"
  - path: "config/plugins.php"
apis:
  - protocol: file
    path: "app/Providers/PluginServiceProvider.php"
    description:
      zh: >
          插件单例与引导
      en: >
          Singleton and boot
  - protocol: file
    path: "config/plugins.php"
    description:
      zh: >
          插件路径与市场配置
      en: >
          Plugin path and market config
---
