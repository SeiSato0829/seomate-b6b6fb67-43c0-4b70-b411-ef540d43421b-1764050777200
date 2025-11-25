import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://seomate-test-10-1764050775200.netlify.app',
  sitemap: true,
  integrations: [],
  vite: {
    define: {
      'import.meta.env.SITE_NAME': JSON.stringify('SEOメイト テストブログ 10'),
      'import.meta.env.SITE_DOMAIN': JSON.stringify('seomate-test-10-1764050775200.netlify.app'),
      'import.meta.env.THEME': JSON.stringify('default')
    }
  }
});
