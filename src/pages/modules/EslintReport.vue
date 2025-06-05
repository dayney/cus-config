<template>
  <div v-if="reportData">
    <h2>ESLint 检查报告</h2>
    <div class="stats">
      <span>总数: {{ reportData.stats.total }}</span>
      <span>通过: {{ reportData.stats.pass }}</span>
      <span>失败: {{ reportData.stats.fail }}</span>
    </div>
    <table class="report-table">
      <thead>
        <tr>
          <th>文件</th>
          <th>状态</th>
          <th>错误信息</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="test in reportData.suites[0].tests" :key="test.name">
          <td>{{ test.name }}</td>
          <td :style="{ color: test.state === 'pass' ? '#42b883' : '#e53935' }">
            {{ test.state }}
          </td>
          <td>
            <div v-if="test.error">
              <pre>{{ test.error.message }}</pre>
            </div>
            <div v-else>—</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else>暂无数据</div>
</template>

<script setup>
const props = defineProps({
  reportData: Object
})
</script>

<style scoped>
.stats {
  margin-bottom: 16px;
  font-size: 15px;
  color: #666;
  display: flex;
  gap: 24px;
}
.report-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 8px;
}
.report-table th,
.report-table td {
  border: 1px solid #eee;
  padding: 6px 10px;
  font-size: 14px;
}
.report-table th {
  background: #f5f5f5;
}
</style>
