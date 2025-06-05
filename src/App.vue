<template>
  <div class="app-container">
    <header class="header">
      <img src="/vite.svg" class="logo" alt="logo" />
      <h1>自定义测试报告</h1>
    </header>
    <main>
      <CustomReport />
    </main>
  </div>
</template>

<script setup>
import CustomReport from './pages/CustomReport.vue'
</script>

<style scoped>
.app-container {
  min-height: 100vh;
  background: #f8fafb;
}
.header {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 24px 32px 0 32px;
  background: #fff;
  border-bottom: 1px solid #eee;
}
.logo {
  width: 40px;
  height: 40px;
}
main {
  max-width: 1200px;
  margin: 32px auto 0 auto;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px #0001;
  padding: 32px 24px;
}
</style>
