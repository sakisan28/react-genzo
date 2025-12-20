import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'


// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: '現像液調整計算機',
        short_name: '現像液計算機',
        description: 'フィルム現像液の希釈や温度調整を手助けする計算機です。',
        theme_color: '#0ea5e9',
        icons: [
          {
            src: 'nya-yama.png',
            sizes: '512x512',}
        ],
        id: '/react-genzo/',
      },
    }),
  ],
})
