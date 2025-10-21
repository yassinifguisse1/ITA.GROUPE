import type { Metadata } from "next";
import { Suspense } from "react";
import HomePageClient from "./HomePageClient";
import Image from "next/image";

export const metadata: Metadata = {
  title: "iTA Groupe - Digital Solutions & Web Development Agency",
  description: "Professional web development, SEO optimization, digital marketing, and custom software solutions. Expert team delivering results-driven digital strategies for businesses worldwide.",
  keywords: [
    "web development Morocco",
    "digital marketing agency",
    "SEO optimization services",
    "custom software development",
    "web design Casablanca",
    "e-commerce development",
    "mobile app development",
    "digital transformation",
    "IT consulting Morocco",
    "software development company"
  ],
  openGraph: {
    title: "iTA Groupe - Digital Solutions & Web Development Agency",
    description: "Professional web development, SEO optimization, digital marketing, and custom software solutions. Expert team delivering results-driven digital strategies for businesses worldwide.",
    url: "https://itagroupe.com",
    siteName: "iTA Groupe",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "iTA Groupe - Digital Solutions Agency Homepage",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "iTA Groupe - Digital Solutions & Web Development Agency",
    description: "Professional web development, SEO optimization, digital marketing, and custom software solutions.",
    images: ["/twitter-home.jpg"],
  },
  alternates: {
    canonical: "https://itagroupe.com",
  },
};

export default function Home() {
  return (
    <Suspense 
      fallback={
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
      }
    >
      <HomePageClient />
    </Suspense>
  );
}