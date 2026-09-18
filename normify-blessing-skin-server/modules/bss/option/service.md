---
uid: e4965cac
id: bss.option.service
parent: bss.option
name: {zh: "选项存储", en: "Option Store"}
description:
  zh: >
      基于 storage/options.php 的键值存储：读取（支持本地化值与原始值）、写入、全部导出，配合 Facade 与 option() 辅助函数。
  en: >
      Key-value store on storage/options.php: get (localized or raw), set, all, plus the Facade and option() helper.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:09:13Z"
fingerprint: 750df4a1daeba9ecc2ce673424527009aa0cb99ae808965fe8ac2048ddf802df
source:
  - path: "app/Services/Option.php"
  - path: "app/Services/Facades/Option.php"
  - path: "app/helpers.php"
apis:
  - protocol: file
    path: "app/Services/Option.php"
    description:
      zh: >
          读取/写入/导出选项
      en: >
          Get/set/all options
  - protocol: file
    path: "app/helpers.php"
    description:
      zh: >
          option 辅助函数
      en: >
          option() helpers
---
