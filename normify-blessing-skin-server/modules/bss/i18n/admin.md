---
uid: 629ee816
id: bss.i18n.admin
parent: bss.i18n
name: {zh: "翻译词条管理", en: "Translation Management"}
description:
  zh: >
      后台翻译管理：列出/新增/修改/删除语言包词条，写入对应语言 YAML 文件并失效前端缓存。
  en: >
      Admin translation management: list/create/update/delete language-pack entries, writing the YAML files and invalidating the front-end cache.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:09:13Z"
fingerprint: a1ef3805406c7f760f8d2340c269a173b112888894f6246e62cc7dc57377608a
source:
  - path: "app/Http/Controllers/TranslationsController.php"
  - path: "resources/views/admin/i18n.twig"
  - path: "resources/assets/src/views/admin/Translations/index.tsx"
  - path: "resources/assets/src/views/admin/Translations/Row.tsx"
  - path: "resources/assets/src/views/admin/Translations/types.ts"
apis:
  - protocol: http
    method: GET
    path: "/admin/i18n"
    description:
      zh: >
          翻译管理页
      en: >
          Translation page
  - protocol: http
    method: GET
    path: "/admin/i18n/list"
    description:
      zh: >
          词条列表
      en: >
          Entry list
  - protocol: http
    method: POST
    path: "/admin/i18n"
    description:
      zh: >
          新增词条
      en: >
          Create entry
  - protocol: http
    method: PUT
    path: "/admin/i18n/{line}"
    description:
      zh: >
          修改词条
      en: >
          Update entry
  - protocol: http
    method: DELETE
    path: "/admin/i18n/{line}"
    description:
      zh: >
          删除词条
      en: >
          Delete entry
deps:
  - kind: call
    to: bss.i18n.loader
    label: {zh: "写回语言包", en: "Write language packs"}
---
