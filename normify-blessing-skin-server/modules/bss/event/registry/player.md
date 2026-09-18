---
uid: 1cc27592
id: bss.event.registry.player
parent: bss.event.registry
name: {zh: "角色事件", en: "Player Events"}
description:
  zh: >
      角色增删改查全周期：新增前/后、删除前/后、资料更新与读取，供插件同步到其他系统。
  en: >
      Player CRUD lifecycle: pre/post add, pre/post delete, profile updated and retrieved, for plugins to sync with other systems.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:10:16Z"
fingerprint: 30ec874825d21729f5f6d69116142c0f0796546bde2e0a3f98f57e62587d6d45
source:
  - path: "app/Events/PlayerWillBeAdded.php"
  - path: "app/Events/PlayerWasAdded.php"
  - path: "app/Events/PlayerWillBeDeleted.php"
  - path: "app/Events/PlayerWasDeleted.php"
  - path: "app/Events/PlayerProfileUpdated.php"
  - path: "app/Events/PlayerRetrieved.php"
apis:
  - protocol: file
    path: "app/Events/PlayerWillBeAdded.php"
    description:
      zh: >
          新增前事件
      en: >
          Pre-add event
  - protocol: file
    path: "app/Events/PlayerWasAdded.php"
    description:
      zh: >
          新增后事件
      en: >
          Post-add event
  - protocol: file
    path: "app/Events/PlayerWillBeDeleted.php"
    description:
      zh: >
          删除前事件
      en: >
          Pre-delete event
  - protocol: file
    path: "app/Events/PlayerWasDeleted.php"
    description:
      zh: >
          删除后事件
      en: >
          Post-delete event
  - protocol: file
    path: "app/Events/PlayerProfileUpdated.php"
    description:
      zh: >
          资料更新事件
      en: >
          Profile updated event
---
