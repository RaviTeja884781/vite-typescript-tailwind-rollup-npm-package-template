import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root: path.resolve(__dirname, 'src/playground'),
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'your-package-name': 'your-package-name',
    },
    dedupe: ['react', 'react-dom'],
  },
  optimizeDeps: {
    include: ['your-package-name'],
  },
  build: {
    outDir: path.resolve(__dirname, '../../dist'),
    emptyOutDir: true,
    sourcemap: true,
    commonjsOptions: {
      include: [/your-package-name/, /node_modules/],
    },
  },
});