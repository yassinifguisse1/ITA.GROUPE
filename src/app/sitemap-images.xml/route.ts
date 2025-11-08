import { NextResponse } from 'next/server';
import { getAllBlogPosts } from '@/lib/blog-data';

export const runtime = 'nodejs';

export async function GET() {
  const baseUrl = 'https://itagroupe.com';

  // Key pages with their images
  const keyPages: Array<{
    url: string;
    images: Array<{ loc: string; title: string; caption?: string }>;
  }> = [
    {
      url: '',
      images: [
        { loc: `${baseUrl}/logo.png`, title: 'iTA Groupe Logo' }
      ]
    },
    {
      url: '/about',
      images: [
        { loc: `${baseUrl}/team.webp`, title: 'iTA Groupe Team' }
      ]
    }
  ];

  // Blog posts with images
  const blogImages = getAllBlogPosts().map(post => ({
    url: `/blog/${post.slug}`,
    images: [
      {
        loc: post.image.startsWith('http') ? post.image : `${baseUrl}${post.image.startsWith('/') ? post.image : '/' + post.image}`,
        title: escapeXml(post.title.en),
        caption: escapeXml(post.excerpt.en)
      }
    ]
  }));

  const allPages = [...keyPages, ...blogImages];

  // Helper function to escape XML special characters
  function escapeXml(text: string): string {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  }

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${allPages.map(page => {
    const imagesXml = page.images.map(img => `    <image:image>
      <image:loc>${img.loc}</image:loc>
      <image:title>${img.title}</image:title>
      ${img.caption ? `<image:caption>${img.caption}</image:caption>` : ''}
    </image:image>`).join('\n');
    
    return `  <url>
    <loc>${baseUrl}${page.url}</loc>
${imagesXml}
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

