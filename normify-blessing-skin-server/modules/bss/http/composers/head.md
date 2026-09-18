---
uid: 43fd4d9c
id: bss.http.composers.head
parent: bss.http.composers
name: {zh: "页头资源注入", en: "Head Assets Composer"}
description:
  zh: >
      向 shared.head 注入 favicon、主题色、SEO 元信息、样式文件与全局 JS 变量（插件可经 Hook 追加）。
  en: >
      Injects favicon, theme color, SEO metadata, style files and global JS variables into shared.head (plugins can append via Hook).
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T15:59:24Z"
fingerprint: 594bdc5d0d766f371dd5f447840e93c9e08bd4a4bfdb710b7fa06b8d7338de0c
source:
  - path: "app/Http/View/Composers/HeadComposer.php"
apis:
  - protocol: file
    path: "app/Http/View/Composers/HeadComposer.php"
    description:
      zh: >
          页头数据组装
      en: >
          Compose head data
deps:
  - kind: call
    to: bss.option
    label: {zh: "读取站点选项", en: "Read site options"}
---
