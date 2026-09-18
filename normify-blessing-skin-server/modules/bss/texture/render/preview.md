---
uid: 66bdaa01
id: bss.texture.render.preview
parent: bss.texture.render
name: {zh: "2D 预览渲染", en: "2D Preview Rendering"}
description:
  zh: >
      preview/{texture} 与 preview/hash/{hash}：把皮肤展开图渲染为 2D 预览 PNG，用于分享或嵌入。
  en: >
      preview/{texture} and preview/hash/{hash}: render the skin flatmap into a 2D preview PNG for sharing or embedding.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:07:26Z"
fingerprint: e0ea06020d4bb32ba1b5cb3d30bdb25521ce9f19b31cf2287595bd2c4fb12fa5
source:
  - path: "app/Http/Controllers/TextureController.php"
apis:
  - protocol: http
    method: GET
    path: "/preview/{texture}"
    description:
      zh: >
          材质 2D 预览
      en: >
          Texture 2D preview
  - protocol: http
    method: GET
    path: "/preview/hash/{hash}"
    description:
      zh: >
          哈希 2D 预览
      en: >
          Preview by hash
deps:
  - kind: call
    to: bss.texture.model
    label: {zh: "加载材质渲染", en: "Load texture to render"}
---
