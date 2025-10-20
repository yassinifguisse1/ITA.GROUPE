import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Shield, Users, Calendar, FileText, Activity, Smartphone, Lock } from "lucide-react";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Healthcare Solutions - iTA Groupe",
  description: "HIPAA-compliant healthcare software for patient management, telemedicine, and medical records. Secure, scalable, and user-friendly.",
};

const services = [
  {
    icon: Calendar,
    title: "Patient Management",
    description: "Comprehensive patient portals with appointment scheduling, medical history, prescription management, and secure messaging.",
    features: ["Online booking", "Medical records", "Prescription tracking", "Patient communication"]
  },
  {
    icon: Smartphone,
    title: "Telemedicine Platform",
    description: "HIPAA-compliant video consultation platforms enabling remote healthcare delivery with integrated payment and prescription systems.",
    features: ["Video consultations", "E-prescriptions", "Payment integration", "Medical documentation"]
  },
  {
    icon: FileText,
    title: "Electronic Health Records",
    description: "Modern EHR/EMR systems for managing patient data, clinical workflows, and interoperability with existing healthcare systems.",
    features: ["Digital records", "HL7/FHIR integration", "Clinical workflows", "Data analytics"]
  },
  {
    icon: Activity,
    title: "Health Monitoring",
    description: "IoT-integrated platforms for remote patient monitoring, wearable device integration, and real-time health tracking.",
    features: ["Wearable integration", "Real-time alerts", "Health analytics", "Care coordination"]
  }
];

const compliance = [
  {
    icon: Shield,
    title: "HIPAA Compliance",
    description: "Full adherence to HIPAA regulations and security standards"
  },
  {
    icon: Lock,
    title: "Data Encryption",
    description: "End-to-end encryption for all patient data and communications"
  },
  {
    icon: FileText,
    title: "GDPR Ready",
    description: "European data protection compliance for global operations"
  },
  {
    icon: Shield,
    title: "Regular Audits",
    description: "Continuous security audits and penetration testing"
  }
];

const benefits = [
  {
    icon: Users,
    title: "Better Patient Care",
    description: "Improve patient outcomes with streamlined workflows, better data access, and enhanced communication tools."
  },
  {
    icon: Shield,
    title: "Security First",
    description: "Bank-level security with HIPAA compliance, encryption, and regular security audits to protect sensitive data."
  },
  {
    icon: Calendar,
    title: "Operational Efficiency",
    description: "Reduce administrative burden with automated scheduling, billing, and documentation systems."
  },
  {
    icon: Activity,
    title: "Data-Driven Insights",
    description: "Leverage analytics to identify trends, improve treatment protocols, and optimize practice management."
  }
];

const stats = [
  { value: "35+", label: "Healthcare Projects" },
  { value: "150K+", label: "Patients Served" },
  { value: "100%", label: "HIPAA Compliant" },
  { value: "99.9%", label: "System Uptime" }
];

const healthcareFAQs = [
  {
    question: "Vos solutions sont-elles conformes HIPAA et RGPD?",
    answer: "Absolument. Toutes nos solutions healthcare respectent les réglementations HIPAA (États-Unis) et RGPD (Europe). Cela inclut: chiffrement end-to-end, contrôles d'accès stricts, audit trails, sauvegardes sécurisées, et politiques de confidentialité conformes. Nous pouvons fournir la documentation complète de conformité."
  },
  {
    question: "Combien coûte le développement d'un logiciel médical?",
    answer: "Les coûts varient selon la complexité: un portail patient simple commence à 40 000€-60 000€, une plateforme de télémédecine complète 80 000€-150 000€, et un système EMR/EHR enterprise 200 000€+. Les exigences de conformité HIPAA ajoutent des coûts de sécurité, mais nous optimisons pour rester dans votre budget."
  },
  {
    question: "Intégrez-vous avec les systèmes hospitaliers existants?",
    answer: "Oui! Nous intégrons avec les systèmes legacy via les standards HL7, FHIR, et DICOM. Cela permet l'échange de données avec les EMR/EHR existants (Epic, Cerner, etc.), laboratoires, pharmacies, et systèmes d'imagerie médicale. Nous assurons une interopérabilité complète."
  },
  {
    question: "Comment gérez-vous la sécurité des données médicales?",
    answer: "Multi-couches de sécurité: chiffrement AES-256 au repos et SSL/TLS en transit, authentification multi-facteurs, contrôles d'accès basés sur les rôles, audit logs détaillés, sauvegardes chiffrées quotidiennes, monitoring de sécurité 24/7, et tests de pénétration réguliers par des experts certifiés."
  },
  {
    question: "Proposez-vous des solutions de télémédecine?",
    answer: "Oui! Nous développons des plateformes complètes de télémédecine incluant: vidéo consultation HD sécurisée, e-prescriptions, prise de rendez-vous en ligne, paiements intégrés, partage de documents médicaux, et intégration avec les systèmes de dossiers patients. Tout est 100% conforme HIPAA."
  },
  {
    question: "Quel est le délai de mise en place d'un système healthcare?",
    answer: "Délais typiques: portail patient 8-12 semaines, télémédecine 12-16 semaines, EMR/EHR 16-24 semaines. Cela inclut: analyse des besoins, développement sécurisé, tests de conformité, formation du personnel médical, et migration des données existantes avec zero downtime."
  },
  {
    question: "Offrez-vous la formation et le support médical?",
    answer: "Oui! Nous offrons: formation complète du personnel médical et administratif, documentation technique et utilisateur, support technique prioritaire 24/7, mises à jour de sécurité continues, et accompagnement pour les audits de conformité. Nous restons votre partenaire à long terme."
  }
];

export default function HealthcarePage() {
  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 gradient-bg -z-10"></div>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge variant="secondary" className="mb-4">Healthcare Solutions</Badge>
              <h1 className="text-4xl md:text-6xl font-bold">
                Transform{" "}
                <span className="gradient-text">Healthcare Delivery</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                HIPAA-compliant healthcare software for patient management, telemedicine, 
                and electronic health records. Secure, scalable, and designed for better care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button size="lg" className="rounded-full" asChild>
                  <Link href="/contact">Start Your Project</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full" asChild>
                  <Link href="/portfolio">View Healthcare Projects</Link>
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
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Comprehensive Healthcare Solutions</h2>
              <p className="text-lg text-muted-foreground">
                Modern healthcare technology for providers, patients, and administrators
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

        {/* Compliance Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge variant="secondary" className="mb-4">Security & Compliance</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Built for Healthcare Standards</h2>
              <p className="text-lg text-muted-foreground">
                Meeting the highest standards for healthcare data security and privacy
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {compliance.map((item, index) => (
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
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Healthcare Excellence</h2>
              <p className="text-lg text-muted-foreground">
                Technology solutions that improve patient care and operational efficiency
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
          faqs={healthcareFAQs}
          title="Questions Fréquentes Healthcare"
          description="Tout ce que vous devez savoir sur nos solutions médicales"
        />

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold">
                Ready to Modernize Healthcare?
              </h2>
              <p className="text-xl text-muted-foreground">
                Let's build secure, compliant healthcare solutions together
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