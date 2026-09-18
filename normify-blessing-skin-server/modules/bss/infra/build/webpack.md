---
uid: 7ce3599a
id: bss.infra.build.webpack
parent: bss.infra.build
name: {zh: "Webpack 构建", en: "Webpack Build"}
description:
  zh: >
      多入口构建（app/style/home/spectre）与开发服务器：ts-loader、MiniCssExtract、HTML 增强插件与 CDN 公共路径。
  en: >
      Multi-entry build (app/style/home/spectre) and dev server: ts-loader, MiniCssExtract, HTML enhancement plugin and CDN public path.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:14:26Z"
fingerprint: 915c8e8564ae59f6c47562dd2ecbf910985e3cfa37cfeaac55f5adb7f6c40b70
source:
  - path: "webpack.config.ts"
  - path: "tsconfig.json"
  - path: "tsconfig.build.json"
  - path: "tsconfig.dev.json"
  - path: "tsconfig.eslint.json"
  - path: "postcss.config.js"
  - path: "tools/HtmlWebpackEnhancementPlugin.ts"
apis:
  - protocol: file
    path: "webpack.config.ts"
    description:
      zh: >
          Webpack 配置
      en: >
          Webpack config
---
