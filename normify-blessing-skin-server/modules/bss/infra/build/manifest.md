---
uid: e6a07b63
id: bss.infra.build.manifest
parent: bss.infra.build
name: {zh: "依赖清单", en: "Dependency Manifests"}
description:
  zh: >
      composer.json（PHP 依赖与脚本）与 package.json（前端依赖与脚本）及锁文件。
  en: >
      composer.json (PHP deps and scripts) and package.json (front-end deps and scripts) with their lock files.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:14:26Z"
fingerprint: 792c78bd17446dd2c0f31a6f79142c39f642b6a84b93e61a33b15907f340c22e
source:
  - path: "composer.json"
  - path: "composer.lock"
  - path: "package.json"
  - path: "yarn.lock"
apis:
  - protocol: file
    path: "composer.json"
    description:
      zh: >
          PHP 依赖清单
      en: >
          PHP manifest
  - protocol: file
    path: "package.json"
    description:
      zh: >
          前端依赖清单
      en: >
          Front-end manifest
---
