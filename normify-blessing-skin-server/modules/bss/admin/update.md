---
uid: de3f39c3
id: bss.admin.update
parent: bss.admin
name: {zh: "版本更新", en: "Version Update"}
description:
  zh: >
      检查 GitHub 最新版本、展示可用更新、下载压缩包并解压覆盖，仅超管可用。
  en: >
      Checks GitHub for the latest release, shows available updates, downloads and extracts over the install; super-admin only.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:12:11Z"
fingerprint: b27812c41e0adeebb915645e4d356be99f3cb45e8779735bc87a15ade9de74bb
source:
  - path: "app/Http/Controllers/UpdateController.php"
  - path: "resources/views/admin/update.twig"
  - path: "resources/assets/src/views/admin/Update.ts"
apis:
  - protocol: http
    method: GET
    path: "/admin/update"
    description:
      zh: >
          更新页
      en: >
          Update page
  - protocol: http
    method: POST
    path: "/admin/update/download"
    description:
      zh: >
          下载并更新
      en: >
          Download and update
deps:
  - kind: call
    to: bss.infra
    label: {zh: "执行升级流程", en: "Run upgrade flow"}
---
