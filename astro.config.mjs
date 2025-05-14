import { defineConfig } from 'astro/config';
import staticAdapter from '@astrojs/adapter-static';

export default defineConfig({
  adapter: staticAdapter(),
  site: 'https://jangoessens.github.io',
  base: '/zakelijkewebsite/', // BELANGRIJK voor GitHub Pages
});
