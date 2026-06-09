import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'
import { viteMockServe } from 'vite-plugin-mock'
// https://vite.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [
      vue(),
      vueDevTools(),
      createSvgIconsPlugin({
          // Specify the icon folder to be cached
          iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
          // Specify symbolId format
          symbolId: 'icon-[dir]-[name]',
        }),
        viteMockServe({
          mockPath: 'mock',
          enable: command === 'serve',
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },
    css: {
        preprocessorOptions: {
          scss: {
            loadPaths: [path.resolve(process.cwd(), 'src/styles').replace(/\\/g, '/')],
            additionalData: `@use 'variable' as *;\n`,
          },
        },
      },
}
})
