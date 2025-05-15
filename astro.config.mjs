import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

export default defineConfig({
  site: 'https://zakelijke-website.nl',
  integrations: [vue()],
});
