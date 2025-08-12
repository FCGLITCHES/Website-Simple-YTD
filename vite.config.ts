import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Website-Simple-YTD/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
