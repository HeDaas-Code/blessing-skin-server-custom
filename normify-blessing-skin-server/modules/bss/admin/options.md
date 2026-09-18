---
uid: fa984fd4
id: bss.admin.options
parent: bss.admin
name: {zh: "后台选项页", en: "Admin Option Pages"}
description:
  zh: >
      四组后台表单：自定义样式与脚本、积分规则、站点信息与资源限制，均由 OptionForm 声明式构建。
  en: >
      Four admin forms — custom styles/scripts, score rules, site info and resource limits — all built declaratively with OptionForm.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:12:11Z"
fingerprint: 3c8c72c737844bb5f51edfe384906d7aca5d47278ba808f26a6c2be0b158ef74
source:
  - path: "app/Http/Controllers/OptionsController.php"
  - path: "resources/views/admin/customize.twig"
  - path: "resources/views/admin/score.twig"
  - path: "resources/views/admin/options.twig"
  - path: "resources/views/admin/resource.twig"
  - path: "resources/assets/src/views/admin/Customization.ts"
apis:
  - protocol: http
    method: GET
    path: "/admin/customize"
    description:
      zh: >
          自定义样式页
      en: >
          Customization page
  - protocol: http
    method: POST
    path: "/admin/customize"
    description:
      zh: >
          保存自定义样式
      en: >
          Save customization
  - protocol: http
    method: GET
    path: "/admin/score"
    description:
      zh: >
          积分规则页
      en: >
          Score rules page
  - protocol: http
    method: POST
    path: "/admin/score"
    description:
      zh: >
          保存积分规则
      en: >
          Save score rules
  - protocol: http
    method: GET
    path: "/admin/options"
    description:
      zh: >
          站点选项页
      en: >
          Site options page
  - protocol: http
    method: POST
    path: "/admin/options"
    description:
      zh: >
          保存站点选项
      en: >
          Save site options
  - protocol: http
    method: GET
    path: "/admin/resource"
    description:
      zh: >
          资源限制页
      en: >
          Resource limits page
  - protocol: http
    method: POST
    path: "/admin/resource"
    description:
      zh: >
          保存资源限制
      en: >
          Save resource limits
deps:
  - kind: call
    to: bss.option.form
    label: {zh: "渲染选项表单", en: "Render option forms"}
---
