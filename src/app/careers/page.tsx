"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Footer from "@/components/Footer";
import { Briefcase, MapPin, Clock, DollarSign, CheckCircle, Users, TrendingUp, Heart, Coffee, Laptop, Calendar, Loader2, Check } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

// Zod validation schema - matches backend
const applicationSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters'),
  linkedin: z.string().url('Invalid LinkedIn URL').optional().or(z.literal('')),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

// File validation helper
const validateFile = (file: File | null, required: boolean = false): string | null => {
  if (!file || file.size === 0) {
    if (required) {
      return 'File is required';
    }
    return null;
  }

  const maxSize = 5 * 1024 * 1024; // 5MB
  if (file.size > maxSize) {
    return 'File size must be less than 5MB';
  }

  const allowedTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ];
  if (!allowedTypes.includes(file.type)) {
    return 'File must be PDF or DOC format';
  }

  return null;
};

const translations = {
  fr: {
    badge: "Rejoignez-nous",
    title: "Carrières chez",
    titleHighlight: "iTA Groupe",
    subtitle: "Rejoignez une équipe passionnée qui transforme les idées digitales en réalité. Nous recherchons des talents motivés pour façonner l'avenir du digital.",
    openPositions: "Postes Ouverts",
    openPositionsCount: "3 postes disponibles",
    applyNow: "Postuler maintenant",
    whyJoinUs: "Pourquoi nous rejoindre?",
    whyJoinUsIntro: "Découvrez ce qui fait d'iTA Groupe un lieu de travail exceptionnel",
    benefits: {
      title: "Avantages & Bénéfices",
      items: [
        {
          icon: TrendingUp,
          title: "Croissance professionnelle",
          description: "Formations continues, certifications et opportunités d'évolution"
        },
        {
          icon: Users,
          title: "Équipe collaborative",
          description: "Travaillez avec des experts passionnés et partagez vos connaissances"
        },
        {
          icon: Laptop,
          title: "Technologie de pointe",
          description: "Accès aux derniers outils et technologies du marché"
        },
        {
          icon: Coffee,
          title: "Environnement flexible",
          description: "Télétravail hybride et horaires flexibles pour un équilibre vie pro/perso"
        },
        {
          icon: Heart,
          title: "Culture d'entreprise",
          description: "Événements d'équipe, célébrations et reconnaissance du travail accompli"
        },
        {
          icon: DollarSign,
          title: "Rémunération attractive",
          description: "Salaire compétitif avec primes de performance et avantages sociaux"
        }
      ]
    },
    positions: {
      nodejs: {
        title: "Ingénieur Node.js",
        department: "Développement Backend",
        location: "Paris / Remote",
        type: "Temps plein",
        salary: "45k - 65k €/an",
        about: "À propos du poste",
        aboutText: "Nous recherchons un ingénieur Node.js expérimenté pour rejoindre notre équipe de développement backend. Vous serez responsable de la conception et du développement d'APIs robustes et scalables, en collaboration avec nos équipes frontend et DevOps.",
        responsibilities: "Responsabilités",
        responsibilitiesList: [
          "Concevoir et développer des APIs RESTful performantes avec Node.js et Express",
          "Optimiser les performances et la scalabilité des applications backend",
          "Implémenter des solutions de base de données (PostgreSQL, MongoDB, Redis)",
          "Écrire des tests unitaires et d'intégration avec Jest et Supertest",
          "Collaborer avec les équipes frontend et DevOps pour assurer une intégration fluide",
          "Participer aux revues de code et maintenir les standards de qualité",
          "Documenter les APIs et les architectures techniques"
        ],
        requirements: "Qualifications requises",
        requirementsList: [
          "3+ années d'expérience en développement Node.js",
          "Maîtrise d'Express.js, NestJS ou frameworks similaires",
          "Expérience avec PostgreSQL, MongoDB et Redis",
          "Connaissance des principes REST et GraphQL",
          "Maîtrise de Git et des workflows Git",
          "Expérience avec Docker et les outils CI/CD",
          "Bonnes compétences en communication et travail d'équipe"
        ],
        niceToHave: "Points bonus",
        niceToHaveList: [
          "Expérience avec TypeScript et NestJS",
          "Connaissance de Kubernetes et des architectures microservices",
          "Expérience avec AWS ou Google Cloud Platform",
          "Contributions open-source"
        ]
      },
      dataEngineer: {
        title: "Ingénieur Data",
        department: "Data & Analytics",
        location: "Paris / Remote",
        type: "Temps plein",
        salary: "50k - 70k €/an",
        about: "À propos du poste",
        aboutText: "Rejoignez notre équipe Data pour construire et maintenir des pipelines de données robustes. Vous travaillerez sur des projets passionnants impliquant le traitement de grandes quantités de données, l'analyse et la mise en place de solutions d'intelligence décisionnelle.",
        responsibilities: "Responsabilités",
        responsibilitiesList: [
          "Concevoir et implémenter des pipelines ETL/ELT scalables",
          "Développer des solutions de traitement de données en batch et temps réel",
          "Optimiser les performances des requêtes et des bases de données",
          "Créer et maintenir des data warehouses et data lakes",
          "Collaborer avec les data scientists pour déployer des modèles ML",
          "Mettre en place des systèmes de monitoring et d'alerting",
          "Assurer la qualité et la gouvernance des données"
        ],
        requirements: "Qualifications requises",
        requirementsList: [
          "3+ années d'expérience en engineering de données",
          "Maîtrise de Python et SQL",
          "Expérience avec Apache Spark, Airflow ou outils similaires",
          "Connaissance des bases de données relationnelles et NoSQL",
          "Expérience avec les plateformes cloud (AWS, GCP ou Azure)",
          "Compétences en modélisation de données",
          "Capacité à travailler avec de grandes volumétries de données"
        ],
        niceToHave: "Points bonus",
        niceToHaveList: [
          "Expérience avec Kafka, Flink ou autres outils de streaming",
          "Connaissance de dbt, Snowflake ou BigQuery",
          "Expérience en MLOps et déploiement de modèles",
          "Certifications cloud (AWS, GCP, Azure)"
        ]
      },
      marketingStrategist: {
        title: "Stratège Marketing",
        department: "Marketing & Communication",
        location: "Paris / Remote",
        type: "Temps plein",
        salary: "40k - 60k €/an",
        about: "À propos du poste",
        aboutText: "Nous recherchons un stratège marketing créatif et analytique pour développer et exécuter des stratégies marketing innovantes. Vous serez responsable de la création de campagnes multi-canaux, de l'analyse des performances et de la croissance de notre présence digitale.",
        responsibilities: "Responsabilités",
        responsibilitiesList: [
          "Développer et exécuter des stratégies marketing digitales complètes",
          "Créer et gérer des campagnes publicitaires sur Google Ads, Facebook et LinkedIn",
          "Analyser les KPIs et optimiser les performances des campagnes",
          "Gérer la stratégie de contenu pour les réseaux sociaux et le blog",
          "Collaborer avec les équipes de design et développement",
          "Effectuer des études de marché et des analyses concurrentielles",
          "Gérer le budget marketing et optimiser le ROI"
        ],
        requirements: "Qualifications requises",
        requirementsList: [
          "3+ années d'expérience en marketing digital",
          "Maîtrise de Google Ads, Facebook Ads Manager et LinkedIn Ads",
          "Expérience avec Google Analytics, Search Console et outils SEO",
          "Excellentes compétences en rédaction et storytelling",
          "Connaissance des principes UX/UI et design thinking",
          "Capacité à analyser des données et présenter des insights",
          "Maîtrise du français et de l'anglais"
        ],
        niceToHave: "Points bonus",
        niceToHaveList: [
          "Expérience avec HubSpot, Mailchimp ou outils marketing automation",
          "Compétences en design graphique (Figma, Canva)",
          "Expérience en growth hacking et marketing viral",
          "Connaissance des tendances TikTok et Instagram"
        ]
      }
    },
    applicationForm: {
      title: "Postuler pour ce poste",
      subtitle: "Remplissez le formulaire ci-dessous et nous vous contacterons rapidement",
      fullName: "Nom complet",
      email: "Email",
      phone: "Téléphone",
      linkedin: "Profil LinkedIn (optionnel)",
      resume: "CV (PDF, DOC)",
      coverLetter: "Lettre de motivation (optionnelle)",
      message: "Message",
      messagePlaceholder: "Parlez-nous de vous et pourquoi vous souhaitez rejoindre iTA Groupe...",
      submit: "Envoyer ma candidature",
      cancel: "Annuler"
    }
  },
  en: {
    badge: "Join Us",
    title: "Careers at",
    titleHighlight: "iTA Groupe",
    subtitle: "Join a passionate team that transforms digital ideas into reality. We're looking for motivated talents to shape the future of digital.",
    openPositions: "Open Positions",
    openPositionsCount: "3 positions available",
    applyNow: "Apply now",
    whyJoinUs: "Why join us?",
    whyJoinUsIntro: "Discover what makes iTA Groupe an exceptional workplace",
    benefits: {
      title: "Benefits & Perks",
      items: [
        {
          icon: TrendingUp,
          title: "Professional Growth",
          description: "Continuous training, certifications and career advancement opportunities"
        },
        {
          icon: Users,
          title: "Collaborative Team",
          description: "Work with passionate experts and share your knowledge"
        },
        {
          icon: Laptop,
          title: "Cutting-edge Technology",
          description: "Access to the latest tools and market technologies"
        },
        {
          icon: Coffee,
          title: "Flexible Environment",
          description: "Hybrid remote work and flexible hours for work-life balance"
        },
        {
          icon: Heart,
          title: "Company Culture",
          description: "Team events, celebrations and recognition of accomplishments"
        },
        {
          icon: DollarSign,
          title: "Competitive Compensation",
          description: "Competitive salary with performance bonuses and benefits"
        }
      ]
    },
    positions: {
      nodejs: {
        title: "Node.js Engineer",
        department: "Backend Development",
        location: "Paris / Remote",
        type: "Full-time",
        salary: "45k - 65k €/year",
        about: "About the role",
        aboutText: "We're looking for an experienced Node.js engineer to join our backend development team. You'll be responsible for designing and developing robust and scalable APIs, collaborating with our frontend and DevOps teams.",
        responsibilities: "Responsibilities",
        responsibilitiesList: [
          "Design and develop high-performance RESTful APIs with Node.js and Express",
          "Optimize performance and scalability of backend applications",
          "Implement database solutions (PostgreSQL, MongoDB, Redis)",
          "Write unit and integration tests with Jest and Supertest",
          "Collaborate with frontend and DevOps teams for seamless integration",
          "Participate in code reviews and maintain quality standards",
          "Document APIs and technical architectures"
        ],
        requirements: "Required qualifications",
        requirementsList: [
          "3+ years of Node.js development experience",
          "Proficiency in Express.js, NestJS or similar frameworks",
          "Experience with PostgreSQL, MongoDB and Redis",
          "Knowledge of REST principles and GraphQL",
          "Proficiency in Git and Git workflows",
          "Experience with Docker and CI/CD tools",
          "Good communication and teamwork skills"
        ],
        niceToHave: "Nice to have",
        niceToHaveList: [
          "Experience with TypeScript and NestJS",
          "Knowledge of Kubernetes and microservices architectures",
          "Experience with AWS or Google Cloud Platform",
          "Open-source contributions"
        ]
      },
      dataEngineer: {
        title: "Data Engineer",
        department: "Data & Analytics",
        location: "Paris / Remote",
        type: "Full-time",
        salary: "50k - 70k €/year",
        about: "About the role",
        aboutText: "Join our Data team to build and maintain robust data pipelines. You'll work on exciting projects involving large-scale data processing, analysis and implementation of business intelligence solutions.",
        responsibilities: "Responsibilities",
        responsibilitiesList: [
          "Design and implement scalable ETL/ELT pipelines",
          "Develop batch and real-time data processing solutions",
          "Optimize query and database performance",
          "Create and maintain data warehouses and data lakes",
          "Collaborate with data scientists to deploy ML models",
          "Set up monitoring and alerting systems",
          "Ensure data quality and governance"
        ],
        requirements: "Required qualifications",
        requirementsList: [
          "3+ years of data engineering experience",
          "Proficiency in Python and SQL",
          "Experience with Apache Spark, Airflow or similar tools",
          "Knowledge of relational and NoSQL databases",
          "Experience with cloud platforms (AWS, GCP or Azure)",
          "Data modeling skills",
          "Ability to work with large data volumes"
        ],
        niceToHave: "Nice to have",
        niceToHaveList: [
          "Experience with Kafka, Flink or other streaming tools",
          "Knowledge of dbt, Snowflake or BigQuery",
          "Experience in MLOps and model deployment",
          "Cloud certifications (AWS, GCP, Azure)"
        ]
      },
      marketingStrategist: {
        title: "Marketing Strategist",
        department: "Marketing & Communications",
        location: "Paris / Remote",
        type: "Full-time",
        salary: "40k - 60k €/year",
        about: "About the role",
        aboutText: "We're looking for a creative and analytical marketing strategist to develop and execute innovative marketing strategies. You'll be responsible for creating multi-channel campaigns, analyzing performance, and growing our digital presence.",
        responsibilities: "Responsibilities",
        responsibilitiesList: [
          "Develop and execute comprehensive digital marketing strategies",
          "Create and manage advertising campaigns on Google Ads, Facebook and LinkedIn",
          "Analyze KPIs and optimize campaign performance",
          "Manage content strategy for social media and blog",
          "Collaborate with design and development teams",
          "Conduct market research and competitive analysis",
          "Manage marketing budget and optimize ROI"
        ],
        requirements: "Required qualifications",
        requirementsList: [
          "3+ years of digital marketing experience",
          "Proficiency in Google Ads, Facebook Ads Manager and LinkedIn Ads",
          "Experience with Google Analytics, Search Console and SEO tools",
          "Excellent writing and storytelling skills",
          "Knowledge of UX/UI principles and design thinking",
          "Ability to analyze data and present insights",
          "Fluency in French and English"
        ],
        niceToHave: "Nice to have",
        niceToHaveList: [
          "Experience with HubSpot, Mailchimp or marketing automation tools",
          "Graphic design skills (Figma, Canva)",
          "Experience in growth hacking and viral marketing",
          "Knowledge of TikTok and Instagram trends"
        ]
      }
    },
    applicationForm: {
      title: "Apply for this position",
      subtitle: "Fill out the form below and we'll contact you shortly",
      fullName: "Full name",
      email: "Email",
      phone: "Phone",
      linkedin: "LinkedIn profile (optional)",
      resume: "Resume (PDF, DOC)",
      coverLetter: "Cover letter (optional)",
      message: "Message",
      messagePlaceholder: "Tell us about yourself and why you want to join iTA Groupe...",
      submit: "Submit application",
      cancel: "Cancel"
    }
  },
  pl: {
    badge: "Dołącz do Nas",
    title: "Kariera w",
    titleHighlight: "iTA Groupe",
    subtitle: "Dołącz do zespołu pasjonatów, który przekształca cyfrowe pomysły w rzeczywistość. Szukamy zmotywowanych talentów, aby kształtować przyszłość cyfrową.",
    openPositions: "Otwarte Stanowiska",
    openPositionsCount: "3 dostępne stanowiska",
    applyNow: "Aplikuj teraz",
    whyJoinUs: "Dlaczego warto do nas dołączyć?",
    whyJoinUsIntro: "Odkryj, co sprawia, że iTA Groupe jest wyjątkowym miejscem pracy",
    benefits: {
      title: "Korzyści i Dodatki",
      items: [
        {
          icon: TrendingUp,
          title: "Rozwój zawodowy",
          description: "Ciągłe szkolenia, certyfikaty i możliwości awansu"
        },
        {
          icon: Users,
          title: "Zespół współpracy",
          description: "Pracuj z pasjonatami ekspertów i dziel się wiedzą"
        },
        {
          icon: Laptop,
          title: "Najnowsza technologia",
          description: "Dostęp do najnowszych narzędzi i technologii rynkowych"
        },
        {
          icon: Coffee,
          title: "Elastyczne środowisko",
          description: "Praca hybrydowa i elastyczne godziny dla równowagi życia zawodowego"
        },
        {
          icon: Heart,
          title: "Kultura firmy",
          description: "Wydarzenia zespołowe, celebracje i uznanie za wykonaną pracę"
        },
        {
          icon: DollarSign,
          title: "Atrakcyjne wynagrodzenie",
          description: "Konkurencyjne wynagrodzenie z premiami za wyniki i świadczeniami socjalnymi"
        }
      ]
    },
    positions: {
      nodejs: {
        title: "Inżynier Node.js",
        department: "Rozwój Backendu",
        location: "Paryż / Zdalnie",
        type: "Pełny etat",
        salary: "45k - 65k €/rok",
        about: "O stanowisku",
        aboutText: "Szukamy doświadczonego inżyniera Node.js, który dołączy do naszego zespołu rozwoju backendu. Będziesz odpowiedzialny za projektowanie i rozwój solidnych i skalowalnych API, we współpracy z naszymi zespołami frontend i DevOps.",
        responsibilities: "Obowiązki",
        responsibilitiesList: [
          "Projektowanie i rozwój wydajnych API RESTful z Node.js i Express",
          "Optymalizacja wydajności i skalowalności aplikacji backendowych",
          "Implementacja rozwiązań baz danych (PostgreSQL, MongoDB, Redis)",
          "Pisanie testów jednostkowych i integracyjnych z Jest i Supertest",
          "Współpraca z zespołami frontend i DevOps dla płynnej integracji",
          "Uczestnictwo w przeglądach kodu i utrzymywanie standardów jakości",
          "Dokumentowanie API i architektur technicznych"
        ],
        requirements: "Wymagane kwalifikacje",
        requirementsList: [
          "3+ lata doświadczenia w rozwoju Node.js",
          "Biegłość w Express.js, NestJS lub podobnych frameworkach",
          "Doświadczenie z PostgreSQL, MongoDB i Redis",
          "Znajomość zasad REST i GraphQL",
          "Biegłość w Git i przepływach pracy Git",
          "Doświadczenie z Docker i narzędziami CI/CD",
          "Dobre umiejętności komunikacyjne i pracy zespołowej"
        ],
        niceToHave: "Punkty bonusowe",
        niceToHaveList: [
          "Doświadczenie z TypeScript i NestJS",
          "Znajomość Kubernetes i architektur mikrousług",
          "Doświadczenie z AWS lub Google Cloud Platform",
          "Wkład w open-source"
        ]
      },
      dataEngineer: {
        title: "Inżynier Danych",
        department: "Dane i Analityka",
        location: "Paryż / Zdalnie",
        type: "Pełny etat",
        salary: "50k - 70k €/rok",
        about: "O stanowisku",
        aboutText: "Dołącz do naszego zespołu Data, aby budować i utrzymywać solidne rurociągi danych. Będziesz pracować nad ekscytującymi projektami obejmującymi przetwarzanie dużych ilości danych, analizę i wdrażanie rozwiązań business intelligence.",
        responsibilities: "Obowiązki",
        responsibilitiesList: [
          "Projektowanie i implementacja skalowalnych rurociągów ETL/ELT",
          "Rozwój rozwiązań przetwarzania danych w trybie wsadowym i czasie rzeczywistym",
          "Optymalizacja wydajności zapytań i baz danych",
          "Tworzenie i utrzymywanie magazynów danych i jezior danych",
          "Współpraca z naukowcami danych w celu wdrażania modeli ML",
          "Konfiguracja systemów monitoringu i alertów",
          "Zapewnienie jakości i zarządzania danymi"
        ],
        requirements: "Wymagane kwalifikacje",
        requirementsList: [
          "3+ lata doświadczenia w inżynierii danych",
          "Biegłość w Python i SQL",
          "Doświadczenie z Apache Spark, Airflow lub podobnymi narzędziami",
          "Znajomość relacyjnych i NoSQL baz danych",
          "Doświadczenie z platformami chmurowymi (AWS, GCP lub Azure)",
          "Umiejętności modelowania danych",
          "Zdolność do pracy z dużymi wolumenami danych"
        ],
        niceToHave: "Punkty bonusowe",
        niceToHaveList: [
          "Doświadczenie z Kafka, Flink lub innymi narzędziami strumieniowymi",
          "Znajomość dbt, Snowflake lub BigQuery",
          "Doświadczenie w MLOps i wdrażaniu modeli",
          "Certyfikaty chmurowe (AWS, GCP, Azure)"
        ]
      },
      marketingStrategist: {
        title: "Strateg Marketingowy",
        department: "Marketing i Komunikacja",
        location: "Paryż / Zdalnie",
        type: "Pełny etat",
        salary: "40k - 60k €/rok",
        about: "O stanowisku",
        aboutText: "Szukamy kreatywnego i analitycznego stratega marketingowego do opracowywania i realizacji innowacyjnych strategii marketingowych. Będziesz odpowiedzialny za tworzenie kampanii wielokanałowych, analizę wyników i rozwój naszej obecności cyfrowej.",
        responsibilities: "Obowiązki",
        responsibilitiesList: [
          "Opracowywanie i realizacja kompleksowych strategii marketingu cyfrowego",
          "Tworzenie i zarządzanie kampaniami reklamowymi w Google Ads, Facebook i LinkedIn",
          "Analiza KPI i optymalizacja wyników kampanii",
          "Zarządzanie strategią treści dla mediów społecznościowych i bloga",
          "Współpraca z zespołami projektowymi i programistycznymi",
          "Przeprowadzanie badań rynkowych i analiz konkurencji",
          "Zarządzanie budżetem marketingowym i optymalizacja ROI"
        ],
        requirements: "Wymagane kwalifikacje",
        requirementsList: [
          "3+ lata doświadczenia w marketingu cyfrowym",
          "Biegłość w Google Ads, Facebook Ads Manager i LinkedIn Ads",
          "Doświadczenie z Google Analytics, Search Console i narzędziami SEO",
          "Doskonałe umiejętności pisania i opowiadania historii",
          "Znajomość zasad UX/UI i design thinking",
          "Umiejętność analizy danych i prezentacji wniosków",
          "Biegła znajomość francuskiego i angielskiego"
        ],
        niceToHave: "Punkty bonusowe",
        niceToHaveList: [
          "Doświadczenie z HubSpot, Mailchimp lub narzędziami automatyzacji marketingu",
          "Umiejętności projektowania graficznego (Figma, Canva)",
          "Doświadczenie w growth hacking i marketingu viralowym",
          "Znajomość trendów TikTok i Instagram"
        ]
      }
    },
    applicationForm: {
      title: "Aplikuj na to stanowisko",
      subtitle: "Wypełnij formularz poniżej, a skontaktujemy się z Tobą wkrótce",
      fullName: "Pełne imię i nazwisko",
      email: "Email",
      phone: "Telefon",
      linkedin: "Profil LinkedIn (opcjonalnie)",
      resume: "CV (PDF, DOC)",
      coverLetter: "List motywacyjny (opcjonalny)",
      message: "Wiadomość",
      messagePlaceholder: "Opowiedz nam o sobie i dlaczego chcesz dołączyć do iTA Groupe...",
      submit: "Wyślij aplikację",
      cancel: "Anuluj"
    }
  }
};

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
}

export default function CareersPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [currentJobTitle, setCurrentJobTitle] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [applicationForm, setApplicationForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedin: '',
    resume: null as File | null,
    coverLetter: null as File | null,
    message: '',
  });

  const jobPositions: JobPosition[] = [
    {
      id: "nodejs",
      title: t.positions.nodejs.title,
      department: t.positions.nodejs.department,
      location: t.positions.nodejs.location,
      type: t.positions.nodejs.type,
      salary: t.positions.nodejs.salary
    },
    {
      id: "dataEngineer",
      title: t.positions.dataEngineer.title,
      department: t.positions.dataEngineer.department,
      location: t.positions.dataEngineer.location,
      type: t.positions.dataEngineer.type,
      salary: t.positions.dataEngineer.salary
    },
    {
      id: "marketingStrategist",
      title: t.positions.marketingStrategist.title,
      department: t.positions.marketingStrategist.department,
      location: t.positions.marketingStrategist.location,
      type: t.positions.marketingStrategist.type,
      salary: t.positions.marketingStrategist.salary
    }
  ];

  const getJobDetails = (jobId: string) => {
    return t.positions[jobId as keyof typeof t.positions];
  };

  const handleApply = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({}); // Clear previous errors

    // Validate form data with Zod
    try {
      applicationSchema.parse({
        fullName: applicationForm.fullName,
        email: applicationForm.email,
        phone: applicationForm.phone,
        linkedin: applicationForm.linkedin,
        message: applicationForm.message,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        // FIXED: Check if issues array exists before using forEach
        if (error.issues && Array.isArray(error.issues)) {
          error.issues.forEach((err) => {
            if (err.path[0]) {
              fieldErrors[err.path[0] as string] = err.message;
            }
          });
        }
        setErrors(fieldErrors);
        setIsSubmitting(false);
        return;
      }
    }

    // Validate files
    if (!applicationForm.resume) {
      setErrors(prev => ({ ...prev, resume: language === 'fr' ? 'CV requis' : language === 'en' ? 'Resume required' : 'CV wymagane' }));
      setIsSubmitting(false);
      return;
    }

    const resumeError = validateFile(applicationForm.resume, true);
    if (resumeError) {
      setErrors(prev => ({ ...prev, resume: resumeError }));
      setIsSubmitting(false);
      return;
    }

    if (applicationForm.coverLetter) {
      const coverLetterError = validateFile(applicationForm.coverLetter, false);
      if (coverLetterError) {
        setErrors(prev => ({ ...prev, coverLetter: coverLetterError }));
        setIsSubmitting(false);
        return;
      }
    }

    const formData = new FormData();
    formData.append('fullName', applicationForm.fullName);
    formData.append('email', applicationForm.email);
    formData.append('phone', applicationForm.phone);
    formData.append('linkedin', applicationForm.linkedin);
    formData.append('position', currentJobTitle);
    formData.append('message', applicationForm.message);
    if (applicationForm.resume) {
      formData.append('resume', applicationForm.resume);
    }
    if (applicationForm.coverLetter) {
      formData.append('coverLetter', applicationForm.coverLetter);
    }

    try {
      const response = await fetch('/api/careers', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit application');
      }

      setSubmitSuccess(true);
      toast.success(language === 'fr' ? 'Candidature envoyée avec succès!' : language === 'en' ? 'Application submitted successfully!' : 'Aplikacja wysłana pomyślnie!');
      setTimeout(() => {
        setShowApplicationForm(false);
        setApplicationForm({
          fullName: '',
          email: '',
          phone: '',
          linkedin: '',
          resume: null,
          coverLetter: null,
          message: '',
        });
        setSubmitSuccess(false);
        setErrors({});
        setCurrentJobTitle('');
      }, 2000);
    } catch (error) {
      console.error('Error submitting application:', error);
      toast.error(language === 'fr' ? 'Erreur lors de l\'envoi. Réessayez.' : language === 'en' ? 'Error submitting application. Please try again.' : 'Błąd podczas wysyłania. Spróbuj ponownie.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Briefcase className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">{t.badge}</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              {t.title} <span className="gradient-text">{t.titleHighlight}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t.whyJoinUs}</h2>
            <p className="text-xl text-muted-foreground">{t.whyJoinUsIntro}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.benefits.items.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all hover:shadow-lg group"
                >
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">{t.openPositions}</h2>
              <p className="text-muted-foreground">{t.openPositionsCount}</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {jobPositions.map((job) => (
              <div
                key={job.id}
                className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all hover:shadow-lg cursor-pointer"
                onClick={() => setSelectedJob(job.id)}
              >
                <h3 className="text-2xl font-bold mb-4">{job.title}</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Briefcase className="h-4 w-4" />
                    <span>{job.department}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <DollarSign className="h-4 w-4" />
                    <span>{job.salary}</span>
                  </div>
                </div>
                <button className="w-full py-3 px-6 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                  {t.applyNow}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Detail Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedJob(null)}>
          <div className="bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8" onClick={(e) => e.stopPropagation()}>
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">{getJobDetails(selectedJob).title}</h2>
              <div className="flex flex-wrap gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  <span>{getJobDetails(selectedJob).department}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{getJobDetails(selectedJob).location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{getJobDetails(selectedJob).type}</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  <span>{getJobDetails(selectedJob).salary}</span>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">{getJobDetails(selectedJob).about}</h3>
                <p className="text-muted-foreground">{getJobDetails(selectedJob).aboutText}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">{getJobDetails(selectedJob).responsibilities}</h3>
                <ul className="space-y-2">
                  {getJobDetails(selectedJob).responsibilitiesList.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">{getJobDetails(selectedJob).requirements}</h3>
                <ul className="space-y-2">
                  {getJobDetails(selectedJob).requirementsList.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">{getJobDetails(selectedJob).niceToHave}</h3>
                <ul className="space-y-2">
                  {getJobDetails(selectedJob).niceToHaveList.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <button
                onClick={() => {
                  setCurrentJobTitle(getJobDetails(selectedJob).title);
                  setShowApplicationForm(true);
                  setSelectedJob(null);
                }}
                className="flex-1 py-3 px-6 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                {t.applyNow}
              </button>
              <button
                onClick={() => setSelectedJob(null)}
                className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors"
              >
                {t.applicationForm.cancel}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => !isSubmitting && setShowApplicationForm(false)}>
          <div className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-3xl font-bold mb-2">{t.applicationForm.title}</h2>
            <p className="text-muted-foreground mb-8">{t.applicationForm.subtitle}</p>

            <form onSubmit={handleApply} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">{t.applicationForm.fullName}</label>
                <input
                  type="text"
                  value={applicationForm.fullName}
                  onChange={(e) => {
                    setApplicationForm({ ...applicationForm, fullName: e.target.value });
                    setErrors(prev => ({ ...prev, fullName: '' })); // Clear error on change
                  }}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.fullName ? 'border-red-500' : 'border-neutral-300 dark:border-[#1E3A5F]'
                  } bg-white dark:bg-[#0D1B2A] text-neutral-900 dark:text-white focus:outline-none focus:ring-2 ${
                    errors.fullName ? 'focus:ring-red-500' : 'focus:ring-[#239D89]'
                  } transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
                  required
                  disabled={isSubmitting}
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                    <span className="text-xs">⚠</span> {errors.fullName}
                  </p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">{t.applicationForm.email}</label>
                  <input
                    type="email"
                    value={applicationForm.email}
                    onChange={(e) => {
                      setApplicationForm({ ...applicationForm, email: e.target.value });
                      setErrors(prev => ({ ...prev, email: '' }));
                    }}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.email ? 'border-red-500' : 'border-neutral-300 dark:border-[#1E3A5F]'
                    } bg-white dark:bg-[#0D1B2A] text-neutral-900 dark:text-white focus:outline-none focus:ring-2 ${
                      errors.email ? 'focus:ring-red-500' : 'focus:ring-[#239D89]'
                    } transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
                    required
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <span className="text-xs">⚠</span> {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t.applicationForm.phone}</label>
                  <input
                    type="tel"
                    value={applicationForm.phone}
                    onChange={(e) => {
                      setApplicationForm({ ...applicationForm, phone: e.target.value });
                      setErrors(prev => ({ ...prev, phone: '' }));
                    }}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.phone ? 'border-red-500' : 'border-neutral-300 dark:border-[#1E3A5F]'
                    } bg-white dark:bg-[#0D1B2A] text-neutral-900 dark:text-white focus:outline-none focus:ring-2 ${
                      errors.phone ? 'focus:ring-red-500' : 'focus:ring-[#239D89]'
                    } transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
                    required
                    disabled={isSubmitting}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <span className="text-xs">⚠</span> {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">{t.applicationForm.linkedin}</label>
                <input
                  type="url"
                  value={applicationForm.linkedin}
                  onChange={(e) => {
                    setApplicationForm({ ...applicationForm, linkedin: e.target.value });
                    setErrors(prev => ({ ...prev, linkedin: '' }));
                  }}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.linkedin ? 'border-red-500' : 'border-neutral-300 dark:border-[#1E3A5F]'
                  } bg-white dark:bg-[#0D1B2A] text-neutral-900 dark:text-white focus:outline-none focus:ring-2 ${
                    errors.linkedin ? 'focus:ring-red-500' : 'focus:ring-[#239D89]'
                  } transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
                  disabled={isSubmitting}
                />
                {errors.linkedin && (
                  <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                    <span className="text-xs">⚠</span> {errors.linkedin}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">{t.applicationForm.resume}</label>
                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => {
                    const file = e.target.files?.[0] || null;
                    setApplicationForm({ ...applicationForm, resume: file });
                    setErrors(prev => ({ ...prev, resume: '' }));
                  }}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.resume ? 'border-red-500' : 'border-neutral-300 dark:border-[#1E3A5F]'
                  } bg-white dark:bg-[#0D1B2A] text-neutral-900 dark:text-white focus:outline-none focus:ring-2 ${
                    errors.resume ? 'focus:ring-red-500' : 'focus:ring-[#239D89]'
                  } transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
                  required
                  disabled={isSubmitting}
                />
                {errors.resume && (
                  <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                    <span className="text-xs">⚠</span> {errors.resume}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">{t.applicationForm.coverLetter}</label>
                <input
                  type="file"
                  name="coverLetter"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => {
                    const file = e.target.files?.[0] || null;
                    setApplicationForm({ ...applicationForm, coverLetter: file });
                    setErrors(prev => ({ ...prev, coverLetter: '' }));
                  }}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-[#1E3A5F] bg-white dark:bg-[#0D1B2A] text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#239D89] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                />
                {errors.coverLetter && (
                  <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                    <span className="text-xs">⚠</span> {errors.coverLetter}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">{t.applicationForm.message}</label>
                <textarea
                  value={applicationForm.message}
                  onChange={(e) => {
                    setApplicationForm({ ...applicationForm, message: e.target.value });
                    setErrors(prev => ({ ...prev, message: '' }));
                  }}
                  rows={4}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.message ? 'border-red-500' : 'border-neutral-300 dark:border-[#1E3A5F]'
                  } bg-white dark:bg-[#0D1B2A] text-neutral-900 dark:text-white focus:outline-none focus:ring-2 ${
                    errors.message ? 'focus:ring-red-500' : 'focus:ring-[#239D89]'
                  } transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed`}
                  required
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                    <span className="text-xs">⚠</span> {errors.message}
                  </p>
                )}
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3 px-6 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      {language === 'fr' ? 'Envoi en cours...' : language === 'en' ? 'Submitting...' : 'Wysyłanie...'}
                    </>
                  ) : submitSuccess ? (
                    <>
                      <Check className="h-5 w-5" />
                      {language === 'fr' ? 'Envoyé!' : language === 'en' ? 'Submitted!' : 'Wysłano!'}
                    </>
                  ) : (
                    t.applicationForm.submit
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setShowApplicationForm(false)}
                  disabled={isSubmitting}
                  className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {t.applicationForm.cancel}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer language={language} />
    </div>
  );
}