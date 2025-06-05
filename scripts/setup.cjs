/* eslint-env node */
const fs = require('fs')
const path = require('path')

// 单文件映射
const configFiles = {
  'eslint.config.mjs': './configs/eslint/eslint.config.mjs',
  'prettierrc.js': './configs/prettier/prettierrc.js',
  '.prettierignore': './configs/prettier/prettierignore',
  '.editorconfig': './configs/editorconfig/editorconfig',
  '.gitignore': './configs/git/gitignore',
  '.npmrc': './configs/npmrc/npmrc',
  '.env.development': './configs/env/env.development',
  '.env.production': './configs/env/env.production',
  '.env.test': './configs/env/env.test',
  'tsconfig.json': './configs/tsconfig/tsconfig.json',
  'tsconfig.node.json': './configs/tsconfig/tsconfig.node.json',
  'tsconfig.prod.json': './configs/tsconfig/tsconfig.prod.json',
  'tsconfig.test.json': './configs/tsconfig/tsconfig.test.json',
  'tsconfig.web.json': './configs/tsconfig/tsconfig.web.json',
  'commitlint.config.cjs': './configs/commitlint/commitlint.config.cjs',
  'cursor-rules.json': './configs/cursor/cursor-rules.json'
}

// 目录映射
const configDirs = {
  '.cursor': './configs/cursor',
  '.vscode': './configs/vscode',
  '.husky': './configs/husky'
}

// 递归复制目录
function copyDir(src, dest) {
  if (!fs.existsSync(src)) {
    console.warn(`⚠️ 源目录不存在: ${src}`)
    return
  }

  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true })
  }

  fs.readdirSync(src).forEach((item) => {
    const srcPath = path.join(src, item)
    const destPath = path.join(dest, item)

    if (fs.statSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath)
    } else {
      fs.copyFileSync(srcPath, destPath)
      console.log(`✅ 已复制: ${destPath}`)
    }
  })
}

// 主函数
function setup() {
  const packageRoot = path.resolve(__dirname, '..')
  const projectRoot = process.cwd()

  console.log('🚀 开始安装配置文件...')

  // 复制单文件
  Object.entries(configFiles).forEach(([target, source]) => {
    const sourcePath = path.join(packageRoot, source)
    const targetPath = path.join(projectRoot, target)

    if (fs.existsSync(sourcePath)) {
      const targetDir = path.dirname(targetPath)
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true })
      }
      fs.copyFileSync(sourcePath, targetPath)
      console.log(`✅ 已复制: ${targetPath}`)
    } else {
      console.warn(`⚠️ 配置文件不存在: ${sourcePath}`)
    }
  })

  // 递归复制目录
  Object.entries(configDirs).forEach(([target, source]) => {
    const sourcePath = path.join(packageRoot, source)
    const targetPath = path.join(projectRoot, target)
    copyDir(sourcePath, targetPath)
  })

  console.log('✨ 配置文件安装完成！')
}

setup()
