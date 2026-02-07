import type { Metadata } from "next";
import { Suspense } from "react";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About iTA Groupe - Digital Solutions & Web Development Team",
  description: "Learn about iTA Groupe's mission, team, and expertise in web development, digital marketing, and software solutions. Discover our global presence and commitment to delivering exceptional digital experiences.",
  keywords: [
    "about iTA Groupe",
    "web development team Morocco",
    "digital agency team",
    "software development company",
    "IT consulting team",
    "web design experts",
    "digital marketing specialists",
    "technology company Morocco",
    "software development team",
    "digital transformation experts"
  ],
  openGraph: {
    title: "About iTA Groupe - Digital Solutions & Web Development Team",
    description: "Learn about iTA Groupe's mission, team, and expertise in web development, digital marketing, and software solutions. Discover our global presence and commitment to delivering exceptional digital experiences.",
    url: "https://itagroupe.com/about",
    siteName: "iTA Groupe",
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "iTA Groupe Team - Digital Solutions Experts",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About iTA Groupe - Digital Solutions & Web Development Team",
    description: "Learn about iTA Groupe's mission, team, and expertise in web development, digital marketing, and software solutions.",
    images: ["/twitter-about.jpg"],
  },
  alternates: {
    canonical: "https://itagroupe.com/about",
  },
};

export default function About() {
  return (
    
      <AboutPageClient />
  );
}