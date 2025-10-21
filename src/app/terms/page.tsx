import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import Image from "next/image";
import TermsPageClient from "./TermsPageClient";

export const metadata: Metadata = {
  title: "Terms of Service - Legal Terms & Conditions | iTA Groupe",
  description: "Read the comprehensive terms and conditions for using iTA Groupe's digital services, web development, and software solutions. Understand your rights and obligations when working with our team.",
  keywords: [
    "terms of service",
    "terms and conditions",
    "legal terms",
    "service agreement",
    "user agreement",
    "iTA Groupe terms",
    "digital services terms",
    "web development terms",
    "software development terms",
    "Morocco legal terms",
    "service conditions",
    "user rights"
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
    title: "Terms of Service - Legal Terms & Conditions | iTA Groupe",
    description: "Read the comprehensive terms and conditions for using iTA Groupe's digital services, web development, and software solutions. Understand your rights and obligations when working with our team.",
    url: "https://itagroupe.com/terms",
    siteName: "iTA Groupe",
    images: [
      {
        url: "/og-terms.jpg",
        width: 1200,
        height: 630,
        alt: "iTA Groupe Terms of Service",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service - Legal Terms & Conditions | iTA Groupe",
    description: "Read the comprehensive terms and conditions for using iTA Groupe's digital services, web development, and software solutions.",
    images: ["/twitter-terms.jpg"],
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
    canonical: "https://itagroupe.com/terms",
  },
};

export default function TermsPage() {
  // JSON-LD structured data for Terms of Service
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service",
    "description": "Read the comprehensive terms and conditions for using iTA Groupe's digital services, web development, and software solutions. Understand your rights and obligations when working with our team.",
    "url": "https://itagroupe.com/terms",
    "mainEntity": {
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
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://itagroupe.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Terms of Service",
          "item": "https://itagroupe.com/terms"
        }
      ]
    },
    "datePublished": "2024-01-01",
    "dateModified": "2024-12-01",
    "inLanguage": "en-US",
    "isPartOf": {
      "@type": "WebSite",
      "name": "iTA Groupe",
      "url": "https://itagroupe.com"
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
            <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Untitled-design-29-1759847984982.png" alt="iTA Groupe Logo" width={100} height={100} priority />
            <span className="mt-4">Loading...</span>
          </div>
        </div>
      }>
        <TermsPageClient />
      </Suspense>
      <Footer language="en" />
    </>
  );
}