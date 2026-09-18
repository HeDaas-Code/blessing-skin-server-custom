---
uid: 13eebd65
id: bss.http.composers.foot
parent: bss.http.composers
name: {zh: "页脚资源注入", en: "Footer Assets Composer"}
description:
  zh: >
      向 shared.foot 注入脚本文件、内联 extra 片段与全局序列化数据，并在调试栏启用时追加调试资源。
  en: >
      Injects script files, inline extra snippets and serialized globals into shared.foot, appending debug assets when the debug bar is enabled.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T15:59:24Z"
fingerprint: 3a816b4c29bc7e15ae2a8dfd6a06fa8916dabeaec79c6bf742ea6c3da6f74976
source:
  - path: "app/Http/View/Composers/FootComposer.php"
apis:
  - protocol: file
    path: "app/Http/View/Composers/FootComposer.php"
    description:
      zh: >
          页脚数据组装
      en: >
          Compose footer data
---
