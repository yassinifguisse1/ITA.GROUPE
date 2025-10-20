"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

interface CTAProps {
  language: "en" | "fr" | "pl";
}

export default function CTA({ language }: CTAProps) {
  const content = {
    en: {
      heading: "Ready to Transform Your ",
      headingGradient: "Workflow?",
      description: "Join thousands of teams already using our platform to streamline their processes and achieve their goals.",
      ctaPrimary: "Get Started Free",
      ctaSecondary: "Schedule a Demo"
    },
    fr: {
      heading: "Prêt à Transformer Votre ",
      headingGradient: "Flux de Travail?",
      description: "Rejoignez des milliers d'équipes qui utilisent déjà notre plateforme pour rationaliser leurs processus et atteindre leurs objectifs.",
      ctaPrimary: "Commencer Gratuitement",
      ctaSecondary: "Planifier une Démo"
    },
    pl: {
      heading: "Gotowy przekształcić swój ",
      headingGradient: "przepływ pracy?",
      description: "Dołącz do tysięcy zespołów już korzystających z naszej platformy, aby usprawnić swoje procesy i osiągnąć cele.",
      ctaPrimary: "Rozpocznij za darmo",
      ctaSecondary: "Zaplanuj demo"
    }
  };

  const t = content[language];

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background -z-10"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm p-12 md:p-16 lg:p-20">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 -z-10"></div>

            <div className="text-center space-y-8">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 mb-4">
                <Sparkles className="h-8 w-8 text-primary-foreground" />
              </div>

              {/* Heading */}
              <h2 className="text-balance">
                {t.heading}
                <span className="gradient-text">{t.headingGradient}</span>
              </h2>

              {/* Description */}
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
                {t.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button
                  size="lg"
                  className="rounded-full px-8 text-base shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  {t.ctaPrimary}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 text-base"
                >
                  {t.ctaSecondary}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}