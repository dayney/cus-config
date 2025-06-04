// 测试 EditorConfig 规则
// 1. 测试缩进
function testIndent() {
  const obj = {
    name: 'test',
    age: 18,
    address: {
      city: 'test',
      street: 'test'
    }
  }
  return obj
}

// 2. 测试行尾
const str1 = 'test' // CRLF
const str2 = 'test' // LF

// 3. 测试文件末尾空行
const str3 = 'test'

// 4. 测试字符集
const str4 = 'test' // UTF-8
const str5 = 'test' // UTF-8 with BOM

// 5. 测试行长度
const longLine =
  '这是一行非常长的代码，应该超过最大行长度限制，需要被格式化或者换行处理，以确保代码的可读性和维护性。'

// 6. 测试空格
const obj = {
  name: 'test',
  age: 18
}

// 7. 测试制表符
const arr = [1, 2, 3]
