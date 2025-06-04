/* eslint-env node */
import { readFileSync } from 'fs'
import { join } from 'path'

// 测试 Node.js 类型
const filePath = join(__dirname, 'test.ts')
const content = readFileSync(filePath, 'utf-8')

 
console.log(content)
