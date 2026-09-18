---
uid: e01bac55
id: bss.http.routing.static
parent: bss.http.routing
name: {zh: "静态与材质公开路由", en: "Static & Public Texture Routes"}
description:
  zh: >
      无需会话的高频接口：{player}.json 材质清单、textures/{hash}、raw/{tid}、avatar/* 与 preview/* 渲染入口。
  en: >
      Session-free high-traffic endpoints: {player}.json manifests, textures/{hash}, raw/{tid}, and avatar/* plus preview/* rendering entries.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T15:59:24Z"
fingerprint: de5728b9833cfe7ab40a92ebc0e4b16e99b51a052e1a043ec21309b263f2e42f
source:
  - path: "routes/static.php"
apis:
  - protocol: file
    path: "routes/static.php"
    description:
      zh: >
          静态资源与渲染路由定义
      en: >
          Static and rendering route definitions
---
