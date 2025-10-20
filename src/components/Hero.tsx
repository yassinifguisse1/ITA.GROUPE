"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { PointerHighlight } from "@/components/ui/pointer-highlight";


interface HeroProps {
  language: "en" | "fr" | "pl";
}

export default function Hero({ language }: HeroProps) {
  const content = {
    en: {
      badge: "Trusted by 500+ Businesses",
      headline: "Transform Your Digital Presence with ",
      company: "iTA Groupe",
      subheadline: "We create stunning websites, drive engagement, and deliver results that matter. Your success is our mission.",
      ctaPrimary: "Get Started",
      ctaSecondary: "Contact Us",
    },
    fr: {
      badge: "La confiance de 500+ Entreprises",
      headline: "Transformez Votre Présence Digitale avec ",
      company: "iTA Groupe",
      subheadline: "Nous créons des sites web époustouflants, stimulons l'engagement et offrons des résultats qui comptent. Votre succès est notre mission.",
      ctaPrimary: "Commencer",
      ctaSecondary: "Nous Contacter",
    },
    pl: {
      badge: "Zaufało nam ponad 500 firm",
      headline: "Przekształć swoją obecność cyfrową z ",
      company: "iTA Groupe",
      subheadline: "Tworzymy wspaniałe strony internetowe, angażujemy użytkowników i dostarczamy rezultaty, które mają znaczenie. Twój sukces to nasza misja.",
      ctaPrimary: "Rozpocznij",
      ctaSecondary: "Skontaktuj się",
    }
  };

  const t = content[language];

  return (
    <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-bg -z-10"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] -z-10"></div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Badge - Remove animation delays for LCP optimization */}
          <div className="opacity-100">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium rounded-full inline-flex items-center space-x-2">
              <Sparkles className="h-4 w-4" />
              <span>{t.badge}</span>
            </Badge>
          </div>

          {/* Headline - Critical LCP element - no delays */}
          <h1 className="opacity-100 text-white/70">
            {t.headline}
            <PointerHighlight
              rectangleClassName="bg-green-100/30 dark:bg-green-900 border-green-100/30 dark:border-green-700 leading-loose"
              pointerClassName="text-green-500 h-3 w-3"
              containerClassName="inline-block ml-1"
            >
              <span className="gradient-text text-center">
                {t.company}
              </span>
            </PointerHighlight>
          </h1>

          {/* Subheadline - No delays */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto opacity-100 text-white">
            {t.subheadline}
          </p>

          {/* CTA Buttons - No delays */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-100">
            <Button size="lg" className="rounded-full px-8 text-base shadow-lg hover:shadow-xl transition-all duration-300 group" asChild>
              <Link href="/contact">
                {t.ctaPrimary}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 text-base group"
              asChild
            >
              <Link href="/contact">
                <Phone className="mr-2 h-5 w-5" />
                {t.ctaSecondary}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}