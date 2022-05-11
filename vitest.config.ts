/// <reference types="vitest" />

import { defineConfig } from 'vitest/config'
import replace from '@rollup/plugin-replace'

export default defineConfig({
  test: {
    globals: true,
    clearMocks: true
  },
  plugins: [
    replace({
      preventAssignment: true,
      objectGuard: true,
      __DEV__: true
    })
  ]
})
