import { NextResponse } from 'next/server';
import { categories } from '@/lib/blog-data';

export const runtime = 'nodejs';

export async function GET() {
  const baseUrl = 'https://itagroupe.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
  // Filter out "All" category as it's not a real category page
  const validCategories = categories.filter(cat => cat !== 'All');
  
  // Only include categories that have indexable pages
  // Using query parameter format for category filtering
  const categoryPages = validCategories.map(category => {
    // URL encode the category name for the URL
    const categorySlug = encodeURIComponent(category.toLowerCase().replace(/\s+/g, '-'));
    return {
      url: `/blog?category=${categorySlug}`,
      lastmod: currentDate
    };
  });

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${categoryPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
  </url>`).join('\n')}
</urlset>`;

  return new NextResponse(sitemapXml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

