---
uid: d958375f
id: bss.player.closet-admin
parent: bss.player
name: {zh: "后台衣橱管理", en: "Admin Closet Management"}
description:
  zh: >
      管理员查看指定用户衣橱、代添加或移除衣橱项，用于处理异常收藏或违规内容。
      
  en: >
      Admin views a user’s closet and adds or removes items on their behalf, for handling broken favorites or violating content.
      
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:05:17Z"
fingerprint: 50a955601cfcd385b4ae93f84131dc21b15a1ce893b94ae5efafae8330a3e937
source:
  - path: "app/Http/Controllers/ClosetManagementController.php"
apis:
  - protocol: http
    method: GET
    path: "/api/admin/closet/{user}"
    description:
      zh: >
          后台查看用户衣橱
          
      en: >
          Admin view user closet
          
  - protocol: http
    method: POST
    path: "/admin/closet/{user}"
    description:
      zh: >
          后台添加衣橱项
          
      en: >
          Admin add closet item
          
  - protocol: http
    method: DELETE
    path: "/admin/closet/{user}"
    description:
      zh: >
          后台移除衣橱项
          
      en: >
          Admin remove closet item
          
deps:
  - kind: call
    to: bss.player.closet
    label: {zh: "复用衣橱逻辑", en: "Reuse closet logic"}
---
