import { defineConfig } from 'vitest/config'
import path from 'node:path'

export default defineConfig({
  test: {
    environment: 'jsdom',
    css: true,
    includeSource: ['app/**/*.{js,ts,jsx,tsx}'],
    root: 'app',
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'app'), // or your actual base directory
      app: path.resolve(__dirname, 'app'), // or your actual base directory
    },
  },
})
