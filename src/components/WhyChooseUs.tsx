"use client";

import { motion } from "framer-motion";
import { Check, Award, Users, Zap } from "lucide-react";

const content = {
  fr: {
    badge: "— POURQUOI NOUS",
    title: "Pourquoi Nous Choisir Comme Entreprise De Développement D'Applications Mobiles",
    reasons: [
      {
        number: "01",
        title: "Services De Développement Mobile Complets",
        description: "En choisissant iTA Groupe comme entreprise de développement mobile, vous pouvez être assuré que nous couvrons l'ensemble du processus de développement de votre application mobile. Nous créons des équipes dédiées spécifiquement pour votre projet pour le gérer de la définition des exigences techniques au lancement d'un produit prêt à l'emploi et à son support et développement ultérieur.",
        icon: Check
      },
      {
        number: "02",
        title: "Applications Mobiles De Haute Qualité",
        description: "La qualité des applications mobiles produites chez iTA Groupe n'est pas une fonctionnalité, mais une condition nécessaire. Nous assurons le bon fonctionnement des applications mobiles en appliquant l'assurance qualité aux premières étapes du projet pour éviter l'apparition de défauts, ainsi que pour réduire les coûts de test et de débogage.",
        icon: Award
      },
      {
        number: "03",
        title: "Équipe De Développement Mobile Axée Sur L'Industrie",
        description: "iTA Groupe est une agence de développement d'applications mobiles produisant des applications mobiles spécifiques à l'industrie en tenant compte de tous les aspects de votre domaine d'activité et des besoins particuliers de vos utilisateurs finaux. Nous possédons l'expertise et les qualifications essentielles pour fournir des applications mobiles compétitives qui évolueront avec votre entreprise.",
        icon: Users
      },
      {
        number: "04",
        title: "Innovation Et Technologies De Pointe",
        description: "Nous restons à la pointe des dernières technologies mobiles et frameworks pour garantir que votre application bénéficie des meilleures performances, sécurité et évolutivité. Notre approche innovante combine expertise technique et créativité pour créer des solutions mobiles qui se démarquent sur le marché.",
        icon: Zap
      }
    ]
  },
  en: {
    badge: "— WHY US",
    title: "Why Choose Us As Mobile App Development Company",
    reasons: [
      {
        number: "01",
        title: "FULL-CYCLE MOBILE DEVELOPMENT SERVICES",
        description: "By choosing iTA Groupe as a mobile development company, you can be assured that we cover the entire development process of your mobile application. We build dedicated teams specifically for your project to run it from defining technical requirements to launching a ready-to-use product and its support and further development.",
        icon: Check
      },
      {
        number: "02",
        title: "HIGH-QUALITY MOBILE APPLICATIONS",
        description: "The quality of the mobile apps produced at iTA Groupe isn't a feature, but a necessary condition. We ensure the proper work of mobile applications by applying quality assurance at the earliest stages of the project to prevent faults appearance, as well as decrease testing and debugging costs.",
        icon: Award
      },
      {
        number: "03",
        title: "INDUSTRY-FOCUSED MOBILE DEVELOPMENT TEAM",
        description: "iTA Groupe is a mobile app development agency producing industry-specific mobile applications by taking into account all aspects of your business field and the particular needs of your end-users. We possess the essential expertise and qualifications to deliver competitive mobile apps that will grow with your company.",
        icon: Users
      },
      {
        number: "04",
        title: "INNOVATION AND CUTTING-EDGE TECHNOLOGIES",
        description: "We stay at the forefront of the latest mobile technologies and frameworks to ensure your app benefits from the best performance, security, and scalability. Our innovative approach combines technical expertise with creativity to build mobile solutions that stand out in the market.",
        icon: Zap
      }
    ]
  },
  pl: {
    badge: "— DLACZEGO MY",
    title: "Dlaczego Wybrać Nas Jako Firmę Deweloperską Aplikacji Mobilnych",
    reasons: [
      {
        number: "01",
        title: "Kompleksowe Usługi Rozwoju Mobilnego",
        description: "Wybierając iTA Groupe jako firmę deweloperską aplikacji mobilnych, możesz być pewien, że obejmujemy cały proces rozwoju Twojej aplikacji mobilnej. Budujemy dedykowane zespoły specjalnie dla Twojego projektu, aby zarządzać nim od definiowania wymagań technicznych po uruchomienie gotowego do użycia produktu oraz jego wsparcie i dalszy rozwój.",
        icon: Check
      },
      {
        number: "02",
        title: "Wysokiej Jakości Aplikacje Mobilne",
        description: "Jakość aplikacji mobilnych produkowanych w iTA Groupe nie jest funkcją, ale niezbędnym warunkiem. Zapewniamy prawidłowe działanie aplikacji mobilnych poprzez stosowanie zapewnienia jakości na najwcześniejszych etapach projektu, aby zapobiec pojawieniu się wad oraz zmniejszyć koszty testowania i debugowania.",
        icon: Award
      },
      {
        number: "03",
        title: "Zespół Rozwoju Mobilnego Skoncentrowany Na Branży",
        description: "iTA Groupe to agencja deweloperska aplikacji mobilnych produkująca aplikacje mobilne specyficzne dla branży, biorąc pod uwagę wszystkie aspekty Twojej dziedziny biznesowej i szczególne potrzeby Twoich użytkowników końcowych. Posiadamy niezbędną wiedzę i kwalifikacje do dostarczania konkurencyjnych aplikacji mobilnych, które będą rosły razem z Twoją firmą.",
        icon: Users
      },
      {
        number: "04",
        title: "Innowacje I Najnowsze Technologie",
        description: "Pozostajemy w czołówce najnowszych technologii mobilnych i frameworków, aby zapewnić Twojej aplikacji najlepszą wydajność, bezpieczeństwo i skalowalność. Nasze innowacyjne podejście łączy ekspercką wiedzę techniczną z kreatywnością, aby tworzyć rozwiązania mobilne, które wyróżniają się na rynku.",
        icon: Zap
      }
    ]
  }
};

interface WhyChooseUsProps {
  language: "fr" | "en" | "pl";
}

export default function WhyChooseUs({ language }: WhyChooseUsProps) {
  const t = content[language];

  return (
    <section className="py-20 md:py-32 bg-[#1a2942] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#239D89] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#239D89] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-[#239D89]/10 border border-[#239D89]/30 rounded-full">
            <span className="text-[#239D89] font-semibold text-sm tracking-wider uppercase">
              {t.badge}
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {t.title}
          </h2>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {t.reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="h-full p-8 bg-[#0f1b2e] border border-[#239D89]/20 rounded-2xl transition-all duration-300 hover:border-[#239D89] hover:shadow-xl hover:shadow-[#239D89]/10 hover:-translate-y-1">
                  {/* Number Badge */}
                  <div className="absolute top-6 left-6 text-6xl font-bold text-[#239D89]/10 group-hover:text-[#239D89]/20 transition-colors duration-300">
                    [{reason.number}]
                  </div>

                  {/* Icon */}
                  <div className="relative mb-6 flex items-start justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#239D89]/10 flex items-center justify-center group-hover:bg-[#239D89]/20 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-[#239D89]" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">
                      {reason.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>

                  {/* Decorative gradient line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#239D89] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}