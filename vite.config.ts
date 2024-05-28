import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { VantResolver, VantImports } from '@vant/auto-import-resolver';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [VantImports()],
      resolvers: [VantResolver()],
    }),
    Components({
      resolvers: [VantResolver()],
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    host: '0.0.0.0',
    open: true,
    disableHostCheck: true,
    proxy: {
      '/api': {
        //请求称号
        target: 'http://192.168.0.220:3001/api',
        // target: 'https://pi-ex-spot.pandora-demo.xyz/api', //请求的接口
        changeOrigin: true, //容许跨域
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/uploads': {
        //请求称号
        target: 'http://192.168.0.220:3001/uploads', //请求的接口
        changeOrigin: true, //容许跨域
        rewrite: (path) => path.replace(/^\/uploads/, ''),
      },
    },
  },
})
