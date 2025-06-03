# @cus-developer/config

CUS Developer 共享配置文件包。

## 适用场景

用于团队或个人在多个项目中统一和复用开发相关配置文件（如 ESLint、Prettier、EditorConfig、VSCode、Cursor、Git、npm、Commitlint、TypeScript 等）。

## 安装

```bash
npm install --save-dev @cus-developer/config
```

## 一键同步配置到项目

在项目根目录下`packjson.json 的scripts`中添加：

```bash
"postinstall": "node node_modules/@cus-developer/config/scripts/setup.js"
```
然后安装完了项目所有的依赖之后，使用 `npm run postinstall`  命令即可一键同步配置到项目。

该命令会自动将本库中的所有配置文件和目录（如 .editorconfig、.prettierrc.yaml、.prettierignore、.gitignore、eslint.config.js、eslint.config.mjs、commitlint.config.js、.npmrc、.cursor、.vscode、cursor-rules.json、tsconfig.json 等）复制到你的项目根目录。

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
