import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Landmark, Shield, TrendingUp, Wallet, Lock, BarChart3, CreditCard, Users } from "lucide-react";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Financial Solutions - iTA Groupe",
  description: "Secure fintech applications for banking, payments, and investment. PCI-DSS compliant with enterprise-grade security.",
};

const services = [
  {
    icon: Wallet,
    title: "Digital Banking",
    description: "Modern banking platforms with account management, transfers, bill payments, and real-time transaction monitoring.",
    features: ["Account management", "P2P transfers", "Bill payments", "Transaction history"]
  },
  {
    icon: CreditCard,
    title: "Payment Processing",
    description: "Secure payment gateways and processing systems supporting multiple currencies, payment methods, and instant settlements.",
    features: ["Multi-currency", "Payment gateways", "Instant settlements", "Fraud detection"]
  },
  {
    icon: TrendingUp,
    title: "Investment Platforms",
    description: "Trading and investment platforms with portfolio management, market data integration, and automated trading capabilities.",
    features: ["Portfolio tracking", "Real-time data", "Trading automation", "Risk analytics"]
  },
  {
    icon: BarChart3,
    title: "Financial Analytics",
    description: "Advanced analytics dashboards for financial reporting, risk assessment, compliance monitoring, and business intelligence.",
    features: ["Custom reports", "Risk management", "Compliance tracking", "Predictive analytics"]
  }
];

const security = [
  {
    icon: Shield,
    title: "PCI-DSS Compliance",
    description: "Full compliance with payment card industry standards"
  },
  {
    icon: Lock,
    title: "Bank-Level Security",
    description: "Military-grade encryption and multi-layer security"
  },
  {
    icon: Shield,
    title: "Fraud Prevention",
    description: "AI-powered fraud detection and prevention systems"
  },
  {
    icon: Lock,
    title: "Regular Audits",
    description: "Continuous security audits and penetration testing"
  }
];

const benefits = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with encryption, compliance, and 24/7 monitoring to protect financial data and transactions."
  },
  {
    icon: TrendingUp,
    title: "Scalable Architecture",
    description: "Infrastructure that handles millions of transactions per day with sub-second response times and 99.99% uptime."
  },
  {
    icon: Users,
    title: "Better User Experience",
    description: "Intuitive interfaces that simplify complex financial operations and improve customer satisfaction."
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Comprehensive dashboards providing instant insights into transactions, risks, and business performance."
  }
];

const stats = [
  { value: "45+", label: "Fintech Projects" },
  { value: "2M+", label: "Transactions/Month" },
  { value: "100%", label: "PCI-DSS Compliant" },
  { value: "99.9%", label: "System Uptime" }
];

const financeFAQs = [
  {
    question: "Vos solutions financières sont-elles conformes PCI-DSS?",
    answer: "Oui, absolument. Toutes nos solutions de paiement et fintech respectent les normes PCI-DSS niveau 1 (le plus strict). Nous implémentons: tokenization des cartes, chiffrement end-to-end, segmentation réseau, audits de sécurité réguliers, et monitoring 24/7. Nous pouvons fournir les certifications de conformité complètes."
  },
  {
    question: "Combien coûte le développement d'une application fintech?",
    answer: "Les coûts varient selon la complexité: une app de paiement simple commence à 50 000€-80 000€, une plateforme banking complète 150 000€-300 000€, et une solution de trading enterprise 300 000€+. Les exigences réglementaires et de sécurité financière ajoutent des coûts, mais nous optimisons pour maximiser la valeur."
  },
  {
    question: "Comment gérez-vous la sécurité des transactions financières?",
    answer: "Sécurité multi-couches: chiffrement AES-256, tokenization des données sensibles, authentification forte (2FA/biométrie), détection de fraude par IA, firewalls applicatifs, monitoring en temps réel des transactions suspectes, et conformité aux standards bancaires internationaux (PCI-DSS, PSD2, etc.)."
  },
  {
    question: "Intégrez-vous avec les banques et systèmes de paiement existants?",
    answer: "Oui! Nous intégrons via APIs bancaires standardisées: Open Banking (PSD2 en Europe), SEPA pour les virements, réseaux de cartes (Visa/Mastercard), passerelles de paiement (Stripe, Adyen), systèmes core banking, et protocoles SWIFT pour les transferts internationaux."
  },
  {
    question: "Proposez-vous des solutions de détection de fraude?",
    answer: "Absolument! Nous implémentons des systèmes anti-fraude avancés utilisant: machine learning pour détecter les patterns suspects, analyse comportementale des utilisateurs, vérification en temps réel des transactions, scoring de risque, et blocage automatique des activités frauduleuses avec alertes immédiates."
  },
  {
    question: "Quel est le délai pour lancer une solution fintech?",
    answer: "Délais typiques: app de paiement 12-16 semaines, plateforme banking 20-28 semaines, solution de trading 24-36 semaines. Cela inclut: architecture sécurisée, développement conforme aux régulations, intégrations bancaires, tests de sécurité approfondis, et obtention des certifications nécessaires."
  },
  {
    question: "Gérez-vous les aspects réglementaires et licences?",
    answer: "Nous vous accompagnons dans la conformité réglementaire (MiFID, PSD2, GDPR, etc.) et préparons la documentation pour les licences bancaires/financières. Nous travaillons avec des consultants légaux spécialisés en fintech pour assurer une conformité complète dans toutes les juridictions où vous opérez."
  }
];

export default function FinancePage() {
  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 gradient-bg -z-10"></div>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge variant="secondary" className="mb-4">Financial Solutions</Badge>
              <h1 className="text-4xl md:text-6xl font-bold">
                Secure{" "}
                <span className="gradient-text">Fintech Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Build secure, scalable financial applications for banking, payments, and investments. 
                PCI-DSS compliant with enterprise-grade security and real-time processing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button size="lg" className="rounded-full" asChild>
                  <Link href="/contact">Start Your Project</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full" asChild>
                  <Link href="/portfolio">View Fintech Projects</Link>
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
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Complete Financial Solutions</h2>
              <p className="text-lg text-muted-foreground">
                Enterprise-grade fintech applications for modern financial services
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

        {/* Security Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge variant="secondary" className="mb-4">Security & Compliance</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Built for Financial Security</h2>
              <p className="text-lg text-muted-foreground">
                Meeting the highest standards for financial data protection and compliance
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {security.map((item, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
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
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Financial Excellence</h2>
              <p className="text-lg text-muted-foreground">
                Technology that powers modern financial services
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
          faqs={financeFAQs}
          title="Questions Fréquentes Fintech"
          description="Tout ce que vous devez savoir sur nos solutions financières"
        />

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold">
                Ready to Build Your Fintech Solution?
              </h2>
              <p className="text-xl text-muted-foreground">
                Let's create secure, compliant financial applications together
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full" asChild>
                  <Link href="/">Learn More</Link>
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