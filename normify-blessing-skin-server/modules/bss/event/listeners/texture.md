---
uid: 451a46de
id: bss.event.listeners.texture
parent: bss.event.listeners
name: {zh: "材质与衣橱联动", en: "Texture & Closet Maintenance"}
description:
  zh: >
      材质删除/私有化后：清理衣橱、复位角色皮肤披风、返还积分；衣橱项被移除时复位对应角色。
  en: >
      After texture delete/privacy change: clean closets, reset player skins/capes and refund score; reset players when a closet item is removed.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:10:16Z"
fingerprint: a25324bdefb97b22416a4abbbb3884df2031f03e3d050f2057d8ec64f04606ef
source:
  - path: "app/Listeners/CleanUpCloset.php"
  - path: "app/Listeners/ResetPlayers.php"
  - path: "app/Listeners/UpdateScoreForDeletedTexture.php"
  - path: "app/Listeners/ResetPlayerForRemovedClosetItem.php"
apis:
  - protocol: file
    path: "app/Listeners/CleanUpCloset.php"
    description:
      zh: >
          清理衣橱
      en: >
          Clean closets
  - protocol: file
    path: "app/Listeners/ResetPlayers.php"
    description:
      zh: >
          复位角色材质
      en: >
          Reset players
  - protocol: file
    path: "app/Listeners/UpdateScoreForDeletedTexture.php"
    description:
      zh: >
          返还积分
      en: >
          Refund score
---
