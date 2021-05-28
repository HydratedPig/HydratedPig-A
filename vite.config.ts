import path from 'path'
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  // root: process.cwd(),
  // base: '/',
  // mode: 'development' | 'production',
  // define: { VITE_HH: 'import.meta.env.VITE_DEFINE_CONFIG' },
  plugins: [reactRefresh()],
  // publicDir: 'public',
  // cacheDir: 'node_modules/.vite',
  resolve: {
    alias:  {
      '/@': path.resolve(__dirname, 'src')
    },
    // dedupe: [],
    // conditions: [],
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'owner-prefix': 'hydrated-pig',
          'primary-color': '#FDFD7D',
          'compare-color': '#5AA02D',
          'complementary-color': '#9B7BFC',
        },
        javascriptEnabled: true,
      }
    }
  },
  server: {
    host: '127.0.0.1',
    port: 5500,
    strictPort: true,
    // proxy: {
    //   // 字符串简写写法
    //   '/foo': 'http://localhost:4567/foo',
    //   // 选项写法
    //   '/api': {
    //     target: 'http://jsonplaceholder.typicode.com',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, '')
    //   },
    //   // 正则表达式写法
    //   '^/fallback/.*': {
    //     target: 'http://jsonplaceholder.typicode.com',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/fallback/, '')
    //   }
    // }
  }
})
