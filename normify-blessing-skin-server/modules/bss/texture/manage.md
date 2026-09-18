---
uid: cd09d92c
id: bss.texture.manage
parent: bss.texture
name: {zh: "材质管理", en: "Texture Management"}
description:
  zh: >
      上传者对自己的材质进行改名、改类型（steve/alex/披风）、改公开性（公开/私有）、删除；删除会广播事件并返还积分。
  en: >
      Uploaders rename, retype (steve/alex/cape), change privacy (public/private) and delete their own textures; deletion fires an event and refunds score.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:07:26Z"
fingerprint: d33a6a3f0f1f48501e63661b55ff6882ba6c258b9739ee2a8164e441a5b6e841
source:
  - path: "app/Http/Controllers/SkinlibController.php"
apis:
  - protocol: http
    method: PUT
    path: "/texture/{texture}/type"
    description:
      zh: >
          修改材质类型
      en: >
          Change texture type
  - protocol: http
    method: PUT
    path: "/texture/{texture}/name"
    description:
      zh: >
          修改材质名
      en: >
          Rename texture
  - protocol: http
    method: PUT
    path: "/texture/{texture}/privacy"
    description:
      zh: >
          修改公开性
      en: >
          Change privacy
  - protocol: http
    method: DELETE
    path: "/texture/{texture}"
    description:
      zh: >
          删除材质
      en: >
          Delete texture
deps:
  - kind: call
    to: bss.texture.model
    label: {zh: "更新材质记录", en: "Update texture"}
  - kind: event
    to: bss.event
    label: {zh: "广播删除事件", en: "Fire delete event"}
---
