---
uid: e74da853
id: bss.infra.delivery
parent: bss.infra
name: {zh: "容器与 CI", en: "Container & CI"}
description:
  zh: >
      Dockerfile 生产镜像、.dockerignore、GitHub Actions（CI/Release/Telegram）、DevContainer 与 Gitpod 配置。
  en: >
      Dockerfile production image, .dockerignore, GitHub Actions (CI/Release/Telegram), DevContainer and Gitpod configs.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:14:26Z"
fingerprint: e4d93943994dd2d2830cf9d263956be5ce0570ed74463a903e2e59ed50cb9bc0
source:
  - path: "Dockerfile"
  - path: ".dockerignore"
  - path: ".github/workflows/CI.yml"
  - path: ".github/workflows/Release.yml"
  - path: ".github/workflows/Telegram.yml"
  - path: ".devcontainer/devcontainer.json"
  - path: ".gitpod.yml"
apis:
  - protocol: file
    path: "Dockerfile"
    description:
      zh: >
          生产镜像定义
      en: >
          Production image
  - protocol: file
    path: ".github/workflows/CI.yml"
    description:
      zh: >
          CI 流水线
      en: >
          CI pipeline
---
