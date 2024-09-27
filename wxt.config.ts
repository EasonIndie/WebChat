import path from 'node:path'
import { defineConfig } from 'wxt'
import react from '@vitejs/plugin-react'
import { name, displayName, homepage } from './package.json'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  srcDir: path.resolve('src'),
  imports: false,
  entrypointsDir: 'app',
  runner: {
    startUrls: ['https://www.example.com/']
  },
  manifest: {
    permissions: ['storage'],
    name: displayName,
    homepage_url: homepage,
    icons: {
      '16': 'logo.png',
      '32': 'logo.png',
      '48': 'logo.png',
      '128': 'logo.png'
    }
    // browser_specific_settings: {
    //   gecko: {
    //     id: 'molvqingtai@gmail.com'
    //   }
    // }
  },
  vite: (env) => ({
    define: {
      __DEV__: env.mode === 'development',
      __NAME__: JSON.stringify(name)
    },
    plugins: [
      react(),
      svgr({
        // svgr options: https://react-svgr.com/docs/options/
        svgrOptions: { exportType: 'default', ref: true, svgo: false, titleProp: true },
        include: '**/*.svg'
      })
    ]
  })
})
