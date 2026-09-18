---
uid: 4a77d3e8
id: bss.player
parent: bss
name: {zh: "角色与衣橱域", en: "Player & Closet Domain"}
description:
  zh: >
      角色名下的皮肤/披风绑定与改名删除，以及玩家的材质衣橱（收藏、应用、设为头像），含后台的跨用户衣橱管理。
      
  en: >
      Skin/cape binding, renaming and deletion for players, plus the per-user texture closet (favorite, apply, set as avatar), including admin-side closet management.
      
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T15:52:59Z"
fingerprint: 670a46c1f90513c9e94180315db30f4b6d7be143c8fadbb8e904ee08223af195
source:
  - path: "app/Http/Controllers/PlayerController.php"
  - path: "app/Http/Controllers/ClosetController.php"
  - path: "app/Http/Controllers/ClosetManagementController.php"
  - path: "app/Models/Player.php"
  - path: "resources/views/user/player.twig"
  - path: "resources/views/user/closet.twig"
---
