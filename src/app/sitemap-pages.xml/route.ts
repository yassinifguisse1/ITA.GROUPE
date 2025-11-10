import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function GET() {
  const baseUrl = 'https://itagroupe.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
  // Static pages - only canonical, indexable URLs
  const staticPages = [
    // Main pages
    { url: '', lastmod: currentDate },
    { url: '/about', lastmod: currentDate },
    { url: '/contact', lastmod: currentDate },
    { url: '/careers', lastmod: currentDate },
    { url: '/portfolio', lastmod: currentDate },
    { url: '/blog', lastmod: currentDate },
    { url: '/faq', lastmod: currentDate },
    { url: '/privacy', lastmod: currentDate },
    { url: '/terms', lastmod: currentDate },
    
    // Services
    { url: '/services/software-product-development', lastmod: currentDate },
    { url: '/services/mobile-development', lastmod: currentDate },
    { url: '/services/ux-ui-design', lastmod: currentDate },
    { url: '/services/seo', lastmod: currentDate },
    { url: '/services/digital-marketing', lastmod: currentDate },
    { url: '/services/software-architecture', lastmod: currentDate },
    { url: '/services/quality-assurance', lastmod: currentDate },
    { url: '/services/business-analysis', lastmod: currentDate },
    { url: '/services/dedicated-teams', lastmod: currentDate },
    { url: '/services/websites', lastmod: currentDate },
    { url: '/services/ads', lastmod: currentDate },
    { url: '/services/social-media', lastmod: currentDate },
    { url: '/services/bundles', lastmod: currentDate },
    
    // Industries
    { url: '/industries/education', lastmod: currentDate },
    { url: '/industries/finance', lastmod: currentDate },
    { url: '/industries/healthcare', lastmod: currentDate },
    { url: '/industries/saas', lastmod: currentDate },
    
    // Landing pages
    { url: '/build-your-website', lastmod: currentDate },
    { url: '/get-your-website', lastmod: currentDate },
  ];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages.map(page => `  <url>
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

