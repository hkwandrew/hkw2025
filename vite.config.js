import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { robots } from 'vite-plugin-robots'

// https://vite.dev/config/
export default defineConfig({
  devserver: {
    historyApiFallback: true,
  },
  plugins: [
    react(),
    robots(),
  ],
  base: '/hkw2025/',
})
