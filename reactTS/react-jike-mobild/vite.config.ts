import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //路徑解析配置
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
