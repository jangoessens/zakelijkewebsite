import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

import icon from 'astro-icon';

export default defineConfig({
  site: 'https://zakelijke-website.nl',
  integrations: [vue(), icon()],
});