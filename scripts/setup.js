/* eslint-env node */
const fs = require('fs')
const path = require('path')

// 单文件映射
const configFiles = {
  '.editorconfig': 'configs/editorconfig/editorconfig',
  '.prettierrc.yaml': 'configs/prettier/prettierrc.yaml',
  '.prettierignore': 'configs/prettier/prettierignore',
  '.gitignore': 'configs/git/gitignore',
  'eslint.config.mjs': 'configs/eslint.config.mjs',
  'commitlint.config.js': 'configs/commitlint/commitlint.config.js',
  '.npmrc': 'configs/npm/npmrc',
  'cursor-rules.json': 'configs/cursor-rules.json',
  'tsconfig.json': 'configs/tsconfig/tsconfig.json',
  'tsconfig.web.json': 'configs/tsconfig/tsconfig.web.json',
  'tsconfig.node.json': 'configs/tsconfig/tsconfig.node.json'
}

// 递归复制目录
function copyDir(src, dest) {
  if (!fs.existsSync(src)) return
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true })
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
      if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true })
      fs.copyFileSync(sourcePath, targetPath)
      console.log(`✅ 已复制: ${targetPath}`)
    } else {
      console.warn(`⚠️ 配置文件不存在: ${sourcePath}`)
    }
  })

  // 递归复制 .cursor 和 .vscode
  copyDir(path.join(packageRoot, 'configs/cursor'), path.join(projectRoot, '.cursor'))
  copyDir(path.join(packageRoot, 'configs/vscode'), path.join(projectRoot, '.vscode'))

  console.log('✨ 配置文件安装完成！')
}

setup()
