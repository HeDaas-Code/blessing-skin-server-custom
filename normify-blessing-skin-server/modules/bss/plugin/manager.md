---
uid: cc68f0e2
id: bss.plugin.manager
parent: bss.plugin
name: {zh: "插件管理器", en: "Plugin Manager"}
description:
  zh: >
      扫描 plugins 目录、读取 manifest、解析依赖与冲突、执行启用/禁用/删除并持久化启用列表；启动时按生命周期注册插件。
  en: >
      Scans the plugins dir, reads manifests, resolves dependencies and conflicts, performs enable/disable/delete and persists the enabled list; registers plugins on boot.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:12:11Z"
fingerprint: 23faab48a8dd882715729d3562917c688560e82455dee3f45d0168ef2913808d
source:
  - path: "app/Services/PluginManager.php"
apis:
  - protocol: file
    path: "app/Services/PluginManager.php"
    description:
      zh: >
          插件扫描/启停/依赖解析
      en: >
          Scan/toggle/dependency resolution
deps:
  - kind: call
    to: bss.plugin.model
    label: {zh: "实例化插件", en: "Instantiate plugins"}
---
