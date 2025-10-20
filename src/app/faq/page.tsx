"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { faqPageTranslations } from "@/i18n/page-translations";

export default function FAQPage() {
  const { language } = useLanguage();
  const t = faqPageTranslations[language];

  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 gradient-bg -z-10"></div>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <Badge variant="secondary" className="mb-4">{t.hero.badge}</Badge>
              <h1 className="text-4xl md:text-6xl font-bold">
                {t.hero.title}{" "}
                <span className="gradient-text">{t.hero.titleHighlight}</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                {t.hero.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-16">
              {t.categories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="space-y-6">
                  <h2 className="text-2xl md:text-3xl font-bold">{category.category}</h2>
                  <div className="space-y-4">
                    {category.questions.map((faq, faqIndex) => (
                      <details
                        key={faqIndex}
                        className="group bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-all"
                      >
                        <summary className="flex items-center justify-between cursor-pointer p-6 list-none">
                          <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
                          <Plus className="h-5 w-5 text-muted-foreground group-open:rotate-45 transition-transform flex-shrink-0" />
                        </summary>
                        <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold">
                {t.cta.title}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t.cta.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full">
                  {t.cta.primary}
                </Button>
                <Button size="lg" variant="outline" className="rounded-full">
                  {t.cta.secondary}
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer language={language} />
    </>
  );
}