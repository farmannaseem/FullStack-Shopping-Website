import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/FullStack-Shopping-Website/', // Make sure this matches your GitHub repository name
  build: {
    outDir: 'dist',
  },
  server: {
    historyApiFallback: true
  },
  resolve: {
    alias: {
      'bootstrap-icons': 'node_modules/bootstrap-icons'
    }
  }
});