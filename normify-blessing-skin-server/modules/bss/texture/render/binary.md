---
uid: 3547ad97
id: bss.texture.render.binary
parent: bss.texture.render
name: {zh: "原始材质二进制", en: "Raw Texture Binary"}
description:
  zh: >
      textures/{hash} 与 raw/{tid}：按内容哈希或材质 ID 返回原始皮肤/披风文件，带缓存头。
  en: >
      textures/{hash} and raw/{tid}: serve the raw skin/cape file by content hash or texture ID, with cache headers.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:07:26Z"
fingerprint: e0ea06020d4bb32ba1b5cb3d30bdb25521ce9f19b31cf2287595bd2c4fb12fa5
source:
  - path: "app/Http/Controllers/TextureController.php"
apis:
  - protocol: http
    method: GET
    path: "/textures/{hash}"
    description:
      zh: >
          按哈希返回材质文件
      en: >
          Serve texture by hash
  - protocol: http
    method: GET
    path: "/csl/textures/{hash}"
    description:
      zh: >
          CSL 材质文件
      en: >
          CSL texture by hash
  - protocol: http
    method: GET
    path: "/raw/{tid}"
    description:
      zh: >
          按 ID 返回材质文件
      en: >
          Serve texture by ID
deps:
  - kind: call
    to: bss.texture.model
    label: {zh: "解析材质哈希", en: "Resolve texture hash"}
---
