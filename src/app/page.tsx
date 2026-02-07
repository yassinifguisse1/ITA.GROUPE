import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";

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
  return <HomePageClient />;
}