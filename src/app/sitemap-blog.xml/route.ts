import { NextResponse } from 'next/server';
import { getAllBlogPosts } from '@/lib/blog-data';

export const runtime = 'nodejs';

export async function GET() {
  const baseUrl = 'https://itagroupe.com';
  const posts = getAllBlogPosts();

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${posts.map(post => {
    // Format date to YYYY-MM-DD (ISO 8601 format)
    const lastmod = new Date(post.date).toISOString().split('T')[0];
    return `  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`;
  }).join('\n')}
</urlset>`;

  return new NextResponse(sitemapXml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

