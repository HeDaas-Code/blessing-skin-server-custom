---
uid: df83826e
id: bss.texture.model
parent: bss.texture
name: {zh: "材质模型", en: "Texture Model"}
description:
  zh: >
      Texture 模型：哈希唯一键、类型与公开性字段、上传者关联、like 查询作用域与积分返还逻辑。
  en: >
      The Texture model: unique hash, type and privacy fields, uploader relation, the like query scope and score-refund logic.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:07:26Z"
fingerprint: 572b898ffcb9de78aa53a20de909e2705aed3e3dff3dfce5051b3428d35f0f83
source:
  - path: "app/Models/Texture.php"
apis:
  - protocol: file
    path: "app/Models/Texture.php"
    description:
      zh: >
          材质实体与查询作用域
      en: >
          Texture entity and query scopes
deps:
  - kind: reference
    to: bss.user.model
    label: {zh: "关联上传者", en: "Relate uploader"}
---
