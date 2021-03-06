import path from 'path';
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

import MarkdownLoader from './loader/markdown';
import HydrateLoader from './loader/hydrate';

// https://vitejs.dev/config/
export default defineConfig({
  // root: process.cwd(),
  // base: '/',
  // mode: 'development' | 'production',
  // define: { VITE_HH: 'import.meta.env.VITE_DEFINE_CONFIG' },
  // 和 Webpack 的 use 加载方式一致，从后向前
  plugins: [ reactRefresh(), HydrateLoader(), MarkdownLoader() ],
  // publicDir: 'public',
  // cacheDir: 'node_modules/.vite',
  resolve: {
    alias: {
      // vite 2.0 这里的 alias 字符串不能以 '/' 结尾
      '@': path.resolve(__dirname, 'src'),
    },
    // dedupe: [],
    // conditions: [],
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          prefix: 'hydrated-pig',
          'primary-color': '#FDFD7D',
          'compare-color': '#5AA02D',
          'complementary-color': '#9B7BFC',
        },
        javascriptEnabled: true,
      },
    },
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
  },
  build: {
    sourcemap: true,
  },
});
