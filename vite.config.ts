import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from '@ehutch79/vite-eslint'

export default defineConfig({
  plugins: [vue(), eslint()],
})
