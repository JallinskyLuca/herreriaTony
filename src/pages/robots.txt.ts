import type { APIRoute } from 'astro';

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const content = site
    ? ['User-agent: *', 'Allow: /', '', 'Sitemap: ' + new URL('/sitemap.xml', site).toString(), ''].join('\n')
    : ['User-agent: *', 'Disallow: /', ''].join('\n');

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
