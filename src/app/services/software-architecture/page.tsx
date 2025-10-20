"use client";

import { Metadata } from "next";
import { Layers, Network, Shield, Gauge, CheckCircle2, ArrowRight, Layout, Database, Cloud, Code2, Zap, Users, Sparkles, Phone, Calendar, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import ShaderBackground from "@/components/ShaderBackground";
import { useLanguage } from "@/context/LanguageContext";

const content = {
  en: {
    badge: "Enterprise Architecture Solutions",
    title: "Software Architecture",
    subtitle: "Services",
    description: "Build the foundation for success with expert software architecture services. Design scalable, secure, and maintainable systems that power your business growth.",
    ctaPrimary: "Discuss Your Architecture",
    ctaSecondary: "Schedule a Call",
    trustItems: [
      "15+ Years Experience",
      "200+ Systems Architected",
      "Enterprise-Grade Solutions"
    ],
    successStoriesBadge: "— SUCCESS STORIES",
    successStoriesTitle: "Architecture Case Studies",
    successStoriesDescription: "Real projects, proven results. See how our architecture expertise has transformed businesses.",
    servicesBadge: "— OUR SERVICES",
    servicesTitle: "Architecture Services",
    servicesSubtitle: "We Provide",
    techBadge: "— TECHNOLOGIES & PATTERNS",
    techTitle: "Architecture Technologies",
    techSubtitle: "& Design Patterns We Use",
    processBadge: "— HOW WE WORK",
    processTitle: "Our Architecture Process",
    whyBadge: "— WHY US?",
    whyTitle: "Why Choose Us As Your",
    whySubtitle: "Architecture Partner",
    ctaSectionTitle: "Ready to Build the Right Architecture?",
    ctaSectionDescription: "Let's design a software architecture that sets your project up for long-term success",
    ctaSectionButton: "Get Started Today"
  },
  fr: {
    badge: "Solutions d'Architecture d'Entreprise",
    title: "Architecture Logicielle",
    subtitle: "Services",
    description: "Construisez les fondations du succès avec des services experts en architecture logicielle. Concevez des systèmes évolutifs, sécurisés et maintenables qui alimentent la croissance de votre entreprise.",
    ctaPrimary: "Discutez de Votre Architecture",
    ctaSecondary: "Planifier un Appel",
    trustItems: [
      "Plus de 15 Ans d'Expérience",
      "Plus de 200 Systèmes Architecturés",
      "Solutions de Niveau Entreprise"
    ],
    successStoriesBadge: "— HISTOIRES DE SUCCÈS",
    successStoriesTitle: "Études de Cas d'Architecture",
    successStoriesDescription: "Des projets réels, des résultats prouvés. Découvrez comment notre expertise en architecture a transformé des entreprises.",
    servicesBadge: "— NOS SERVICES",
    servicesTitle: "Services d'Architecture",
    servicesSubtitle: "Que Nous Fournissons",
    techBadge: "— TECHNOLOGIES ET MODÈLES",
    techTitle: "Technologies d'Architecture",
    techSubtitle: "Et Modèles de Conception Que Nous Utilisons",
    processBadge: "— COMMENT NOUS TRAVAILLONS",
    processTitle: "Notre Processus d'Architecture",
    whyBadge: "— POURQUOI NOUS ?",
    whyTitle: "Pourquoi Nous Choisir Comme",
    whySubtitle: "Partenaire d'Architecture",
    ctaSectionTitle: "Prêt à Construire la Bonne Architecture ?",
    ctaSectionDescription: "Concevons une architecture logicielle qui prépare votre projet au succès à long terme",
    ctaSectionButton: "Commencez Aujourd'hui"
  },
  pl: {
    badge: "Rozwiązania Architektury Korporacyjnej",
    title: "Architektura Oprogramowania",
    subtitle: "Usługi",
    description: "Zbuduj fundamenty sukcesu dzięki eksperckiemu projektowaniu architektury oprogramowania. Projektuj skalowalne, bezpieczne i łatwe w utrzymaniu systemy, które napędzają rozwój Twojej firmy.",
    ctaPrimary: "Omów Swoją Architekturę",
    ctaSecondary: "Zaplanuj Rozmowę",
    trustItems: [
      "Ponad 15 Lat Doświadczenia",
      "Ponad 200 Zaprojektowanych Systemów",
      "Rozwiązania Korporacyjne"
    ],
    successStoriesBadge: "— HISTORIE SUKCESU",
    successStoriesTitle: "Studia Przypadków Architektury",
    successStoriesDescription: "Prawdziwe projekty, udowodnione rezultaty. Zobacz, jak nasza wiedza architektoniczna przekształciła firmy.",
    servicesBadge: "— NASZE USŁUGI",
    servicesTitle: "Usługi Architektoniczne",
    servicesSubtitle: "Które Oferujemy",
    techBadge: "— TECHNOLOGIE I WZORCE",
    techTitle: "Technologie Architektoniczne",
    techSubtitle: "I Wzorce Projektowe, Których Używamy",
    processBadge: "— JAK PRACUJEMY",
    processTitle: "Nasz Proces Architektoniczny",
    whyBadge: "— DLACZEGO MY?",
    whyTitle: "Dlaczego Wybrać Nas Jako",
    whySubtitle: "Partnera Architektonicznego",
    ctaSectionTitle: "Gotowy na Zbudowanie Właściwej Architektury?",
    ctaSectionDescription: "Zaprojektujmy architekturę oprogramowania, która przygotuje Twój projekt na długoterminowy sukces",
    ctaSectionButton: "Rozpocznij Dziś"
  }
};

const servicesContent = {
  en: [
    {
      title: "System Design",
      description: "Comprehensive system architecture design aligned with your business goals and technical requirements. We create blueprints that guide your development team to build scalable and maintainable systems."
    },
    {
      title: "Microservices Architecture",
      description: "Design and implement microservices for scalability, flexibility, and independent deployment. Break down complex systems into manageable, loosely-coupled services that can evolve independently."
    },
    {
      title: "Security Architecture",
      description: "Build security into every layer with comprehensive security architecture and best practices. Implement defense-in-depth strategies to protect your applications and data from modern threats."
    },
    {
      title: "Performance Optimization",
      description: "Architect systems for optimal performance, scalability, and efficient resource utilization. Design solutions that handle growing workloads while maintaining responsive user experiences."
    },
    {
      title: "Cloud Architecture",
      description: "Design cloud-native architectures leveraging modern cloud platforms. Optimize for scalability, reliability, and cost-effectiveness using AWS, Azure, or Google Cloud services."
    },
    {
      title: "Database Architecture",
      description: "Design efficient database solutions that ensure data integrity, performance, and scalability. Choose the right database technologies and implement optimal data modeling strategies."
    },
    {
      title: "API Design & Integration",
      description: "Create robust API architectures that enable seamless system integration. Design RESTful, GraphQL, or event-driven APIs that support your business requirements."
    },
    {
      title: "Legacy Modernization",
      description: "Modernize legacy systems with strategic architecture refactoring. Plan and execute migrations to modern platforms while minimizing business disruption and technical risk."
    }
  ],
  fr: [
    {
      title: "Conception de Système",
      description: "Conception complète de l'architecture système alignée sur vos objectifs commerciaux et exigences techniques. Nous créons des plans qui guident votre équipe de développement pour construire des systèmes évolutifs et maintenables."
    },
    {
      title: "Architecture Microservices",
      description: "Concevez et implémentez des microservices pour l'évolutivité, la flexibilité et le déploiement indépendant. Décomposez des systèmes complexes en services gérables et faiblement couplés qui peuvent évoluer indépendamment."
    },
    {
      title: "Architecture de Sécurité",
      description: "Intégrez la sécurité à chaque couche avec une architecture de sécurité complète et des meilleures pratiques. Implémentez des stratégies de défense en profondeur pour protéger vos applications et données contre les menaces modernes."
    },
    {
      title: "Optimisation des Performances",
      description: "Architecturez des systèmes pour des performances optimales, l'évolutivité et une utilisation efficace des ressources. Concevez des solutions qui gèrent des charges de travail croissantes tout en maintenant des expériences utilisateur réactives."
    },
    {
      title: "Architecture Cloud",
      description: "Concevez des architectures cloud-native tirant parti des plateformes cloud modernes. Optimisez pour l'évolutivité, la fiabilité et la rentabilité en utilisant les services AWS, Azure ou Google Cloud."
    },
    {
      title: "Architecture de Base de Données",
      description: "Concevez des solutions de base de données efficaces qui garantissent l'intégrité des données, les performances et l'évolutivité. Choisissez les bonnes technologies de base de données et implémentez des stratégies de modélisation de données optimales."
    },
    {
      title: "Conception et Intégration d'API",
      description: "Créez des architectures API robustes qui permettent une intégration système transparente. Concevez des API RESTful, GraphQL ou événementielles qui supportent vos exigences commerciales."
    },
    {
      title: "Modernisation Héritée",
      description: "Modernisez les systèmes hérités avec une refonte architecturale stratégique. Planifiez et exécutez des migrations vers des plateformes modernes tout en minimisant les perturbations commerciales et les risques techniques."
    }
  ],
  pl: [
    {
      title: "Projektowanie Systemu",
      description: "Kompleksowe projektowanie architektury systemu zgodne z Twoimi celami biznesowymi i wymaganiami technicznymi. Tworzymy plany, które prowadzą Twój zespół deweloperski do budowania skalowalnych i łatwych w utrzymaniu systemów."
    },
    {
      title: "Architektura Mikroserwisów",
      description: "Projektuj i wdrażaj mikroserwisy dla skalowalności, elastyczności i niezależnego wdrażania. Podziel złożone systemy na zarządzalne, luźno powiązane usługi, które mogą ewoluować niezależnie."
    },
    {
      title: "Architektura Bezpieczeństwa",
      description: "Wbuduj bezpieczeństwo w każdą warstwę dzięki kompleksowej architekturze bezpieczeństwa i najlepszym praktykom. Wdróż strategie obrony wgłębnej, aby chronić swoje aplikacje i dane przed współczesnymi zagrożeniami."
    },
    {
      title: "Optymalizacja Wydajności",
      description: "Architekturuj systemy dla optymalnej wydajności, skalowalności i efektywnego wykorzystania zasobów. Projektuj rozwiązania, które obsługują rosnące obciążenia przy zachowaniu responsywnych doświadczeń użytkownika."
    },
    {
      title: "Architektura Chmurowa",
      description: "Projektuj architektury natywne dla chmury wykorzystujące nowoczesne platformy chmurowe. Optymalizuj pod kątem skalowalności, niezawodności i opłacalności, korzystając z usług AWS, Azure lub Google Cloud."
    },
    {
      title: "Architektura Bazy Danych",
      description: "Projektuj wydajne rozwiązania baz danych, które zapewniają integralność danych, wydajność i skalowalność. Wybierz odpowiednie technologie bazodanowe i wdróż optymalne strategie modelowania danych."
    },
    {
      title: "Projektowanie i Integracja API",
      description: "Twórz solidne architektury API, które umożliwiają płynną integrację systemu. Projektuj interfejsy RESTful, GraphQL lub sterowane zdarzeniami, które wspierają Twoje wymagania biznesowe."
    },
    {
      title: "Modernizacja Starszych Systemów",
      description: "Modernizuj starsze systemy za pomocą strategicznej refaktoryzacji architektury. Planuj i realizuj migracje do nowoczesnych platform przy jednoczesnej minimalizacji zakłóceń biznesowych i ryzyka technicznego."
    }
  ]
};

const technologiesContent = {
  en: [
    {
      name: "CLOUD PLATFORMS",
      description: "Architecting scalable solutions on AWS, Azure, and Google Cloud."
    },
    {
      name: "MICROSERVICES",
      description: "Designing distributed systems with loosely-coupled services."
    },
    {
      name: "CONTAINERIZATION",
      description: "Implementing Docker and Kubernetes for modern deployments."
    },
    {
      name: "API GATEWAYS",
      description: "Building robust API management and integration layers."
    },
    {
      name: "EVENT-DRIVEN",
      description: "Designing asynchronous architectures with message queues."
    },
    {
      name: "SECURITY",
      description: "Implementing zero-trust and defense-in-depth strategies."
    },
    {
      name: "CACHING LAYERS",
      description: "Optimizing performance with Redis, CDN, and edge computing."
    },
    {
      name: "DATABASE DESIGN",
      description: "Choosing and optimizing SQL, NoSQL, and graph databases."
    }
  ],
  fr: [
    {
      name: "PLATEFORMES CLOUD",
      description: "Architecture de solutions évolutives sur AWS, Azure et Google Cloud."
    },
    {
      name: "MICROSERVICES",
      description: "Conception de systèmes distribués avec services faiblement couplés."
    },
    {
      name: "CONTENEURISATION",
      description: "Implémentation de Docker et Kubernetes pour des déploiements modernes."
    },
    {
      name: "PASSERELLES API",
      description: "Construction de gestion d'API robuste et de couches d'intégration."
    },
    {
      name: "ÉVÉNEMENTIEL",
      description: "Conception d'architectures asynchrones avec files de messages."
    },
    {
      name: "SÉCURITÉ",
      description: "Implémentation de stratégies zéro-confiance et défense en profondeur."
    },
    {
      name: "COUCHES DE CACHE",
      description: "Optimisation des performances avec Redis, CDN et edge computing."
    },
    {
      name: "CONCEPTION DE BASE DE DONNÉES",
      description: "Choix et optimisation des bases SQL, NoSQL et graphes."
    }
  ],
  pl: [
    {
      name: "PLATFORMY CHMUROWE",
      description: "Architektura skalowalnych rozwiązań na AWS, Azure i Google Cloud."
    },
    {
      name: "MIKROSERWISY",
      description: "Projektowanie systemów rozproszonych z luźno powiązanymi usługami."
    },
    {
      name: "KONTENERYZACJA",
      description: "Wdrażanie Docker i Kubernetes dla nowoczesnych wdrożeń."
    },
    {
      name: "BRAMY API",
      description: "Budowanie solidnego zarządzania API i warstw integracji."
    },
    {
      name: "STEROWANE ZDARZENIAMI",
      description: "Projektowanie asynchronicznych architektur z kolejkami wiadomości."
    },
    {
      name: "BEZPIECZEŃSTWO",
      description: "Wdrażanie strategii zero-trust i obrony wgłębnej."
    },
    {
      name: "WARSTWY CACHE",
      description: "Optymalizacja wydajności za pomocą Redis, CDN i edge computing."
    },
    {
      name: "PROJEKTOWANIE BAZ DANYCH",
      description: "Wybór i optymalizacja baz SQL, NoSQL i grafowych."
    }
  ]
};

const processContent = {
  en: [
    {
      number: "01",
      title: "ARCHITECTURE DISCOVERY",
      description: "We begin by understanding your business requirements, technical constraints, and scalability goals. Through workshops and stakeholder interviews, we gather insights to define the architectural vision and establish success criteria for your project."
    },
    {
      number: "02",
      title: "SYSTEM DESIGN & PLANNING",
      description: "Our architects create comprehensive system designs including component diagrams, data flow models, and technology stack recommendations. We document architectural decisions, patterns, and principles that will guide the development team."
    },
    {
      number: "03",
      title: "SECURITY & COMPLIANCE REVIEW",
      description: "Security is built into every layer of the architecture. We conduct threat modeling, define security controls, and ensure compliance with industry standards and regulations. Our architects design defense-in-depth strategies to protect your systems."
    },
    {
      number: "04",
      title: "PERFORMANCE & SCALABILITY",
      description: "We design for scale from day one. Our architects implement caching strategies, optimize database queries, design load balancing solutions, and plan for horizontal scaling. Performance testing and capacity planning ensure your system can handle growth."
    },
    {
      number: "05",
      title: "IMPLEMENTATION GUIDANCE",
      description: "Architecture doesn't stop at documentation. We provide ongoing guidance to development teams, conduct architecture reviews, and ensure design principles are followed. Our architects remain engaged throughout the development lifecycle."
    }
  ],
  fr: [
    {
      number: "01",
      title: "DÉCOUVERTE DE L'ARCHITECTURE",
      description: "Nous commençons par comprendre vos exigences commerciales, contraintes techniques et objectifs d'évolutivité. À travers des ateliers et entretiens avec les parties prenantes, nous recueillons des informations pour définir la vision architecturale et établir les critères de succès de votre projet."
    },
    {
      number: "02",
      title: "CONCEPTION ET PLANIFICATION DU SYSTÈME",
      description: "Nos architectes créent des conceptions système complètes incluant des diagrammes de composants, des modèles de flux de données et des recommandations de pile technologique. Nous documentons les décisions architecturales, les modèles et les principes qui guideront l'équipe de développement."
    },
    {
      number: "03",
      title: "REVUE SÉCURITÉ ET CONFORMITÉ",
      description: "La sécurité est intégrée dans chaque couche de l'architecture. Nous effectuons une modélisation des menaces, définissons des contrôles de sécurité et assurons la conformité aux normes et réglementations de l'industrie. Nos architectes conçoivent des stratégies de défense en profondeur pour protéger vos systèmes."
    },
    {
      number: "04",
      title: "PERFORMANCE ET ÉVOLUTIVITÉ",
      description: "Nous concevons pour l'échelle dès le premier jour. Nos architectes implémentent des stratégies de mise en cache, optimisent les requêtes de base de données, conçoivent des solutions d'équilibrage de charge et planifient la mise à l'échelle horizontale. Les tests de performance et la planification de capacité garantissent que votre système peut gérer la croissance."
    },
    {
      number: "05",
      title: "GUIDANCE D'IMPLÉMENTATION",
      description: "L'architecture ne s'arrête pas à la documentation. Nous fournissons une guidance continue aux équipes de développement, effectuons des revues d'architecture et assurons le respect des principes de conception. Nos architectes restent engagés tout au long du cycle de développement."
    }
  ],
  pl: [
    {
      number: "01",
      title: "ODKRYCIE ARCHITEKTURY",
      description: "Zaczynamy od zrozumienia Twoich wymagań biznesowych, ograniczeń technicznych i celów skalowalności. Poprzez warsztaty i wywiady z interesariuszami, zbieramy spostrzeżenia, aby zdefiniować wizję architektoniczną i ustalić kryteria sukcesu dla Twojego projektu."
    },
    {
      number: "02",
      title: "PROJEKTOWANIE I PLANOWANIE SYSTEMU",
      description: "Nasi architekci tworzą kompleksowe projekty systemów, w tym diagramy komponentów, modele przepływu danych i rekomendacje stosu technologicznego. Dokumentujemy decyzje architektoniczne, wzorce i zasady, które będą prowadzić zespół deweloperski."
    },
    {
      number: "03",
      title: "PRZEGLĄD BEZPIECZEŃSTWA I ZGODNOŚCI",
      description: "Bezpieczeństwo jest wbudowane w każdą warstwę architektury. Przeprowadzamy modelowanie zagrożeń, definiujemy kontrole bezpieczeństwa i zapewniamy zgodność ze standardami i przepisami branżowymi. Nasi architekci projektują strategie obrony wgłębnej, aby chronić Twoje systemy."
    },
    {
      number: "04",
      title: "WYDAJNOŚĆ I SKALOWALNOŚĆ",
      description: "Projektujemy na skalę od pierwszego dnia. Nasi architekci wdrażają strategie buforowania, optymalizują zapytania do bazy danych, projektują rozwiązania równoważenia obciążenia i planują skalowanie horyzontalne. Testy wydajności i planowanie pojemności zapewniają, że Twój system poradzi sobie ze wzrostem."
    },
    {
      number: "05",
      title: "WYTYCZNE WDROŻENIOWE",
      description: "Architektura nie kończy się na dokumentacji. Zapewniamy ciągłe wskazówki dla zespołów deweloperskich, przeprowadzamy przeglądy architektury i dbamy o przestrzeganie zasad projektowania. Nasi architekci pozostają zaangażowani przez cały cykl życia rozwoju."
    }
  ]
};

const whyContent = {
  en: [
    {
      title: "Proven Architecture Expertise",
      description: "With over 15 years of experience architecting enterprise systems, we bring deep technical knowledge and industry best practices to every project. Our architects have designed systems handling millions of users and petabytes of data.",
      hoverBg: "#FF8D3E"
    },
    {
      title: "Technology-Agnostic Approach",
      description: "We recommend the right technologies for your needs, not just the ones we prefer. Our architects stay current with emerging technologies and can design solutions using the best tools for your specific requirements.",
       hoverBg: "#F15556"
    },
    {
      title: "Security-First Mindset",
      description: "Security isn't an afterthought—it's built into the foundation. Our architects implement comprehensive security strategies including zero-trust architectures, encryption, and compliance frameworks to protect your business.",
      hoverBg: "#53ACF1"
    },
    {
      title: "Scalability by Design",
      description: "We design systems that grow with your business. From startup MVP to enterprise scale, our architectures support horizontal scaling, high availability, and can handle exponential growth without major redesigns.",
      hoverBg: "#1BC65C"
    },
    {
      title: "Clear Documentation ",
      description: "Great architecture requires great documentation. We provide comprehensive architectural blueprints, decision records, and runbooks. Our knowledge transfer ensures your team understands and can maintain the architecture.",
      hoverBg: "#AF6AF0"
    }
  ],
  fr: [
    {
      title: "Expertise Architecturale Prouvée",
      description: "Avec plus de 15 ans d'expérience dans l'architecture de systèmes d'entreprise, nous apportons une connaissance technique approfondie et les meilleures pratiques de l'industrie à chaque projet. Nos architectes ont conçu des systèmes gérant des millions d'utilisateurs et des pétaoctets de données.",
      hoverBg: "#FF8D3E"
    },
    {
      title: "Approche Technologiquement Agnostique",
      description: "Nous recommandons les bonnes technologies pour vos besoins, pas seulement celles que nous préférons. Nos architectes restent à jour avec les technologies émergentes et peuvent concevoir des solutions utilisant les meilleurs outils pour vos exigences spécifiques.",
       hoverBg: "#F15556"
    },
    {
      title: "Mentalité Sécurité d'Abord",
      description: "La sécurité n'est pas une réflexion après coup—elle est intégrée dans les fondations. Nos architectes implémentent des stratégies de sécurité complètes incluant des architectures zéro-confiance, le chiffrement et des cadres de conformité pour protéger votre entreprise.",
      hoverBg: "#53ACF1"
    },
    {
      title: "Évolutivité par Conception",
      description: "Nous concevons des systèmes qui grandissent avec votre entreprise. Du MVP de startup à l'échelle d'entreprise, nos architectures supportent la mise à l'échelle horizontale, la haute disponibilité et peuvent gérer une croissance exponentielle sans refonte majeure.",
      hoverBg: "#1BC65C"
    },
    {
      title: "Documentation Claire",
      description: "Une grande architecture nécessite une grande documentation. Nous fournissons des plans architecturaux complets, des registres de décisions et des guides d'exploitation. Notre transfert de connaissances garantit que votre équipe comprend et peut maintenir l'architecture.",
      hoverBg: "#AF6AF0"
    }
  ],
  pl: [
    {
      title: "Sprawdzona Ekspertyza Architektoniczna",
      description: "Dzięki ponad 15-letniemu doświadczeniu w architekturze systemów korporacyjnych, wnosimy głęboką wiedzę techniczną i najlepsze praktyki branżowe do każdego projektu. Nasi architekci zaprojektowali systemy obsługujące miliony użytkowników i petabajty danych.",
      hoverBg: "#FF8D3E"
    },
    {
      title: "Podejście Technologicznie Niezależne",
      description: "Rekomendujemy odpowiednie technologie dla Twoich potrzeb, nie tylko te, które preferujemy. Nasi architekci są na bieżąco z nowymi technologiami i mogą projektować rozwiązania wykorzystujące najlepsze narzędzia dla Twoich konkretnych wymagań.",
       hoverBg: "#F15556"
    },
    {
      title: "Mentalność Bezpieczeństwo Przede Wszystkim",
      description: "Bezpieczeństwo to nie późniejsze rozważanie—jest wbudowane w fundamenty. Nasi architekci wdrażają kompleksowe strategie bezpieczeństwa, w tym architektury zero-trust, szyfrowanie i ramy zgodności, aby chronić Twoją firmę.",
      hoverBg: "#53ACF1"
    },
    {
      title: "Skalowalność przez Projektowanie",
      description: "Projektujemy systemy, które rozwijają się razem z Twoją firmą. Od MVP startupu do skali korporacyjnej, nasze architektury wspierają skalowanie horyzontalne, wysoką dostępność i mogą obsłużyć wykładniczy wzrost bez poważnych przeprojektowań.",
      hoverBg: "#1BC65C"
    },
    {
      title: "Przejrzysta Dokumentacja",
      description: "Świetna architektura wymaga świetnej dokumentacji. Dostarczamy kompleksowe plany architektoniczne, zapisy decyzji i podręczniki operacyjne. Nasz transfer wiedzy zapewnia, że Twój zespół rozumie i może utrzymywać architekturę.",
      hoverBg: "#AF6AF0"
    }
  ]
};

const caseStudiesContent = {
  en: {
    location: "Location",
    timeline: "Timeline",
    role: "Role",
    keyAchievements: "Key Achievements",
    technologies: "Technologies & Patterns",
    projects: [
      {
        name: "Fitness App",
        tagline: "Scalable Mobile Health Platform",
        description: "Architected a comprehensive fitness tracking mobile application with real-time data synchronization, offline-first architecture, and seamless cloud integration. Designed for scalability to handle millions of workout sessions and user interactions.",
        location: "United Kingdom",
        timeline: "2024 - 6 Months",
        technologies: ["React Native", "Cloud Functions", "Real-time Sync", "Offline-First", "Mobile Architecture"],
        role: "Lead Mobile Architect",
        highlights: [
          "Offline-first architecture",
          "Real-time data synchronization",
          "Scalable cloud infrastructure",
          "Optimized mobile performance",
          "Supporting millions of users"
        ]
      },
      {
        name: "DadofSEO - AI-Driven SEO Content Platform",
        tagline: "Intelligent Content Generation Architecture",
        description: "Designed a sophisticated AI-powered SEO content platform with microservices architecture, intelligent caching layers, and scalable content generation pipelines. Implemented machine learning integration for automated content optimization and SEO analysis.",
        location: "USA",
        timeline: "2024 - 8 Months",
        technologies: ["AI/ML Integration", "Microservices", "Caching Layers", "Content Pipeline", "SEO Analytics"],
        role: "AI Systems Architect",
        highlights: [
          "AI-powered content generation",
          "Intelligent SEO optimization",
          "Scalable microservices design",
          "Advanced caching strategies",
          "Real-time analytics processing"
        ]
      },
      {
        name: "Eden Build - Principal Construction Contractor",
        tagline: "Enterprise Construction Management System",
        description: "Architected a comprehensive construction management platform with real-time project tracking, resource allocation, and multi-role access control. Designed cloud-native architecture supporting complex workflows, document management, and mobile field operations.",
        location: "Denmark",
        timeline: "2023 - 5 Months",
        technologies: ["Cloud Architecture", "Mobile Integration", "Document Management", "Real-time Updates", "Role-based Access"],
        role: "Enterprise Architect",
        highlights: [
          "Real-time project tracking",
          "Multi-role access control",
          "Mobile-first field operations",
          "Scalable document management",
          "Integrated resource planning"
        ]
      }
    ]
  },
  fr: {
    location: "Lieu",
    timeline: "Délai",
    role: "Rôle",
    keyAchievements: "Réalisations Clés",
    technologies: "Technologies et Modèles",
    projects: [
      {
        name: "Application Fitness",
        tagline: "Plateforme Mobile de Santé Évolutive",
        description: "Architecture d'une application mobile complète de suivi de fitness avec synchronisation de données en temps réel, architecture offline-first et intégration cloud transparente. Conçue pour l'évolutivité afin de gérer des millions de séances d'entraînement et d'interactions utilisateur.",
        location: "Royaume-Uni",
        timeline: "2024 - 6 Mois",
        technologies: ["React Native", "Fonctions Cloud", "Sync Temps Réel", "Offline-First", "Architecture Mobile"],
        role: "Architecte Mobile Principal",
        highlights: [
          "Architecture offline-first",
          "Synchronisation de données en temps réel",
          "Infrastructure cloud évolutive",
          "Performance mobile optimisée",
          "Support de millions d'utilisateurs"
        ]
      },
      {
        name: "DadofSEO - Plateforme de Contenu SEO Pilotée par IA",
        tagline: "Architecture de Génération de Contenu Intelligente",
        description: "Conception d'une plateforme de contenu SEO sophistiquée alimentée par IA avec architecture microservices, couches de cache intelligentes et pipelines de génération de contenu évolutifs. Implémentation de l'intégration de l'apprentissage automatique pour l'optimisation automatisée du contenu et l'analyse SEO.",
        location: "États-Unis",
        timeline: "2024 - 8 Mois",
        technologies: ["Intégration IA/ML", "Microservices", "Couches Cache", "Pipeline Contenu", "Analyses SEO"],
        role: "Architecte Systèmes IA",
        highlights: [
          "Génération de contenu par IA",
          "Optimisation SEO intelligente",
          "Conception microservices évolutive",
          "Stratégies de cache avancées",
          "Traitement analytique en temps réel"
        ]
      },
      {
        name: "Eden Build - Entrepreneur Principal en Construction",
        tagline: "Système de Gestion de Construction d'Entreprise",
        description: "Architecture d'une plateforme de gestion de construction complète avec suivi de projet en temps réel, allocation de ressources et contrôle d'accès multi-rôles. Architecture cloud-native conçue supportant des workflows complexes, gestion de documents et opérations de terrain mobiles.",
        location: "Danemark",
        timeline: "2023 - 5 Mois",
        technologies: ["Architecture Cloud", "Intégration Mobile", "Gestion Documents", "Mises à Jour Temps Réel", "Accès Basé sur Rôles"],
        role: "Architecte d'Entreprise",
        highlights: [
          "Suivi de projet en temps réel",
          "Contrôle d'accès multi-rôles",
          "Opérations terrain mobile-first",
          "Gestion de documents évolutive",
          "Planification de ressources intégrée"
        ]
      }
    ]
  },
  pl: {
    location: "Lokalizacja",
    timeline: "Harmonogram",
    role: "Rola",
    keyAchievements: "Kluczowe Osiągnięcia",
    technologies: "Technologie i Wzorce",
    projects: [
      {
        name: "Aplikacja Fitness",
        tagline: "Skalowalna Platforma Zdrowia Mobilnego",
        description: "Zaprojektowano kompleksową aplikację mobilną do śledzenia fitnessu z synchronizacją danych w czasie rzeczywistym, architekturą offline-first i płynną integracją z chmurą. Zaprojektowana dla skalowalności do obsługi milionów sesji treningowych i interakcji użytkowników.",
        location: "Wielka Brytania",
        timeline: "2024 - 6 Miesięcy",
        technologies: ["React Native", "Funkcje Chmurowe", "Sync Czasu Rzeczywistego", "Offline-First", "Architektura Mobilna"],
        role: "Główny Architekt Mobilny",
        highlights: [
          "Architektura offline-first",
          "Synchronizacja danych w czasie rzeczywistym",
          "Skalowalna infrastruktura chmurowa",
          "Zoptymalizowana wydajność mobilna",
          "Obsługa milionów użytkowników"
        ]
      },
      {
        name: "DadofSEO - Platforma Treści SEO Sterowana AI",
        tagline: "Architektura Inteligentnego Generowania Treści",
        description: "Zaprojektowano wyrafinowaną platformę treści SEO zasilaną AI z architekturą mikroserwisów, inteligentnymi warstwami cache i skalowalnymi potokami generowania treści. Wdrożono integrację uczenia maszynowego dla automatycznej optymalizacji treści i analizy SEO.",
        location: "USA",
        timeline: "2024 - 8 Miesięcy",
        technologies: ["Integracja AI/ML", "Mikroserwisy", "Warstwy Cache", "Potok Treści", "Analityka SEO"],
        role: "Architekt Systemów AI",
        highlights: [
          "Generowanie treści przez AI",
          "Inteligentna optymalizacja SEO",
          "Skalowalne projektowanie mikroserwisów",
          "Zaawansowane strategie buforowania",
          "Przetwarzanie analityczne w czasie rzeczywistym"
        ]
      },
      {
        name: "Eden Build - Główny Wykonawca Budowlany",
        tagline: "Korporacyjny System Zarządzania Budową",
        description: "Zaprojektowano kompleksową platformę zarządzania budową ze śledzeniem projektu w czasie rzeczywistym, alokacją zasobów i kontrolą dostępu wielorolową. Zaprojektowano architekturę natywną dla chmury wspierającą złożone przepływy pracy, zarządzanie dokumentami i mobilne operacje terenowe.",
        location: "Dania",
        timeline: "2023 - 5 Miesięcy",
        technologies: ["Architektura Chmurowa", "Integracja Mobilna", "Zarządzanie Dokumentami", "Aktualizacje Czasu Rzeczywistego", "Dostęp Oparty na Rolach"],
        role: "Architekt Korporacyjny",
        highlights: [
          "Śledzenie projektu w czasie rzeczywistym",
          "Kontrola dostępu wielorolowa",
          "Operacje terenowe mobile-first",
          "Skalowalne zarządzanie dokumentami",
          "Zintegrowane planowanie zasobów"
        ]
      }
    ]
  }
};

export default function SoftwareArchitecturePage() {
  const { language } = useLanguage();
  const t = content[language];
  const services = servicesContent[language];
  const technologies = technologiesContent[language];
  const workProcess = processContent[language];
  const whyChooseUs = whyContent[language];
  const caseStudies = caseStudiesContent[language];

  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [hoveredCase, setHoveredCase] = useState<number | null>(null);
  const [hoveredTech, setHoveredTech] = useState<number | null>(null);
  const [hoveredWhy, setHoveredWhy] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % whyChooseUs.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + whyChooseUs.length) % whyChooseUs.length);
  };

  return (
    <div className="min-h-screen bg-white dark:from-neutral-950 dark:to-neutral-900">
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
            
            <div className="absolute inset-0 opacity-[0.015] mix-blend-soft-light" style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")'
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
                    {t.ctaPrimary}
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
                    {t.ctaSecondary}
                  </a>
                </Button>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm text-white/70"
              >
                {t.trustItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#239D89]" />
                    <span>{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      </ShaderBackground>

      {/* Success Stories - Case Studies Section */}
      <section className="py-24 px-6 bg-neutral-50 dark:from-neutral-950 dark:to-neutral-900">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <div className="inline-block px-4 py-2 bg-[#239D89]/10 text-[#239D89] rounded-full text-sm font-semibold mb-6">
              {t.successStoriesBadge}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t.successStoriesTitle}
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              {t.successStoriesDescription}
            </p>
          </motion.div>

          <div className="space-y-24">
            {caseStudies.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500"
                  >
                    <Image
                      src={index === 0 ? "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/fitnees-app-1760715931624.webp" : index === 1 ? "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/image-1760629960655.png" : "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/arche-1760629950413.jpg"}
                      alt={`${project.name} architecture`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </div>

                <motion.div 
                  className={index % 2 === 1 ? "lg:order-1" : ""}
                  initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#239D89]/10 text-[#239D89] text-sm font-semibold mb-4">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold mb-2">{project.name}</h3>
                  <p className="text-lg text-neutral-600 dark:text-neutral-400 font-medium mb-4">
                    {project.tagline}
                  </p>
                  
                  <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 mb-6">
                    <Calendar className="w-5 h-5" />
                    <span className="text-sm">{project.timeline}</span>
                  </div>

                  <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 bg-[#239D89]/10 text-[#239D89] rounded-full text-sm font-semibold">
                      {project.role}
                    </span>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-semibold text-sm text-neutral-900 dark:text-neutral-100 mb-4 uppercase tracking-wide">
                      {caseStudies.keyAchievements}
                    </h4>
                    <div className="space-y-3">
                      {project.highlights.map((highlight, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.2 + idx * 0.1 }}
                          className="flex items-start gap-2"
                        >
                          <CheckCircle2 className="w-5 h-5 text-[#239D89] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-neutral-600 dark:text-neutral-400">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-semibold text-sm text-neutral-900 dark:text-neutral-100 mb-4 uppercase tracking-wide">
                      {caseStudies.technologies}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.2 + idx * 0.05 }}
                          className="px-4 py-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-lg text-sm font-medium"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
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
              {t.servicesBadge}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#163C2E] to-[#239D89] bg-clip-text text-transparent">
              {t.servicesTitle}<br />{t.servicesSubtitle}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
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
                <div className="flex items-start justify-between mb-6">
                  <motion.div 
                    className="p-3 rounded-xl bg-[#239D89]/10 text-[#239D89]"
                    animate={{
                      scale: hoveredService === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {index === 0 && <Layers className="w-8 h-8" />}
                    {index === 1 && <Network className="w-8 h-8" />}
                    {index === 2 && <Shield className="w-8 h-8" />}
                    {index === 3 && <Gauge className="w-8 h-8" />}
                    {index === 4 && <Cloud className="w-8 h-8" />}
                    {index === 5 && <Database className="w-8 h-8" />}
                    {index === 6 && <Code2 className="w-8 h-8" />}
                    {index === 7 && <Zap className="w-8 h-8" />}
                  </motion.div>
                  <motion.div
                    animate={{
                      x: hoveredService === index ? 5 : 0,
                      opacity: hoveredService === index ? 1 : 0.6,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight className="w-6 h-6 text-[#239D89]" />
                  </motion.div>
                </div>
                <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
                  hoveredService === index ? 'text-white' : 'text-neutral-900 dark:text-white'
                }`}>
                  {service.title}
                </h3>
                <p className={`leading-relaxed ${
                  hoveredService === index ? 'text-white/80' : 'text-neutral-600 dark:text-neutral-400'
                }`}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-950">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <div className="inline-block px-4 py-2 bg-[#ff7043]/10 text-[#ff7043] rounded-full text-sm font-semibold mb-6">
              {t.techBadge}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t.techTitle}<br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {t.techSubtitle}
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setHoveredTech(index)}
                onHoverEnd={() => setHoveredTech(null)}
                className="relative group"
              >
                <motion.div 
                  className="h-full p-8 rounded-2xl bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800 transition-all duration-300 cursor-pointer"
                  animate={{
                    borderColor: hoveredTech === index ? "#1e90ff" : "",
                    boxShadow: hoveredTech === index ? "0 10px 40px rgba(30, 144, 255, 0.15)" : "",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="flex justify-center mb-6"
                    animate={{
                      scale: hoveredTech === index ? 1.1 : 1,
                      rotateY: hoveredTech === index ? 360 : 0,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="text-[#1e90ff]">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                        {index === 0 && <path d="M12 0L1.608 6v12L12 24l10.392-6V6L12 0zm-1.473 4.155l6.458 3.729v7.456l-6.458 3.729-6.458-3.729V7.884l6.458-3.729z"/>}
                        {index === 1 && <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6s-4.298 9.6-9.6 9.6-9.6-4.298-9.6-9.6 4.298-9.6 9.6-9.6z"/>}
                        {index === 2 && <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.894 4.97c1.39 1.39 2.342 3.165 2.726 5.126H16.94c-.224-1.827-.908-3.523-1.988-4.943l1.942-1.942z"/>}
                        {index === 3 && <path d="M4.5 4.5v15h15v-15h-15zm1.5 1.5h12v12H6V6zm2 2v2h2V8H8zm3 0v2h2V8h-2z"/>}
                        {index === 4 && <path d="M12.5 0C6.152 0 1 5.152 1 11.5S6.152 23 12.5 23 24 17.848 24 11.5 18.848 0 12.5 0zm0 2.5c4.962 0 9 4.038 9 9.6s-4.038 9.6-9 9.6-9-4.038-9-9.6 4.038-9.6 9-9.6z"/>}
                        {index === 5 && <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6s-4.298 9.6-9.6 9.6-9.6-4.298-9.6-9.6 4.298-9.6 9.6-9.6z"/>}
                        {index === 6 && <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6s-4.298 9.6-9.6 9.6-9.6-4.298-9.6-9.6 4.298-9.6 9.6-9.6zM8.4 7.2v9.6l7.2-4.8-7.2-4.8z"/>}
                        {index === 7 && <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236z"/>}
                      </svg>
                    </div>
                  </motion.div>

                  <motion.h3 
                    className="text-lg font-bold text-center mb-4 text-[#1e3a5f] dark:text-white uppercase tracking-wide"
                    animate={{
                      color: hoveredTech === index ? "#1e90ff" : "",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {tech.name}
                  </motion.h3>

                  <motion.p 
                    className="text-sm text-center text-neutral-600 dark:text-neutral-400 leading-relaxed"
                    animate={{
                      y: hoveredTech === index ? -3 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {tech.description}
                  </motion.p>

                  <motion.div 
                    className="absolute bottom-0 left-1/2 h-1 bg-gradient-to-r from-[#1e90ff] to-[#00bfff] rounded-full"
                    initial={{ width: 0, x: "-50%" }}
                    animate={{
                      width: hoveredTech === index ? "80%" : 0,
                    }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="relative py-32 px-6 bg-[#0f1724] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2942]/50 via-transparent to-[#239D89]/10" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center"
          >
            <div className="inline-block px-4 py-2 bg-[#ff7043]/10 text-[#ff7043] rounded-full text-sm font-semibold mb-6">
              {t.processBadge}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t.processTitle}
            </h2>
          </motion.div>

          <div className="space-y-24">
            {workProcess.map((step, index) => (
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

                {index < workProcess.length - 1 && (
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
              {t.whyBadge}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t.whyTitle}<br />
              {t.whySubtitle}
            </h2>
          </motion.div>

          {/* Desktop: Overlapping Cards */}
          <div className="hidden lg:block relative max-w-7xl mx-auto" style={{ minHeight: '850px' }}>
            {whyChooseUs.map((card, index) => (
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
                {whyChooseUs.map((card, index) => (
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
                {whyChooseUs.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index 
                        ? 'bg-[#239D89] w-8' 
                        : 'bg-white/30'
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
              <span className="text-white/60 text-sm font-mono">
                {currentSlide + 1} / {whyChooseUs.length}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">{t.ctaSectionTitle}</h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-8">
            {t.ctaSectionDescription}
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#239D89] text-white rounded-xl hover:bg-[#1e8473] transition-all shadow-lg hover:shadow-xl"
          >
            {t.ctaSectionButton}
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <Footer language={language} />
    </div>
  );
}