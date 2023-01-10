// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

export default defineConfig({
  build: {
    outDir: './build'
  },
  plugins: [react()],
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src')
    }
  }
})
