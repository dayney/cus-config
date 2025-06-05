<template>
  <div class="report-tabs">
    <button
      v-for="mod in modules"
      :key="mod.value"
      :class="['tab', { active: modelValue === mod.value }]"
      @click="$emit('update:modelValue', mod.value)"
    >
      {{ mod.label }}
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  modules: Array,
  modelValue: String
})
</script>

<style scoped>
.report-tabs {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
}
.tab {
  padding: 6px 18px;
  border: none;
  background: #f5f5f5;
  color: #333;
  border-radius: 4px 4px 0 0;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s;
}
.tab.active {
  background: #42b883;
  color: #fff;
}
</style>
