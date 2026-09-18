---
uid: 2515dd5b
id: bss.texture.upload
parent: bss.texture
name: {zh: "材质上传", en: "Texture Upload"}
description:
  zh: >
      上传页面与提交处理：文件类型/尺寸校验、哈希去重、像素比例推断模型（steve/alex）、可选公开性；同时写入皮肤库与本地存储。
  en: >
      Upload page and submission: file type/size validation, hash dedup, model inference from pixel ratio (steve/alex) and optional visibility; writes both the library record and local storage.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:07:26Z"
fingerprint: 54bc1a8f407fb9d1808167aaef58025f6255d5875eda914338dc3aada942505d
source:
  - path: "app/Http/Controllers/SkinlibController.php"
  - path: "resources/views/skinlib/upload.twig"
  - path: "resources/views/skinlib/widgets/upload/input.twig"
  - path: "resources/assets/src/views/skinlib/Upload.tsx"
apis:
  - protocol: http
    method: GET
    path: "/skinlib/upload"
    description:
      zh: >
          上传页
      en: >
          Upload page
  - protocol: http
    method: POST
    path: "/texture"
    description:
      zh: >
          提交上传
      en: >
          Submit upload
deps:
  - kind: call
    to: bss.texture.model
    label: {zh: "创建材质记录", en: "Create texture"}
  - kind: call
    to: bss.security
    label: {zh: "校验上传内容", en: "Validate upload"}
---
