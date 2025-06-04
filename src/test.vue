<template>
  <div class="test-component">
    <h1>{{ title }}</h1>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script lang="ts">
/* eslint-env browser */
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TestComponent',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    handleClick(): void {
      console.log('clicked')
    }
  }
})
</script>

<style scoped>
.test-component {
  color: red;
}
</style>
