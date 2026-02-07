"use client";

import Link from "next/link";
import { Users, Zap, Shield, Globe, CheckCircle, CheckCircle2, ArrowRight, Phone, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import ShaderBackground from "@/components/ShaderBackground";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";


const content = {
  en: {
    badge: "Dedicated Development Teams",
    title: "Dedicated Software Development Team",
    subtitle: "Scale your development capacity with dedicated professionals who work exclusively on your projects.",
    cta1: "Build Your Team",
    cta2: "Schedule a Call",
    stat1: "500+ Skilled Professionals",
    stat2: "100+ Active Teams",
    stat3: "95% Client Retention",
    servicesSection: "— SERVICES",
    servicesTitle: "Dedicated Software\nDevelopment Team",
    services: [
      {
        icon: <Users className="w-6 h-6" />,
        title: "Full-Stack Development",
        description: "Complete web and mobile development teams with frontend, backend, and DevOps specialists."
      },
      {
        icon: <Zap className="w-6 h-6" />,
        title: "Specialized Expertise",
        description: "Access niche specialists in AI/ML, blockchain, cloud architecture, and emerging technologies."
      },
      {
        icon: <Shield className="w-6 h-6" />,
        title: "Dedicated QA Teams",
        description: "Complete quality assurance teams for comprehensive testing, automation, and quality control."
      },
      {
        icon: <Globe className="w-6 h-6" />,
        title: "UI/UX Design Teams",
        description: "Creative design teams specializing in user experience, interface design, and brand identity."
      }
    ],
    benefitsSection: "— BENEFITS",
    benefitsTitle: "What can your business gain\nfrom hiring a dedicated team?",
    benefits: [
      "Save up to 60% on development costs",
      "Scale team size up or down instantly",
      "Access global talent pool",
      "No recruitment or HR overhead",
      "Direct communication channels",
      "Seamless integration with your processes"
    ],
    whySection: "— WHY US?",
    whyTitle: "Why Choose Us For Hiring Dedicated\nSoftware Development Team",
    whyChooseUs: [
      {
        title: "Rigorous Vetting Process",
        description: "Every team member undergoes comprehensive technical assessments, cultural fit evaluations, and communication skills tests. We ensure only top 5% of candidates join your dedicated team, bringing exceptional expertise and professionalism.",
        hoverBg: "#FF8D3E"
      },
      {
        title: "Seamless Integration",
        description: "Our dedicated teams integrate effortlessly with your existing workflows, tools, and communication channels. We adapt to your timezone, methodologies, and company culture, working as a natural extension of your in-house team.",
        hoverBg: "#F15556"
      },
      {
        title: "Full Control & Flexibility",
        description: "You have complete control over team composition, task priorities, and project direction. Scale up or down based on project needs, adjust skill mix as requirements evolve, and maintain direct daily communication with team members.",
        hoverBg: "#53ACF1"
      },
      {
        title: "Proven Track Record",
        description: "With 100+ successfully established dedicated teams across various industries, we bring deep experience in team assembly, onboarding, and long-term collaboration. Our 95% client retention rate speaks to the quality of our teams.",
        hoverBg: "#1BC65C"
      },
      {
        title: "Cost-Effective Excellence",
        description: "Get enterprise-grade talent at competitive rates without compromising quality. Save on recruitment costs, HR overhead, infrastructure, and training expenses while accessing skilled professionals ready to deliver from day one.",
        hoverBg: "#AF6AF0"
      }
    ]
  },
  fr: {
    badge: "Équipes de Développement Dédiées",
    title: "Équipe de Développement Logiciel Dédiée",
    subtitle: "Augmentez votre capacité de développement avec des professionnels dédiés qui travaillent exclusivement sur vos projets.",
    cta1: "Créer Votre Équipe",
    cta2: "Planifier un Appel",
    stat1: "500+ Professionnels Qualifiés",
    stat2: "100+ Équipes Actives",
    stat3: "95% de Fidélisation Client",
    servicesSection: "— NOS SERVICES",
    servicesTitle: "Équipe de Développement\nLogiciel Dédiée",
    services: [
      {
        icon: <Users className="w-6 h-6" />,
        title: "Développement Full-Stack",
        description: "Équipes complètes de développement web et mobile avec des spécialistes frontend, backend et DevOps."
      },
      {
        icon: <Zap className="w-6 h-6" />,
        title: "Expertise Spécialisée",
        description: "Accès à des spécialistes de niche en IA/ML, blockchain, architecture cloud et technologies émergentes."
      },
      {
        icon: <Shield className="w-6 h-6" />,
        title: "Équipes QA Dédiées",
        description: "Équipes d'assurance qualité complètes pour tests, automatisation et contrôle qualité complets."
      },
      {
        icon: <Globe className="w-6 h-6" />,
        title: "Équipes de Design UI/UX",
        description: "Équipes créatives spécialisées en expérience utilisateur, design d'interface et identité de marque."
      }
    ],
    benefitsSection: "— AVANTAGES",
    benefitsTitle: "Que peut gagner votre entreprise\nen embauchant une équipe dédiée?",
    benefits: [
      "Économisez jusqu'à 60% sur les coûts de développement",
      "Adaptez la taille de l'équipe instantanément",
      "Accès au vivier de talents mondial",
      "Aucun frais de recrutement ou RH",
      "Canaux de communication directs",
      "Intégration transparente avec vos processus"
    ],
    whySection: "— POURQUOI NOUS?",
    whyTitle: "Pourquoi Nous Choisir Pour Embaucher\nÉquipe de Développement Logiciel Dédiée",
    whyChooseUs: [
      {
        title: "Processus de Sélection Rigoureux",
        description: "Chaque membre de l'équipe subit des évaluations techniques complètes, des évaluations d'adéquation culturelle et des tests de compétences en communication. Nous nous assurons que seuls les 5% meilleurs candidats rejoignent votre équipe dédiée.",
        hoverBg: "#FF8D3E"
      },
      {
        title: "Intégration Transparente",
        description: "Nos équipes dédiées s'intègrent sans effort à vos flux de travail, outils et canaux de communication existants. Nous nous adaptons à votre fuseau horaire, méthodologies et culture d'entreprise.",
        hoverBg: "#F15556"
      },
      {
        title: "Contrôle Total & Flexibilité",
        description: "Vous avez un contrôle total sur la composition de l'équipe, les priorités des tâches et la direction du projet. Augmentez ou réduisez en fonction des besoins du projet et maintenez une communication quotidienne directe.",
        hoverBg: "#53ACF1"
      },
      {
        title: "Historique Prouvé",
        description: "Avec plus de 100 équipes dédiées établies avec succès dans divers secteurs, nous apportons une expérience approfondie dans l'assemblage, l'intégration et la collaboration à long terme des équipes.",
        hoverBg: "#1BC65C"
      },
      {
        title: "Excellence Rentable",
        description: "Obtenez des talents de niveau entreprise à des tarifs compétitifs sans compromettre la qualité. Économisez sur les coûts de recrutement, les frais RH, l'infrastructure et les dépenses de formation.",
        hoverBg: "#AF6AF0"
      }
    ]
  },
  pl: {
    badge: "Dedykowane Zespoły Programistyczne",
    title: "Dedykowany Zespół Rozwoju Oprogramowania",
    subtitle: "Zwiększ swoją zdolność rozwojową dzięki dedykowanym profesjonalistom, którzy pracują wyłącznie nad Twoimi projektami.",
    cta1: "Zbuduj Swój Zespół",
    cta2: "Zaplanuj Rozmowę",
    stat1: "500+ Wykwalifikowanych Specjalistów",
    stat2: "100+ Aktywnych Zespołów",
    stat3: "95% Utrzymania Klientów",
    servicesSection: "— USŁUGI",
    servicesTitle: "Dedykowany Zespół\nRozwoju Oprogramowania",
    services: [
      {
        icon: <Users className="w-6 h-6" />,
        title: "Rozwój Full-Stack",
        description: "Kompletne zespoły programistyczne web i mobile ze specjalistami frontend, backend i DevOps."
      },
      {
        icon: <Zap className="w-6 h-6" />,
        title: "Specjalistyczna Ekspertyza",
        description: "Dostęp do niszowych specjalistów w zakresie AI/ML, blockchain, architektury chmurowej i technologii przyszłości."
      },
      {
        icon: <Shield className="w-6 h-6" />,
        title: "Dedykowane Zespoły QA",
        description: "Kompletne zespoły zapewnienia jakości do kompleksowych testów, automatyzacji i kontroli jakości."
      },
      {
        icon: <Globe className="w-6 h-6" />,
        title: "Zespoły Projektowania UI/UX",
        description: "Kreatywne zespoły projektowe specjalizujące się w doświadczeniu użytkownika, projektowaniu interfejsu i tożsamości marki."
      }
    ],
    benefitsSection: "— KORZYŚCI",
    benefitsTitle: "Co może zyskać Twoja firma\nprzez zatrudnienie dedykowanego zespołu?",
    benefits: [
      "Oszczędź do 60% na kosztach rozwoju",
      "Dostosuj rozmiar zespołu natychmiast",
      "Dostęp do globalnej puli talentów",
      "Brak kosztów rekrutacji lub HR",
      "Bezpośrednie kanały komunikacji",
      "Płynna integracja z Twoimi procesami"
    ],
    whySection: "— DLACZEGO MY?",
    whyTitle: "Dlaczego Wybrać Nas Do Zatrudnienia\nDedykowanego Zespołu Programistycznego",
    whyChooseUs: [
      {
        title: "Rygorystyczny Proces Selekcji",
        description: "Każdy członek zespołu przechodzi kompleksowe oceny techniczne, oceny dopasowania kulturowego i testy umiejętności komunikacyjnych. Zapewniamy, że tylko najlepsi 5% kandydatów dołącza do Twojego dedykowanego zespołu.",
        hoverBg: "#FF8D3E"
      },
      {
        title: "Płynna Integracja",
        description: "Nasze dedykowane zespoły bezproblemowo integrują się z Twoimi istniejącymi przepływami pracy, narzędziami i kanałami komunikacji. Dostosowujemy się do Twojej strefy czasowej, metodologii i kultury firmowej.",
        hoverBg: "#F15556"
      },
      {
        title: "Pełna Kontrola i Elastyczność",
        description: "Masz pełną kontrolę nad składem zespołu, priorytetami zadań i kierunkiem projektu. Zwiększaj lub zmniejszaj w zależności od potrzeb projektu i utrzymuj bezpośrednią codzienną komunikację.",
        hoverBg: "#53ACF1"
      },
      {
        title: "Udokumentowana Historia Sukcesu",
        description: "Z ponad 100 pomyślnie utworzonymi dedykowanymi zespołami w różnych branżach, wnosimy głębokie doświadczenie w montażu zespołu, onboardingu i długoterminowej współpracy.",
        hoverBg: "#1BC65C"
      },
      {
        title: "Opłacalna Doskonałość",
        description: "Uzyskaj talenty na poziomie korporacyjnym po konkurencyjnych cenach bez kompromisów w zakresie jakości. Oszczędzaj na kosztach rekrutacji, kosztach HR, infrastrukturze i wydatkach na szkolenia.",
        hoverBg: "#AF6AF0"
      }
    ]
  }
};

export default function DedicatedTeamsPageClient() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [hoveredWhy, setHoveredWhy] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { language } = useLanguage();
  const t = content[language];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % t.whyChooseUs.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + t.whyChooseUs.length) % t.whyChooseUs.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900">
      {/* Hero Section */}
      <ShaderBackground>
        <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#163C2E] via-[#1a4838] to-[#239D89]"></div>

            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#239D89]/30 rounded-full blur-[120px]"
              animate={{
                x: [0, 50, 0],
                y: [0, 30, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#163C2E]/40 rounded-full blur-[120px]"
              animate={{
                x: [0, -30, 0],
                y: [0, 50, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}></div>
          </div>

          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto text-center space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium rounded-full inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                  <Sparkles className="h-4 w-4" />
                  <span>{t.badge}</span>
                </Badge>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white"
              >
                <PointerHighlight
                  rectangleClassName="bg-[#239D89]/20 border-[#239D89]/30 leading-loose"
                  pointerClassName="text-[#239D89] h-3 w-3"
                  containerClassName="inline-block"
                >
                  <span className="text-white font-bold">
                    {t.title}
                  </span>
                </PointerHighlight>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto"
              >
                {t.subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Button size="lg" className="rounded-full px-8 text-base shadow-lg hover:shadow-xl transition-all duration-300 group bg-white text-[#163C2E] hover:bg-white/90" asChild>
                  <Link href="/contact">
                    {t.cta1}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 text-base group bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                  asChild
                >
                  <Link href="/contact">
                    <Phone className="mr-2 h-5 w-5" />
                    {t.cta2}
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm text-white/70"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#239D89]" />
                  <span>{t.stat1}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#239D89]" />
                  <span>{t.stat2}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#239D89]" />
                  <span>{t.stat3}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </ShaderBackground>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-neutral-50 dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="inline-block px-4 py-2 bg-[#239D89]/10 text-[#239D89] rounded-full text-sm font-semibold mb-6">
              {t.servicesSection}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#163C2E] to-[#239D89] bg-clip-text text-transparent whitespace-pre-line">
              {t.servicesTitle}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setHoveredService(index)}
                onHoverEnd={() => setHoveredService(null)}
                className={`group relative p-8 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                  hoveredService === index
                    ? 'bg-[#163C2E] border-[#239D89] shadow-lg shadow-[#239D89]/20'
                    : 'bg-white dark:bg-[#1a2942] border-neutral-200 dark:border-[#1a2942] hover:border-[#239D89]/50'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 ${
                  hoveredService === index ? 'bg-[#239D89]/20 text-[#239D89]' : 'bg-[#239D89]/10 text-primary'
                }`}>
                  {service.icon}
                </div>
                <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                  hoveredService === index ? 'text-white' : 'text-neutral-900 dark:text-white'
                }`}>
                  {service.title}
                </h3>
                <p className={`text-sm transition-colors duration-300 ${
                  hoveredService === index ? 'text-white/80' : 'text-neutral-600 dark:text-neutral-400'
                }`}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-32 px-6 bg-[#0f1724] overflow-hidden">
        <div className="absolute inset-0" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center"
          >
            <div className="inline-block px-4 py-2 bg-[#ff7043]/10 text-[#ff7043] rounded-full text-sm font-semibold mb-6">
              {t.benefitsSection}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white whitespace-pre-line">
              {t.benefitsTitle}
            </h2>
          </motion.div>

          <div className="space-y-24">
            {t.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.21, 0.45, 0.27, 0.9]
                }}
                className="relative"
              >
                <motion.div
                  className="grid lg:grid-cols-12 gap-8 items-start"
                  whileInView={{
                    scale: [0.95, 1],
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1 + 0.2
                  }}
                >
                  <div className="lg:col-span-2">
                    <motion.div
                      className="text-6xl md:text-7xl font-bold bg-gradient-to-br from-[#239D89] to-[#1e90ff] bg-clip-text text-transparent"
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1 + 0.3,
                        type: "spring",
                        stiffness: 100
                      }}
                    >
                      [0{index + 1}]
                    </motion.div>
                  </div>

                  <div className="lg:col-span-10">
                    <motion.div
                      className="relative p-8 md:p-10 rounded-2xl bg-gradient-to-br from-[#1a2942] to-[#0f1724] border-2 border-[#239D89]/20 hover:border-[#239D89]/50 transition-all duration-500"
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 20px 60px rgba(35, 157, 137, 0.2)"
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#239D89]/10 to-transparent rounded-bl-full" />

                      <motion.div
                        className="flex items-start gap-4 relative z-10"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1 + 0.4
                        }}
                      >
                        <CheckCircle className="w-8 h-8 text-[#239D89] flex-shrink-0 mt-1" />
                        <p className="text-xl md:text-2xl text-white font-semibold leading-relaxed">
                          {benefit}
                        </p>
                      </motion.div>

                      <motion.div
                        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#239D89] to-[#1e90ff]"
                        initial={{ width: "0%" }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          delay: index * 0.1 + 0.5,
                          ease: "easeOut"
                        }}
                      />
                    </motion.div>
                  </div>
                </motion.div>

                {index < t.benefits.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute left-16 top-full w-0.5 h-24 bg-gradient-to-b from-[#239D89] to-transparent"
                    initial={{ scaleY: 0, originY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1 + 0.6
                    }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-32 px-6 overflow-hidden bg-neutral-50 dark:bg-neutral-950">
        <div className="absolute inset-0" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-32"
          >
            <div className="inline-block px-4 py-2 bg-[#ff7043]/10 text-[#ff7043] rounded-full text-sm font-semibold mb-6">
              {t.whySection}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent whitespace-pre-line">
              {t.whyTitle}
            </h2>
          </motion.div>

          {/* Desktop: Overlapping Cards */}
          <div className="hidden lg:block relative max-w-7xl mx-auto" style={{ minHeight: '850px' }}>
            {t.whyChooseUs.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 - index * 20, x: -20 + index * 5 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                onHoverStart={() => setHoveredWhy(index)}
                onHoverEnd={() => setHoveredWhy(null)}
                className="absolute rounded-sm border border-[#2a4466] overflow-hidden cursor-pointer group transition-all duration-500"
                style={{
                  left: `${80 * index}px`,
                  top: `${100 * index}px`,
                  width: '900px',
                  height: '500px',
                  zIndex: hoveredWhy === index ? 100 : 5 - index,
                  backgroundColor: hoveredWhy === index ? card.hoverBg : `hsl(210, 50%, ${8 + index * 2}%)`,
                  boxShadow: hoveredWhy === index ? `0 20px 60px ${card.hoverBg}50` : 'none'
                }}
              >
                <div className="absolute top-12 left-12">
                  <span className="text-base font-mono tracking-wider text-white transition-colors duration-500">
                    [0{index + 1}]
                  </span>
                </div>
                <div className="absolute inset-0 p-16 flex flex-col justify-center">
                  <h3 className="text-5xl md:text-6xl font-black uppercase leading-[1.1] tracking-tight mb-8 transition-all duration-500 text-white">
                    {card.title.split(' ').map((word, i) => (
                      <span key={i}>{word}<br /></span>
                    ))}
                  </h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: hoveredWhy === index ? 1 : 0,
                      y: hoveredWhy === index ? 0 : 20
                    }}
                    transition={{ duration: 0.4 }}
                    className="text-lg text-white leading-relaxed max-w-2xl"
                  >
                    {card.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile: Carousel */}
          <div className="lg:hidden relative">
            <div className="overflow-hidden">
              <motion.div
                className="flex transition-transform duration-500 ease-out"
                animate={{ x: `-${currentSlide * 100}%` }}
              >
                {t.whyChooseUs.map((card, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="w-full h-[550px] rounded-xl border border-[#2a4466] overflow-hidden"
                      style={{
                        backgroundColor: card.hoverBg,
                        boxShadow: `0 20px 60px ${card.hoverBg}50`
                      }}
                    >
                      <div className="absolute top-8 left-8">
                        <span className="text-sm font-mono tracking-wider text-white/80">
                          [0{index + 1}]
                        </span>
                      </div>
                      <div className="h-full p-8 pt-16 flex flex-col justify-center">
                        <h3 className="text-3xl sm:text-4xl font-black uppercase leading-tight tracking-tight mb-6 text-white">
                          {card.title.split(' ').map((word, i) => (
                            <span key={i}>{word}<br /></span>
                          ))}
                        </h3>
                        <p className="text-base text-white/90 leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-[#239D89] text-white flex items-center justify-center hover:bg-[#1e8473] transition-colors duration-300 shadow-lg"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="flex gap-2">
                {t.whyChooseUs.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? 'bg-[#239D89] w-8'
                        : 'bg-neutral-300 dark:bg-neutral-600'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-[#239D89] text-white flex items-center justify-center hover:bg-[#1e8473] transition-colors duration-300 shadow-lg"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="text-center mt-4">
              <span className="text-neutral-600 dark:text-neutral-400 text-sm font-mono">
                {currentSlide + 1} / {t.whyChooseUs.length}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Team?</h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-8">
            Let's discuss your needs and assemble the perfect team for your project
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer language={language} />
    </div>
  );
}