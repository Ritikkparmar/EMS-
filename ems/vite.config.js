import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',  // Use './' to make paths relative or set it to '/EMS-/' if using a custom domain
  plugins: [react()],
});
