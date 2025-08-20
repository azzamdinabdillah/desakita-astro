// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  compressHTML: false,
  base: '/',
  build: {
    format: "preserve", // default "directory"
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@layouts': path.resolve('./src/layouts'),
        '@react-pages': path.resolve('./src/react-pages'),
        '@components': path.resolve('./src/components'),
      },
    },
  },
});