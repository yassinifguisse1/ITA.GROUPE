import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, BookOpen, Users, Video, FileText, Award, Calendar, BarChart3 } from "lucide-react";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Education Solutions - iTA Groupe",
  description: "Modern learning platforms for schools, universities, and online education. LMS, virtual classrooms, and student management systems.",
};

const services = [
  {
    icon: BookOpen,
    title: "Learning Management System",
    description: "Comprehensive LMS platforms with course management, content delivery, assessments, and progress tracking for effective learning.",
    features: ["Course creation", "Content management", "Assessments", "Progress tracking"]
  },
  {
    icon: Video,
    title: "Virtual Classrooms",
    description: "Interactive online learning environments with live video, screen sharing, breakout rooms, and collaborative tools.",
    features: ["Live video", "Screen sharing", "Interactive whiteboard", "Recording"]
  },
  {
    icon: Users,
    title: "Student Management",
    description: "Complete student information systems managing enrollment, attendance, grades, and communication with parents.",
    features: ["Enrollment", "Attendance tracking", "Grade management", "Parent portal"]
  },
  {
    icon: Award,
    title: "Assessment & Certification",
    description: "Automated testing systems with question banks, anti-cheating measures, instant grading, and digital certificates.",
    features: ["Online exams", "Auto-grading", "Certificates", "Analytics"]
  }
];

const features = [
  {
    icon: GraduationCap,
    title: "For Schools",
    description: "Complete school management systems with student records and parent communication"
  },
  {
    icon: BookOpen,
    title: "For Universities",
    description: "Enterprise LMS with research tools and alumni management"
  },
  {
    icon: Video,
    title: "For Online Courses",
    description: "Modern e-learning platforms with monetization and marketing"
  },
  {
    icon: Users,
    title: "For Corporate Training",
    description: "Employee training systems with skills tracking and compliance"
  }
];

const benefits = [
  {
    icon: Users,
    title: "Better Learning Outcomes",
    description: "Engage students with interactive content, personalized learning paths, and instant feedback mechanisms."
  },
  {
    icon: BarChart3,
    title: "Data-Driven Insights",
    description: "Track student progress, identify at-risk learners, and optimize teaching strategies with analytics."
  },
  {
    icon: Calendar,
    title: "Operational Efficiency",
    description: "Automate administrative tasks like enrollment, grading, and reporting to save time and resources."
  },
  {
    icon: Video,
    title: "Accessible Learning",
    description: "Deliver education anywhere, anytime with mobile-friendly platforms and offline capabilities."
  }
];

const stats = [
  { value: "70+", label: "Education Projects" },
  { value: "500K+", label: "Students Reached" },
  { value: "120+", label: "Institutions" },
  { value: "95%", label: "Satisfaction Rate" }
];

const educationFAQs = [
  {
    question: "Quels types de plateformes éducatives développez-vous?",
    answer: "Nous créons plusieurs types de solutions: LMS (Learning Management Systems) pour écoles et universités, plateformes de cours en ligne type Udemy, systèmes de gestion scolaire complets, classes virtuelles interactives, apps mobile pour l'apprentissage, et systèmes de formation corporate. Chaque solution est personnalisée selon vos besoins pédagogiques."
  },
  {
    question: "Combien coûte le développement d'une plateforme e-learning?",
    answer: "Les coûts varient selon les fonctionnalités: plateforme simple de cours en ligne 40 000€-70 000€, LMS complet pour institution 100 000€-200 000€, et système enterprise avec IA et analytics avancés 250 000€+. Nous offrons aussi des modèles de licence SaaS pour réduire les coûts initiaux."
  },
  {
    question: "Intégrez-vous avec les systèmes éducatifs existants?",
    answer: "Oui! Nous intégrons avec: systèmes d'information étudiants (SIS), outils de visioconférence (Zoom, Teams), Google Classroom, Microsoft 365, systèmes de paiement pour les frais de scolarité, bibliothèques numériques, et standards e-learning (SCORM, xAPI, LTI) pour la compatibilité maximale."
  },
  {
    question: "Proposez-vous des classes virtuelles en temps réel?",
    answer: "Absolument! Nous développons des plateformes de classe virtuelle incluant: vidéo HD multi-participants, partage d'écran et de documents, tableau blanc interactif, salles de sous-groupes (breakout rooms), chat et Q&A, enregistrement des sessions, et outils de collaboration en temps réel."
  },
  {
    question: "Comment gérez-vous les examens en ligne et la prévention de la triche?",
    answer: "Nos systèmes d'examen incluent: banques de questions randomisées, limite de temps par question, verrouillage du navigateur, surveillance par webcam (proctoring), détection d'activité suspecte, questions à réponses multiples et dissertations, correction automatique, et analytics détaillés des résultats."
  },
  {
    question: "Offrez-vous des analytics sur les performances étudiants?",
    answer: "Oui! Dashboards analytics complets trackant: taux de complétion des cours, temps d'étude, résultats aux évaluations, identification des étudiants en difficulté, engagement par contenu, prédiction de réussite par machine learning, et rapports personnalisés pour enseignants et administrateurs."
  },
  {
    question: "Quel est le délai pour lancer une plateforme éducative?",
    answer: "Délais typiques: plateforme de cours simple 10-14 semaines, LMS complet 16-24 semaines, système de gestion scolaire enterprise 24-36 semaines. Cela inclut: design UX/UI, développement des fonctionnalités, intégrations tierces, tests utilisateurs, formation des enseignants, et migration des données existantes."
  }
];

export default function EducationPage() {
  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 gradient-bg -z-10"></div>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge variant="secondary" className="mb-4">Education Solutions</Badge>
              <h1 className="text-4xl md:text-6xl font-bold">
                Transform{" "}
                <span className="gradient-text">Learning Experiences</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Build modern education platforms for schools, universities, and online learning. 
                LMS, virtual classrooms, and student management systems that engage and inspire.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button size="lg" className="rounded-full" asChild>
                  <a href="/contact">Start Your Project</a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full" asChild>
                  <a href="/portfolio">View Education Projects</a>
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
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Complete Education Solutions</h2>
              <p className="text-lg text-muted-foreground">
                Modern learning technology for institutions and online educators
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

        {/* Features Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge variant="secondary" className="mb-4">Solutions</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Built for Every Learning Need</h2>
              <p className="text-lg text-muted-foreground">
                Tailored solutions for different educational contexts
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
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
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Education Excellence</h2>
              <p className="text-lg text-muted-foreground">
                Technology that enhances teaching and improves learning outcomes
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
          faqs={educationFAQs}
          title="Questions Fréquentes Education"
          description="Tout ce que vous devez savoir sur nos solutions e-learning"
        />

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold">
                Ready to Transform Education?
              </h2>
              <p className="text-xl text-muted-foreground">
                Let's build learning platforms that inspire and engage
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