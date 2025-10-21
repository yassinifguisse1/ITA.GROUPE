import type { Metadata } from "next";
import { Suspense } from "react";
import SEOPageClient from "./SEOPageClient";
import Image from "next/image";

export const metadata: Metadata = {
  title: "SEO Services - Search Engine Optimization & Digital Marketing | iTA Groupe",
  description: "Professional SEO services to improve your website's search engine rankings. Technical SEO, content optimization, keyword research, and local SEO. Increase organic traffic and boost your online visibility.",
  keywords: [
    "SEO services",
    "search engine optimization",
    "SEO consulting",
    "technical SEO",
    "local SEO",
    "keyword research",
    "SEO audit",
    "content optimization",
    "link building",
    "SEO Morocco",
    "digital marketing SEO",
    "website optimization"
  ],
  authors: [{ name: "iTA Groupe" }],
  creator: "iTA Groupe",
  publisher: "iTA Groupe",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "SEO Services - Search Engine Optimization & Digital Marketing | iTA Groupe",
    description: "Professional SEO services to improve your website's search engine rankings. Technical SEO, content optimization, keyword research, and local SEO. Increase organic traffic and boost your online visibility.",
    url: "https://itagroupe.com/services/seo",
    siteName: "iTA Groupe",
    images: [
      {
        url: "/og-seo-services.jpg",
        width: 1200,
        height: 630,
        alt: "iTA Groupe SEO Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Services - Search Engine Optimization & Digital Marketing | iTA Groupe",
    description: "Professional SEO services to improve your website's search engine rankings. Technical SEO, content optimization, keyword research, and local SEO.",
    images: ["/twitter-seo-services.jpg"],
    creator: "@itagroupe",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://itagroupe.com/services/seo",
  },
};

export default function SEOPage() {
  // JSON-LD structured data for SEO service
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SEO Services",
    "description": "Professional SEO services to improve your website's search engine rankings. Technical SEO, content optimization, keyword research, and local SEO. Increase organic traffic and boost your online visibility.",
    "provider": {
      "@type": "Organization",
      "name": "iTA Groupe",
      "url": "https://itagroupe.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://itagroupe.com/logo.png",
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "MA",
        "addressLocality": "Casablanca"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1 (307) 310-6370",
        "contactType": "customer service",
        "availableLanguage": ["English", "French", "Polish"]
      }
    },
    "serviceType": "SEO Services",
    "areaServed": {
      "@type": "Country",
      "name": "Worldwide"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "SEO Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Technical SEO",
            "description": "Website technical optimization including site speed, mobile-friendliness, and crawlability improvements"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Content Optimization",
            "description": "Strategic content creation and optimization to target relevant keywords and improve search rankings"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Local SEO",
            "description": "Local search optimization to improve visibility in local search results and Google My Business"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO Audit & Analysis",
            "description": "Comprehensive SEO audits to identify issues and opportunities for improvement"
          }
        }
      ]
    },
    "offers": {
      "@type": "Offer",
      "description": "SEO services with proven strategies and measurable results for improved search rankings",
      "priceRange": "$$",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "220",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <Suspense fallback={
        <div className="min-h-screen bg-gray-100 animate-pulse flex items-center justify-center">
          <div className="text-gray-600 flex flex-col items-center">
            {/* iTA Groupe Logo */}
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Untitled-design-29-1759847984982.png"
              alt="iTA Groupe Logo"
              width={100}
              height={100}
              priority
            />
            <span className="mt-4">Loading...</span>
          </div>
        </div>
      }>
        <SEOPageClient />
      </Suspense>
    </>
  );
}