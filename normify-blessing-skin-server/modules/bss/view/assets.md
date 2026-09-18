---
uid: 5aaebf8f
id: bss.view.assets
parent: bss.view
name: {zh: "资源注入片段", en: "Asset Partials"}
description:
  zh: >
      为 app/home/spectre/style 四个入口生成资源引用片段（css/js/cdn），供页面按需加载构建产物。
  en: >
      Generates asset reference partials for the four entries (app/home/spectre/style), letting pages load built assets on demand.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:14:26Z"
fingerprint: 064d82aeb38f48b9d8a6757e98b02acadefb675d079a4bc65565805fb030feac
source:
  - path: "resources/views/assets/app.twig"
  - path: "resources/views/assets/home.twig"
  - path: "resources/views/assets/home-css.twig"
  - path: "resources/views/assets/spectre.twig"
  - path: "resources/views/assets/style.twig"
apis:
  - protocol: file
    path: "resources/views/assets/app.twig"
    description:
      zh: >
          应用入口资源
      en: >
          App entry assets
---
