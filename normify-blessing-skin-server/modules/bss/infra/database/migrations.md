---
uid: 877669fa
id: bss.infra.database.migrations
parent: bss.infra.database
name: {zh: "数据库迁移", en: "Database Migrations"}
description:
  zh: >
      全量迁移：核心表（用户/角色/材质/衣橱/举报/通知/任务/scope/语言行）、积分与点赞字段、IP 扩容、OAuth 字段、暗色模式与材质宽度选项。
  en: >
      All migrations: core tables (users/players/textures/closet/reports/notifications/jobs/scopes/language lines), score and likes, IP widening, OAuth fields, dark mode and texture-width options.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:14:26Z"
fingerprint: a48769935df4b5136e84770dbb833f2db2d7d3c93d267b16970c05b6c4191de5
source:
  - path: "database/migrations/2016_11_18_133939_create_all_tables.php"
  - path: "database/migrations/2016_11_18_134542_import_options.php"
  - path: "database/migrations/2018_07_26_130617_add_verification_to_users_table.php"
  - path: "database/migrations/2018_08_21_105514_add_remember_token_to_users_table.php"
  - path: "database/migrations/2019_03_01_131420_add_tid_skin.php"
  - path: "database/migrations/2019_03_13_130311_rename_players_table_columns.php"
  - path: "database/migrations/2019_03_14_174727_create_closet.php"
  - path: "database/migrations/2019_03_16_162603_remove_likes_field.php"
  - path: "database/migrations/2019_03_23_171728_create_report_table.php"
  - path: "database/migrations/2019_05_05_103143_add_likes_field.php"
  - path: "database/migrations/2019_07_03_094434_create_notifications_table.php"
  - path: "database/migrations/2019_07_05_222912_create_jobs_table.php"
  - path: "database/migrations/2019_09_05_130811_create_language_lines_table.php"
  - path: "database/migrations/2019_12_14_095751_update_ip_field.php"
  - path: "database/migrations/2020_03_10_145738_lengthen_ip_field.php"
  - path: "database/migrations/2020_06_26_090510_add_o_auth_provider_field.php"
  - path: "database/migrations/2020_06_28_155519_add_user_locale_field.php"
  - path: "database/migrations/2021_04_14_181300_create_scope_table.php"
  - path: "database/migrations/2021_06_06_111049_add_is_dark_mode_field.php"
  - path: "database/migrations/2025_06_29_064944_add_max_texture_width_option.php"
apis:
  - protocol: file
    path: "database/migrations/2016_11_18_133939_create_all_tables.php"
    description:
      zh: >
          核心表创建
      en: >
          Core table creation
  - protocol: file
    path: "database/migrations/2016_11_18_134542_import_options.php"
    description:
      zh: >
          选项导入
      en: >
          Options import
  - protocol: file
    path: "database/migrations/2021_04_14_181300_create_scope_table.php"
    description:
      zh: >
          scope 表创建
      en: >
          Scope table creation
---
