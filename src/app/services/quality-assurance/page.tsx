"use client";

import { Metadata } from "next";
import { Bug, Shield, Zap, CheckCircle, CheckCircle2, ArrowRight, Phone, Sparkles, MapPin, Check, Trophy, UsersRound, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import ShaderBackground from "@/components/ShaderBackground";
import AnimatedTechTabsQA from "@/components/AnimatedTechTabsQA";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const content = {
  en: {
    badge: "Comprehensive QA & Testing Services",
    title: "Quality Assurance",
    subtitle: "& Software Testing",
    description: "Deliver flawless software with comprehensive QA and testing services. We ensure your applications are reliable, secure, and perform perfectly.",
    cta1: "Improve Your Quality",
    cta2: "Schedule a Call",
    stat1: "99.9% Test Coverage",
    stat2: "10K+ Test Cases Automated",
    stat3: "24/7 Continuous Testing",
    servicesSection: "— OUR SERVICES",
    servicesTitle: "QA and Software Testing\nServices We Provide",
    testingTypes: [
      {
        category: "Manual Testing",
        items: [
          "Requirements analysis",
          "Exploratory Testing",
          "Testing based on the user stories/tasks",
          "Negative testing",
          "Testing of web & mobile applications",
          "API Testing",
          "Functional and nonfunctional tesing",
          "Cross browser testing",
          "Re-testing",
          "Smoke and Regression testing"
        ]
      },
      {
        category: "UI Test Automation",
        items: [
          "E2E tests",
          "Producing automated UI tests to check the usability part of software solutions"
        ]
      },
      {
        category: "API Test Automation",
        items: [
          "Functional tests",
          "Creating automated API tests to check your software on the business logic layer"
        ]
      }
    ],
    techSection: "— TECHNOLOGIES",
    techTitle: "Technologies We Use For\nSoftware QA Testing Services",
    processSection: "— HOW WE WORK",
    processTitle: "Our Process",
    processSteps: [
      {
        number: "01",
        title: "REQUIREMENTS ANALYSIS",
        description: "We begin by thoroughly understanding your software requirements, business objectives, and quality standards. Our QA team works closely with stakeholders to define test strategies, acceptance criteria, and quality metrics that align with your project goals."
      },
      {
        number: "02",
        title: "TEST PLANNING & DESIGN",
        description: "Our team creates comprehensive test plans and designs detailed test cases covering all functional and non-functional requirements. We establish testing environments, select appropriate tools, and define automation strategies for optimal test coverage."
      },
      {
        number: "03",
        title: "TEST EXECUTION & AUTOMATION",
        description: "We execute manual and automated tests across multiple platforms and browsers. Our engineers implement continuous testing pipelines, perform regression testing, and conduct specialized testing including security, performance, and usability assessments."
      },
      {
        number: "04",
        title: "DEFECT MANAGEMENT & REPORTING",
        description: "Every bug is tracked, documented, and prioritized. We provide detailed defect reports with reproduction steps, maintain transparency through regular status updates, and work closely with development teams to ensure timely resolution and verification."
      },
      {
        number: "05",
        title: "CONTINUOUS IMPROVEMENT",
        description: "Quality assurance is an ongoing process. We continuously refine our testing strategies, update test suites, monitor quality metrics, and provide recommendations for improving software quality, reliability, and user satisfaction throughout the product lifecycle."
      }
    ],
    whySection: "— WHY US?",
    whyTitle: "Why Choose Us As\nSoftware Testing Company",
    whyChooseUs: [
      {
        title: "Comprehensive QA Expertise",
        description: "With over a decade of experience in quality assurance, we bring deep expertise across all testing types - from manual exploratory testing to complex automated test suites. Our QA specialists have tested hundreds of applications across various industries.",
        hoverBg: "#FF8D3E"
      },
      {
        title: "End-to-End Testing Solutions",
        description: "We provide complete QA services covering functional, non-functional, security, performance, and usability testing. Our holistic approach ensures every aspect of your software is thoroughly validated before reaching end users.",
        hoverBg: "#F15556"
      },
      {
        title: "Advanced Test Automation",
        description: "We leverage cutting-edge automation frameworks like Selenium, Cypress, and Playwright to accelerate testing cycles. Our automation engineers build robust, maintainable test suites that integrate seamlessly with CI/CD pipelines.",
        hoverBg: "#53ACF1"
      },
      {
        title: "Quality-Driven Culture",
        description: "Quality isn't just a phase—it's embedded in our DNA. We implement shift-left testing practices, conduct early defect detection, and maintain rigorous quality standards throughout the development lifecycle to minimize risks and costs.",
        hoverBg: "#1BC65C"
      },
      {
        title: "Transparent Communication",
        description: "Stay informed every step of the way with detailed test reports, real-time dashboards, and regular status updates. We provide clear metrics, comprehensive documentation, and actionable insights to help you make informed decisions.",
        hoverBg: "#AF6AF0"
      }
    ],
    ctaTitle: "Ready to Improve Your Software Quality?",
    ctaSubtitle: "Let's ensure your software is flawless before it reaches your users",
    ctaButton: "Get Started Today"
  },
  fr: {
    badge: "Services Complets d'Assurance Qualité et Tests",
    title: "Assurance Qualité",
    subtitle: "& Tests Logiciels",
    description: "Livrez des logiciels impeccables avec des services complets d'AQ et de tests. Nous garantissons que vos applications sont fiables, sécurisées et fonctionnent parfaitement.",
    cta1: "Améliorez Votre Qualité",
    cta2: "Planifier un Appel",
    stat1: "99.9% de Couverture de Test",
    stat2: "10K+ Cas de Test Automatisés",
    stat3: "Tests Continus 24/7",
    servicesSection: "— NOS SERVICES",
    servicesTitle: "Services d'Assurance Qualité\net de Tests Logiciels",
    testingTypes: [
      {
        category: "Tests Manuels",
        items: [
          "Analyse des exigences",
          "Tests exploratoires",
          "Tests basés sur les user stories/tâches",
          "Tests négatifs",
          "Tests d'applications web et mobiles",
          "Tests d'API",
          "Tests fonctionnels et non fonctionnels",
          "Tests multi-navigateurs",
          "Re-tests",
          "Tests de fumée et de régression"
        ]
      },
      {
        category: "Automatisation Tests UI",
        items: [
          "Tests E2E",
          "Production de tests UI automatisés pour vérifier l'utilisabilité des solutions logicielles"
        ]
      },
      {
        category: "Automatisation Tests API",
        items: [
          "Tests fonctionnels",
          "Création de tests API automatisés pour vérifier votre logiciel au niveau de la logique métier"
        ]
      }
    ],
    techSection: "— TECHNOLOGIES",
    techTitle: "Technologies Utilisées Pour\nServices de Tests d'Assurance Qualité",
    processSection: "— NOTRE MÉTHODE",
    processTitle: "Notre Processus",
    processSteps: [
      {
        number: "01",
        title: "ANALYSE DES EXIGENCES",
        description: "Nous commençons par comprendre en profondeur vos exigences logicielles, objectifs commerciaux et normes de qualité. Notre équipe AQ travaille en étroite collaboration avec les parties prenantes pour définir les stratégies de test, critères d'acceptation et métriques de qualité alignés sur vos objectifs de projet."
      },
      {
        number: "02",
        title: "PLANIFICATION & CONCEPTION DES TESTS",
        description: "Notre équipe crée des plans de test complets et conçoit des cas de test détaillés couvrant toutes les exigences fonctionnelles et non fonctionnelles. Nous établissons des environnements de test, sélectionnons les outils appropriés et définissons des stratégies d'automatisation pour une couverture de test optimale."
      },
      {
        number: "03",
        title: "EXÉCUTION & AUTOMATISATION DES TESTS",
        description: "Nous exécutons des tests manuels et automatisés sur plusieurs plateformes et navigateurs. Nos ingénieurs implémentent des pipelines de tests continus, effectuent des tests de régression et mènent des tests spécialisés incluant sécurité, performance et évaluations d'utilisabilité."
      },
      {
        number: "04",
        title: "GESTION DES DÉFAUTS & REPORTING",
        description: "Chaque bug est suivi, documenté et priorisé. Nous fournissons des rapports de défauts détaillés avec les étapes de reproduction, maintenons la transparence via des mises à jour régulières et travaillons en étroite collaboration avec les équipes de développement pour assurer une résolution et vérification rapides."
      },
      {
        number: "05",
        title: "AMÉLIORATION CONTINUE",
        description: "L'assurance qualité est un processus continu. Nous affinons continuellement nos stratégies de test, mettons à jour les suites de tests, surveillons les métriques de qualité et fournissons des recommandations pour améliorer la qualité logicielle, la fiabilité et la satisfaction utilisateur tout au long du cycle de vie du produit."
      }
    ],
    whySection: "— POURQUOI NOUS?",
    whyTitle: "Pourquoi Nous Choisir Comme\nEntreprise de Tests Logiciels",
    whyChooseUs: [
      {
        title: "Expertise Complète en AQ",
        description: "Avec plus d'une décennie d'expérience en assurance qualité, nous apportons une expertise approfondie dans tous les types de tests - des tests exploratoires manuels aux suites de tests automatisés complexes. Nos spécialistes AQ ont testé des centaines d'applications dans diverses industries.",
        hoverBg: "#FF8D3E"
      },
      {
        title: "Solutions de Tests Bout-en-Bout",
        description: "Nous fournissons des services AQ complets couvrant les tests fonctionnels, non fonctionnels, de sécurité, de performance et d'utilisabilité. Notre approche holistique garantit que chaque aspect de votre logiciel est entièrement validé avant d'atteindre les utilisateurs finaux.",
        hoverBg: "#F15556"
      },
      {
        title: "Automatisation Avancée des Tests",
        description: "Nous exploitons des frameworks d'automatisation de pointe comme Selenium, Cypress et Playwright pour accélérer les cycles de tests. Nos ingénieurs en automatisation construisent des suites de tests robustes et maintenables qui s'intègrent parfaitement aux pipelines CI/CD.",
        hoverBg: "#53ACF1"
      },
      {
        title: "Culture Axée sur la Qualité",
        description: "La qualité n'est pas qu'une phase—elle est ancrée dans notre ADN. Nous implémentons des pratiques de tests shift-left, effectuons une détection précoce des défauts et maintenons des normes de qualité rigoureuses tout au long du cycle de développement pour minimiser les risques et coûts.",
        hoverBg: "#1BC65C"
      },
      {
        title: "Communication Transparente",
        description: "Restez informé à chaque étape avec des rapports de tests détaillés, des tableaux de bord en temps réel et des mises à jour régulières. Nous fournissons des métriques claires, une documentation complète et des insights actionnables pour vous aider à prendre des décisions éclairées.",
        hoverBg: "#AF6AF0"
      }
    ],
    ctaTitle: "Prêt à Améliorer la Qualité de Votre Logiciel?",
    ctaSubtitle: "Assurons-nous que votre logiciel est impeccable avant qu'il n'atteigne vos utilisateurs",
    ctaButton: "Commencez Aujourd'hui"
  },
  pl: {
    badge: "Kompleksowe Usługi Zapewnienia Jakości i Testowania",
    title: "Zapewnienie Jakości",
    subtitle: "i Testowanie Oprogramowania",
    description: "Dostarczaj bezbłędne oprogramowanie dzięki kompleksowym usługom zapewnienia jakości i testowania. Zapewniamy, że Twoje aplikacje są niezawodne, bezpieczne i działają perfekcyjnie.",
    cta1: "Popraw Swoją Jakość",
    cta2: "Zaplanuj Rozmowę",
    stat1: "99.9% Pokrycia Testów",
    stat2: "10K+ Zautomatyzowanych Przypadków Testowych",
    stat3: "Ciągłe Testowanie 24/7",
    servicesSection: "— NASZE USŁUGI",
    servicesTitle: "Usługi Zapewnienia Jakości\ni Testowania Oprogramowania",
    testingTypes: [
      {
        category: "Testy Manualne",
        items: [
          "Analiza wymagań",
          "Testy eksploracyjne",
          "Testy oparte na historiach użytkownika/zadaniach",
          "Testy negatywne",
          "Testowanie aplikacji webowych i mobilnych",
          "Testowanie API",
          "Testy funkcjonalne i niefunkcjonalne",
          "Testy w różnych przeglądarkach",
          "Ponowne testowanie",
          "Testy wstępne i regresji"
        ]
      },
      {
        category: "Automatyzacja Testów UI",
        items: [
          "Testy E2E",
          "Tworzenie zautomatyzowanych testów UI do sprawdzania użyteczności rozwiązań programowych"
        ]
      },
      {
        category: "Automatyzacja Testów API",
        items: [
          "Testy funkcjonalne",
          "Tworzenie zautomatyzowanych testów API do sprawdzania oprogramowania na poziomie logiki biznesowej"
        ]
      }
    ],
    techSection: "— TECHNOLOGIE",
    techTitle: "Technologie Używane Do\nUsług Testowania Zapewnienia Jakości",
    processSection: "— JAK PRACUJEMY",
    processTitle: "Nasz Proces",
    processSteps: [
      {
        number: "01",
        title: "ANALIZA WYMAGAŃ",
        description: "Zaczynamy od dokładnego zrozumienia Twoich wymagań dotyczących oprogramowania, celów biznesowych i standardów jakości. Nasz zespół QA ściśle współpracuje z interesariuszami, aby zdefiniować strategie testowania, kryteria akceptacji i metryki jakości zgodne z celami Twojego projektu."
      },
      {
        number: "02",
        title: "PLANOWANIE I PROJEKTOWANIE TESTÓW",
        description: "Nasz zespół tworzy kompleksowe plany testów i projektuje szczegółowe przypadki testowe obejmujące wszystkie wymagania funkcjonalne i niefunkcjonalne. Ustanawiamy środowiska testowe, wybieramy odpowiednie narzędzia i definiujemy strategie automatyzacji dla optymalnego pokrycia testów."
      },
      {
        number: "03",
        title: "WYKONANIE I AUTOMATYZACJA TESTÓW",
        description: "Wykonujemy testy manualne i automatyczne na wielu platformach i przeglądarkach. Nasi inżynierowie wdrażają pipeline ciągłego testowania, przeprowadzają testy regresji i prowadzą specjalistyczne testy obejmujące bezpieczeństwo, wydajność i oceny użyteczności."
      },
      {
        number: "04",
        title: "ZARZĄDZANIE DEFEKTAMI I RAPORTOWANIE",
        description: "Każdy błąd jest śledzony, dokumentowany i priorytetyzowany. Dostarczamy szczegółowe raporty defektów z krokami reprodukcji, utrzymujemy przejrzystość poprzez regularne aktualizacje statusu i ściśle współpracujemy z zespołami programistycznymi, aby zapewnić terminowe rozwiązanie i weryfikację."
      },
      {
        number: "05",
        title: "CIĄGŁE DOSKONALENIE",
        description: "Zapewnienie jakości to proces ciągły. Stale udoskonalamy nasze strategie testowania, aktualizujemy zestawy testów, monitorujemy metryki jakości i dostarczamy rekomendacje dotyczące poprawy jakości oprogramowania, niezawodności i satysfakcji użytkowników przez cały cykl życia produktu."
      }
    ],
    whySection: "— DLACZEGO MY?",
    whyTitle: "Dlaczego Wybrać Nas Jako\nFirmę Testującą Oprogramowanie",
    whyChooseUs: [
      {
        title: "Kompleksowa Ekspertyza QA",
        description: "Z ponad dziesięcioletnim doświadczeniem w zapewnianiu jakości, wnosimy głęboką wiedzę specjalistyczną we wszystkich typach testów - od manualnych testów eksploracyjnych po złożone zestawy testów automatycznych. Nasi specjaliści QA testowali setki aplikacji w różnych branżach.",
        hoverBg: "#FF8D3E"
      },
      {
        title: "Kompleksowe Rozwiązania Testowe",
        description: "Zapewniamy kompletne usługi QA obejmujące testy funkcjonalne, niefunkcjonalne, bezpieczeństwa, wydajności i użyteczności. Nasze holistyczne podejście zapewnia, że każdy aspekt Twojego oprogramowania jest dokładnie zwalidowany przed dotarciem do użytkowników końcowych.",
        hoverBg: "#F15556"
      },
      {
        title: "Zaawansowana Automatyzacja Testów",
        description: "Wykorzystujemy najnowocześniejsze frameworki automatyzacji, takie jak Selenium, Cypress i Playwright, aby przyspieszyć cykle testowania. Nasi inżynierowie automatyzacji budują solidne, łatwe w utrzymaniu zestawy testów, które bezproblemowo integrują się z pipeline'ami CI/CD.",
        hoverBg: "#53ACF1"
      },
      {
        title: "Kultura Zorientowana na Jakość",
        description: "Jakość to nie tylko faza—jest wbudowana w nasze DNA. Wdrażamy praktyki testowania shift-left, prowadzimy wczesne wykrywanie defektów i utrzymujemy rygorystyczne standardy jakości przez cały cykl rozwoju, aby zminimalizować ryzyko i koszty.",
        hoverBg: "#1BC65C"
      },
      {
        title: "Przejrzysta Komunikacja",
        description: "Bądź informowany na każdym kroku dzięki szczegółowym raportom testów, dashboardom w czasie rzeczywistym i regularnym aktualizacjom statusu. Dostarczamy jasne metryki, kompleksową dokumentację i praktyczne spostrzeżenia, aby pomóc Ci podejmować świadome decyzje.",
        hoverBg: "#AF6AF0"
      }
    ],
    ctaTitle: "Gotowy na Poprawę Jakości Swojego Oprogramowania?",
    ctaSubtitle: "Upewnijmy się, że Twoje oprogramowanie jest bezbłędne, zanim dotrze do użytkowników",
    ctaButton: "Rozpocznij Dziś"
  }
};

export default function QualityAssurancePage() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [hoveredWhy, setHoveredWhy] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { language } = useLanguage();
  const t = content[language];

  const services = [
    {
      icon: <Bug className="w-6 h-6" />,
      title: "Functional Testing",
      description: "Comprehensive testing to ensure all features work as expected across all scenarios."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Testing",
      description: "Load testing, stress testing, and optimization to ensure optimal performance."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security Testing",
      description: "Identify vulnerabilities and ensure your application meets security standards."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Automation Testing",
      description: "Automated test suites for continuous integration and faster release cycles."
    }
  ];

  const testingTypes = [
    {
      category: "Manual Testing",
      items: [
        "Requirements analysis",
        "Exploratory Testing",
        "Testing based on the user stories/tasks",
        "Negative testing",
        "Testing of web & mobile applications",
        "API Testing",
        "Functional and nonfunctional tesing",
        "Cross browser testing",
        "Re-testing",
        "Smoke and Regression testing"
      ]
    },
    {
      category: "UI Test Automation",
      items: [
        "E2E tests",
        "Producing automated UI tests to check the usability part of software solutions"
      ]
    },
    {
      category: "API Test Automation",
      items: [
        "Functional tests",
        "Creating automated API tests to check your software on the business logic layer"
      ]
    }
  ];

  const technologies = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path d="M12 0L1.608 6v12L12 24l10.392-6V6L12 0zm-1.473 4.155l6.458 3.729v7.456l-6.458 3.729-6.458-3.729V7.884l6.458-3.729z" />
        </svg>
      ),
      name: "SELENIUM",
      description: "Industry-standard automation framework for web testing."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path d="M12 0C5.373 0 1 5.373 1 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6s-4.298 9.6-9.6 9.6-9.6-4.298-9.6-9.6 4.298-9.6 9.6-9.6z" />
        </svg>
      ),
      name: "CYPRESS",
      description: "Modern testing framework for fast, reliable UI testing."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.894 4.97c1.39 1.39 2.342 3.165 2.726 5.126H16.94c-.224-1.827-.908-3.523-1.988-4.943l1.942-1.942z" />
        </svg>
      ),
      name: "PLAYWRIGHT",
      description: "End-to-end testing for modern web applications."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path d="M4.5 4.5v15h15v-15h-15zm1.5 1.5h12v12H6V6zm2 2v2h2V8H8zm3 0v2h2V8h-2z" />
        </svg>
      ),
      name: "JEST",
      description: "Delightful JavaScript Testing Framework with a focus on simplicity."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path d="M12.5 0C6.152 0 1 5.152 1 11.5S6.152 23 12.5 23 24 17.848 24 11.5 18.848 0 12.5 0zm0 2.5c4.962 0 9 4.038 9 9.6s-4.038 9.6-9 9.6-9-4.038-9-9.6 4.038-9.6 9-9.6z" />
        </svg>
      ),
      name: "JMETER",
      description: "Performance testing tool for analyzing and measuring performance."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6s-4.298 9.6-9.6 9.6-9.6-4.298-9.6-9.6 4.298-9.6 9.6-9.6z" />
        </svg>
      ),
      name: "POSTMAN",
      description: "API development and testing platform for developers."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6s-4.298 9.6-9.6 9.6-9.6-4.298-9.6-9.6 4.298-9.6 9.6-9.6zM8.4 7.2v9.6l7.2-4.8-7.2-4.8z" />
        </svg>
      ),
      name: "BROWSERSTACK",
      description: "Cloud testing platform for cross-browser compatibility."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
          <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236z" />
        </svg>
      ),
      name: "TESTRAIL",
      description: "Test case management software for QA teams."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "REQUIREMENTS ANALYSIS",
      description: "We begin by thoroughly understanding your software requirements, business objectives, and quality standards. Our QA team works closely with stakeholders to define test strategies, acceptance criteria, and quality metrics that align with your project goals."
    },
    {
      number: "02",
      title: "TEST PLANNING & DESIGN",
      description: "Our team creates comprehensive test plans and designs detailed test cases covering all functional and non-functional requirements. We establish testing environments, select appropriate tools, and define automation strategies for optimal test coverage."
    },
    {
      number: "03",
      title: "TEST EXECUTION & AUTOMATION",
      description: "We execute manual and automated tests across multiple platforms and browsers. Our engineers implement continuous testing pipelines, perform regression testing, and conduct specialized testing including security, performance, and usability assessments."
    },
    {
      number: "04",
      title: "DEFECT MANAGEMENT & REPORTING",
      description: "Every bug is tracked, documented, and prioritized. We provide detailed defect reports with reproduction steps, maintain transparency through regular status updates, and work closely with development teams to ensure timely resolution and verification."
    },
    {
      number: "05",
      title: "CONTINUOUS IMPROVEMENT",
      description: "Quality assurance is an ongoing process. We continuously refine our testing strategies, update test suites, monitor quality metrics, and provide recommendations for improving software quality, reliability, and user satisfaction throughout the product lifecycle."
    }
  ];

  const whyChooseUs = [
    {
      title: "Comprehensive QA Expertise",
      description: "With over a decade of experience in quality assurance, we bring deep expertise across all testing types - from manual exploratory testing to complex automated test suites. Our QA specialists have tested hundreds of applications across various industries.",
      hoverBg: "#FF8D3E"
    },
    {
      title: "End-to-End Testing Solutions",
      description: "We provide complete QA services covering functional, non-functional, security, performance, and usability testing. Our holistic approach ensures every aspect of your software is thoroughly validated before reaching end users.",
      hoverBg: "#F15556"
    },
    {
      title: "Advanced Test Automation",
      description: "We leverage cutting-edge automation frameworks like Selenium, Cypress, and Playwright to accelerate testing cycles. Our automation engineers build robust, maintainable test suites that integrate seamlessly with CI/CD pipelines.",
      hoverBg: "#53ACF1"
    },
    {
      title: "Quality-Driven Culture",
      description: "Quality isn't just a phase—it's embedded in our DNA. We implement shift-left testing practices, conduct early defect detection, and maintain rigorous quality standards throughout the development lifecycle to minimize risks and costs.",
      hoverBg: "#1BC65C"
    },
    {
      title: "Transparent Communication",
      description: "Stay informed every step of the way with detailed test reports, real-time dashboards, and regular status updates. We provide clear metrics, comprehensive documentation, and actionable insights to help you make informed decisions.",
      hoverBg: "#AF6AF0"
    }
  ];

  const benefits = [
    "Reduce bugs and defects by up to 90%",
    "Faster time-to-market with CI/CD",
    "Improved user satisfaction",
    "Lower maintenance costs",
    "Enhanced security posture",
    "Better performance and reliability"
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % t.whyChooseUs.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + t.whyChooseUs.length) % t.whyChooseUs.length);
  };

  const JavaIcon = () => (
    <svg width="100%" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path fillRule="evenodd" clipRule="evenodd" d="M5.22544 17.0135C5.22544 17.0135 4.38521 17.5025 5.82409 17.6676C7.56752 17.8666 8.45841 17.838 10.3791 17.4749C10.3791 17.4749 10.8851 17.7914 11.5905 18.0656C7.28346 19.9109 1.84276 17.9586 5.22544 17.0135Z" fill="#0074BD" />
      <path fillRule="evenodd" clipRule="evenodd" d="M4.6992 14.6051C4.6992 14.6051 3.75667 15.3029 5.19662 15.4518C7.05915 15.644 8.52946 15.6598 11.0752 15.1699C11.0752 15.1699 11.4264 15.5267 11.9796 15.7217C6.77298 17.2447 0.973816 15.8415 4.6992 14.6051Z" fill="#0074BD" />
      <path fillRule="evenodd" clipRule="evenodd" d="M9.13526 10.519C10.1971 11.7413 8.85684 12.8403 8.85684 12.8403C8.85684 12.8403 11.5514 11.4496 10.3142 9.70714C9.15823 8.08299 8.27201 7.27619 13.0698 4.49377C13.0699 4.49377 5.53846 6.3743 9.13526 10.519Z" fill="#EA2D2E" />
      <path fillRule="evenodd" clipRule="evenodd" d="M14.8317 18.7952C14.8317 18.7952 15.4537 19.3079 14.1466 19.7045C11.6612 20.4573 3.7999 20.6844 1.61642 19.7346C0.83206 19.3929 2.30364 18.9194 2.76666 18.8194C3.24943 18.715 3.52508 18.7341 3.52508 18.7341C2.65215 18.1193 -2.11709 19.9413 1.10284 20.4639C9.88372 21.8872 17.1091 19.8228 14.8317 18.7952Z" fill="#0074BD" />
      <path fillRule="evenodd" clipRule="evenodd" d="M5.63034 12.1093C5.63034 12.1093 1.63213 13.0592 4.21453 13.4045C5.30524 13.5504 7.47826 13.5169 9.50386 13.3469C11.1588 13.208 12.8197 12.911 12.8197 12.911C12.8197 12.911 12.2365 13.1611 11.8144 13.4492C7.75342 14.5173 -0.0900902 14.0199 2.16829 12.9279C4.07733 12.0043 5.63034 12.1093 5.63034 12.1093Z" fill="#0074BD" />
      <path fillRule="evenodd" clipRule="evenodd" d="M12.8032 16.1183C16.931 13.9739 15.0222 11.9129 13.69 12.1905C13.3643 12.2585 13.2181 12.3174 13.2181 12.3174C13.2181 12.3174 13.3395 12.1273 13.5706 12.0455C16.2062 11.1193 18.2326 14.7779 12.7207 16.2268C12.7207 16.2268 12.7841 16.1694 12.8032 16.1183Z" fill="#0074BD" />
      <path fillRule="evenodd" clipRule="evenodd" d="M10.3142 0C10.3142 0 12.5998 2.28685 8.14579 5.80238C4.57399 8.62354 7.3314 10.2315 8.14452 12.0696C6.0594 10.1885 4.53 8.53229 5.55584 6.99111C7.06227 4.72914 11.2362 3.63209 10.3142 0Z" fill="#EA2D2E" />
      <path fillRule="evenodd" clipRule="evenodd" d="M6.03592 21.931C9.99724 22.1843 16.082 21.7901 16.226 19.9155C16.226 19.9155 15.9492 20.6261 12.9519 21.19C9.57049 21.8266 5.39897 21.7524 2.92578 21.3441C2.92578 21.3441 3.43245 21.7634 6.03592 21.931Z" fill="#0074BD" />
    </svg>
  );
  const JavaScriptIcon = () => (
    <svg width="100%" viewBox="0 0 147 147" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_3247_4441)">
        <path d="M0 0H147V147H0V0Z" fill="#F0DB4F"></path>
        <path d="M134.969 111.941C133.893 105.234 129.52 99.6023 116.566 94.3483C112.067 92.2802 107.05 90.7992 105.555 87.3895C105.024 85.4053 104.954 84.2874 105.29 83.0857C106.254 79.1872 110.907 77.9715 114.596 79.0894C116.971 79.8858 119.221 81.7165 120.577 84.6368C126.921 80.5288 126.907 80.5566 131.336 77.7341C129.715 75.2189 128.849 74.0589 127.787 72.9831C123.972 68.7212 118.774 66.5274 110.46 66.6951C109.021 66.8768 107.568 67.0722 106.128 67.254C101.978 68.302 98.0236 70.4819 95.704 73.4023C88.7453 81.2973 90.7295 95.1168 99.1974 100.804C107.539 107.064 119.794 108.489 121.359 114.344C122.882 121.513 116.091 123.832 109.342 123.008C104.368 121.974 101.601 119.445 98.6105 114.847C93.1051 118.033 93.1051 118.033 87.4459 121.289C88.7873 124.224 90.1985 125.551 92.4484 128.094C103.096 138.896 129.743 138.365 134.522 122.016C134.718 121.457 136.003 117.712 134.969 111.941V111.941ZM79.9141 67.5613H66.1643C66.1643 79.4387 66.1085 91.2322 66.1085 103.11C66.1085 110.669 66.4998 117.6 65.2701 119.724C63.258 123.902 58.0459 123.385 55.6704 122.574C53.253 121.387 52.0234 119.696 50.5981 117.307C50.2068 116.622 49.9134 116.091 49.8154 116.049C46.0847 118.327 42.3676 120.618 38.6367 122.896C40.4953 126.711 43.234 130.022 46.7413 132.174C51.9813 135.318 59.0239 136.282 66.388 134.591C71.1809 133.194 75.3168 130.302 77.4827 125.9C80.6128 120.129 79.942 113.142 79.9141 105.415C79.984 92.8112 79.9141 80.2072 79.9141 67.5613Z" fill="#323330"></path>
      </g>
      <defs>
        <clipPath id="clip0_3247_4441">
          <rect width="147" height="147" fill="white"></rect>
        </clipPath>
      </defs>
    </svg>
  );
  const SeleniumIcon = () => (
    <svg width="100%" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.45 21.51C20.8251 21.491 20.216 21.7078 19.7436 22.1172C19.2711 22.5266 18.97 23.0988 18.9 23.72C18.8969 23.732 18.8966 23.7446 18.8992 23.7568C18.9018 23.7689 18.9072 23.7803 18.915 23.79C18.9227 23.7997 18.9327 23.8075 18.9439 23.8127C18.9552 23.8179 18.9676 23.8204 18.98 23.82H23.93C23.9414 23.8201 23.9527 23.8177 23.9631 23.8131C23.9735 23.8085 23.9828 23.8017 23.9904 23.7932C23.998 23.7846 24.0037 23.7746 24.007 23.7637C24.0104 23.7528 24.0114 23.7413 24.01 23.73C23.9613 23.0975 23.6653 22.5097 23.186 22.0941C22.7068 21.6785 22.083 21.4686 21.45 21.51Z" fill="#01A71C"></path>
      <path d="M32.06 4.91L21.56 16.7C21.53 16.7324 21.4937 16.7583 21.4533 16.776C21.4128 16.7937 21.3691 16.8028 21.325 16.8028C21.2809 16.8028 21.2372 16.7937 21.1967 16.776C21.1563 16.7583 21.12 16.7324 21.09 16.7L15.73 11.17C15.6846 11.1132 15.6598 11.0427 15.6598 10.97C15.6598 10.8973 15.6846 10.8268 15.73 10.77L17.5 8.5C17.5296 8.45871 17.5687 8.42507 17.6139 8.40186C17.6591 8.37865 17.7092 8.36655 17.76 8.36655C17.8108 8.36655 17.8609 8.37865 17.9061 8.40186C17.9513 8.42507 17.9904 8.45871 18.02 8.5L21.02 11.82C21.05 11.8557 21.0875 11.8845 21.1299 11.9042C21.1722 11.9239 21.2183 11.9341 21.265 11.9341C21.3117 11.9341 21.3578 11.9239 21.4001 11.9042C21.4425 11.8845 21.48 11.8557 21.51 11.82L29.87 0.36C29.8933 0.326133 29.907 0.286655 29.9099 0.245669C29.9127 0.204684 29.9045 0.163687 29.8861 0.12694C29.8677 0.0901942 29.8399 0.05904 29.8054 0.0367164C29.7709 0.0143928 29.731 0.00171465 29.69 0H0.25C0.183696 0 0.120107 0.0263392 0.0732233 0.0732233C0.0263392 0.120107 0 0.183696 0 0.25V33.75C0 33.8163 0.0263392 33.8799 0.0732233 33.9268C0.120107 33.9737 0.183696 34 0.25 34H32.25C32.3163 34 32.3799 33.9737 32.4268 33.9268C32.4737 33.8799 32.5 33.8163 32.5 33.75V5.06C32.5199 5.00165 32.5158 4.93779 32.4886 4.88247C32.4614 4.82715 32.4133 4.78489 32.355 4.765C32.2967 4.74511 32.2328 4.74921 32.1775 4.7764C32.1221 4.8036 32.0799 4.85165 32.06 4.91ZM9.06 30.27C6.95928 30.3759 4.90008 29.6584 3.32 28.27C3.27008 28.2134 3.24254 28.1405 3.24254 28.065C3.24254 27.9895 3.27008 27.9166 3.32 27.86L4.57 26.11C4.59064 26.0742 4.61824 26.0428 4.65119 26.0178C4.68413 25.9928 4.72174 25.9746 4.76182 25.9644C4.80189 25.9541 4.8436 25.952 4.88451 25.9581C4.92542 25.9642 4.96468 25.9785 5 26C6.1419 27.0587 7.64287 27.6448 9.2 27.64C10.84 27.64 11.64 26.88 11.64 26.08C11.64 23.6 3.56 25.3 3.56 20.02C3.56 17.69 5.56 15.75 8.88 15.75C10.7853 15.6823 12.6505 16.3076 14.13 17.51C14.1856 17.5678 14.2167 17.6448 14.2167 17.725C14.2167 17.8052 14.1856 17.8822 14.13 17.94L12.9 19.65C12.8746 19.684 12.8425 19.7124 12.8057 19.7335C12.7688 19.7546 12.728 19.7679 12.6858 19.7726C12.6437 19.7773 12.601 19.7733 12.5604 19.7608C12.5198 19.7483 12.4822 19.7276 12.45 19.7C11.3591 18.8329 10.0034 18.3669 8.61 18.38C7.33 18.38 6.61 18.95 6.61 19.79C6.61 22.02 14.67 20.53 14.67 25.79C14.67 28.33 12.84 30.27 9.05 30.27H9.06ZM26.68 25.4C26.6814 25.4371 26.6751 25.4742 26.6615 25.5088C26.648 25.5434 26.6274 25.5748 26.6011 25.6011C26.5748 25.6274 26.5434 25.648 26.5088 25.6615C26.4742 25.6751 26.4371 25.6814 26.4 25.68H19C18.9882 25.6812 18.9767 25.6848 18.9662 25.6905C18.9558 25.6963 18.9465 25.704 18.9391 25.7133C18.9317 25.7226 18.9261 25.7333 18.9229 25.7447C18.9196 25.7562 18.9186 25.7682 18.92 25.78C19.04 26.4715 19.4144 27.0931 19.9696 27.5224C20.5248 27.9517 21.2206 28.1578 21.92 28.1C22.8378 28.0806 23.7291 27.7881 24.48 27.26C24.5093 27.2354 24.5435 27.2174 24.5803 27.207C24.6171 27.1966 24.6557 27.1942 24.6935 27.1999C24.7313 27.2056 24.7675 27.2192 24.7997 27.2399C24.8318 27.2606 24.8592 27.2879 24.88 27.32L25.78 28.63C25.8175 28.6882 25.8321 28.7582 25.821 28.8265C25.81 28.8948 25.774 28.9567 25.72 29C24.5319 29.8671 23.0904 30.3171 21.62 30.28C20.8855 30.321 20.1505 30.208 19.4621 29.9483C18.7738 29.6886 18.1473 29.288 17.6229 28.772C17.0985 28.2561 16.6877 27.6362 16.4168 26.9522C16.1459 26.2682 16.021 25.5351 16.05 24.8C16.0296 24.0825 16.1549 23.3684 16.4183 22.7007C16.6817 22.033 17.0777 21.4256 17.5824 20.9153C18.0872 20.4049 18.6901 20.0022 19.3549 19.7315C20.0196 19.4607 20.7323 19.3275 21.45 19.34C24.56 19.34 26.67 21.67 26.67 25.08L26.68 25.4Z" fill="#01A71C"></path>
    </svg>
  );
  const CypressIcon = () => (

    <svg width="100%" viewBox="0 0 46 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.854023 30.3588C0.288116 28.2979 0 26.1573 0 24.0013C0 14.1592 6.18126 5.16 15.3824 1.61121L16.5888 4.73343C8.66867 7.78884 3.34915 15.5314 3.34915 24.0013C3.34915 25.8592 3.59608 27.6991 4.08225 29.4722L0.854023 30.3588Z" fill="#69D3A7"></path>
      <path d="M42.4509 14.4933C38.8703 7.61925 31.8222 3.34836 24.0615 3.34836C21.3117 3.34836 18.6391 3.87772 16.1234 4.91846L14.8398 1.82707C17.7645 0.616732 20.8667 0 24.0615 0C33.0775 0 41.2625 4.95958 45.422 12.9463L42.4509 14.4933Z" fill="url(#paint0_linear_3247_4467)"></path>
      <path d="M16.8779 19.0494C18.8199 19.0494 20.4019 20.085 21.2148 21.8915L21.2791 22.0329L24.5407 20.9253L24.4713 20.7583C23.2083 17.6823 20.299 15.7704 16.8779 15.7704C14.4727 15.7704 12.5178 16.5414 10.9024 18.1243C9.2972 19.697 8.48438 21.6757 8.48438 24.0064C8.48438 26.3166 9.2972 28.285 10.9024 29.8577C12.5178 31.4407 14.4727 32.2116 16.8779 32.2116C20.299 32.2116 23.2083 30.2997 24.4713 27.2263L24.5407 27.0593L21.2739 25.9491L21.2122 26.0956C20.4842 27.8713 18.8637 28.9326 16.8779 28.9326C15.5248 28.9326 14.3827 28.4598 13.4772 27.5295C12.5615 26.5864 12.0985 25.4018 12.0985 24.009C12.0985 22.6059 12.5512 21.4444 13.4772 20.4576C14.3801 19.5223 15.5248 19.0494 16.8779 19.0494Z" fill="#F1F1F1"></path>
      <path d="M37.307 16.0737L32.6589 27.8353L27.9799 16.0737H24.1523L30.7142 32.1268L26.0455 43.449L29.3921 44.1146L40.9237 16.0737H37.307Z" fill="#F1F1F1"></path>
      <path d="M26.6434 41.9895L25.828 43.9631C25.6659 44.3537 25.2955 44.6183 24.8788 44.6363C24.6036 44.6466 24.3258 44.6543 24.0454 44.6543C14.4481 44.6492 5.95693 37.8831 3.85278 28.5601L0.585938 29.2976C1.76663 34.527 4.72994 39.2733 8.93051 42.6654C13.18 46.0959 18.5329 47.9898 24.0094 48.0001C24.0171 48.0001 24.0582 48.0001 24.0582 48.0001C24.3798 48.0001 24.6987 47.9924 25.0177 47.9796C26.736 47.9076 28.2717 46.8309 28.9276 45.2351L29.9925 42.6551L26.6434 41.9895Z" fill="url(#paint1_linear_3247_4467)"></path>
      <defs>
        <linearGradient id="paint0_linear_3247_4467" x1="21.5578" y1="-1.54942" x2="39.8227" y2="17.9723" gradientUnits="userSpaceOnUse">
          <stop offset="0.0939" stop-color="#58D09E"></stop>
          <stop offset="0.9883" stop-color="#58D09E" stop-opacity="0"></stop>
        </linearGradient>
        <linearGradient id="paint1_linear_3247_4467" x1="-0.256417" y1="34.9216" x2="34.638" y2="44.2093" gradientUnits="userSpaceOnUse">
          <stop offset="0.0774" stop-color="#58D09E"></stop>
          <stop offset="0.7617" stop-color="#1B1E2E"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
  const TestNGIcon = () => (
    <img
      src="https://cdn.prod.website-files.com/634e7b67c1fe784841792622/63988b13af0dc1ae63469d5e_junit5-icon.png"
      loading="lazy"
      width="42"
      title="MVVM logo"
      alt="MVVM"
      className="w-full h-full object-contain"
    />
  );
  const MavenIcon = () => (
    <img
      src="https://cdn.prod.website-files.com/634e7b67c1fe784841792622/63988a9bc356935c7ef5a7e8_maven-logo.png"
      loading="lazy"
      width="42"
      title="MVVM logo"
      alt="MVVM"
      className="w-full h-full object-contain"
    />
  );
  const AllureIcon = () => (
    <img
      src="https://cdn.prod.website-files.com/634e7b67c1fe784841792622/63988b872186fbdf91f4e026_allure-icon.png"
      loading="lazy"
      width="42"
      title="MVVM logo"
      alt="MVVM"
      className="w-full h-full object-contain"
    />
  );

  const GitIcon = () => (

    <svg width="100%" viewBox="0 0 114 115" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M111.78 51.977L62.0349 2.23808C59.1727 -0.626722 54.5267 -0.626722 51.6609 2.23808L41.3319 12.5681L54.4339 25.6701C57.4798 24.6417 60.971 25.3312 63.3978 27.7585C65.8372 30.2009 66.5218 33.7219 65.4676 36.778L78.0956 49.406C81.1507 48.3532 84.6756 49.0334 87.1151 51.4772C90.5257 54.8868 90.5257 60.4117 87.1151 63.8222C83.704 67.2338 78.1791 67.2338 74.7661 63.8222C72.2016 61.2557 71.5673 57.4877 72.8662 54.328L61.0892 42.551L61.0882 73.542C61.9197 73.9536 62.7044 74.503 63.3973 75.1929C66.8069 78.6021 66.8069 84.126 63.3973 87.5409C59.9867 90.95 54.4593 90.95 51.0523 87.5409C47.6422 84.1263 47.6422 78.6024 51.0523 75.1929C51.895 74.3516 52.8702 73.7149 53.9107 73.2881V42.0091C52.8697 41.5841 51.8957 40.9521 51.0517 40.1041C48.4687 37.5231 47.8466 33.7321 49.1713 30.5602L36.2553 17.6422L2.14928 51.7472C-0.716425 54.6142 -0.716425 59.2602 2.14928 62.1252L51.8913 111.864C54.7551 114.729 59.3995 114.729 62.2673 111.864L111.779 62.3602C114.644 59.494 114.644 54.8466 111.779 51.9812" fill="#F05133"></path>
    </svg>
  );
  const AppiumIcon = () => (

    <svg width="100%" viewBox="0 0 324 325" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_3249_4085)">
        <path d="M255.258 32.1007C216.298 -1.49959 130.094 -18.1448 65.494 30.0953C4.88958 70.6843 1.89258 144.871 1.89258 144.871C12.215 185.46 53.1732 224.384 132.091 205.421C122.769 150.859 141.042 12.8064 255.258 32.102V32.1007Z" fill="#00ACD2"></path>
        <path d="M214.675 164.059C172.042 199.407 42.2742 253.345 1.89188 144.874C-7.75472 195.383 19.0145 279.451 93.1295 311.225C158.615 343.367 226.861 306.142 226.861 306.142C256.881 276.917 270.573 222.86 214.675 164.059Z" fill="#C8E9EB"></path>
        <path d="M137.674 114.481C189.63 133.695 300.695 216.965 226.861 306.142C275.467 289.232 332.465 224.534 322.95 144.522C318.07 71.7908 255.259 32.1034 255.259 32.1034C214.916 20.741 160.696 36.7174 137.674 114.481" fill="#662D91"></path>
      </g>
      <defs>
        <clipPath id="clip0_3249_4085">
          <rect width="324" height="325" fill="white"></rect>
        </clipPath>
      </defs>
    </svg>

  );



  const technologyStacks = {
    manualTesting: {
      title: "MANUAL TESTING SERVICES FOR WEB & MOBILE APPLICATIONS",
      subtitle: "Our technology stack for manual testing.",
      technologies: [
        { name: "Burp Suite", icon: "🔓", color: "from-orange-500 to-orange-600" },
        { name: "Swagger", icon: "🟢", color: "from-green-500 to-green-600" },
        { name: "Postman", icon: "🟠", color: "from-orange-600 to-red-600" },
        { name: "JMeter", icon: "⚡", color: "from-red-500 to-red-600" },
        { name: "Browsers DevTools", icon: "🌐", color: "from-blue-500 to-blue-600" },
        { name: "TestFairy", icon: "🧪", color: "from-purple-500 to-purple-600" },
        { name: "TestFlight", icon: "✈️", color: "from-blue-600 to-cyan-600" },
        { name: "App Tester", color: "from-cyan-500 to-cyan-600" }
      ]
    },
    automationWeb: {
      title: "AUTOMATION TESTING SERVICES FOR WEB APPLICATIONS",
      subtitle: "Our technology stack for automation testing of web apps.",
      technologies: [
        { name: "Java", icon: <JavaIcon />, color: "from-orange-500 to-orange-600" },
        { name: "Java Script", icon: <JavaScriptIcon />, color: "from-yellow-500 to-yellow-600" },
        { name: "Selenium WebDriver", icon: <SeleniumIcon />, color: "from-green-500 to-green-600" },
        { name: "Cypress", icon: <CypressIcon />, color: "from-teal-500 to-teal-600" },
        { name: "TestNG/JUnit", icon: <TestNGIcon />, color: "from-red-500 to-red-600" },
        { name: "Maven", icon: <MavenIcon />, color: "from-red-600 to-pink-600" },
        { name: "Allure", icon: <AllureIcon />, color: "from-blue-500 to-blue-600" },
        { name: "Git", icon: <GitIcon />, color: "from-orange-600 to-red-600" }
      ]
    },
    automationMobile: {
      title: "AUTOMATION TESTING SERVICES FOR MOBILE APPLICATIONS",
      subtitle: "Our technology stack for automation testing of mobile apps.",
      technologies: [
        { name: "Java", icon: <JavaIcon />, color: "from-orange-500 to-orange-600" },
        { name: "Appium", icon: <AppiumIcon />, color: "from-purple-500 to-purple-600" },
        { name: "Maven", icon: <MavenIcon />, color: "from-red-600 to-pink-600" },
        { name: "TestNG/JUnit", icon: <TestNGIcon />, color: "from-red-500 to-red-600" },
        { name: "Allure", icon: <AllureIcon />, color: "from-blue-500 to-blue-600" },
        { name: "Git", icon: <GitIcon />, color: "from-orange-600 to-red-600" }
      ]
    }
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
                <br />
                {t.subtitle}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto"
              >
                {t.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Button size="lg" className="rounded-full px-8 text-base shadow-lg hover:shadow-xl transition-all duration-300 group bg-white text-[#163C2E] hover:bg-white/90" asChild>
                  <a href="/contact">
                    {t.cta1}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 text-base group bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                  asChild
                >
                  <a href="/contact">
                    <Phone className="mr-2 h-5 w-5" />
                    {t.cta2}
                  </a>
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

      {/* Our Services Section - Updated */}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#163C2E] to-[#239D89] bg-clip-text text-transparent">
              {t.servicesTitle}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.testingTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setHoveredService(index)}
                onHoverEnd={() => setHoveredService(null)}
                className={`group relative p-8 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${hoveredService === index
                  ? 'bg-[#163C2E] border-[#239D89] shadow-lg shadow-[#239D89]/20'
                  : 'bg-white dark:bg-[#1a2942] border-neutral-200 dark:border-[#1a2942] hover:border-[#239D89]/50'
                  }`}
              >
                <h3 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${hoveredService === index ? 'text-white' : 'text-neutral-900 dark:text-white'
                  }`}>
                  {type.category}
                </h3>
                <ul className="space-y-3">
                  {type.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 transition-colors duration-300 ${hoveredService === index ? 'text-[#239D89]' : 'text-primary'
                        }`} />
                      <span className={`text-sm transition-colors duration-300 ${hoveredService === index ? 'text-white/80' : 'text-neutral-600 dark:text-neutral-400'
                        }`}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section - NEW TABBED INTERFACE */}
      <section className="py-20 px-6 bg-[#1a2942] dark:bg-[#0f1724] overflow-hidden">
        <div className="max-w-7xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#239D89]/20 text-[#239D89] text-sm font-bold mb-6">
            {t.techSection}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.techTitle}
          </h2>
        </div>

        <AnimatedTechTabsQA technologyStacks={technologyStacks} />
      </section>

      {/* How We Work Section */}
      <section className="relative py-32 px-6 bg-[#0f1724]k overflow-hidden">
        <div className="absolute inset-0 " />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center"
          >
            <div className="inline-block px-4 py-2 bg-[#ff7043]/10 text-[#ff7043] rounded-full text-sm font-semibold mb-6">
              {t.processSection}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t.processTitle}
            </h2>
          </motion.div>

          <div className="space-y-24">
            {t.processSteps.map((step, index) => (
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
                      [{step.number}]
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

                      <motion.h3
                        className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1 + 0.4
                        }}
                      >
                        {step.title}
                      </motion.h3>

                      <motion.p
                        className="text-lg text-neutral-300 leading-relaxed relative z-10"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1 + 0.5
                        }}
                      >
                        {step.description}
                      </motion.p>

                      <motion.div
                        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#239D89] to-[#1e90ff]"
                        initial={{ width: "0%" }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          delay: index * 0.1 + 0.6,
                          ease: "easeOut"
                        }}
                      />
                    </motion.div>
                  </div>
                </motion.div>

                {index < t.processSteps.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute left-16 top-full w-0.5 h-24 bg-gradient-to-b from-[#239D89] to-transparent"
                    initial={{ scaleY: 0, originY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1 + 0.7
                    }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-32 px-6 overflow-hidden bg-white dark:bg-neutral-950">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
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
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index
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
          <h2 className="text-4xl font-bold mb-6">{t.ctaTitle}</h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-8">
            {t.ctaSubtitle}
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
          >
            {t.ctaButton}
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer language={language} />
    </div>
  );
}