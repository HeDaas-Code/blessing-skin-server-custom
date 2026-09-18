---
uid: b9f051ea
id: bss.plugin.admin
parent: bss.plugin
name: {zh: "插件后台", en: "Plugin Admin UI"}
description:
  zh: >
      插件管理页：启用/禁用、配置表单、README 展示、数据表、上传 zip 或按 URL 安装插件。
  en: >
      Plugin management page: enable/disable, config forms, README, data table, and install from a zip upload or URL.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:12:11Z"
fingerprint: aacf463b726295587d64e0e17fd4507daff72be88035b53e19449dacb38cc5a5
source:
  - path: "app/Http/Controllers/PluginController.php"
  - path: "resources/views/admin/plugins.twig"
  - path: "resources/views/admin/plugin/readme.twig"
  - path: "resources/assets/src/views/admin/PluginsManagement/index.tsx"
  - path: "resources/assets/src/views/admin/PluginsManagement/InfoBox.tsx"
  - path: "resources/assets/src/views/admin/PluginsManagement/types.ts"
apis:
  - protocol: http
    method: GET
    path: "/admin/plugins/data"
    description:
      zh: >
          插件数据
      en: >
          Plugin data
  - protocol: http
    method: GET
    path: "/admin/plugins/manage"
    description:
      zh: >
          插件管理页
      en: >
          Plugin management page
  - protocol: http
    method: POST
    path: "/admin/plugins/manage"
    description:
      zh: >
          启用/禁用插件
      en: >
          Enable/disable plugin
  - protocol: http
    method: GET
    path: "/admin/plugins/config/{name}"
    description:
      zh: >
          插件配置页
      en: >
          Plugin config page
  - protocol: http
    method: POST
    path: "/admin/plugins/config/{name}"
    description:
      zh: >
          保存插件配置
      en: >
          Save plugin config
  - protocol: http
    method: GET
    path: "/admin/plugins/readme/{name}"
    description:
      zh: >
          插件 README
      en: >
          Plugin README
  - protocol: http
    method: POST
    path: "/admin/plugins/upload"
    description:
      zh: >
          上传插件 zip
      en: >
          Upload plugin zip
  - protocol: http
    method: POST
    path: "/admin/plugins/wget"
    description:
      zh: >
          按 URL 安装插件
      en: >
          Install plugin by URL
deps:
  - kind: call
    to: bss.plugin.manager
    label: {zh: "读写插件状态", en: "Read/write plugin state"}
---
