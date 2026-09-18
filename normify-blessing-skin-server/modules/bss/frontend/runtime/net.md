---
uid: 2e334eb1
id: bss.frontend.runtime.net
parent: bss.frontend.runtime
name: {zh: "网络层", en: "HTTP Layer"}
description:
  zh: >
      walkFetch 封装：自动附带 CSRF token、统一解析响应/校验错误/异常追踪并弹错误框；get/post/put/del 便捷方法。
  en: >
      walkFetch wrapper: attaches the CSRF token, normalizes response/validation errors/exception traces with error modals; get/post/put/del helpers.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:15:40Z"
fingerprint: b957eafd113aa024b1077a3ce38ac2d61cbbcc44459267d1a449550e3860e768
source:
  - path: "resources/assets/src/scripts/net.ts"
  - path: "resources/assets/src/scripts/urls.ts"
apis:
  - protocol: file
    path: "resources/assets/src/scripts/net.ts"
    description:
      zh: >
          fetch 封装
      en: >
          Fetch wrapper
  - protocol: file
    path: "resources/assets/src/scripts/urls.ts"
    description:
      zh: >
          后端路由 URL 构建器
      en: >
          Back-end URL builders
---
