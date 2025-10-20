"use client";

import { Card } from "@/components/ui/card";

interface FeaturesProps {
  language: "en" | "fr";
}

export default function Features({ language }: FeaturesProps) {
  const content = {
    en: {
      brands: ["BRAND 1", "BRAND 2", "BRAND 3", "BRAND 4", "BRAND 5", "BRAND 6"]
    },
    fr: {
      brands: ["MARQUE 1", "MARQUE 2", "MARQUE 3", "MARQUE 4", "MARQUE 5", "MARQUE 6"]
    }
  };

  const t = content[language];

  return (
    <section id="features" className="py-12 md:py-16 relative overflow-hidden !w-full !h-40">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Infinite Scrolling Brands */}
        <div className="relative">
          {/* Gradient Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>

          {/* Scrolling Container */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll gap-12 items-center">
              {/* First Set of Brands */}
              {[...Array(2)].map((_, setIndex) =>
              <div key={setIndex} className="flex gap-12 items-center">
                  {t.brands.map((brand, idx) => (
                    <div key={idx} className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                      <div className="text-2xl font-bold text-foreground/70">{brand}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}