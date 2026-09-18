---
uid: "44566365"
id: bss.event.dispatcher
parent: bss.event
name: {zh: "事件调度表", en: "Event Dispatcher"}
description:
  zh: >
      EventServiceProvider：声明事件-监听器映射（含插件 versionChanged 等通配事件）并观察 Scope 模型刷新缓存。
  en: >
      EventServiceProvider: declares the event-to-listener map (including wildcard plugin events) and observes Scope to refresh the cache.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:10:16Z"
fingerprint: f40c7b57a70f8777587baa69a28cdddc3b60a4c78efda9e08b75b51599d38926
source:
  - path: "app/Providers/EventServiceProvider.php"
apis:
  - protocol: file
    path: "app/Providers/EventServiceProvider.php"
    description:
      zh: >
          监听映射与观察者
      en: >
          Listener map and observers
deps:
  - kind: event
    to: bss.event.registry.user
    label: {zh: "分发用户事件", en: "Dispatch user events"}
  - kind: event
    to: bss.event.registry.plugin
    label: {zh: "分发插件事件", en: "Dispatch plugin events"}
---
