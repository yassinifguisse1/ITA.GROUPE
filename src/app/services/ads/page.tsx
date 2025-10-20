"use client";

import { Megaphone, Target, TrendingUp, Zap, ArrowRight, Sparkles, BarChart3, Award, Users, DollarSign, MousePointerClick } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import AdsServices from "@/components/pricing/AdsServices";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { servicesTranslations } from "@/i18n/services-translations";

export default function AdsBlog() {
  const { language } = useLanguage();
  const t = servicesTranslations.ads[language];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/10 to-background">
      {/* Hero Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-orange-500/10 to-purple-500/10 text-primary border-primary/20 text-sm px-4 py-2">
              <Megaphone className="h-4 w-4 mr-2" />
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
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-3">
                  {[DollarSign, Target, TrendingUp, MousePointerClick][index] && 
                    (() => {
                      const Icon = [DollarSign, Target, TrendingUp, MousePointerClick][index];
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
                Pourquoi Investir dans la Publicité en Ligne?
              </h2>
              <Card className="p-8 mb-6 bg-gradient-to-br from-orange-500/5 to-purple-500/5 border-primary/20">
                <p className="text-lg leading-relaxed mb-0">
                  La publicité en ligne (Facebook, Instagram, Google, TikTok) offre ce qu'aucun autre canal marketing 
                  ne peut: des <strong>résultats immédiats</strong>, un <strong>ciblage ultra-précis</strong>, et une <strong>scalabilité illimitée</strong>. 
                  Pour chaque dirham investi, vous savez exactement combien vous gagnez—et vous pouvez multiplier 
                  ce qui fonctionne instantanément.
                </p>
              </Card>
            </div>

            {/* Section 2 - Benefits Grid */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Les Avantages Décisifs des Ads en Ligne</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                {[
                  {
                    icon: Zap,
                    title: "Résultats Instantanés et Prévisibles",
                    desc: "Contrairement au SEO qui prend des mois, les ads génèrent du trafic et des conversions dès le premier jour. Lancez une campagne le matin, voyez les premiers leads l'après-midi. Cette rapidité permet de tester des offres, d'ajuster la stratégie, et d'optimiser continuellement.",
                    stats: "Résultats en 24-48h"
                  },
                  {
                    icon: Target,
                    title: "Ciblage Laser-Précis",
                    desc: "Les plateformes publicitaires permettent de cibler avec une précision chirurgicale: âge, localisation, intérêts, comportements d'achat, et même audiences lookalike qui ressemblent à vos meilleurs clients. Vous ne payez que pour atteindre exactement les personnes susceptibles d'acheter.",
                    stats: "Précision de ciblage maximale"
                  },
                  {
                    icon: TrendingUp,
                    title: "Scalabilité Sans Limites",
                    desc: "Trouvez une campagne profitable? Multipliez simplement le budget. Contrairement au SEO ou aux réseaux sociaux organiques limités par le temps, les ads peuvent scaler instantanément. Budget de 1000 dh qui génère 5000 dh? Passez à 10,000 dh et générez 50,000 dh.",
                    stats: "Croissance exponentielle"
                  },
                  {
                    icon: BarChart3,
                    title: "Tracking et Attribution Parfaits",
                    desc: "Chaque clic, vue, et conversion est tracké avec précision. Vous savez exactement quel ad, quel audience, et quel message génère des résultats. Cette intelligence permet d'optimiser continuellement et d'éliminer ce qui ne fonctionne pas.",
                    stats: "Attribution 100% précise"
                  },
                  {
                    icon: Users,
                    title: "Retargeting et Nurturing Automatisé",
                    desc: "Les ads permettent de 'suivre' vos visiteurs après leur première interaction. Visiteur qui n'a pas acheté? Retargetez-le avec une offre spéciale. Client existant? Proposez des upsells. Cette nurturing automatique augmente dramatiquement les taux de conversion globaux.",
                    stats: "Conversion rates x3-5"
                  },
                  {
                    icon: Zap,
                    title: "Flexibilité et Agilité Marketing",
                    desc: "Besoin de booster les ventes pour un événement spécial? Lancement d'un nouveau produit? Campagne saisonnière? Les ads permettent de pivoter instantanément, d'amplifier des promotions, et de réagir aux opportunités de marché en temps réel.",
                    stats: "Réactivité instantanée"
                  }
                ].map((benefit) => (
                  <Card key={benefit.title} className="p-6 hover:shadow-xl transition-all group">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
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

            {/* Section 3 - Our Approach */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Notre Approche Ads Performante</h2>
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-purple-500/5">
                <p className="text-lg leading-relaxed mb-6">
                  Nous ne lançons pas simplement des campagnes—nous construisons des <strong>machines à ROI</strong>:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                  {[
                    { icon: Target, title: "Setup Professionnel", desc: "Pixel tracking, conversions avancées, UTM parameters, et audiences stratégiques" },
                    { icon: BarChart3, title: "Gestion Active", desc: "Optimisation continue, A/B testing, ajustements de ciblage et budgets" },
                    { icon: Sparkles, title: "Création de Contenu", desc: "Visuels et vidéos professionnels optimisés pour la conversion" },
                    { icon: TrendingUp, title: "Reporting Transparent", desc: "Suivi précis du ROI, CPA, ROAS, et recommandations d'amélioration" }
                  ].map((feature) => (
                    <div key={feature.title} className="flex items-start gap-4 p-5 rounded-xl bg-background/50 border border-border/50">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-bold text-lg mb-1">{feature.title}</div>
                        <div className="text-sm text-muted-foreground">{feature.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Section 4 - Platforms */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Plateformes et Stratégies</h2>
              
              <div className="space-y-6 not-prose">
                {[
                  {
                    platform: "Facebook & Instagram Ads",
                    icon: "📱",
                    gradient: "from-blue-500 to-purple-500",
                    desc: "Idéal pour B2C, e-commerce, et génération de leads. Ciblage comportemental exceptionnel et formats visuels engageants.",
                    audience: "25-54 ans (Facebook), 18-34 ans (Instagram)",
                    strength: "Meilleur pour engagement et conversions e-commerce"
                  },
                  {
                    platform: "Google Ads",
                    icon: "🔍",
                    gradient: "from-green-500 to-blue-500",
                    desc: "Parfait pour capter l'intention d'achat active. Les gens qui recherchent votre produit/service sont déjà en mode achat—vous n'avez qu'à apparaître au bon moment.",
                    audience: "Tous âges, haute intention d'achat",
                    strength: "ROI typiquement plus élevé mais CPC plus cher"
                  },
                  {
                    platform: "TikTok Ads",
                    icon: "🎵",
                    gradient: "from-pink-500 to-red-500",
                    desc: "Plateforme explosive pour atteindre les 18-30 ans. Engagement exceptionnellement élevé et coûts encore compétitifs.",
                    audience: "18-30 ans, très engagés",
                    strength: "Idéal pour marques jeunes et produits tendance"
                  }
                ].map((platform) => (
                  <Card key={platform.platform} className="p-6 hover:shadow-xl transition-all overflow-hidden relative group">
                    <div className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="text-4xl">{platform.icon}</div>
                        <h3 className="text-2xl font-bold">{platform.platform}</h3>
                      </div>
                      <p className="text-lg mb-4">{platform.desc}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <div className="text-xs font-semibold text-muted-foreground mb-1">Audience</div>
                          <div className="text-sm">{platform.audience}</div>
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-muted-foreground mb-1">Point Fort</div>
                          <div className="text-sm">{platform.strength}</div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Section 5 - Results */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Award className="h-8 w-8 text-primary" />
                Résultats Attendus
              </h2>
              <Card className="p-8 bg-gradient-to-br from-green-500/5 to-emerald-500/5 border-green-500/20">
                <p className="text-lg mb-6">Nos clients voient typiquement:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
                  {[
                    { metric: "3:1 à 8:1", label: "ROAS (Return On Ad Spend)", time: "selon l'industrie et la maturité" },
                    { metric: "40-60%", label: "Réduction du CPA", time: "après optimisation initiale" },
                    { metric: "+200%", label: "Croissance des conversions", time: "en 6 mois avec scaling progressif" },
                    { metric: "100%", label: "Attribution claire", time: "de chaque dirham investi" }
                  ].map((result) => (
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
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500/10 via-purple-500/10 to-primary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Prêt à Scaler Votre Croissance?</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Lancez des campagnes publicitaires professionnelles et voyez vos résultats exploser.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="#pricing">
                <Button size="lg" className="rounded-xl text-lg px-8 py-6">
                  Voir Nos Services Ads
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
        <AdsServices language={language} />
      </div>
      
      {/* Footer */}
      <Footer language={language} />
    </div>
  );
}