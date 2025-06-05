#!/bin/bash

# 迁移 report-ui 子项目到桌面并独立初始化依赖
set -e

SRC_DIR="$(pwd)/report-ui"
DEST_DIR="$HOME/Desktop/report-ui-standalone"

# 复制目录
cp -r "$SRC_DIR" "$DEST_DIR"
cd "$DEST_DIR"

# 清理旧依赖和锁文件
rm -rf node_modules pnpm-lock.yaml package-lock.json yarn.lock

# 初始化依赖
pnpm install

echo "\n迁移完成！请进入 $DEST_DIR 并运行：pnpm dev\n访问 http://localhost:8700/ 查看效果。"
