---
uid: b358138f
id: yggdrasil-api.official.router
parent: yggdrasil-api.official
name: {zh: "官方路由决策器", en: "Official Router"}
description:
  zh: >
      认证入口决策：根据绑定状态与官方服务健康度选择 P0 离线 / P1 官方 / P2 兜底，维护熔断状态机。
      
  en: >
      Auth-entry decision: chooses P0 offline / P1 official / P2 fallback by binding state and official-service health, maintaining the circuit breaker.
      
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T17:24:17.751Z"
fingerprint: 92c4497268906f4ac7ebef7d163ea41649faafe2ef59c089b28a89813064696e
source:
  - path: "plugins/yggdrasil-api/src/Services/OfficialRouter.php"
apis: []
deps:
  - kind: call
    to: yggdrasil-api.binding.model
    label: {zh: "读取绑定", en: "Read binding"}
  - kind: call
    to: yggdrasil-api.official.verifier
    label: {zh: "在线校验官方档案", en: "Verify official profile online"}
---
