"use client";

import { Rocket, Zap, Target, TrendingUp, ArrowRight, Sparkles, Award, CheckCircle2, Globe, Users, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Bundles from "@/components/pricing/Bundles";
import { useLanguage } from "@/context/LanguageContext";
import { servicesTranslations } from "@/i18n/services-translations";

export default function BundlesBlog() {
  const { language } = useLanguage();
  const t = servicesTranslations.bundles[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/10 to-background">
      {/* Hero Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary border-primary/20 text-sm px-4 py-2">
              <Rocket className="h-4 w-4 mr-2" />
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
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center mx-auto mb-3">
                  {[Zap, Clock, TrendingUp, CheckCircle2][index] && 
                    (() => {
                      const Icon = [Zap, Clock, TrendingUp, CheckCircle2][index];
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
                Pourquoi Choisir un Bundle Complet?
              </h2>
              <Card className="p-8 mb-6 bg-gradient-to-br from-primary/5 to-purple-500/5 border-primary/20">
                <p className="text-lg leading-relaxed mb-0">
                  Un site web sans référencement est comme un magasin <strong>sans enseigne</strong>—il existe, mais personne ne le trouve. 
                  Un référencement sans site professionnel envoie du trafic vers une <strong>mauvaise première impression</strong>. 
                  Nos bundles combinent les deux pour créer une <strong>présence digitale complète et performante</strong> dès le jour 1.
                </p>
              </Card>
            </div>

            {/* Section 2 - Benefits Grid */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Les Avantages d'une Approche Intégrée</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                {[
                  {
                    icon: Target,
                    title: "Meilleur ROI Immédiat",
                    desc: "Acheter site web et SEO séparément coûte plus cher et prend plus de temps. Nos bundles offrent une réduction significative et garantissent que votre site est optimisé pour le référencement dès sa conception—pas en afterthought.",
                    stats: "Économie de 10-15%"
                  },
                  {
                    icon: CheckCircle2,
                    title: "Cohérence Stratégique",
                    desc: "Quand le développement web et le SEO sont gérés par la même équipe, ils travaillent en harmonie parfaite. Votre site est construit avec une architecture SEO-friendly native, les mots-clés stratégiques informent le contenu, et l'optimisation technique est intégrée.",
                    stats: "Synergie maximale"
                  },
                  {
                    icon: Zap,
                    title: "Lancement Plus Rapide",
                    desc: "Au lieu d'attendre que le site soit fini pour commencer le SEO, tout avance en parallèle. Votre Google Business, Search Console, Analytics, et optimisation on-page sont prêts en même temps que votre site.",
                    stats: "Lancement 30-40% plus rapide"
                  },
                  {
                    icon: Globe,
                    title: "Visibilité Immédiate",
                    desc: "Avec notre bundle, vous n'avez pas un site invisible pendant des mois. Dès le lancement, votre configuration technique est optimale, votre Google Business vous rend visible localement, et votre site commence à grimper dans les résultats.",
                    stats: "SEO dès le jour 1"
                  },
                  {
                    icon: Users,
                    title: "Moins de Coordination, Plus de Résultats",
                    desc: "Travailler avec plusieurs prestataires crée des frictions, des malentendus, et des délais. Avec un bundle, vous avez un seul point de contact, une seule équipe alignée sur vos objectifs, et une exécution fluide.",
                    stats: "Un seul interlocuteur"
                  },
                  {
                    icon: TrendingUp,
                    title: "Performance SEO Supérieure",
                    desc: "Sites construits avec le SEO en tête dès le départ performent +50% mieux que ceux optimisés après coup. L'architecture, la vitesse, et la structure sont nativement optimales pour Google.",
                    stats: "+50% de performance SEO"
                  }
                ].map((benefit) => (
                  <Card key={benefit.title} className="p-6 hover:shadow-xl transition-all group">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <benefit.icon className="h-6 w-6 text-primary" />
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

            {/* Section 3 - Bundle Details */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Nos Bundles Expliqués</h2>
              
              <div className="space-y-6 not-prose">
                {[
                  {
                    name: "Starter Boost",
                    gradient: "from-green-500 to-emerald-500",
                    icon: "🚀",
                    desc: "Parfait pour startups, freelancers, et petites entreprises qui lancent leur présence digitale.",
                    includes: ["Landing page professionnelle (1-3 sections)", "Setup SEO complet (Analytics, Search Console, metas)", "Google Business optimisé pour visibilité locale", "Optimisation on-page jusqu'à 5 pages"],
                    results: "Tout ce qu'il faut pour être trouvable et crédible en ligne",
                    timeline: "~10 jours"
                  },
                  {
                    name: "Growth Boost",
                    gradient: "from-blue-500 to-purple-500",
                    icon: "📈",
                    popular: true,
                    desc: "Le choix des PME en croissance et e-commerces. Site multi-pages avec blog intégré pour content marketing.",
                    includes: ["Site 3-5 pages + blog professionnel", "Setup SEO avec tracking avancé", "Google Business optimisé avec gestion des avis", "Optimisation on-page complète + recherche mots-clés"],
                    results: "Présence professionnelle qui génère des leads organiques continuellement",
                    timeline: "~18 jours"
                  },
                  {
                    name: "Premium Boost",
                    gradient: "from-orange-500 to-red-500",
                    icon: "👑",
                    desc: "Solution enterprise pour grandes entreprises, SaaS, et plateformes avancées.",
                    includes: ["Plateforme 6-10 pages avec fonctionnalités avancées", "Intégrations CRM et outils métier", "Setup SEO enterprise-grade", "Google Business avec stratégie locale avancée", "Architecture SEO complexe"],
                    results: "Dominez votre marché en ligne avec une plateforme complète",
                    timeline: "~25 jours"
                  }
                ].map((bundle) => (
                  <Card key={bundle.name} className={`p-8 hover:shadow-xl transition-all overflow-hidden relative group ${bundle.popular ? 'ring-2 ring-primary' : ''}`}>
                    {bundle.popular && (
                      <div className="absolute top-0 right-0 bg-primary text-white text-xs font-semibold px-4 py-1 rounded-bl-xl">
                        Plus Populaire
                      </div>
                    )}
                    <div className={`absolute inset-0 bg-gradient-to-br ${bundle.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <div className="text-4xl">{bundle.icon}</div>
                          <div>
                            <h3 className="text-2xl font-bold">{bundle.name}</h3>
                            <Badge variant="outline">{bundle.timeline}</Badge>
                          </div>
                        </div>
                      </div>
                      <p className="text-lg mb-6">{bundle.desc}</p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3">Ce qui est inclus:</h4>
                        <ul className="space-y-2">
                          {bundle.includes.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Card className="p-4 bg-primary/5 border-primary/20">
                        <p className="text-sm font-semibold text-primary mb-0">{bundle.results}</p>
                      </Card>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Section 4 - ROI Comparison */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Award className="h-8 w-8 text-primary" />
                ROI: Bundle vs Approche Fragmentée
              </h2>
              <Card className="p-8 bg-gradient-to-br from-green-500/5 to-emerald-500/5 border-green-500/20">
                <p className="text-lg mb-6">Comparons un investissement bundle vs services séparés:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                  {[
                    { label: "Coût", bundle: "Économie 10-15%", separate: "Prix plein" },
                    { label: "Délai de lancement", bundle: "30-40% plus rapide", separate: "Séquentiel, plus lent" },
                    { label: "Performance SEO", bundle: "+50% meilleure", separate: "Optimisation après coup" },
                    { label: "Génération de leads", bundle: "Dès le lancement", separate: "Attente 2-3 mois" },
                    { label: "Coordination", bundle: "0 friction", separate: "Gestion 2+ prestataires" },
                    { label: "Cohérence", bundle: "Stratégie intégrée", separate: "Risque de désalignement" }
                  ].map((comparison) => (
                    <div key={comparison.label} className="p-4 rounded-lg bg-background/50 border border-border">
                      <div className="font-semibold mb-2">{comparison.label}</div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-green-600 dark:text-green-400">✓ Bundle: {comparison.bundle}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm mt-1">
                        <span className="text-muted-foreground">✗ Séparé: {comparison.separate}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Section 5 - Payment Terms */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Modalités de Paiement Flexibles</h2>
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-purple-500/5">
                <p className="text-lg mb-6">Nous facilitons votre investissement avec un paiement échelonné:</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose">
                  {[
                    { step: "50%", label: "Au démarrage", desc: "Lancement du projet" },
                    { step: "40%", label: "À la livraison staging", desc: "Avant mise en ligne" },
                    { step: "10%", label: "À la mise en ligne", desc: "Finalisation" }
                  ].map((payment) => (
                    <div key={payment.step} className="text-center p-6 rounded-xl bg-background/50 border border-border">
                      <div className="text-4xl font-bold text-primary mb-2">{payment.step}</div>
                      <div className="font-semibold mb-1">{payment.label}</div>
                      <div className="text-sm text-muted-foreground">{payment.desc}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-purple-500/10 to-blue-500/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Prêt à Lancer Votre Présence Digitale Complète?</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Choisissez le bundle adapté à vos besoins et démarrez votre succès digital aujourd'hui.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="#pricing">
                <Button size="lg" className="rounded-xl text-lg px-8 py-6">
                  Voir Nos Bundles
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" size="lg" className="rounded-xl text-lg px-8 py-6">
                  Retour à l'Accueil
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <div id="pricing">
        <Bundles language="fr" />
      </div>
    </div>
  );
}