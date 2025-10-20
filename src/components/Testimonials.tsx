"use client";

import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

interface TestimonialsProps {
  language: "en" | "fr" | "pl";
}

export default function Testimonials({ language }: TestimonialsProps) {
  const content = {
    en: {
      heading: "The Trust of ",
      headingGradient: "Our Clients",
      subheading: "Discover how iTA Groupe has helped businesses like yours achieve their digital goals and grow their online presence.",
      testimonials: [
        {
          name: "Sophie Martin",
          role: "Marketing Director, Boutique Fashion Paris",
          content: "iTA Groupe transformed our online presence. Our traffic increased by 250% in 6 months thanks to their SEO strategy and targeted advertising campaigns."
        },
        {
          name: "Alexandre Dubois",
          role: "Founder, TechStart Solutions",
          content: "The iTA Groupe team truly understands startup needs. Their personalized approach and digital marketing expertise have been essential to our growth."
        },
        {
          name: "Camille Leroy",
          role: "Manager, Café des Arts",
          content: "Thanks to their social media management, we tripled our online clientele. Their creativity and responsiveness make all the difference."
        },
        {
          name: "Thomas Bernard",
          role: "CEO, Innov'Tech France",
          content: "A trusted partner for our digital transformation. Their expertise in website creation and digital strategy is remarkable."
        },
        {
          name: "Marie Fontaine",
          role: "Communications Manager, BioNature",
          content: "The ROI of our advertising campaigns exceeded all our expectations. The iTA Groupe team knows exactly how to reach our target audience."
        },
        {
          name: "Laurent Petit",
          role: "Director, Artisan Luxe",
          content: "Professionalism, creativity and measurable results. iTA Groupe was able to showcase our artisan know-how through a tailor-made digital strategy."
        }
      ],
      stats: [
        { value: "200+", label: "Satisfied Clients" },
        { value: "98%", label: "Satisfaction Rate" },
        { value: "500+", label: "Completed Projects" },
        { value: "24/7", label: "Support Available" }
      ]
    },
    fr: {
      heading: "La Confiance de ",
      headingGradient: "Nos Clients",
      subheading: "Découvrez comment iTA Groupe a aidé des entreprises comme la vôtre à atteindre leurs objectifs digitaux et à développer leur présence en ligne.",
      testimonials: [
        {
          name: "Sophie Martin",
          role: "Directrice Marketing, Boutique Fashion Paris",
          content: "iTA Groupe a transformé notre présence en ligne. Notre trafic a augmenté de 250% en 6 mois grâce à leur stratégie SEO et leurs campagnes publicitaires ciblées."
        },
        {
          name: "Alexandre Dubois",
          role: "Fondateur, TechStart Solutions",
          content: "L'équipe d'iTA Groupe comprend vraiment les besoins des startups. Leur approche personnalisée et leur expertise en marketing digital ont été essentielles à notre croissance."
        },
        {
          name: "Camille Leroy",
          role: "Gérante, Café des Arts",
          content: "Grâce à leur gestion des réseaux sociaux, nous avons triplé notre clientèle en ligne. Leur créativité et leur réactivité font toute la différence."
        },
        {
          name: "Thomas Bernard",
          role: "CEO, Innov'Tech France",
          content: "Un partenaire de confiance pour notre transformation digitale. Leur expertise en création de sites web et en stratégie digitale est remarquable."
        },
        {
          name: "Marie Fontaine",
          role: "Responsable Communication, BioNature",
          content: "Le ROI de nos campagnes publicitaires a dépassé toutes nos attentes. L'équipe d'iTA Groupe sait exactement comment atteindre notre audience cible."
        },
        {
          name: "Laurent Petit",
          role: "Directeur, Artisan Luxe",
          content: "Professionnalisme, créativité et résultats mesurables. iTA Groupe a su valoriser notre savoir-faire artisanal à travers une stratégie digitale sur-mesure."
        }
      ],
      stats: [
        { value: "200+", label: "Clients Satisfaits" },
        { value: "98%", label: "Taux de Satisfaction" },
        { value: "500+", label: "Projets Réalisés" },
        { value: "24/7", label: "Support Disponible" }
      ]
    },
    pl: {
      heading: "Zaufanie ",
      headingGradient: "naszych klientów",
      subheading: "Odkryj, jak iTA Groupe pomógł firmom takim jak Twoja osiągnąć cele cyfrowe i rozwinąć obecność online.",
      testimonials: [
        {
          name: "Sophie Martin",
          role: "Dyrektor Marketingu, Boutique Fashion Paris",
          content: "iTA Groupe przekształciło naszą obecność online. Nasz ruch wzrósł o 250% w ciągu 6 miesięcy dzięki ich strategii SEO i ukierunkowanym kampaniom reklamowym."
        },
        {
          name: "Alexandre Dubois",
          role: "Założyciel, TechStart Solutions",
          content: "Zespół iTA Groupe naprawdę rozumie potrzeby startupów. Ich spersonalizowane podejście i wiedza w zakresie marketingu cyfrowego były kluczowe dla naszego wzrostu."
        },
        {
          name: "Camille Leroy",
          role: "Menedżer, Café des Arts",
          content: "Dzięki zarządzaniu mediami społecznościowymi potroiliśmy naszą klientelę online. Ich kreatywność i responsywność robią całą różnicę."
        },
        {
          name: "Thomas Bernard",
          role: "CEO, Innov'Tech France",
          content: "Zaufany partner w naszej transformacji cyfrowej. Ich wiedza w tworzeniu stron internetowych i strategii cyfrowej jest niezwykła."
        },
        {
          name: "Marie Fontaine",
          role: "Kierownik Komunikacji, BioNature",
          content: "ROI naszych kampanii reklamowych przekroczył wszystkie nasze oczekiwania. Zespół iTA Groupe wie dokładnie, jak dotrzeć do naszej grupy docelowej."
        },
        {
          name: "Laurent Petit",
          role: "Dyrektor, Artisan Luxe",
          content: "Profesjonalizm, kreatywność i mierzalne rezultaty. iTA Groupe udało się pokazać nasze rzemieślnicze umiejętności poprzez strategię cyfrową szytą na miarę."
        }
      ],
      stats: [
        { value: "200+", label: "Zadowolonych klientów" },
        { value: "98%", label: "Wskaźnik zadowolenia" },
        { value: "500+", label: "Ukończonych projektów" },
        { value: "24/7", label: "Dostępne wsparcie" }
      ]
    }
  };

  const t = content[language];

  return (
    <section id="testimonials" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/10 to-background -z-10"></div>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="mb-4">
            {t.heading}<span className="gradient-text">{t.headingGradient}</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-balance">
            {t.subheading}
          </p>
        </div>

        {/* Animated Testimonials Scroll */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex gap-6 animate-scroll-testimonials">
              {/* Duplicate testimonials for infinite scroll effect */}
              {[...t.testimonials, ...t.testimonials].map((testimonial, index) => (
                <Card
                  key={index}
                  className="flex-shrink-0 w-[380px] p-6 md:p-8 hover:shadow-xl transition-all duration-300 border-border/50 bg-card/80 backdrop-blur-sm"
                >
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-foreground/90 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                    <Avatar className="h-12 w-12 ring-2 ring-primary/10">
                      <AvatarImage src={`/avatars/${testimonial.name.split(' ')[0].toLowerCase()}.jpg`} alt={testimonial.name} />
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {testimonial.name.split(" ").map((n) => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-sm">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    </section>
  );
}