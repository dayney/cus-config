/// <reference types="vitest/config" />

// Configure Vitest (https://vitest.dev/config/)

import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    testTimeout: 30000, // 增加超时时间到 30 秒
    hookTimeout: 30000,
    teardownTimeout: 30000,
    reporters: ['default', 'html'],
    environment: 'node',
    include: ['test/**/*.test.{js,ts}'],
    exclude: ['node_modules', 'dist', '.idea', '.git', '.cache'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules/', 'test/'],
      reportsDirectory: './coverage'
    }
    /* for example, use global to avoid globals imports (describe, test, expect): */
    // globals: true,
  },
  server: {
    port: 8877
  }
})
