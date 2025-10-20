import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Cloud, Zap, Shield, Users, CreditCard, BarChart3, Layers, Workflow } from "lucide-react";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "SaaS Development - iTA Groupe",
  description: "Build scalable SaaS products with enterprise-grade architecture. From MVP to market leader with subscription management and analytics.",
};

const services = [
  {
    icon: Cloud,
    title: "MVP Development",
    description: "Launch your SaaS product quickly with a minimum viable product that validates your concept and attracts early users.",
    features: ["Rapid prototyping", "Core features", "User feedback", "Iterative development"]
  },
  {
    icon: CreditCard,
    title: "Subscription Management",
    description: "Flexible billing systems supporting multiple pricing tiers, trials, upgrades, and payment methods with automated invoicing.",
    features: ["Stripe integration", "Multiple tiers", "Trial periods", "Auto-billing"]
  },
  {
    icon: Users,
    title: "User Management",
    description: "Comprehensive authentication, role-based access control, team management, and user onboarding flows.",
    features: ["SSO integration", "Role management", "Team accounts", "Onboarding flows"]
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Real-time analytics tracking user behavior, feature usage, churn rates, and revenue metrics for data-driven decisions.",
    features: ["Usage tracking", "Churn analysis", "Revenue metrics", "Custom reports"]
  }
];

const technologies = [
  {
    icon: Layers,
    title: "Modern Tech Stack",
    description: "Built with React, Next.js, and Node.js for performance"
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Scalable AWS, Azure, or Google Cloud deployment"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC2 compliance, encryption, and security best practices"
  },
  {
    icon: Workflow,
    title: "API Integration",
    description: "RESTful APIs and webhooks for seamless integrations"
  }
];

const benefits = [
  {
    icon: Zap,
    title: "Fast Time-to-Market",
    description: "Launch your SaaS product in weeks, not months, with proven development frameworks and best practices."
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Built-in security features including encryption, compliance, and regular security audits."
  },
  {
    icon: Cloud,
    title: "Scalable Architecture",
    description: "Infrastructure that grows with your business from 10 to 10 million users without performance issues."
  },
  {
    icon: BarChart3,
    title: "Data-Driven Insights",
    description: "Comprehensive analytics to understand user behavior, optimize features, and drive growth."
  }
];

const stats = [
  { value: "40+", label: "SaaS Products Built" },
  { value: "250K+", label: "Active Users" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "3x", label: "Avg Growth Rate" }
];

const saasFAQs = [
  {
    question: "Combien coûte le développement d'un produit SaaS?",
    answer: "Le coût varie selon la complexité: un MVP simple commence à 30 000€-50 000€, un produit SaaS complet 80 000€-150 000€, et une plateforme entreprise 200 000€+. Cela dépend des fonctionnalités, intégrations, et du niveau de personnalisation requis. Nous proposons des paiements échelonnés alignés sur vos levées de fonds."
  },
  {
    question: "Quel est le délai pour lancer un MVP SaaS?",
    answer: "Un MVP fonctionnel peut être lancé en 8-12 semaines avec les fonctionnalités essentielles. Cela inclut: architecture, authentification, base de données, interface utilisateur, paiements, et déploiement. Nous suivons une approche agile avec des démos bi-hebdomadaires pour valider chaque étape."
  },
  {
    question: "Comment gérez-vous la scalabilité du SaaS?",
    answer: "Nous construisons sur une architecture cloud-native (AWS/Azure/GCP) avec auto-scaling, load balancing, et cache distribué. Votre SaaS peut gérer de 100 à 10 millions d'utilisateurs sans refonte. Nous implémentons aussi des CDN, optimisation de base de données, et monitoring de performance en temps réel."
  },
  {
    question: "Quelles méthodes de paiement intégrez-vous?",
    answer: "Nous intégrons Stripe pour sa flexibilité: cartes bancaires, virements SEPA, Apple Pay, Google Pay, et plus. Cela inclut la gestion des abonnements, essais gratuits, upgrades/downgrades automatiques, facturation récurrente, et conformité PCI-DSS pour la sécurité des paiements."
  },
  {
    question: "Offrez-vous des fonctionnalités d'analytics pour SaaS?",
    answer: "Oui! Nous intégrons des dashboards analytics complets trackant: utilisateurs actifs, taux de conversion, churn rate, MRR/ARR, utilisation des fonctionnalités, et comportements utilisateurs. Ces métriques sont essentielles pour optimiser votre produit et votre stratégie growth."
  },
  {
    question: "Comment assurez-vous la sécurité et la conformité?",
    answer: "Nous appliquons les standards de sécurité enterprise: chiffrement SSL/TLS, authentification multi-facteurs, sauvegardes automatiques, monitoring de sécurité 24/7, et conformité RGPD. Pour les clients entreprise, nous pouvons préparer la certification SOC2 et ISO 27001."
  },
  {
    question: "Proposez-vous la maintenance et les mises à jour?",
    answer: "Absolument! Nous offrons des contrats de maintenance incluant: mises à jour de sécurité, nouveaux features, optimisations de performance, support technique prioritaire, monitoring 24/7, et sauvegardes quotidiennes. Nous restons votre partenaire technique à long terme pour faire évoluer votre SaaS."
  }
];

export default function SaaSPage() {
  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 gradient-bg -z-10"></div>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge variant="secondary" className="mb-4">SaaS Development</Badge>
              <h1 className="text-4xl md:text-6xl font-bold">
                Build Your{" "}
                <span className="gradient-text">SaaS Product</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                From idea to market-leading SaaS platform. We build scalable, secure, and 
                feature-rich software solutions that drive recurring revenue.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button size="lg" className="rounded-full" asChild>
                  <a href="/contact">Start Building</a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full" asChild>
                  <a href="/portfolio">View Case Studies</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 border-y border-border/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge variant="secondary" className="mb-4">Our Services</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">End-to-End SaaS Development</h2>
              <p className="text-lg text-muted-foreground">
                Everything needed to launch and scale your software-as-a-service business
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge variant="secondary" className="mb-4">Technology</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Enterprise-Grade Tech Stack</h2>
              <p className="text-lg text-muted-foreground">
                Built with modern technologies for performance, security, and scalability
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <tech.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{tech.title}</h3>
                  <p className="text-sm text-muted-foreground">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge variant="secondary" className="mb-4">Why Choose Us</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Built for Growth</h2>
              <p className="text-lg text-muted-foreground">
                SaaS platforms designed to scale with your business
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQ 
          faqs={saasFAQs}
          title="Questions Fréquentes SaaS"
          description="Tout ce que vous devez savoir sur le développement SaaS"
        />

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold">
                Ready to Build Your SaaS?
              </h2>
              <p className="text-xl text-muted-foreground">
                Let's transform your idea into a scalable software platform
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full" asChild>
                  <a href="/contact">Get Started</a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full" asChild>
                  <a href="/">Learn More</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer language="en" />
    </>
  );
}