import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

export default defineConfig({
  resolve: {
    alias: [
      { find: '#components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '#design', replacement: path.resolve(__dirname, 'src/design') },
    ],
  },
  plugins: [react(), vanillaExtractPlugin()],
})
