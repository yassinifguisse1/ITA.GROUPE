"use client";

import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import { useLanguage } from "@/context/LanguageContext";
import { contactTranslations } from "@/i18n/page-translations";

const iconMap = { Mail, Phone, MapPin, Clock };

export default function ContactPage() {
  const { language } = useLanguage();
  const t = contactTranslations[language];

  const contactInfo = t.contactInfo.map((info, index) => ({
    ...info,
    icon: [Mail, Phone, MapPin, Clock][index]
  }));

  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 gradient-bg -z-10"></div>
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold">
                {t.hero.title}{" "}
                <span className="gradient-text">{t.hero.titleHighlight}</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                {t.hero.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 -mt-8">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{info.title}</h3>
                  {info.href ? (
                    <a 
                      href={info.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">{info.content}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20">
          <Contact language={language} />
        </section>

        {/* FAQ Section */}
        <FAQ 
          faqs={t.faq.items}
          title={t.faq.title}
          description={t.faq.description}
        />

     
      </main>
      <Footer language={language} />
    </>
  );
}