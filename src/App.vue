<template>
  <div class="app">
    <h1>{{ title }}</h1>
    <p>当前环境: {{ env }}</p>
  </div>
</template>

<script setup lang="ts">
const title = import.meta.env.VITE_APP_TITLE
const env = import.meta.env.MODE
</script>

<style>
.app {
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 60px;
}
</style>
