import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  resolve: {
    alias: [
      { find: '#components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '#design', replacement: path.resolve(__dirname, 'src/design') },
      { find: '#tailwind-merge', replacement: path.resolve(__dirname, './tailwind-merge') },
    ],
  },
  plugins: [react()],
})
