import type { Metadata } from "next";
import { Suspense } from "react";
import CareersPageClient from "./CareersPageClient";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Join iTA Groupe - Careers in Web Development & Digital Solutions",
  description: "Join iTA Groupe's talented team of web developers, designers, and digital marketing experts. Explore career opportunities in Morocco and globally. Apply for remote and on-site positions.",
  keywords: [
    "careers iTA Groupe",
    "web developer jobs Morocco",
    "digital marketing jobs",
    "software developer careers",
    "IT jobs Casablanca",
    "remote developer jobs",
    "tech careers Morocco",
    "web design jobs",
    "SEO specialist jobs",
    "digital agency careers"
  ],
  openGraph: {
    title: "Join iTA Groupe - Careers in Web Development & Digital Solutions",
    description: "Join iTA Groupe's talented team of web developers, designers, and digital marketing experts. Explore career opportunities in Morocco and globally. Apply for remote and on-site positions.",
    url: "https://itagroupe.com/careers",
    siteName: "iTA Groupe",
    images: [
      {
        url: "/og-careers.jpg",
        width: 1200,
        height: 630,
        alt: "iTA Groupe Careers - Join Our Team",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Join iTA Groupe - Careers in Web Development & Digital Solutions",
    description: "Join iTA Groupe's talented team of web developers, designers, and digital marketing experts. Explore career opportunities in Morocco and globally.",
    images: ["/twitter-careers.jpg"],
  },
  alternates: {
    canonical: "https://itagroupe.com/careers",
  },
};

export default function Careers() {
  return (
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
    }
    >
      <CareersPageClient />
    </Suspense>
  );
}