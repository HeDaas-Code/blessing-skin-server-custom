---
uid: bbd4605d
id: bss.notify.center
parent: bss.notify
name: {zh: "站内通知", en: "Site Notification Center"}
description:
  zh: >
      站内信收发：管理员群发、用户列表/标记已读、前端铃铛下拉；SiteMessage 通知走队列（ShouldQueue）写入通知表。
  en: >
      Site message delivery: admin broadcast, user list/mark-read and the front-end bell dropdown; SiteMessage is queued and stored in the notifications table.
revision: 52f6fefed08e091c08e409c67e31d00b00ff00ee
updated_at: "2026-09-17T16:09:13Z"
fingerprint: e1f04de8b8ba44ad3c24cb270217bbf925570685746fb4cbc3c5685cd1b4eb79
source:
  - path: "app/Http/Controllers/NotificationsController.php"
  - path: "app/Notifications/SiteMessage.php"
  - path: "resources/views/shared/notifications.twig"
  - path: "resources/assets/src/views/widgets/NotificationsList.tsx"
apis:
  - protocol: http
    method: GET
    path: "/api/user/notifications"
    description:
      zh: >
          用户通知列表（OAuth）
      en: >
          User notifications (OAuth)
  - protocol: http
    method: POST
    path: "/api/user/notifications/{id}"
    description:
      zh: >
          标记已读（OAuth）
      en: >
          Mark read (OAuth)
  - protocol: http
    method: POST
    path: "/user/notifications/{id}"
    description:
      zh: >
          标记已读
      en: >
          Mark read
  - protocol: http
    method: POST
    path: "/admin/notifications/send"
    description:
      zh: >
          管理员群发通知
      en: >
          Admin broadcast
  - protocol: http
    method: POST
    path: "/api/admin/notifications"
    description:
      zh: >
          管理员群发（OAuth）
      en: >
          Admin broadcast (OAuth)
deps:
  - kind: reference
    to: bss.user.model
    label: {zh: "通知归属用户", en: "Belongs to users"}
---
