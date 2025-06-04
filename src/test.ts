/* eslint-env browser */
// 测试 ESLint 规则
export const testFunction = (param: string): void => {
   
  console.log(param) // 测试 no-console 规则
   
  debugger // 测试 no-debugger 规则
}

// 测试 Prettier 规则
export const testObject = {
  name: 'test',
  age: 18 // 测试逗号规则
}

// 测试 TypeScript 规则
interface TestInterface {
  name: string
  age: number
}

export const testInstance: TestInterface = {
  name: 'test',
  age: 18 // 测试逗号规则
}

// 测试命名规则
export const TestVariable = 'test' // 测试命名规则

// 测试复杂度规则
export function complexFunction(): void {
  // 简化复杂度
  const conditions = [true, true, true, true, true]
  for (const condition of conditions) {
    if (condition) {
       
      console.log('simplified')
    }
  }
}
