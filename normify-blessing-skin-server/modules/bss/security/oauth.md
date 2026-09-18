---
uid: ae961cde
id: bss.security.oauth
parent: bss.security
name: {zh: "OAuth2 作用域", en: "OAuth2 Scopes"}
description:
  zh: >
      Passport 作用域注册与缓存：内置 16 个用户/角色/衣橱/后台作用域，自定义 Scope 入库后刷新缓存供插件扩展。
  en: >
      Passport scope registration and caching: 16 built-in user/player/closet/admin scopes; custom Scope rows refresh the cache for plugin-defined scopes.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:09:13Z"
fingerprint: c69917c262f874b294c8e8a22398aa531da705816a1babbfd6dad07108d23106
source:
  - path: "app/Providers/AuthServiceProvider.php"
  - path: "app/Models/Scope.php"
  - path: "app/Observers/ScopeObserver.php"
apis:
  - protocol: file
    path: "app/Providers/AuthServiceProvider.php"
    description:
      zh: >
          作用域与默认作用域注册
      en: >
          Scope and default scope registration
  - protocol: file
    path: "app/Models/Scope.php"
    description:
      zh: >
          自定义作用域实体
      en: >
          Custom scope entity
  - protocol: file
    path: "app/Observers/ScopeObserver.php"
    description:
      zh: >
          作用域缓存刷新
      en: >
          Scope cache refresh
---
