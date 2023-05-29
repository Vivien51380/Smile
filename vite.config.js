import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import replace from '@rollup/plugin-replace';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  plugins: [
    react(),
    replace({
      'process.env.REACT_APP_YOUR_SERVICE_ID': JSON.stringify(process.env.VITE_YOUR_SERVICE_ID),
      'process.env.REACT_APP_YOUR_TEMPLATE_ID': JSON.stringify(process.env.VITE_YOUR_TEMPLATE_ID),
      'process.env.REACT_APP_YOUR_PUBLIC_KEY': JSON.stringify(process.env.VITE_YOUR_PUBLIC_KEY),
    }),
  ],
});
