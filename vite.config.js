import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serves this repo at /oslo_Summer/
export default defineConfig({
  plugins: [react()],
  base: '/oslo_Summer/',
});

