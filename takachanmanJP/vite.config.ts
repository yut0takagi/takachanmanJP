import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const isDev = command === 'serve'
  return {
    // Project Pages: https://<user>.github.io/<repo>/
    // ローカル開発は / のまま、ビルド時だけ /takachanmanJP/ にする
    base: isDev ? '/' : '/takachanmanJP/',
    plugins: [react()],
  }
})
