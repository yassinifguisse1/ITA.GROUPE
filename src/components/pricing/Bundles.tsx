"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Rocket, Check, Sparkles, TrendingUp, Zap } from "lucide-react";

interface BundlesProps {
  language: "en" | "fr" | "pl";
}

const content = {
  en: {
    badge: "Recommended Packages",
    title: "Get Started With Our",
    titleGradient: "Complete Bundles",
    description: "Professional website + complete SEO = Best value. Everything you need to launch your digital presence successfully from day one.",
    popular: "Most Popular",
    included: "What's included:",
    benefits: "Benefits:",
    idealFor: "Ideal for:",
    choose: "Choose",
    whyChoose: "Why Choose a Bundle?",
    paymentTerms: "Flexible Payment Terms",
    paymentDescription: "All our bundles are available with installment payments:",
    paymentSteps: [
      { percent: "50%", desc: "At project start" },
      { percent: "40%", desc: "At staging delivery" },
      { percent: "10%", desc: "At go-live" }
    ],
    bundles: [
      {
        name: "Starter Boost",
        description: "Fast digital launch with landing page and complete SEO setup.",
        includes: [
          { item: "Level 1 Website", value: "8,000 dh" },
          { item: "SEO Setup", value: "1,500 dh" },
          { item: "Google Maps", value: "1,000 dh" },
          { item: "SEO Optimization", value: "2,500 dh" }
        ],
        benefits: [
          "Professional online presence",
          "Immediate Google visibility",
          "Conversion-optimized site",
          "Integrated performance tracking"
        ],
        ideal: ["Startups", "Freelancers", "Small businesses"],
        timeline: "≈ 10 days"
      },
      {
        name: "Growth Boost",
        description: "Complete growth solution with multi-page site, blog and advanced SEO strategy.",
        includes: [
          { item: "Level 2 Website", value: "15,000 dh" },
          { item: "SEO Setup", value: "1,500 dh" },
          { item: "Google Maps", value: "1,000 dh" },
          { item: "SEO Optimization", value: "2,500 dh" }
        ],
        benefits: [
          "Professional site with blog",
          "Content marketing ready",
          "SEO-friendly architecture",
          "Advanced tracking and analytics"
        ],
        ideal: ["Growing SMEs", "E-commerce", "Agencies"],
        timeline: "≈ 18 days"
      },
      {
        name: "Premium Boost",
        description: "Enterprise premium platform with advanced features and complete SEO strategy.",
        includes: [
          { item: "Level 3 Website", value: "27,000 dh" },
          { item: "SEO Setup", value: "1,500 dh" },
          { item: "Google Maps", value: "1,000 dh" },
          { item: "SEO Optimization", value: "2,500 dh" }
        ],
        benefits: [
          "Premium web platform",
          "CRM and business tool integrations",
          "Optimal user experience",
          "Priority technical support"
        ],
        ideal: ["Large companies", "SaaS", "Advanced platforms"],
        timeline: "≈ 25 days"
      }
    ],
    features: [
      { title: "Fast Start", desc: "Launch your digital presence in weeks" },
      { title: "Optimized ROI", desc: "Best value with our bundles" },
      { title: "All-in-One", desc: "Site + SEO + local visibility integrated" },
      { title: "No Surprises", desc: "Fixed price, guaranteed timelines, measurable results" }
    ]
  },
  fr: {
    badge: "Formules Recommandées",
    title: "Lancez-Vous Avec Nos",
    titleGradient: "Bundles Complets",
    description: "Site professionnel + SEO complet = Meilleure valeur. Tout ce dont vous avez besoin pour démarrer votre présence digitale avec succès, dès le premier jour.",
    popular: "Plus Populaire",
    included: "Ce qui est inclus:",
    benefits: "Avantages:",
    idealFor: "Idéal pour:",
    choose: "Choisir",
    whyChoose: "Pourquoi Choisir un Bundle?",
    paymentTerms: "Modalités de Paiement Flexibles",
    paymentDescription: "Tous nos bundles sont disponibles avec paiement échelonné:",
    paymentSteps: [
      { percent: "50%", desc: "Au démarrage du projet" },
      { percent: "40%", desc: "À la livraison staging" },
      { percent: "10%", desc: "À la mise en ligne" }
    ],
    bundles: [
      {
        name: "Starter Boost",
        description: "Lancement digital rapide avec site landing page et configuration SEO complète.",
        includes: [
          { item: "Site Niveau 1", value: "8,000 dh" },
          { item: "SEO Setup", value: "1,500 dh" },
          { item: "Google Maps", value: "1,000 dh" },
          { item: "SEO Optimisation", value: "2,500 dh" }
        ],
        benefits: [
          "Présence en ligne professionnelle",
          "Visibilité Google immédiate",
          "Site optimisé pour conversions",
          "Suivi des performances intégré"
        ],
        ideal: ["Startups", "Freelancers", "Petites entreprises"],
        timeline: "≈ 10 jours"
      },
      {
        name: "Growth Boost",
        description: "Solution complète pour croissance avec site multi-pages, blog et stratégie SEO avancée.",
        includes: [
          { item: "Site Niveau 2", value: "15,000 dh" },
          { item: "SEO Setup", value: "1,500 dh" },
          { item: "Google Maps", value: "1,000 dh" },
          { item: "SEO Optimisation", value: "2,500 dh" }
        ],
        benefits: [
          "Site professionnel avec blog",
          "Content marketing ready",
          "Architecture SEO-friendly",
          "Tracking et analytics avancés"
        ],
        ideal: ["PME en croissance", "E-commerce", "Agences"],
        timeline: "≈ 18 jours"
      },
      {
        name: "Premium Boost",
        description: "Plateforme premium enterprise avec fonctionnalités avancées et stratégie SEO complète.",
        includes: [
          { item: "Site Niveau 3", value: "27,000 dh" },
          { item: "SEO Setup", value: "1,500 dh" },
          { item: "Google Maps", value: "1,000 dh" },
          { item: "SEO Optimisation", value: "2,500 dh" }
        ],
        benefits: [
          "Plateforme web premium",
          "Intégrations CRM et outils métier",
          "Expérience utilisateur optimale",
          "Support technique prioritaire"
        ],
        ideal: ["Grandes entreprises", "SaaS", "Plateformes avancées"],
        timeline: "≈ 25 jours"
      }
    ],
    features: [
      { title: "Démarrage Rapide", desc: "Lancez votre présence digitale en quelques semaines" },
      { title: "ROI Optimisé", desc: "Meilleur rapport qualité/prix avec nos bundles" },
      { title: "Tout-en-Un", desc: "Site + SEO + visibilité locale intégrés" },
      { title: "Sans Surprise", desc: "Prix fixe, délais garantis, résultats mesurables" }
    ]
  },
  pl: {
    badge: "Polecane Pakiety",
    title: "Zacznij z Naszymi",
    titleGradient: "Kompletnymi Pakietami",
    description: "Profesjonalna strona + kompleksowe SEO = Najlepsza wartość. Wszystko, czego potrzebujesz, aby z sukcesem rozpocząć swoją obecność cyfrową od pierwszego dnia.",
    popular: "Najpopularniejszy",
    included: "Co jest zawarte:",
    benefits: "Korzyści:",
    idealFor: "Idealny dla:",
    choose: "Wybierz",
    whyChoose: "Dlaczego Wybrać Pakiet?",
    paymentTerms: "Elastyczne Warunki Płatności",
    paymentDescription: "Wszystkie nasze pakiety dostępne są z płatnością ratalną:",
    paymentSteps: [
      { percent: "50%", desc: "Na początku projektu" },
      { percent: "40%", desc: "Przy dostawie staging" },
      { percent: "10%", desc: "Przy uruchomieniu" }
    ],
    bundles: [
      {
        name: "Starter Boost",
        description: "Szybki start cyfrowy z landing page i kompletną konfiguracją SEO.",
        includes: [
          { item: "Strona Poziom 1", value: "8,000 PLN" },
          { item: "Konfiguracja SEO", value: "1,500 PLN" },
          { item: "Google Maps", value: "1,000 PLN" },
          { item: "Optymalizacja SEO", value: "2,500 PLN" }
        ],
        benefits: [
          "Profesjonalna obecność online",
          "Natychmiastowa widoczność w Google",
          "Strona zoptymalizowana pod konwersje",
          "Zintegrowane śledzenie wydajności"
        ],
        ideal: ["Startupy", "Freelancerzy", "Małe firmy"],
        timeline: "≈ 10 dni"
      },
      {
        name: "Growth Boost",
        description: "Kompletne rozwiązanie rozwojowe z wielostronicową witryną, blogiem i zaawansowaną strategią SEO.",
        includes: [
          { item: "Strona Poziom 2", value: "15,000 PLN" },
          { item: "Konfiguracja SEO", value: "1,500 PLN" },
          { item: "Google Maps", value: "1,000 PLN" },
          { item: "Optymalizacja SEO", value: "2,500 PLN" }
        ],
        benefits: [
          "Profesjonalna strona z blogiem",
          "Gotowa do content marketingu",
          "Architektura przyjazna SEO",
          "Zaawansowane śledzenie i analityka"
        ],
        ideal: ["Rozwijające się MŚP", "E-commerce", "Agencje"],
        timeline: "≈ 18 dni"
      },
      {
        name: "Premium Boost",
        description: "Platforma premium dla przedsiębiorstw z zaawansowanymi funkcjami i kompletną strategią SEO.",
        includes: [
          { item: "Strona Poziom 3", value: "27,000 PLN" },
          { item: "Konfiguracja SEO", value: "1,500 PLN" },
          { item: "Google Maps", value: "1,000 PLN" },
          { item: "Optymalizacja SEO", value: "2,500 PLN" }
        ],
        benefits: [
          "Platforma webowa premium",
          "Integracje CRM i narzędzi biznesowych",
          "Optymalna obsługa użytkownika",
          "Priorytetowe wsparcie techniczne"
        ],
        ideal: ["Duże firmy", "SaaS", "Zaawansowane platformy"],
        timeline: "≈ 25 dni"
      }
    ],
    features: [
      { title: "Szybki Start", desc: "Uruchom swoją obecność cyfrową w ciągu tygodni" },
      { title: "Zoptymalizowany ROI", desc: "Najlepsza wartość z naszymi pakietami" },
      { title: "Wszystko w Jednym", desc: "Strona + SEO + widoczność lokalna zintegrowane" },
      { title: "Bez Niespodzianek", desc: "Stała cena, gwarantowane terminy, mierzalne wyniki" }
    ]
  }
};

const bundles = [
  { total: 13000, gradient: "from-green-500 to-emerald-500", popular: false },
  { total: 20000, gradient: "from-blue-500 to-purple-500", popular: true },
  { total: 32000, gradient: "from-orange-500 to-red-500", popular: false }
];

const bundleFeatures = [
  { icon: Zap },
  { icon: TrendingUp },
  { icon: Sparkles },
  { icon: Check }
];

function Bundles({ language }: BundlesProps) {
  const t = content[language];

  return (
    <section id="bundles" className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-background to-muted/20 !w-full !h-[2019px]">
      {/* Background Decoration */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary border-primary/20">
            <Rocket className="h-3 w-3 mr-2" />
            {t.badge}
          </Badge>
          <h2 className="mb-6">
            {t.title} <span className="gradient-text">{t.titleGradient}</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-balance">
            {t.description}
          </p>
        </div>

        {/* Bundle Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {bundles.map((bundle, idx) => {
            const bundleContent = t.bundles[idx];
            return (
              <Card key={bundleContent.name} className={`group relative p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-border/50 backdrop-blur-sm overflow-hidden ${bundle.popular ? "ring-2 ring-primary shadow-xl scale-105" : ""}`}>
                {bundle.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-br from-primary to-purple-600 text-white text-xs font-semibold px-4 py-1 rounded-bl-2xl">
                    {t.popular}
                  </div>
                )}

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${bundle.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${bundle.gradient} flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <Rocket className="h-8 w-8 text-white" />
                  </div>

                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-4">{bundleContent.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {bundleContent.description}
                    </p>
                  </div>

                  {/* Includes with Values */}
                  <div className="space-y-3 mb-6 bg-muted/30 rounded-xl p-4">
                    <h4 className="text-sm font-semibold text-primary mb-3">{t.included}</h4>
                    {bundleContent.includes.map((item) => (
                      <div key={item.item} className="flex items-center gap-3">
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{item.item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Benefits */}
                  <div className="border-t border-border/50 pt-6 mb-6">
                    <h4 className="text-sm font-semibold mb-3">{t.benefits}</h4>
                    <div className="space-y-2">
                      {bundleContent.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                          <span className="text-xs text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Ideal For & Timeline */}
                  <div className="border-t border-border/50 pt-6 mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-semibold">{t.idealFor}</h4>
                      <Badge variant="outline" className="text-xs">{bundleContent.timeline}</Badge>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {bundleContent.ideal.map((type) => (
                        <Badge key={type} variant="secondary" className="text-xs">
                          {type}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Button className="w-full rounded-xl" size="lg">
                    {t.choose} {bundleContent.name}
                  </Button>
                </div>

                {/* Decorative Corner */}
                <div className={`absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br ${bundle.gradient} opacity-5 rounded-tl-full`}></div>
              </Card>
            );
          })}
        </div>

        {/* Bundle Features */}
        <div className="max-w-5xl mx-auto mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">{t.whyChoose}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bundleFeatures.map((feature, idx) => (
              <Card key={t.features[idx].title} className="p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{t.features[idx].title}</h4>
                <p className="text-xs text-muted-foreground">{t.features[idx].desc}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Payment Terms */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <Card className="p-8 bg-primary/5">
            <h3 className="text-xl font-bold mb-4">{t.paymentTerms}</h3>
            <p className="text-muted-foreground mb-6">
              {t.paymentDescription}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {t.paymentSteps.map((step) => (
                <div key={step.percent}>
                  <div className="text-3xl font-bold text-primary mb-2">{step.percent}</div>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Bundles;