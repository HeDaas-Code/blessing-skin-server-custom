---
uid: 659da8b8
id: bss.plugin.market
parent: bss.plugin
name: {zh: "插件市场", en: "Plugin Market"}
description:
  zh: >
      从 registry 拉取插件元数据（本地化）、渲染市场列表并支持一键下载安装。
  en: >
      Pulls localized plugin metadata from the registry, renders the market list and supports one-click download and install.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:12:11Z"
fingerprint: 305d7de89abd3b4f2f1c57329438bd8bf5bc6a0e6b498ccc9788e1d69e79e220
source:
  - path: "app/Http/Controllers/MarketController.php"
  - path: "resources/views/admin/market.twig"
  - path: "resources/assets/src/views/admin/PluginsMarket/index.tsx"
  - path: "resources/assets/src/views/admin/PluginsMarket/Row.tsx"
  - path: "resources/assets/src/views/admin/PluginsMarket/types.ts"
apis:
  - protocol: http
    method: GET
    path: "/admin/plugins/market"
    description:
      zh: >
          插件市场页
      en: >
          Plugin market page
  - protocol: http
    method: GET
    path: "/admin/plugins/market/list"
    description:
      zh: >
          市场列表数据
      en: >
          Market list data
  - protocol: http
    method: POST
    path: "/admin/plugins/market/download"
    description:
      zh: >
          下载安装插件
      en: >
          Download and install
deps:
  - kind: call
    to: bss.plugin.manager
    label: {zh: "安装下载的插件", en: "Install downloaded plugin"}
---
