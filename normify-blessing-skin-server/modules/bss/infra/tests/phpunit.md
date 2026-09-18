---
uid: fc42fe03
id: bss.infra.tests.phpunit
parent: bss.infra.tests
name: {zh: "PHPUnit 测试", en: "PHPUnit Tests"}
description:
  zh: >
      后端测试按域组织：HttpTest 控制器/中间件/视图、CommandsTest、ModelsTest、ListenersTest、ServicesTest、RulesTest。
  en: >
      Back-end tests organized by domain: HttpTest controllers/middleware/views, CommandsTest, ModelsTest, ListenersTest, ServicesTest, RulesTest.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:14:26Z"
fingerprint: 8f7b23672bc2d411bdbb6a5285e47afaa121144cee215e8980f19dd388e826b6
source:
  - path: "phpunit.xml"
  - path: "tests/TestCase.php"
  - path: "tests/BrowserKitTestCase.php"
  - path: "tests/HttpTest/ControllersTest/AuthControllerTest.php"
  - path: "tests/CommandsTest/BsInstallCommandTest.php"
  - path: "tests/ListenersTest/CleanUpClosetTest.php"
  - path: "tests/ServicesTest/OptionTest.php"
apis:
  - protocol: file
    path: "phpunit.xml"
    description:
      zh: >
          PHPUnit 配置
      en: >
          PHPUnit config
---
