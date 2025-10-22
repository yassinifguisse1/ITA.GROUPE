import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, ExternalLink, Globe, Clock, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sitemap | iTA Groupe',
  description: 'Complete sitemap of all pages and services available on iTA Groupe website.',
  robots: {
    index: true,
    follow: true,
  },
};

// Sitemap data (same as sitemap.ts)
const sitemapData = [
  {
    url: 'https://itagroupe.com',
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1,
    title: 'Home',
    description: 'iTA Groupe - Software Development Company',
    category: 'main'
  },
  {
    url: 'https://itagroupe.com/about',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
    title: 'About Us',
    description: 'Learn about our team and company mission',
    category: 'company'
  },
  {
    url: 'https://itagroupe.com/services',
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
    title: 'Services',
    description: 'Overview of all our development services',
    category: 'services'
  },
  {
    url: 'https://itagroupe.com/services/websites',
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
    title: 'Website Development',
    description: 'Custom website development services',
    category: 'services'
  },
  {
    url: 'https://itagroupe.com/services/seo',
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
    title: 'SEO Services',
    description: 'Search engine optimization and digital marketing',
    category: 'services'
  },
  {
    url: 'https://itagroupe.com/services/digital-marketing',
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing solutions',
    category: 'services'
  },
  {
    url: 'https://itagroupe.com/services/mobile-development',
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
    title: 'Mobile Development',
    description: 'iOS and Android app development',
    category: 'services'
  },
  {
    url: 'https://itagroupe.com/services/ux-ui-design',
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
    title: 'UX/UI Design',
    description: 'User experience and interface design services',
    category: 'services'
  },
  {
    url: 'https://itagroupe.com/services/software-architecture',
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
    title: 'Software Architecture',
    description: 'System design and architecture consulting',
    category: 'services'
  },
  {
    url: 'https://itagroupe.com/services/software-product-development',
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
    title: 'Product Development',
    description: 'End-to-end software product development',
    category: 'services'
  },
  {
    url: 'https://itagroupe.com/services/quality-assurance',
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
    title: 'Quality Assurance',
    description: 'Testing and quality assurance services',
    category: 'services'
  },
  {
    url: 'https://itagroupe.com/services/business-analysis',
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
    title: 'Business Analysis',
    description: 'Business process analysis and optimization',
    category: 'services'
  },
  {
    url: 'https://itagroupe.com/services/dedicated-teams',
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
    title: 'Dedicated Teams',
    description: 'Dedicated development teams for your projects',
    category: 'services'
  },
  {
    url: 'https://itagroupe.com/contact',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
    title: 'Contact Us',
    description: 'Get in touch with our development team',
    category: 'company'
  },
  {
    url: 'https://itagroupe.com/careers',
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
    title: 'Careers',
    description: 'Join our development team',
    category: 'company'
  },
  {
    url: 'https://itagroupe.com/portfolio',
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
    title: 'Portfolio',
    description: 'View our completed projects and case studies',
    category: 'company'
  },
  {
    url: 'https://itagroupe.com/blog',
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.6,
    title: 'Blog',
    description: 'Latest insights and technical articles',
    category: 'content'
  },
  {
    url: 'https://itagroupe.com/faq',
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.5,
    title: 'FAQ',
    description: 'Frequently asked questions',
    category: 'content'
  },
  {
    url: 'https://itagroupe.com/privacy',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.3,
    title: 'Privacy Policy',
    description: 'Our privacy policy and data protection',
    category: 'legal'
  },
  {
    url: 'https://itagroupe.com/terms',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.3,
    title: 'Terms of Service',
    description: 'Terms and conditions of service',
    category: 'legal'
  },
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'main': return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200';
    case 'services': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    case 'company': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
    case 'content': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
    case 'legal': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
  }
};

const getPriorityStars = (priority: number) => {
  const stars = Math.round(priority * 5);
  return '★'.repeat(stars) + '☆'.repeat(5 - stars);
};

export default function SitemapPage() {
  const categories = [...new Set(sitemapData.map(item => item.category))];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 pt-24">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Globe className="w-8 h-8 text-emerald-600 mr-3" />
            <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
              Website Sitemap
            </h1>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Complete overview of all pages and services available on our website. 
            Find what you're looking for quickly and easily.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">
                {sitemapData.length}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Total Pages
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {sitemapData.filter(item => item.category === 'services').length}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Services
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {categories.length}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Categories
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                {sitemapData.filter(item => item.changeFrequency === 'weekly').length}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Weekly Updates
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Category Filters */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Browse by Category
          </h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge 
                key={category}
                className={`${getCategoryColor(category)} cursor-pointer hover:opacity-80 transition-opacity`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Badge>
            ))}
          </div>
        </div>

        {/* Sitemap Content */}
        <div className="space-y-6">
          {categories.map((category) => (
            <Card key={category} className="overflow-hidden">
              <CardHeader className="bg-slate-50 dark:bg-slate-800">
                <CardTitle className="flex items-center gap-2">
                  <Badge className={getCategoryColor(category)}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </Badge>
                  <span className="text-xl">
                    {category.charAt(0).toUpperCase() + category.slice(1)} Pages
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-slate-200 dark:divide-slate-700">
                  {sitemapData
                    .filter(item => item.category === category)
                    .map((item, index) => (
                      <div key={index} className="p-6 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                                {item.title}
                              </h3>
                              <Badge variant="outline" className="text-xs">
                                {item.changeFrequency}
                              </Badge>
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 mb-2">
                              {item.description}
                            </p>
                            <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {item.lastModified.toLocaleDateString()}
                              </div>
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4" />
                                {getPriorityStars(item.priority)}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {item.changeFrequency}
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button asChild variant="outline" size="sm">
                              <Link href={item.url.replace('https://itagroupe.com', '')} className="flex items-center gap-2">
                                Visit Page
                              </Link>
                            </Button>
                            <Button asChild variant="ghost" size="sm">
                              <a 
                                href={item.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                              >
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            This sitemap is automatically generated and updated regularly.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild variant="outline">
              <Link href="/">Back to Home</Link>
            </Button>
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
