import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: ['..']
    }
  },
  resolve: {
    alias: [
      {
        find: /^quill-editor-math$/,
        replacement: path.resolve(__dirname, '../dist/index.modern.js')
      },
      {
        find: /^quill-editor-math\/dist\/index\.css$/,
        replacement: path.resolve(__dirname, '../dist/index.css')
      }
    ],
    dedupe: ['react', 'react-dom']
  }
})
