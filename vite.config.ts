import { defineConfig } from 'vite'
import path from 'path';
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
    plugins: [vue(), vueDevTools()],

    resolve: {
      alias: {
          '@app': path.resolve(__dirname, './src/app'),
          '@layouts': path.resolve(__dirname, './src/layouts'),
          '@pages': path.resolve(__dirname, './src/pages'),
          '@widgets': path.resolve(__dirname, './src/widgets'),
          '@shared': path.resolve(__dirname, './src/shared'),

          '@styles': path.resolve(__dirname, './src/app/styles'),
      }
    },

    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@use "@styles/core" as *;',
            },
        },
    },
})
