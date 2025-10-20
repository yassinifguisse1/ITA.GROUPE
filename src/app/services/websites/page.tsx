"use client";

import { Globe, Zap, TrendingUp, Users, Target, ArrowRight, Sparkles, Code, Gauge, Shield, Award, CheckCircle2, Monitor, Smartphone, Check, Layout } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { servicesTranslations } from "@/i18n/services-translations";

const websiteServices = [
  {
    name: "Niveau 1",
    icon: Layout,
    gradient: "from-[#163C2E] to-[#239D89]",
    description: "Landing page efficace, 1-3 sections, idéale pour présenter un service ou capturer des leads.",
    features: [
      "1-3 sections/pages optimisées",
      "Design responsive (mobile + desktop)",
      "Formulaire de contact intégré",
      "Animations basiques et visuels",
      "SEO-ready (métas, structure H1-H6)",
      "Hébergement et maintenance (3 mois)",
      "1 révision majeure + 2 mineures"
    ],
    benefits: [
      "Mise en ligne rapide (7-10 jours)",
      "Design professionnel",
      "Optimisé conversions",
      "Support technique inclus"
    ],
    ideal: ["Freelancers", "Startups", "Services locaux"],
    timeline: "7-10 jours"
  },
  {
    name: "Niveau 2",
    icon: Monitor,
    gradient: "from-[#239D89] to-[#163C2E]",
    popular: true,
    description: "Site multi-pages avec blog et fonctionnalités avancées. Solution complète pour entreprises en croissance.",
    features: [
      "3-5 pages complètes + blog",
      "Design sur-mesure avancé",
      "Animations interactives",
      "Optimisation SEO approfondie",
      "Intégration analytics & tracking",
      "Formulaires multiples et CTA",
      "Hébergement et maintenance (6 mois)",
      "2 révisions majeures + 3 mineures"
    ],
    benefits: [
      "Site professionnel complet",
      "Content marketing ready",
      "Performance optimisée",
      "Support prioritaire 6 mois"
    ],
    ideal: ["PME", "E-commerce", "Agences"],
    timeline: "14-18 jours"
  },
  {
    name: "Niveau 3",
    icon: Code,
    gradient: "from-[#163C2E] via-[#239D89] to-[#163C2E]",
    description: "Plateforme web avancée avec fonctionnalités sur-mesure et intégrations complexes.",
    features: [
      "6-10 pages + architecture complexe",
      "Design premium et branding",
      "Animations avancées et interactions",
      "Intégrations CRM/API tierces",
      "Espace client ou dashboard",
      "Optimisation performance maximale",
      "Hébergement premium (12 mois)",
      "3 révisions majeures + 3 mineures"
    ],
    benefits: [
      "Solution enterprise-grade",
      "Évolutivité maximale",
      "Intégrations business",
      "Support technique dédié 1 an"
    ],
    ideal: ["Grandes entreprises", "SaaS", "Plateformes"],
    timeline: "20-25 jours"
  }
];

const websiteFeatures = [
  { icon: Smartphone, title: "100% Responsive", desc: "Parfait sur tous les appareils" },
  { icon: Zap, title: "Performance Optimale", desc: "Chargement ultra-rapide" },
  { icon: Globe, title: "SEO-Ready", desc: "Prêt pour le référencement" },
  { icon: Check, title: "Standards Web", desc: "Code propre et moderne" }
];

export default function WebsitesBlog() {
  const { language } = useLanguage();
  const t = servicesTranslations.websites[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/10 to-background">
      {/* Hero Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-primary border-primary/20 text-sm px-4 py-2">
              <Globe className="h-4 w-4 mr-2" />
              {t.badge}
            </Badge>
            <h1 className="mb-6 text-5xl md:text-6xl font-extrabold">
              {t.hero.title} <span className="gradient-text">{t.hero.titleHighlight}</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance leading-relaxed">
              {t.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border/50 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {t.stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-3">
                  {[Users, TrendingUp, Target, Zap][index] && 
                    (() => {
                      const Icon = [Users, TrendingUp, Target, Zap][index];
                      return <Icon className="h-6 w-6 text-primary" />;
                    })()
                  }
                </div>
                <div className="text-4xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm font-semibold mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.desc}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <article className="prose prose-lg dark:prose-invert max-w-none">
            {/* Section 1 */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Sparkles className="h-8 w-8 text-primary" />
                {t.section1.title}
              </h2>
              <Card className="p-8 mb-6 bg-gradient-to-br from-blue-500/5 to-purple-500/5 border-primary/20">
                <p className="text-lg leading-relaxed mb-0">
                  {t.section1.intro}
                </p>
              </Card>
            </div>

            {/* Section 2 - Benefits Grid */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">{t.section2.title}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                {t.section2.benefits.map((benefit, index) => {
                  const icons = [Shield, Zap, Globe, Target, Code, TrendingUp];
                  const Icon = icons[index];
                  return (
                    <Card key={benefit.title} className="p-6 hover:shadow-xl transition-all group">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                          <Badge variant="secondary" className="text-xs mb-3">{benefit.stats}</Badge>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{benefit.desc}</p>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Section 3 - What Makes Us Different */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">{t.section3.title}</h2>
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-purple-500/5">
                <p className="text-lg leading-relaxed mb-6">
                  {t.section3.intro}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
                  {t.section3.features.map((feature, index) => {
                    const icons = [Target, Gauge, Globe, TrendingUp, Zap, Code];
                    const Icon = icons[index];
                    return (
                      <div key={feature.title} className="flex items-start gap-3 p-4 rounded-lg bg-background/50">
                        <Icon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-semibold mb-1">{feature.title}</div>
                          <div className="text-sm text-muted-foreground">{feature.desc}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </div>

            {/* Section 4 - ROI Results */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Award className="h-8 w-8 text-primary" />
                {t.section4.title}
              </h2>
              <Card className="p-8 bg-gradient-to-br from-green-500/5 to-emerald-500/5 border-green-500/20">
                <p className="text-lg mb-6">{t.section4.intro}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
                  {t.section4.results.map((result) => (
                    <div key={result.label} className="flex items-start gap-4 p-4 rounded-lg bg-background/50">
                      <div className="text-3xl font-bold text-green-600 dark:text-green-400">{result.metric}</div>
                      <div>
                        <div className="font-semibold">{result.label}</div>
                        <div className="text-sm text-muted-foreground">{result.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Section 5 - Why Now */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">{t.section5.title}</h2>
              <Card className="p-8 bg-gradient-to-br from-orange-500/5 to-red-500/5 border-orange-500/20">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-8 w-8 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-lg leading-relaxed">
                      {t.section5.content}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </article>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-muted/20 to-background">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>

        <div className="container mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-primary border-primary/20">
              <Monitor className="h-3 w-3 mr-2" />
              {t.badge}
            </Badge>
            <h2 className="mb-6 text-4xl font-bold">
              {t.pricing.sectionTitle}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground text-balance">
              {t.pricing.sectionSubtitle}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {websiteServices.map((service) => (
              <Card
                key={service.name}
                className="group relative p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-border/50 backdrop-blur-sm overflow-hidden"
              >
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-br from-primary to-purple-600 text-white text-xs font-semibold px-4 py-1 rounded-bl-2xl">
                    {t.pricing.popularBadge}
                  </div>
                )}

                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold">{service.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <h4 className="text-sm font-semibold text-primary">Services inclus:</h4>
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-border/50 pt-6 mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-semibold">Idéal pour:</h4>
                      <Badge variant="outline" className="text-xs">{service.timeline}</Badge>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {service.ideal.map((type) => (
                        <Badge key={type} variant="secondary" className="text-xs">
                          {type}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full rounded-xl" size="lg">
                    {t.pricing.orderButton}
                  </Button>
                </div>

                <div className={`absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-5 rounded-tl-full`}></div>
              </Card>
            ))}
          </div>

          {/* Features Section */}
          <div className="max-w-5xl mx-auto mb-16">
            <h3 className="text-2xl font-bold text-center mb-12">{t.pricing.allInclude}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {websiteFeatures.map((feature) => (
                <Card key={feature.title} className="p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground">{feature.desc}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-12">{t.pricing.processTitle}</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Brief", desc: "Analyse de vos besoins" },
                { step: "2", title: "Design", desc: "Maquettes et validation" },
                { step: "3", title: "Développement", desc: "Code et intégration" },
                { step: "4", title: "Lancement", desc: "Tests et mise en ligne" }
              ].map((phase) => (
                <div key={phase.step}>
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-xl flex items-center justify-center mx-auto mb-3">
                    {phase.step}
                  </div>
                  <h4 className="font-semibold mb-2">{phase.title}</h4>
                  <p className="text-xs text-muted-foreground">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ 
        faqs={t.faq.items}
        title={t.faq.title}
        description={t.faq.description}
      />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-primary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">{t.cta.title}</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {t.cta.subtitle}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/#web">
                <Button size="lg" className="rounded-xl text-lg px-8 py-6">
                  {t.cta.primary}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" size="lg" className="rounded-xl text-lg px-8 py-6">
                  {t.cta.secondary}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer language={language} />
    </div>
  );
}