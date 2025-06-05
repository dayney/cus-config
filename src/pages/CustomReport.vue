<template>
  <div class="custom-report">
    <ReportTabs :modules="modules" v-model="activeModule" />
    <component :is="currentComponent" :reportData="reportData" />
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import ReportTabs from '../components/ReportTabs.vue'
import EslintReport from './modules/EslintReport.vue'
// 未来可引入 EditorConfigReport、PrettierReport 等

const modules = [
  { label: 'ESLint', value: 'eslint', component: EslintReport }
  // { label: 'EditorConfig', value: 'editorconfig', component: EditorConfigReport },
  // { label: 'Prettier', value: 'prettier', component: PrettierReport },
]
const activeModule = ref('eslint')
const reportData = ref(null)

const currentComponent = computed(() => {
  const mod = modules.find((m) => m.value === activeModule.value)
  return mod ? mod.component : null
})

watch(
  activeModule,
  async (val) => {
    // 动态加载不同模块的 JSON
    const res = await fetch(`/coverage/${val}-report.json`)
    reportData.value = await res.json()
  },
  { immediate: true }
)
</script>

<style scoped>
.custom-report {
  padding: 24px;
}
</style>
