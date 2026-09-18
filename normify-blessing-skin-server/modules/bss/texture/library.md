---
uid: 7ea4acb7
id: bss.texture.library
parent: bss.texture
name: {zh: "皮肤库", en: "Skin Library"}
description:
  zh: >
      皮肤库主页、列表查询与详情展示：分页、按类型/关键词筛选、点赞与热度排序；前端为卡片列表与详情侧栏。
  en: >
      Skin library home, list query and detail: pagination, type/keyword filters, likes and popularity sorting; the front end is a card list with a detail sidebar.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:07:26Z"
fingerprint: 540ccad275cecfcc699fb6b590db2d6265f29435e15add73bcf42b8652071589
source:
  - path: "app/Http/Controllers/SkinlibController.php"
  - path: "resources/views/skinlib/index.twig"
  - path: "resources/views/skinlib/show.twig"
  - path: "resources/views/skinlib/widgets/show/side.twig"
  - path: "resources/assets/src/views/skinlib/SkinLibrary/index.tsx"
  - path: "resources/assets/src/views/skinlib/SkinLibrary/Button.tsx"
  - path: "resources/assets/src/views/skinlib/SkinLibrary/FilterSelector.tsx"
  - path: "resources/assets/src/views/skinlib/SkinLibrary/Item.tsx"
  - path: "resources/assets/src/views/skinlib/SkinLibrary/types.ts"
  - path: "resources/assets/src/views/skinlib/SkinLibrary/utils.ts"
  - path: "resources/assets/src/views/skinlib/Show/index.tsx"
apis:
  - protocol: http
    method: GET
    path: "/skinlib"
    description:
      zh: >
          皮肤库主页
      en: >
          Skin library home
  - protocol: http
    method: GET
    path: "/skinlib/list"
    description:
      zh: >
          皮肤库列表
      en: >
          Skin library list
  - protocol: http
    method: GET
    path: "/skinlib/show/{texture}"
    description:
      zh: >
          材质详情页
      en: >
          Texture detail page
  - protocol: http
    method: GET
    path: "/skinlib/info/{texture}"
    description:
      zh: >
          材质详情数据
      en: >
          Texture detail data
  - protocol: http
    method: GET
    path: "/texture/{texture}"
    description:
      zh: >
          材质信息
      en: >
          Texture info
deps:
  - kind: call
    to: bss.texture.model
    label: {zh: "查询材质数据", en: "Query textures"}
  - kind: call
    to: bss.option
    label: {zh: "读取列表选项", en: "Read list options"}
---
