/* eslint-env browser */
// 测试 Web 类型
const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')

if (ctx) {
  ctx.fillStyle = 'red'
  ctx.fillRect(0, 0, 100, 100)
}

// 测试 DOM 类型
const div = document.createElement('div')
div.textContent = 'Hello World'
document.body.appendChild(div)
