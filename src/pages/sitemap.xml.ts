import type { APIRoute } from 'astro';

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const paths = ['/', '/privacidad'];
  const urls = site
    ? paths.map((path) => '<url><loc>' + new URL(path, site).toString() + '</loc></url>').join('')
    : '';

  const content = '<?xml version="1.0" encoding="UTF-8"?>' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + urls + '</urlset>';

  return new Response(content, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
