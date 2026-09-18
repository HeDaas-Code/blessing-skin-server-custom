---
uid: 5355feab
id: yggdrasil-api.exception
parent: yggdrasil-api
name: {zh: "协议异常", en: "Protocol Exceptions"}
description:
  zh: >
      Yggdrasil 错误响应渲染：ForbiddenOperation/IllegalArgument/NotFound 按规范输出 error/errorMessage。
  en: >
      Yggdrasil error rendering: ForbiddenOperation/IllegalArgument/NotFound output error/errorMessage per the spec.
revision: 7eb2ceb124b9b7e2d14c90d4473543c7ce920f9c
updated_at: "2026-09-17T16:38:39Z"
fingerprint: d925b5777ba5a882e065798ecb12dc49abbbffe7c92c214adac81ab20de9ff37
source:
  - path: "plugins/yggdrasil-api/src/Exceptions/YggdrasilException.php"
  - path: "plugins/yggdrasil-api/src/Exceptions/ForbiddenOperationException.php"
  - path: "plugins/yggdrasil-api/src/Exceptions/IllegalArgumentException.php"
  - path: "plugins/yggdrasil-api/src/Exceptions/NotFoundException.php"
apis:
  - protocol: file
    path: "plugins/yggdrasil-api/src/Exceptions/YggdrasilException.php"
    description:
      zh: >
          异常基类与渲染
      en: >
          Exception base and rendering
---
