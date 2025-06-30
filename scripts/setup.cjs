/* eslint-env node */
/* global console, process, __dirname */
const fs = require("fs");
const path = require("path");

// 单文件映射
const configFiles = {
  "eslint.config.mjs": "./configs/eslint/eslint.config.mjs",
  "prettierrc.js": "./configs/prettier/prettierrc.js",
  ".prettierignore": "./configs/prettier/prettierignore",
  ".editorconfig": "./configs/editorconfig/editorconfig",
  ".gitignore": "./configs/git/gitignore",
  ".npmrc": "./configs/npmrc/npmrc",
  ".env.development": "./configs/env/env.development",
  ".env.production": "./configs/env/env.production",
  ".env.test": "./configs/env/env.test",
  "tsconfig.json": "./configs/tsconfig/tsconfig.json",
  "tsconfig.node.json": "./configs/tsconfig/tsconfig.node.json",
  "tsconfig.prod.json": "./configs/tsconfig/tsconfig.prod.json",
  "tsconfig.test.json": "./configs/tsconfig/tsconfig.test.json",
  "tsconfig.web.json": "./configs/tsconfig/tsconfig.web.json",
  "commitlint.config.cjs": "./configs/commitlint/commitlint.config.cjs",
  "cursor-rules.json": "./configs/cursor/cursor-rules.json",
};

// 目录映射
const configDirs = {
  ".cursor": "./configs/cursor",
  ".vscode": "./configs/vscode",
  ".husky": "./configs/husky",
};

// 需要同步的依赖
const requiredDependencies = {
  "@commitlint/lint": "^19.8.1",
  "@eslint/js": "^9.28.0",
  "@typescript-eslint/eslint-plugin": "^8.33.1",
  "@typescript-eslint/parser": "^8.33.1",
  "@vitest/ui": "latest",
  "cz-git": "^1.11.1",
  editorconfig: "^2.0.1",
  "eslint-plugin-vue": "^10.1.0",
  prettier: "^3.5.3",
};

// 递归复制目录
function copyDir(src, dest) {
  if (!fs.existsSync(src)) {
    console.warn(`⚠️ 源目录不存在: ${src}`);
    return;
  }

  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  fs.readdirSync(src).forEach((item) => {
    // 排除 .vscode 子目录
    if (item === ".vscode") {
      return;
    }

    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);

    if (fs.statSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
      console.log(`✅ 已复制: ${destPath}`);
    }
  });
}

// 更新 package.json
function updatePackageJson() {
  const projectRoot = process.cwd();
  const packageJsonPath = path.join(projectRoot, "package.json");

  try {
    // 读取主项目的 package.json
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

    // 添加 setup 脚本
    // if (!packageJson.scripts) {
    //   packageJson.scripts = {};
    // }
    // packageJson.scripts.setup =
    //   "node node_modules/@cus-developer/config/scripts/setup.cjs";

    // 添加 commitizen 配置
    if (!packageJson.config) {
      packageJson.config = {};
    }
    packageJson.config.commitizen = {
      path: "cz-git",
    };

    // 同步依赖
    if (!packageJson.devDependencies) {
      packageJson.devDependencies = {};
    }

    // 合并依赖，保留已有的其他依赖
    packageJson.devDependencies = {
      ...packageJson.devDependencies,
      ...requiredDependencies,
    };

    // 写回 package.json
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    console.log("✅ 已更新 package.json 配置");
  } catch (error) {
    console.error("❌ 更新 package.json 失败:", error);
  }
}

// 1. 先删除所有目标文件/目录
function removeTargets(targets) {
  const projectRoot = process.cwd();
  Object.keys(targets).forEach((target) => {
    const targetPath = path.join(projectRoot, target);
    if (fs.existsSync(targetPath)) {
      fs.rmSync(targetPath, { recursive: true, force: true });
      console.log(`🗑 已删除: ${targetPath}`);
    }
  });
}

// 主函数
function setup() {
  // 支持通过环境变量指定配置源目录
  const packageRoot = process.env.CONFIGS_SOURCE_ROOT
    ? path.resolve(process.env.CONFIGS_SOURCE_ROOT)
    : path.resolve(__dirname, "..");
  const projectRoot = process.cwd();

  console.log("📦 配置源目录:", packageRoot);
  console.log("📦 项目根目录:", projectRoot);

  // 更新 package.json
  updatePackageJson();

  // 1. 先删除所有目标文件/目录
  removeTargets(configFiles);
  removeTargets(configDirs);

  console.log("🚀 开始安装配置文件...");

  // 复制单文件
  Object.entries(configFiles).forEach(([target, source]) => {
    const sourcePath = path.join(packageRoot, source);
    const targetPath = path.join(projectRoot, target);

    console.log("🔍 检查文件:", {
      sourcePath,
      exists: fs.existsSync(sourcePath),
      targetPath,
    });

    if (fs.existsSync(sourcePath)) {
      const targetDir = path.dirname(targetPath);
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }
      fs.copyFileSync(sourcePath, targetPath);
      console.log(`✅ 已复制: ${targetPath}`);
    } else {
      console.warn(`⚠️ 配置文件不存在: ${sourcePath}`);
    }
  });

  // 递归复制目录
  Object.entries(configDirs).forEach(([target, source]) => {
    const sourcePath = path.join(packageRoot, source);
    const targetPath = path.join(projectRoot, target);
    copyDir(sourcePath, targetPath);
  });

  console.log("✨ 配置文件安装完成！");
}

setup();
