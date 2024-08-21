/*
 * @FilePath: \vue3x_earthsdk2_template\vite.config.js
 * @Author: maggot-code
 * @Date: 2022-11-21 14:19:59
 * @LastEditors: abc-0886kAX-code
 * @LastEditTime: 2024-08-21 10:40:09
 * @Description:
 */
import { defineConfig, loadEnv, splitVendorChunkPlugin, normalizePath } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'
import vue from '@vitejs/plugin-vue'
import mkcert from 'vite-plugin-mkcert'
import viteCompression from 'vite-plugin-compression'
import autoImport from 'unplugin-auto-import/vite'
import vueComponents from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import path from 'path'
import { viteExternalsPlugin } from 'vite-plugin-externals'
import { viteStaticCopy } from 'vite-plugin-static-copy'

import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

import lodashImport from './plugins/lodash'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const { VITE_ASSETS } = loadEnv(mode, process.cwd()) // eslint-disable-line  node/prefer-global/process
  return {
    base: VITE_ASSETS,
    clearScreen: true,
    server: {
      https: false,
      hmr: {
        overlay: true,
      },
      proxy: {
        '/api': {
          target: 'http://127.0.0.1:8899/',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, '/api'),
        },
        '/QrWater': {
          target: 'https://www.xxanyu.cn/',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/QrWater/, '/QrWater'),
        },
      },
    },
    resolve: {
      alias: [
        {
          find: '@',
          replacement: '/src',
        },
        {
          find: '~',
          replacement: '/src/internal',
        },
      ],
      extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'],
      dedupe: ['vue'],
      preserveSymlinks: false,
    },
    plugins: [
      vue(),
      splitVendorChunkPlugin(),
      mkcert(),
      autoImport({
        imports: [
          'vue',
          'vue-router',
          'pinia',
          {
            'lodash-es': lodashImport,
          },
        ],
        dts: true,
        // eslint报错解决
        eslintrc: {
          enabled: true, // Default `false`
        },
        resolvers: [
          ElementPlusResolver(),
          IconsResolver({
            prefix: 'Icon',
          }),
        ],
      }),
      vueComponents({
        resolvers: [
          ElementPlusResolver(),
          IconsResolver({
            prefix: 'Icon',
          }),
        ],
        dts: true,
      }),
      Icons({
        autoInstall: true,
        compiler: 'vue3',
        scale: 1.0,
      }),
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: 'gzip',
        ext: '.gz',
        deleteOriginFile: false,
      }),
      visualizer({
        filename: './node_modules/.cache/visualizer/stats.html',
        open: true,
        gzipSize: true,
        brotliSize: true,
      }),
      viteExternalsPlugin({
        'cesium': 'Cesium',
        'xbsj-renderer/dist-node/xr-base-utils': 'xbsj["xr-base-utils"]',
        'xbsj-renderer/dist-node/xr-math': 'xbsj["xr-math"]',
        'xbsj-renderer/dist-node/xr-utils': 'xbsj["xr-utils"]',
        'xbsj-renderer/dist-node/xr-cesium': 'xbsj["xr-cesium"]',
        'xbsj-xe2/dist-node/xe2': 'XE2["xe2"]',
        'xbsj-xe2/dist-node/xe2-base': 'XE2["xe2-base"]',
        'xbsj-xe2/dist-node/xe2-base-utils': 'XE2["xe2-base-utils"]',
        'xbsj-xe2/dist-node/xe2-utils': 'XE2["xe2-utils"]',
        'xbsj-xe2/dist-node/xe2-cesium': 'XE2["xe2-cesium"]',
        'xbsj-xe2/dist-node/xe2-mapbox': 'XE2["xe2-mapbox"]',
        'xbsj-xe2/dist-node/xe2-ue': 'XE2["xe2-ue"]',
        'xbsj-xe2/dist-node/utility-xe2-plugin': 'XE2["utility-xe2-plugin"]',
        'xbsj-xe2/dist-node/xe2-all-in-one': 'XE2["xe2-all-in-one"]',
        'xbsj-xe2/dist-node/xe2-base-objects': 'XE2["xe2-base-objects"]',
        'xbsj-xe2/dist-node/xe2-objects': 'XE2["xe2-objects"]',
        'xbsj-xe2/dist-node/xe2-cesium-objects': 'XE2["xe2-cesium-objects"]',
        'xbsj-xe2/dist-node/xe2-ue-objects': 'XE2["xe2-ue-objects"]',
        'xbsj-xe2/dist-node/xe2-openlayers': 'XE2["xe2-openlayers"]',
        'xbsj-xe2/dist-node/xe2-openlayers-objects': 'XE2["xe2-openlayers-objects"]',
        'smplotting-xe2-plugin/dist-node/smplotting-xe2-plugin': 'XE2["smplotting-xe2-plugin"]',
        'smplotting-xe2-plugin/dist-node/smplotting-xe2-plugin-main': 'XE2["smplotting-xe2-plugin-main"]',
        'esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin': 'XE2["esobjs-xe2-plugin"]',
        'esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main': 'XE2["esobjs-xe2-plugin-main"]',
      }, { useWindow: false }),
      // 运行和构建时copy
      viteStaticCopy({
        targets: [
          {
            src: normalizePath(path.resolve(__dirname, './node_modules/xbsj-xe2/dist-web')),
            dest: './js/xbsj-xe2'
          },
          {
            src: normalizePath(path.resolve(__dirname, './node_modules/xbsj-xe2-assets/dist-web')),
            dest: './js/xbsj-xe2-assets'
          },
          {
            src: normalizePath(path.resolve(__dirname, './node_modules/smplotting-xe2-plugin/dist-web')),
            dest: './js/smplotting-xe2-plugin'
          },
          {
            src: normalizePath(path.resolve(__dirname, './node_modules/esobjs-xe2-plugin/dist-web')),
            dest: './js/esobjs-xe2-plugin'
          },
          {
            src: normalizePath(path.resolve(__dirname, './node_modules/esobjs-xe2-plugin-assets/dist-web')),
            dest: './js/esobjs-xe2-plugin-assets'
          },
          //安装了vue-xe2-plugin就需要配置
          {
            src: normalizePath(path.resolve(__dirname, './node_modules/vue-xe2-plugin/dist-web')),
            dest: './js/vue-xe2-plugin'
          }
        ]
      })
    ],
    json: {
      namedExports: true,
      stringify: false,
    },
    build: {
      minify: false,
      target: 'es2015',
      sourcemap: mode === 'production' ? false : 'hidden',
      chunkSizeWarningLimit: 500,
      assetsInlineLimit: 10000,
      modulePreload: true,
      cssCodeSplit: true,
      ssrManifest: false,
      emptyOutDir: true,
      manifest: false,
      write: true,
      brotliSize: false,
      rollupOptions: {
        output: {
          chunkFileNames: `assets/js/[name]-[hash].js`,
          entryFileNames: `assets/js/[name]-[hash].js`,
          assetFileNames: `assets/[name]-[hash].[ext]`,
        },
      },
    },
  }
})
