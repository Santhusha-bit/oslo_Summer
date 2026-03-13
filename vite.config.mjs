import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/OsloSummer/',
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
});

