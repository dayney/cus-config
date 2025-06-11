# @cus-developer/config

CUS Developer 共享配置文件包。

## 适用场景

用于团队或个人在多个项目中统一和复用开发相关配置文件（如 ESLint、Prettier、EditorConfig、VSCode、Cursor、Git、npm、Commitlint、TypeScript 等）。

## 安装

```bash
npm install --save-dev @cus-developer/config
#或者
pnpm install -D github:dayney/cus-config#v0.0.7
```

## 一键同步配置到项目

在项目根目录下`packjson.json 的scripts`中添加：

```bash
"postinstall": "node node_modules/@cus-developer/config/scripts/setup.cjs"
```

然后安装完了项目所有的依赖之后，使用 `npm run postinstall` 命令即可一键同步配置到项目。

该命令会自动将本库中的所有配置文件和目录（如 .editorconfig、.prettierrc.yaml、.prettierignore、.gitignore、eslint.config.js、eslint.config.mjs、commitlint.config.js、.npmrc、.cursor、.vscode、cursor-rules.json、tsconfig.json 等）复制到你的项目根目录。

## 多环境配置

本项目支持开发、测试和生产三个环境的配置。

### 环境测试报告

- [开发环境测试报告](./test-report.dev.md)
- [测试环境测试报告](./test-report.test.md)
- [生产环境测试报告](./test-report.prod.md)

### 环境变量配置

每个环境都有对应的环境变量配置文件：

- `.env.development` - 开发环境配置
- `.env.test` - 测试环境配置
- `.env.production` - 生产环境配置

### TypeScript 配置

针对不同环境的 TypeScript 配置：

- `tsconfig.json` - 基础配置
- `tsconfig.test.json` - 测试环境配置
- `tsconfig.prod.json` - 生产环境配置

### ESLint 配置

ESLint 配置会根据当前环境自动切换规则：

- 开发环境：允许使用 `console`，关闭 `debugger` 检查
- 测试环境：允许使用 `console`，关闭未使用变量检查
- 生产环境：禁止使用 `console`，启用所有严格检查

### 构建命令

```bash
# 开发环境
npm run dev

# 测试环境构建
npm run build:test

# 生产环境构建
npm run build:prod

# 预览构建结果
npm run preview
```

### 代码检查命令

```bash
# 运行 ESLint 检查并自动修复
npm run lint

# 使用 Prettier 格式化代码
npm run format
```

## 支持的配置类型

- **ESLint**：`eslint.config.js`、`eslint.config.mjs`
- **Prettier**：`.prettierrc.yaml`、`.prettierignore`
- **EditorConfig**：`.editorconfig`
- **VS Code**：`.vscode/` 目录下所有配置
- **Cursor**：`.cursor/` 目录下所有配置
- **Commitlint**：`commitlint.config.js`
- **Git**：`.gitignore`
- **npm**：`.npmrc`
- **TypeScript**：`tsconfig.json`
- **自定义规则**：`cursor-rules.json`

## 更新配置

当本库有新版本时，在你的项目中运行：

```bash
npm update @cus-developer/config
npm run postinstall
```

即可同步最新的配置。

## 贡献

1. Fork 本仓库
2. 创建特性分支
3. 提交更改
4. 推送到分支
5. 创建 Pull Request

## 许可证

MIT

# 项目配置模板

这是一个可复用的项目配置模板，包含了常用的开发工具配置。

## 包含的配置

- **编辑器配置**

  - Cursor 编辑器配置
  - VSCode 配置
  - EditorConfig 配置

- **代码质量工具**

  - ESLint 配置
  - Prettier 配置
  - CommitLint 配置

- **其他配置**
  - NPM 配置
  - Git 配置

## 使用方法

1. 克隆此仓库
2. 运行安装脚本：
   ```bash
   node scripts/setup.js
   ```

## 配置说明

### Cursor 配置

- `autocomplete-rules.json`: 自动完成规则
- `component-rules.md`: 组件开发规范
- `custom-prompts.json`: 自定义提示
- `project-description.md`: 项目描述
- `settings.json`: 编辑器设置
- `snippets.json`: 代码片段

### VSCode 配置

- `cursor.json`: Cursor 集成配置
- `extensions.json`: 推荐扩展
- `launch.json`: 调试配置
- `settings.json`: 编辑器设置

### ESLint 配置

- `eslint.config.mjs`: ESLint 规则配置

### Prettier 配置

- `prettierrc.yaml`: 格式化规则
- `prettierignore`: 忽略文件

### 其他配置

- `.editorconfig`: 编辑器通用配置
- `.npmrc`: NPM 配置
- `.gitignore`: Git 忽略文件
- `commitlint.config.js`: 提交信息规范
