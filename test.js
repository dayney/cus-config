// 测试 ESLint 规则
const test = 'test'
console.log(test) // 测试 console 规则

// 测试缩进规则
function testFunction() {
  const obj = {
    name: 'test',
    age: 18
  }
  return obj
}

// 测试引号规则
const str = 'test' // 应该使用单引号

// 测试分号规则
const noSemicolon = 'test' // 应该加分号

// 测试未使用的变量
const unused = 'test'

// 测试箭头函数
const arrow = (x) => {
  return x * 2
}

// 测试对象属性
const obj = {
  test: 'value', // 不应该使用引号
  test2: 'value2'
}

// 测试数组
const arr = [1, 2, 3]

// 测试注释
// 单行注释
/* 多行注释
 * 第二行
 */

// 测试空行
const a = 1

const b = 2

// 测试最大行长度
const veryLongLine =
  '这是一行非常长的代码，应该超过最大行长度限制，需要被格式化或者换行处理，以确保代码的可读性和维护性。'

// 测试导入顺序
import { test } from './test'
import * as test2 from './test2'
const test3 = require('./test3')
