# S0 侦察与基线 — 文件清单与基线报告

生成时间: 见 `baseline/timestamp.txt`
Git HEAD: `git rev-parse HEAD`（见 `baseline/git-rev.txt`）
分支: `dev`

本文件只做侦察记录，不修改任何产品代码。所有命令基线输出保存在 `docs/terra-faction-ui/baseline/`。

## 1. 构建/校验基线

| 命令 | 退出码 | 结论 | 说明 |
| --- | --- | --- | --- |
| `yarn lint` | 0 | PASS | `eslint --ext=ts -f=beauty .` |
| `yarn type:check` | 2 | **FAIL（基线既有失败）** | `tsc -p . --noEmit && tsc -p ./resources/assets/tests --noEmit`，17 个既有错误 / 8 个文件 |
| `yarn test` | 0 | PASS | jest：39 suites / 366 tests 全过 |
| `yarn build` | 0 | PASS（2 个既有 child-compilation warnings） | `webpack --env production --progress` |

关键事实：
- `type:check` 在未做任何改动前即失败，共 17 个错误，集中在 React 类型版本冲突（`Skeleton`/`Reaptcha`/`Draggable` 的 JSX 实例类型不兼容）与 `react-autosuggest` 引入的嵌套 `@types/react` 类型漂移。这些是**既有问题**，不是本次重设计引入。下游 QA（t8）应以「相对基线不新增错误」为验收口径，或另行修复既有类型错误。
- `yarn build` 会生成内容哈希产物到 `public/app/`（gitignored），并通过 `tools/HtmlWebpackEnhancementPlugin` 把 `app.twig` / `style.twig` / `home.twig` / `home-css.twig` / `spectre.twig` 写回**受版本控制的** `resources/views/assets/*.twig`。源码未变化时 webpack 会跳过写入相同内容（mtime 不变）；源码变化时会更新这些 tracked 文件。
- 环境：node v22.23.2 / yarn 1.22.22 / npm 10.9.8 / PHP 8.3.6 / Composer 2.7.1（详见 `baseline/environment.txt`）。

## 2. webpack 样式入口（t2 相关）

`webpack.config.ts` 的 `style` entry 当前顺序：
1. `@/styles/common.css`
2. `admin-lte/dist/css/alt/adminlte.components.min.css`
3. `admin-lte/dist/css/alt/adminlte.core.min.css`
4. `admin-lte/dist/css/alt/adminlte.pages.min.css`
5. `admin-lte/dist/css/alt/adminlte.light.min.css`
6. `@fortawesome/fontawesome-free/css/all.min.css`

t2 将在 AdminLTE 之后加入 `@/styles/terra.css`。

现有本地样式入口（`resources/assets/src/styles/`）：
- `common.css`（聚合入口：imports minecraft.css、avatar.css、dropdown.css、auth.css、admin.css）
- `home.css`（首页独立入口 `home-css`）
- `spectre.css`（安装向导/错误页入口 `spectre`）
- `admin.css` / `auth.css` / `avatar.css` / `dropdown.css`

## 3. Twig 文件清单（101 个，`resources/views/`）

### 3.1 构建生成的资产包装（不手工编辑，构建时由 HtmlWebpackEnhancementPlugin 写回）
- `assets/app.twig`
- `assets/style.twig`
- `assets/home.twig`
- `assets/home-css.twig`
- `assets/spectre.twig`

### 3.2 共享外壳（t3 全局外壳主战场）
- `shared/head.twig`（补根属性/主题色的入口之一）
- `shared/header.twig`
- `shared/sidebar.twig`
- `shared/side-menu.twig`
- `shared/side-menu-item.twig`
- `shared/user-panel.twig`
- `shared/user-menu.twig`
- `shared/footer.twig`
- `shared/copyright.twig`
- `shared/dark-mode.twig`
- `shared/foot.twig`
- `shared/grid.twig`
- `shared/languages.twig`
- `shared/notifications.twig`
- `shared/previewer.twig`

### 3.3 基础模板（`<html>` 根属性 `data-terra-faction` / `data-terra-depth` 落点）
- `admin/base.twig`
- `user/base.twig`
- `auth/base.twig`
- `skinlib/base.twig`
- `setup/base.twig`（使用 spectre.css 入口）
- `errors/base.twig`（使用 spectre.css 入口）
- `home.twig`（顶层首页，自带 `<html>`）

### 3.4 公共页面（t4 public-surfaces）
- `home.twig`
- `auth/base.twig`, `auth/bind.twig`, `auth/forgot.twig`, `auth/login.twig`, `auth/register.twig`, `auth/reset.twig`, `auth/verify.twig`
- `auth/rows/login/form.twig`, `auth/rows/login/message.twig`, `auth/rows/login/notice.twig`, `auth/rows/login/registration-link.twig`, `auth/rows/register/form.twig`, `auth/rows/register/notice.twig`
- `errors/base.twig`, `errors/403.twig`, `errors/404.twig`, `errors/500.twig`, `errors/503.twig`, `errors/exception.twig`, `errors/languages.twig`, `errors/pretty.twig`
- `setup/base.twig`, `setup/locked.twig`, `setup/wizard/database.twig`, `setup/wizard/finish.twig`, `setup/wizard/info.twig`, `setup/wizard/welcome.twig`
- `vendor/passport/authorize.twig`

### 3.5 数据面与表单（t5 data-surfaces）
- `admin/base.twig`, `admin/customize.twig`, `admin/i18n.twig`, `admin/index.twig`, `admin/market.twig`, `admin/options.twig`, `admin/players.twig`, `admin/plugins.twig`, `admin/reports.twig`, `admin/resource.twig`, `admin/score.twig`, `admin/status.twig`, `admin/update.twig`, `admin/users.twig`
- `admin/plugin/readme.twig`
- `admin/widgets/dashboard/chart.twig`, `admin/widgets/dashboard/notification.twig`, `admin/widgets/dashboard/usage.twig`, `admin/widgets/status/info.twig`, `admin/widgets/status/plugins.twig`
- `user/base.twig`, `user/closet.twig`, `user/index.twig`, `user/oauth.twig`, `user/player.twig`, `user/profile.twig`, `user/report.twig`
- `user/widgets/closet/list.twig`, `user/widgets/dashboard/announcement.twig`, `user/widgets/dashboard/usage.twig`, `user/widgets/email-verification.twig`, `user/widgets/players/list.twig`, `user/widgets/players/notice.twig`, `user/widgets/profile/avatar.twig`, `user/widgets/profile/delete-account.twig`, `user/widgets/profile/email.twig`, `user/widgets/profile/nickname.twig`, `user/widgets/profile/password.twig`
- `skinlib/base.twig`, `skinlib/index.twig`, `skinlib/show.twig`, `skinlib/upload.twig`, `skinlib/widgets/show/side.twig`, `skinlib/widgets/upload/input.twig`
- `forms/form.twig`, `forms/group.twig`, `forms/hint.twig`, `forms/addon.twig`, `forms/text.twig`, `forms/textarea.twig`, `forms/select.twig`, `forms/checkbox.twig`

## 4. React / TS 文件清单（t6 react-themer）

### 4.1 通用组件（`resources/assets/src/components/`）
`Alert.tsx`, `ButtonEdit.tsx`, `Captcha.tsx`, `DarkModeButton.tsx`, `EmailSuggestion.tsx`, `FileInput.tsx`, `Loading.tsx`, `Modal.tsx`, `ModalBody.tsx`, `ModalContent.tsx`, `ModalFooter.tsx`, `ModalHeader.tsx`, `ModalInput.tsx`, `Pagination.tsx`, `PaginationItem.tsx`, `Toast.tsx`, `Viewer.tsx`, `ViewerSkeleton.tsx`

### 4.2 业务视图（`resources/assets/src/views/`）
- `admin/Customization.ts`, `admin/Dashboard.ts`, `admin/Update.ts`
- `admin/PlayersManagement/`（Card/Row/LoadingCard/LoadingRow/ModalUpdateTexture/index/styles）
- `admin/PluginsManagement/`（index/InfoBox/types）
- `admin/PluginsMarket/`（index/Row/types）
- `admin/ReportsManagement/`（index/ImageBox/types）
- `admin/Translations/`（index/Row/types）
- `admin/UsersManagement/`（Card/Header/Row/LoadingCard/LoadingRow/index/styles/utils）
- `auth/Forgot.tsx`, `auth/Login.tsx`, `auth/Registration.tsx`, `auth/Reset.tsx`
- `skinlib/Show/`（index/addClosetItem）
- `skinlib/SkinLibrary/`（index/Button/FilterSelector/Item/types/utils）
- `skinlib/Upload.tsx`
- `user/Closet/`（index/ClosetItem/LoadingClosetItem/ModalApply/Previewer/removeClosetItem/setAsAvatar/styles）
- `user/Dashboard/`（index/InfoBox/SignButton/scoreUtils）
- `user/OAuth/`（index/ModalCreate/Row/types）
- `user/Players/`（index/LoadingRow/ModalAddPlayer/ModalReset/Previewer/Row/Viewer2d）
- `user/profile/`（index/deleteAccount/email/nickname/password/resetAvatar）
- `widgets/EmailVerification.tsx`, `widgets/NotificationsList.tsx`

### 4.3 脚本/入口（一般只读，不改主题，除非 token 接入）
- `index.tsx`（React 挂载入口）
- `scripts/`（app/cli/darkMode/emailVerification/event/extra/homePage/hooks/*/i18n/init/logout/modal/net/notification/notify/route/textureUtils/toast/types/urls）
- `styles/breakpoints.ts`, `styles/utils.ts`（emotion 辅助）

## 5. CSS 文件清单（t2 全局令牌 + 各局部样式）
- `resources/assets/src/styles/common.css`
- `resources/assets/src/styles/home.css`
- `resources/assets/src/styles/spectre.css`
- `resources/assets/src/styles/admin.css`
- `resources/assets/src/styles/auth.css`
- `resources/assets/src/styles/avatar.css`
- `resources/assets/src/styles/dropdown.css`
- （t2 新增）`resources/assets/src/styles/terra.css`

## 6. 长期保留的 terra-faction-ui 资料（本任务复制）
- `docs/terra-faction-ui/SKILL.md`
- `docs/terra-faction-ui/references/*.md`（22 个 faction/grammar 参考文件，含 `rhine-lab.md`、`palette-separation.md`、`element-grammar.md`、`layout-grammar.md`、`interaction-grammar.md`、`control-catalog.md`、`motion-grammar.md`、`depth-levels.md`、`evidence-policy.md`、`frontend-contract.md`、`source-ledger.md`、`faction-index.md` 等）
- `docs/terra-faction-ui/scripts/audit-faction-ui.mjs`, `audit-palette-separation.mjs`, `scaffold-faction-ui.py`, `validate-package.mjs`
- `docs/terra-faction-ui/tokens/terra-faction-ui.tokens.json`

说明：skill 的 `assets/icons/*.svg`、`assets/starter/*` 与 `assets/licenses/*` 不属于 grammar 文件，未复制（避免仓库膨胀）；若后续需要莱茵图标可再按需取用。
