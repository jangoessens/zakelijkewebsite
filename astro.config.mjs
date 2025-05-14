import { defineConfig } from 'astro/config';
import staticAdapter from '@astrojs/adapter-static';

export default defineConfig({
  adapter: staticAdapter(),
  base: '/zakelijkewebsite/', // BELANGRIJK voor GitHub Pages
});
