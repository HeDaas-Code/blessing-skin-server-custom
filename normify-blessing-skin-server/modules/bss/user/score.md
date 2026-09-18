---
uid: f6354f42
id: bss.user.score
parent: bss.user
name: {zh: "积分与签到", en: "Score & Sign-in"}
description:
  zh: >
      积分查询与每日签到：签到间隔、连续签到与奖励区间由选项配置，签到后写入历史并返回本次得分。
  en: >
      Score lookup and daily sign-in: interval, streak and reward range come from options; each sign-in is recorded and the awarded score returned.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:00:50Z"
fingerprint: 00e6c1c28ffc2c7fab7ca602cb08f665780fd6faf5cdbe31c20cd88c3ffb1e2c
source:
  - path: "app/Http/Controllers/UserController.php"
  - path: "resources/assets/src/views/user/Dashboard/SignButton.tsx"
  - path: "resources/assets/src/views/user/Dashboard/scoreUtils.ts"
apis:
  - protocol: http
    method: GET
    path: "/user/score-info"
    description:
      zh: >
          查询积分信息
      en: >
          Query score info
  - protocol: http
    method: POST
    path: "/user/sign"
    description:
      zh: >
          执行签到
      en: >
          Perform sign-in
deps:
  - kind: call
    to: bss.option
    label: {zh: "读取积分规则", en: "Read score rules"}
---
