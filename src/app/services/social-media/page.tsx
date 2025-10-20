"use client";

import { Facebook, Instagram, TrendingUp, Users, Target, BarChart3, ArrowRight, Sparkles, MessageCircle, Calendar, Image as ImageIcon, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SocialMedia from "@/components/pricing/SocialMedia";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { servicesTranslations } from "@/i18n/services-translations";

export default function SocialMediaBlog() {
  const { language } = useLanguage();
  const t = servicesTranslations.socialMedia[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/10 to-background">
      {/* Hero Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-1/3 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-pink-500/10 to-purple-500/10 text-primary border-primary/20 text-sm px-4 py-2">
              <Facebook className="h-4 w-4 mr-1" />
              <Instagram className="h-4 w-4 mr-2" />
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
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-3">
                  {[Users, TrendingUp, MessageCircle, Target][index] && 
                    (() => {
                      const Icon = [Users, TrendingUp, MessageCircle, Target][index];
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
              <Card className="p-8 mb-6 bg-gradient-to-br from-pink-500/5 to-purple-500/5 border-primary/20">
                <p className="text-lg leading-relaxed mb-0">
                  {t.section1.intro}
                </p>
              </Card>
            </div>

            {/* Section 2 - Benefits Grid */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">{t.section2.title}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                {t.section2.benefits.map((benefit) => (
                  <Card key={benefit.title} className="p-6 hover:shadow-xl transition-all group">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        {benefit.title === (language === "en" ? "Brand Visibility and Awareness" : language === "fr" ? "Visibilité et Notoriété de Marque" : "Widoczność i Świadomość Marki") && <TrendingUp className="h-6 w-6 text-primary" />}
                        {benefit.title === (language === "en" ? "Direct Customer Engagement" : language === "fr" ? "Engagement Client Direct" : "Bezpośrednie Zaangażowanie Klientów") && <MessageCircle className="h-6 w-6 text-primary" />}
                        {benefit.title === (language === "en" ? "Qualified Lead Generation" : language === "fr" ? "Génération de Leads Qualifiés" : "Generowanie Wykwalifikowanych Leadów") && <Target className="h-6 w-6 text-primary" />}
                        {benefit.title === (language === "en" ? "Valuable Audience Insights" : language === "fr" ? "Insights Précieux sur Votre Audience" : "Cenne Wglądy w Publiczność") && <BarChart3 className="h-6 w-6 text-primary" />}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                        <Badge variant="secondary" className="text-xs mb-3">{benefit.stats}</Badge>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.desc}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Section 3 - What We Do */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">{t.section3.title}</h2>
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-purple-500/5">
                <p className="text-lg leading-relaxed mb-6">
                  {t.section3.intro}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
                  {t.section3.features.map((feature) => {
                    const iconMap: { [key: string]: any } = {
                      "Strategic Editorial Calendar": Calendar,
                      "Calendrier Éditorial Stratégique": Calendar,
                      "Strategiczny Kalendarz Redakcyjny": Calendar,
                      "Professional Visual Creation": ImageIcon,
                      "Création Visuelle Professionnelle": ImageIcon,
                      "Profesjonalne Tworzenie Wizualne": ImageIcon,
                      "Active Community Management": MessageCircle,
                      "Community Management Actif": MessageCircle,
                      "Aktywne Zarządzanie Społecznością": MessageCircle,
                      "Analytics and Optimization": BarChart3,
                      "Analytics et Optimisation": BarChart3,
                      "Analityka i Optymalizacja": BarChart3
                    };
                    const Icon = iconMap[feature.title];
                    return (
                      <div key={feature.title} className="flex items-start gap-3 p-4 rounded-lg bg-background/50">
                        {Icon && <Icon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />}
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

            {/* Section 4 - Results */}
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

            {/* Section 5 - Platform Details */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">{t.section5.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                {t.section5.platforms.map((platform) => {
                  const Icon = platform.platform === "Facebook" ? Facebook : Instagram;
                  const color = platform.platform === "Facebook" ? "from-blue-500 to-blue-600" : "from-purple-500 to-pink-500";
                  return (
                    <Card key={platform.platform} className="p-6 hover:shadow-xl transition-all overflow-hidden relative group">
                      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center`}>
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{platform.platform}</h3>
                            <Badge variant="secondary" className="text-xs">{platform.users} {language === "en" ? "users" : "utilisateurs"}</Badge>
                          </div>
                        </div>
                        <div className="space-y-3 text-sm">
                          <div>
                            <div className="text-xs font-semibold text-muted-foreground mb-1">{language === "en" ? "Primary Audience" : "Audience Principale"}</div>
                            <div>{platform.audience}</div>
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-muted-foreground mb-1">{language === "en" ? "Popular Formats" : "Formats Populaires"}</div>
                            <div>{platform.format}</div>
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-muted-foreground mb-1">{language === "en" ? "Strength" : "Point Fort"}</div>
                            <div>{platform.strength}</div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-primary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">{t.cta.title}</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {t.cta.subtitle}
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="#pricing">
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

      {/* Pricing Section */}
      <div id="pricing">
        <SocialMedia language={language} />
      </div>
      
      {/* Footer */}
      <Footer language={language} />
    </div>
  );
}