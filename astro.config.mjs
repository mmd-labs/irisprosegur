import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://irisprosegur.vercel.app',
  vite: {
    plugins: [tailwindcss()],
  },
});
