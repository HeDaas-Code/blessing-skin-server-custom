---
uid: 576e6cd6
id: bss.user.auth.registration
parent: bss.user.auth
name: {zh: "注册", en: "Registration"}
description:
  zh: >
      渲染注册页并创建账号：昵称/邮箱唯一性与密码规则校验、初始积分、按 IP 限流与验证码校验，成功后广播 UserRegistered。
  en: >
      Renders the registration page and creates the account: nickname/email uniqueness and password rules, initial score, per-IP throttling and captcha, then fires UserRegistered.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:02:43Z"
fingerprint: a9c1ad239cdbd729f01dbc96e3be23423cd69f76ffec8cabbf4e0a9c775faeda
source:
  - path: "app/Http/Controllers/AuthController.php"
  - path: "resources/views/auth/register.twig"
  - path: "resources/views/auth/rows/register/form.twig"
  - path: "resources/views/auth/rows/register/notice.twig"
  - path: "resources/assets/src/views/auth/Registration.tsx"
apis:
  - protocol: http
    method: GET
    path: "/auth/register"
    description:
      zh: >
          注册页
      en: >
          Registration page
  - protocol: http
    method: POST
    path: "/auth/register"
    description:
      zh: >
          提交注册
      en: >
          Submit registration
deps:
  - kind: call
    to: bss.user.auth.captcha
    label: {zh: "校验验证码", en: "Validate captcha"}
  - kind: event
    to: bss.event
    label: {zh: "广播 UserRegistered", en: "Fire UserRegistered"}
  - kind: call
    to: bss.option
    label: {zh: "读取注册选项", en: "Read signup options"}
---
