---
uid: 871b87c6
id: bss.frontend.runtime.bootstrap
parent: bss.frontend.runtime
name: {zh: "入口引导", en: "Entry Bootstrap"}
description:
  zh: >
      ReactDOM 挂载入口：装配 webpack 公共路径、挂载全局对象、按路由表懒加载页面组件、注册 CLI 入口。
  en: >
      ReactDOM mount entry: sets the webpack public path, exposes globals, lazy-loads page components per the route table and registers the CLI entry.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:15:40Z"
fingerprint: f5b0fccc4b71105b6d1e20753d36e4ee659ca99c0a670ab32fcb99275963824d
source:
  - path: "resources/assets/src/index.tsx"
  - path: "resources/assets/src/scripts/init.ts"
  - path: "resources/assets/src/scripts/app.ts"
apis:
  - protocol: file
    path: "resources/assets/src/index.tsx"
    description:
      zh: >
          SPA 入口
      en: >
          SPA entry
  - protocol: file
    path: "resources/assets/src/scripts/init.ts"
    description:
      zh: >
          公共路径初始化
      en: >
          Public path init
deps:
  - kind: call
    to: bss.frontend.runtime.router
    label: {zh: "匹配并加载页面", en: "Match and load pages"}
---
