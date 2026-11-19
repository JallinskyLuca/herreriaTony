import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { loadEnv } from 'vite';

// Astro no expone las variables de .env en process.env al evaluar esta config,
// por eso las cargamos explícitamente con loadEnv.
const env = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), 'PUBLIC_');
const siteUrl = process.env.PUBLIC_SITE_URL || env.PUBLIC_SITE_URL;

if (!siteUrl) {
  console.warn(
    '[Herrería Tony] PUBLIC_SITE_URL no está definida: el sitio se generará con canonical localhost y noindex. Definila en .env (ver .env.example).'
  );
}

// https://astro.build/config
export default defineConfig({
  site: siteUrl || undefined,
  integrations: [tailwind({
    applyBaseStyles: false,
  })],
  output: 'static',
});
