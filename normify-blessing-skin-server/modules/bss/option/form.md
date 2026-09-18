---
uid: 253c2dba
id: bss.option.form
parent: bss.option
name: {zh: "选项表单构建器", en: "Option Form Builder"}
description:
  zh: >
      声明式后台表单 DSL：文本/复选框/选择器等控件、校验、按钮、提示与 before/after 回调，渲染为表单 HTML 并回写选项。
  en: >
      Declarative admin form DSL: text/checkbox/select controls, validation, buttons, hints and before/after callbacks, rendered to HTML and persisted.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:09:13Z"
fingerprint: f36be1b2eb02aed6aa5854bc7863018be9a522ed9a912fb51dd7c64a2d0c5d68
source:
  - path: "app/Services/OptionForm.php"
apis:
  - protocol: file
    path: "app/Services/OptionForm.php"
    description:
      zh: >
          表单 DSL 与渲染
      en: >
          Form DSL and rendering
deps:
  - kind: call
    to: bss.option.service
    label: {zh: "读写选项值", en: "Read/write options"}
---
