---
uid: 61f63def
id: bss.event.registry.rendering
parent: bss.event.registry
name: {zh: "渲染挂载事件", en: "Render Mount Events"}
description:
  zh: >
      RenderingHeader / RenderingFooter / RenderingBadges / TextureDeleting：插件向页头页脚、材质徽章注入内容或在删除前拦截。
  en: >
      RenderingHeader / RenderingFooter / RenderingBadges / TextureDeleting: inject into header/footer/badges or intercept before texture deletion.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:10:16Z"
fingerprint: eeb209cf29cf0d1cfe962116a12c73d58a3238ff4e32162b341f9e928897c052
source:
  - path: "app/Events/RenderingHeader.php"
  - path: "app/Events/RenderingFooter.php"
  - path: "app/Events/RenderingBadges.php"
  - path: "app/Events/TextureDeleting.php"
apis:
  - protocol: file
    path: "app/Events/RenderingHeader.php"
    description:
      zh: >
          页头渲染事件
      en: >
          Header render event
  - protocol: file
    path: "app/Events/RenderingFooter.php"
    description:
      zh: >
          页脚渲染事件
      en: >
          Footer render event
  - protocol: file
    path: "app/Events/RenderingBadges.php"
    description:
      zh: >
          徽章渲染事件
      en: >
          Badge render event
  - protocol: file
    path: "app/Events/TextureDeleting.php"
    description:
      zh: >
          材质删除前事件
      en: >
          Pre-delete texture event
---
