// 测试 commitlint 规则
// 1. 测试提交信息格式
const commitMessages = [
  'feat: add new feature', // 正确
  'fix: fix bug', // 正确
  'docs: update docs', // 正确
  'style: format code', // 正确
  'refactor: refactor code', // 正确
  'test: add test', // 正确
  'chore: update deps', // 正确
  'add new feature', // 错误：缺少类型
  'feat add new feature', // 错误：缺少冒号
  'feat:add new feature', // 错误：冒号后缺少空格
  'feat: Add new feature', // 错误：描述首字母大写
  'feat: add new feature.', // 错误：描述末尾有句号
  'feat: add new feature!', // 错误：描述末尾有感叹号
  'feat: add new feature?', // 错误：描述末尾有问号
  'feat: add new feature...', // 错误：描述末尾有省略号
  'feat: add new feature...', // 错误：描述末尾有省略号
  'feat: add new feature...', // 错误：描述末尾有省略号
  'feat: add new feature...', // 错误：描述末尾有省略号
  'feat: add new feature...', // 错误：描述末尾有省略号
  'feat: add new feature...' // 错误：描述末尾有省略号
]

// 2. 测试提交信息长度
const longCommitMessage =
  'feat: add new feature that is very long and should be split into multiple lines to ensure readability and maintainability of the commit message'

// 3. 测试提交信息范围
const commitMessagesWithScope = [
  'feat(scope): add new feature', // 正确
  'fix(scope): fix bug', // 正确
  'docs(scope): update docs', // 正确
  'style(scope): format code', // 正确
  'refactor(scope): refactor code', // 正确
  'test(scope): add test', // 正确
  'chore(scope): update deps', // 正确
  'feat(scope: add new feature', // 错误：缺少右括号
  'feat(scope):add new feature', // 错误：冒号后缺少空格
  'feat(scope): Add new feature', // 错误：描述首字母大写
  'feat(scope): add new feature.', // 错误：描述末尾有句号
  'feat(scope): add new feature!', // 错误：描述末尾有感叹号
  'feat(scope): add new feature?', // 错误：描述末尾有问号
  'feat(scope): add new feature...', // 错误：描述末尾有省略号
  'feat(scope): add new feature...', // 错误：描述末尾有省略号
  'feat(scope): add new feature...', // 错误：描述末尾有省略号
  'feat(scope): add new feature...', // 错误：描述末尾有省略号
  'feat(scope): add new feature...', // 错误：描述末尾有省略号
  'feat(scope): add new feature...', // 错误：描述末尾有省略号
  'feat(scope): add new feature...' // 错误：描述末尾有省略号
]

// 4. 测试提交信息破坏性变更
const commitMessagesWithBreaking = [
  'feat!: add new feature', // 正确
  'fix!: fix bug', // 正确
  'docs!: update docs', // 正确
  'style!: format code', // 正确
  'refactor!: refactor code', // 正确
  'test!: add test', // 正确
  'chore!: update deps', // 正确
  'feat! add new feature', // 错误：缺少冒号
  'feat!:add new feature', // 错误：冒号后缺少空格
  'feat!: Add new feature', // 错误：描述首字母大写
  'feat!: add new feature.', // 错误：描述末尾有句号
  'feat!: add new feature!', // 错误：描述末尾有感叹号
  'feat!: add new feature?', // 错误：描述末尾有问号
  'feat!: add new feature...', // 错误：描述末尾有省略号
  'feat!: add new feature...', // 错误：描述末尾有省略号
  'feat!: add new feature...', // 错误：描述末尾有省略号
  'feat!: add new feature...', // 错误：描述末尾有省略号
  'feat!: add new feature...', // 错误：描述末尾有省略号
  'feat!: add new feature...', // 错误：描述末尾有省略号
  'feat!: add new feature...' // 错误：描述末尾有省略号
]
