---
uid: 4831ceb7
id: bss.http.middleware.installation
parent: bss.http.middleware
name: {zh: "安装状态闸门", en: "Installation Gate"}
description:
  zh: >
      未安装时把请求重定向到安装向导并在无锁时禁用翻译加载，安装向导路由本身则放行；已安装后阻止再次进入向导。
  en: >
      Redirects to the install wizard when not installed and disables translation loading without the lock file; the wizard routes themselves pass through, and re-entry is blocked once installed.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T15:59:24Z"
fingerprint: aeed39f25e7e6b1ea3d682c89aed4384c70ec1347440b05c6f9039a0f1ae59ed
source:
  - path: "app/Http/Middleware/RedirectToSetup.php"
  - path: "app/Http/Middleware/CheckInstallation.php"
apis:
  - protocol: file
    path: "app/Http/Middleware/RedirectToSetup.php"
    description:
      zh: >
          未安装重定向与升级触发
      en: >
          Redirect to setup and trigger upgrade
  - protocol: file
    path: "app/Http/Middleware/CheckInstallation.php"
    description:
      zh: >
          已安装则锁定向导
      en: >
          Lock the wizard once installed
---
