"use client";

import WebSites from "@/components/pricing/WebSites";
import SEOServices from "@/components/pricing/SEOServices";
import SocialMedia from "@/components/pricing/SocialMedia";
import AdsServices from "@/components/pricing/AdsServices";
import Bundles from "@/components/pricing/Bundles";

interface PricingProps {
  language: "en" | "fr" | "pl";
}

export default function Pricing({ language }: PricingProps) {
  return (
    <section id="pricing" className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background -z-10"></div>

      <WebSites language={language} />
      <SEOServices language={language} />
      <SocialMedia language={language} />
      <AdsServices language={language} />
      <Bundles language={language} />
    </section>
  );
}