import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Add path aliases using Vite's recommended approach
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/features/products/presentation/components', import.meta.url)),
      '@pages': fileURLToPath(new URL('./src/features/products/presentation/pages', import.meta.url)),
    },
  },

  // Optimize asset handling
  build: {
    assetsInlineLimit: 4096, // Inline assets smaller than 4kb
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name || '';
          let extType = info.split('.').pop() || '';

          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'images';
          } else if (/woff|woff2|eot|ttf|otf/i.test(extType)) {
            extType = 'fonts';
          }

          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
  },

  // Preview server configuration (for npm run preview)
  preview: {
    port: 4173,
    strictPort: false,
    host: true,
    open: true,
  },

  // Dev server configuration
  server: {
    port: 5173,
    strictPort: false,
    host: true,
    open: true,
  },
});
