import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        // Manual chunking – group heavy deps
        manualChunks: {
          'vendor': ['vue', 'vue-router'],           // common libs
          'supabase': ['@supabase/supabase-js'],              // heavy client
         // 'ui': ['lucide-vue-next', 'your-ui-library-if-any'], // icons/components
        }
      }
    }
  },
  plugins: [vue(), tailwindcss(),],
})
