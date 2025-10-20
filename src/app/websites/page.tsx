import { Globe, Zap, TrendingUp, Users, Target, ArrowRight, Sparkles, Code, Gauge, Shield, Award, CheckCircle2, Monitor, Smartphone, Check, Layout } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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

export default function WebsitesPage() {
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
              Création de Sites Web
            </Badge>
            <h1 className="mb-6 text-5xl md:text-6xl font-extrabold">
              Votre Site Web, Votre <span className="gradient-text">Actif Digital le Plus Précieux</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance leading-relaxed">
              Découvrez pourquoi un site web professionnel est l'investissement le plus important 
              pour votre croissance digitale et comment il transforme votre business.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border/50 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Users, value: "81%", label: "Des consommateurs", desc: "Recherchent en ligne avant d'acheter" },
              { icon: TrendingUp, value: "+300%", label: "Leads générés", desc: "En ligne en 6 mois" },
              { icon: Target, value: "2-5%", label: "Taux de conversion", desc: "Pour sites optimisés" },
              { icon: Zap, value: "24/7", label: "Disponibilité", desc: "Travaille pour vous sans pause" }
            ].map((stat) => (
              <Card key={stat.label} className="p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-6 w-6 text-primary" />
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
                Pourquoi Votre Business A Besoin d'un Site Web Professionnel
              </h2>
              <Card className="p-8 mb-6 bg-gradient-to-br from-blue-500/5 to-purple-500/5 border-primary/20">
                <p className="text-lg leading-relaxed mb-0">
                  À l'ère du digital, votre site web est bien plus qu'une simple vitrine—c'est votre <strong>vendeur 24/7</strong>, 
                  votre carte de visite globale, et souvent le <strong>premier point de contact</strong> avec vos clients potentiels. 
                  Un site professionnel bien conçu peut transformer votre business de manière spectaculaire.
                </p>
              </Card>
            </div>

            {/* Section 2 - Benefits Grid */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Les Avantages Stratégiques d'un Site Web</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                {[
                  {
                    icon: Shield,
                    title: "Crédibilité et Confiance Instantanées",
                    desc: "81% des consommateurs recherchent une entreprise en ligne avant d'acheter. Un site web professionnel établit immédiatement votre crédibilité et inspire confiance. Sans site web, vous perdez automatiquement une large partie de votre marché potentiel.",
                    stats: "81% recherchent en ligne d'abord"
                  },
                  {
                    icon: Zap,
                    title: "Disponibilité 24/7 Pour Générer des Leads",
                    desc: "Contrairement à un magasin physique, votre site web travaille pour vous en permanence. Il présente vos produits/services, répond aux questions, collecte des leads, et traite des transactions—même pendant que vous dormez.",
                    stats: "Génération de leads non-stop"
                  },
                  {
                    icon: Globe,
                    title: "Portée Géographique Illimitée",
                    desc: "Un site web brise toutes les barrières géographiques. Que vous soyez à Casablanca, Marrakech ou Tanger, votre site permet d'atteindre des clients partout au Maroc et même internationalement sans coûts physiques supplémentaires.",
                    stats: "Expansion sans limites géographiques"
                  },
                  {
                    icon: Target,
                    title: "Marketing Digital Cost-Effective",
                    desc: "Votre site web est le hub central de tous vos efforts marketing digitaux. Il amplifie l'efficacité de vos campagnes SEO, publicités payantes, email marketing, et réseaux sociaux pour un meilleur ROI global.",
                    stats: "ROI supérieur sur tous les canaux"
                  },
                  {
                    icon: Code,
                    title: "Contrôle Total de Votre Message",
                    desc: "Sur votre propre site, vous contrôlez complètement le message, le branding, et l'expérience utilisateur. Contrairement aux plateformes tierces, vous n'êtes pas limité par leurs règles ou algorithmes. C'est votre propriété digitale permanente.",
                    stats: "100% de contrôle sur votre marque"
                  },
                  {
                    icon: TrendingUp,
                    title: "Collecte de Données Clients Précieuses",
                    desc: "Un site web bien configuré collecte des données analytiques riches sur vos visiteurs: d'où ils viennent, ce qui les intéresse, comment ils naviguent. Ces insights permettent d'optimiser continuellement votre offre et approche marketing.",
                    stats: "Analytics détaillés en temps réel"
                  }
                ].map((benefit) => (
                  <Card key={benefit.title} className="p-6 hover:shadow-xl transition-all group">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
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

            {/* Section 3 - What Makes Us Different */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Ce Qui Distingue Nos Sites Web</h2>
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-purple-500/5">
                <p className="text-lg leading-relaxed mb-6">
                  Nous ne créons pas juste des sites "jolis"—nous construisons des <strong>outils business stratégiques</strong>:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
                  {[
                    { icon: Target, title: "Design Orienté Conversion", desc: "Chaque élément est pensé pour guider vos visiteurs vers l'action désirée" },
                    { icon: Gauge, title: "Performance Optimale", desc: "Sites ultra-rapides pour minimiser l'abandon et maximiser l'expérience utilisateur" },
                    { icon: Globe, title: "Mobile-First Responsive", desc: "Parfait sur tous les écrans, car 70% du trafic web est mobile" },
                    { icon: TrendingUp, title: "SEO-Ready", desc: "Structure optimisée dès le départ pour un meilleur référencement Google" },
                    { icon: Zap, title: "Animations Professionnelles", desc: "GSAP pour des interactions fluides qui captivent vos visiteurs" },
                    { icon: Code, title: "Intégrations Business", desc: "CRM, analytics, email marketing—connecté à vos outils existants" }
                  ].map((feature) => (
                    <div key={feature.title} className="flex items-start gap-3 p-4 rounded-lg bg-background/50">
                      <feature.icon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold mb-1">{feature.title}</div>
                        <div className="text-sm text-muted-foreground">{feature.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Section 4 - ROI Results */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Award className="h-8 w-8 text-primary" />
                ROI Attendu
              </h2>
              <Card className="p-8 bg-gradient-to-br from-green-500/5 to-emerald-500/5 border-green-500/20">
                <p className="text-lg mb-6">Nos clients voient typiquement:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
                  {[
                    { metric: "+300%", label: "Augmentation des leads générés en ligne", time: "dans les 6 premiers mois" },
                    { metric: "40-60%", label: "Réduction des coûts d'acquisition client", time: "comparé aux méthodes traditionnelles" },
                    { metric: "2-5%", label: "Taux de conversion moyen", time: "contre 0.5-1% pour sites non-optimisés" },
                    { metric: "x10", label: "Amélioration de la perception de marque", time: "et de la crédibilité" }
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

            {/* Section 5 - Why Now */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Pourquoi Maintenant?</h2>
              <Card className="p-8 bg-gradient-to-br from-orange-500/5 to-red-500/5 border-orange-500/20">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="h-8 w-8 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-lg leading-relaxed mb-4">
                      Chaque jour sans site web professionnel est un jour de <strong>leads perdus</strong>, de <strong>crédibilité manquée</strong>, 
                      et d'opportunités données à vos concurrents.
                    </p>
                    <p className="text-lg leading-relaxed">
                      Le meilleur moment pour lancer votre site était hier. Le second meilleur moment est <strong>maintenant</strong>.
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
              Nos Tarifs
            </Badge>
            <h2 className="mb-6 text-4xl font-bold">
              Choisissez Votre <span className="gradient-text">Niveau de Site Web</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground text-balance">
              Sites web modernes, rapides et optimisés pour la conversion. Du landing page
              simple à la plateforme complexe, nous adaptons la solution à vos besoins.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {websiteServices.map((service) => (
              <Card
                key={service.name}
                className="group relative p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-border/50 backdrop-blur-sm overflow-hidden"
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-br from-primary to-purple-600 text-white text-xs font-semibold px-4 py-1 rounded-bl-2xl">
                    Plus Populaire
                  </div>
                )}

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold">{service.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    <h4 className="text-sm font-semibold text-primary">Services inclus:</h4>
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Ideal For & Timeline */}
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

                  {/* CTA */}
                  <Button className="w-full rounded-xl" size="lg">
                    Commander
                  </Button>
                </div>

                {/* Decorative Corner */}
                <div className={`absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-5 rounded-tl-full`}></div>
              </Card>
            ))}
          </div>

          {/* Features Section */}
          <div className="max-w-5xl mx-auto mb-16">
            <h3 className="text-2xl font-bold text-center mb-12">Tous Nos Sites Incluent</h3>
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
            <h3 className="text-2xl font-bold mb-12">Notre Processus de Création</h3>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-primary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Prêt à Lancer Votre Présence Digitale?</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Commencez aujourd'hui et voyez comment un site professionnel transforme votre business.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/#web">
                <Button size="lg" className="rounded-xl text-lg px-8 py-6">
                  Voir Nos Forfaits
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
    </div>
  );
}