---
uid: 437ff82b
id: yggdrasil-api.binding.sync
parent: yggdrasil-api.binding
name: {zh: "官方皮肤同步", en: "Official Skin Sync"}
description:
  zh: >
      绑定时与手动触发时，下载微软档案中的 ACTIVE 皮肤/披风，写入纹理库并应用到同名角色（不扣积分、私有纹理）。
  en: >
      On bind and on demand, downloads the ACTIVE skin/cape from the Microsoft profile, imports them into the texture library and applies them to the same-name player (free, private textures).
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T17:30:19Z"
fingerprint: d3f2a0b8d20b01adb2c1461c4cb509ec34179a5a4c2e80809fafd6bee14da592
source:
  - path: "plugins/yggdrasil-api/src/Services/SkinSynchronizer.php"
apis:
  - protocol: file
    path: "plugins/yggdrasil-api/src/Services/SkinSynchronizer.php"
    description:
      zh: >
          官方皮肤同步服务
      en: >
          Official skin sync service
deps:
  - kind: call
    to: bss.texture.model
    label: {zh: "导入纹理", en: "Import textures"}
  - kind: call
    to: bss.player.model
    label: {zh: "应用到同名角色", en: "Apply to same-name player"}
---
