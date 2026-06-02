// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// `site` is the single source of truth for absolute URLs (canonical, OG,
// sitemap). Components read it via `Astro.site`. Update here only.
export default defineConfig({
  site: 'https://heyview.studio',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
