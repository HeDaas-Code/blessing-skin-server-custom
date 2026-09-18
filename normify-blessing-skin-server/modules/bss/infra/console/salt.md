---
uid: 7b52abe1
id: bss.infra.console.salt
parent: bss.infra.console
name: {zh: "salt:random 命令", en: "salt:random Command"}
description:
  zh: >
      artisan salt:random：生成并写入 .env 的密码盐值，支持 --show 仅显示。
  en: >
      artisan salt:random: generates and writes the password salt into .env, with a --show flag.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:14:26Z"
fingerprint: 33955b231ca910ada6f887c8391e52b110e47acc9552742564f53910a0ecd59d
source:
  - path: "app/Console/Commands/SaltRandomCommand.php"
apis:
  - protocol: file
    path: "app/Console/Commands/SaltRandomCommand.php"
    description:
      zh: >
          salt:random 命令
      en: >
          salt:random command
---
