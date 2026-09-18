---
uid: 01bd680d
id: bss.infra.database
parent: bss.infra
name: {zh: "数据层", en: "Data Layer"}
description:
  zh: >
      数据库迁移与模型工厂：20 个迁移脚本从空库演进到当前表结构，工厂为测试生成用户/角色/材质。
  en: >
      Database migrations and model factories: 20 migrations evolve the schema from empty to current; factories seed users/players/textures for tests.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:14:26Z"
fingerprint: 2a3cb68d0a52872143030fe009309a56593fb774c844ae74c5612a1c7b24a658
source:
  - path: "database/migrations/2016_11_18_133939_create_all_tables.php"
  - path: "database/migrations/2016_11_18_134542_import_options.php"
  - path: "database/migrations/2018_07_26_130617_add_verification_to_users_table.php"
---
