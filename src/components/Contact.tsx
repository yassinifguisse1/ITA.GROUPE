"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { z } from 'zod';
import { toast } from 'sonner';

// Zod validation schema
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactProps {
  language: "en" | "fr" | "pl";
}

export default function Contact({ language }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear previous errors
    setErrors({});

    try {
      // Validate form data
      contactSchema.parse(formData);

      setIsSubmitting(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast.success(
        language === 'fr' 
          ? 'Message envoyé avec succès!' 
          : language === 'en' 
          ? 'Message sent successfully!' 
          : 'Wiadomość wysłana pomyślnie!'
      );

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Map Zod errors to form field errors - NO TOAST
        const fieldErrors: {
          name?: string;
          email?: string;
          message?: string;
        } = {};
        
        if (error.errors && Array.isArray(error.errors)) {
          error.errors.forEach((err) => {
            const field = err.path[0] as keyof typeof fieldErrors;
            if (field) {
              fieldErrors[field] = err.message;
            }
          });
        }
        
        setErrors(fieldErrors);
      } else {
        toast.error(
          language === 'fr'
            ? 'Erreur lors de l\'envoi du message'
            : language === 'en'
            ? 'Error sending message'
            : 'Błąd podczas wysyłania wiadomości'
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 md:py-32 bg-white dark:bg-[#0A1628]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#239D89] rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#163C2E] rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6 px-4 py-2 rounded-full bg-[#239D89]/10 text-[#239D89] text-sm font-medium uppercase tracking-wider"
            >
              {content[language].badge}
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#163C2E] dark:text-white mb-6 max-w-4xl"
            >
              {content[language].heading}
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-neutral-600 dark:text-gray-400 max-w-2xl"
            >
              {content[language].description}
            </motion.p>
          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-neutral-50 dark:bg-[#0D1B2A] p-8 md:p-10 rounded-2xl border border-neutral-200 dark:border-[#1E3A5F]"
            >
              <h3 className="text-2xl font-bold text-[#163C2E] dark:text-white mb-6">
                {content[language].formTitle}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-neutral-700 dark:text-gray-300 mb-2"
                  >
                    {content[language].name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.name 
                        ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                        : 'border-neutral-300 dark:border-[#1E3A5F] focus:ring-[#239D89] focus:border-[#239D89]'
                    } bg-white dark:bg-[#0A1628] text-[#163C2E] dark:text-white focus:outline-none focus:ring-2 transition-colors`}
                    placeholder={content[language].namePlaceholder}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <span className="text-xs">⚠</span> {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-700 dark:text-gray-300 mb-2"
                  >
                    {content[language].email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.email 
                        ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                        : 'border-neutral-300 dark:border-[#1E3A5F] focus:ring-[#239D89] focus:border-[#239D89]'
                    } bg-white dark:bg-[#0A1628] text-[#163C2E] dark:text-white focus:outline-none focus:ring-2 transition-colors`}
                    placeholder={content[language].emailPlaceholder}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <span className="text-xs">⚠</span> {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-neutral-700 dark:text-gray-300 mb-2"
                  >
                    {content[language].message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.message 
                        ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                        : 'border-neutral-300 dark:border-[#1E3A5F] focus:ring-[#239D89] focus:border-[#239D89]'
                    } bg-white dark:bg-[#0A1628] text-[#163C2E] dark:text-white focus:outline-none focus:ring-2 resize-none transition-colors`}
                    placeholder={content[language].messagePlaceholder}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <span className="text-xs">⚠</span> {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#239D89] hover:bg-[#1d8070] text-white py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#239D89]/30 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="animate-spin">⏳</span>
                      {language === 'fr' ? 'Envoi...' : language === 'en' ? 'Sending...' : 'Wysyłanie...'}
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Send className="w-5 h-5" />
                      {content[language].submit}
                    </span>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Contact Info Cards */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              {content[language].infoCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                    className="group relative overflow-hidden bg-neutral-50 dark:bg-[#0D1B2A] border border-neutral-200 dark:border-[#1E3A5F] rounded-2xl p-8 hover:border-[#239D89] transition-all duration-300 cursor-pointer"
                  >
                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#239D89]/5 to-[#163C2E]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-14 h-14 rounded-xl bg-[#239D89]/10 flex items-center justify-center group-hover:bg-[#239D89] transition-colors duration-300">
                          <Icon className="h-7 w-7 text-[#239D89] group-hover:text-white transition-colors duration-300" />
                        </div>
                        <ArrowUpRight className="h-5 w-5 text-neutral-400 group-hover:text-[#239D89] transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                      </div>
                      
                      <p className="text-sm text-neutral-500 dark:text-gray-500 mb-2">{card.label}</p>
                      <h3 className="text-xl font-bold text-[#163C2E] dark:text-white mb-2">{card.title}</h3>
                      <p className="text-base text-neutral-600 dark:text-gray-400">{card.value}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Content definitions
const content = {
  en: {
    badge: "Contact Us",
    heading: "Let's start a project together",
    description: "Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
    formTitle: "Get in touch with us",
    name: "Full Name",
    namePlaceholder: "John Doe",
    email: "Email Address",
    emailPlaceholder: "john.doe@company.com",
    message: "Message",
    messagePlaceholder: "Please describe your project requirements and objectives...",
    submit: "Send Message",
  },
  fr: {
    badge: "Contactez-nous",
    heading: "Commençons un projet ensemble",
    description: "Vous avez un projet en tête? Nous serions ravis de vous entendre. Envoyez-nous un message et nous vous répondrons dès que possible.",
    formTitle: "Contactez-nous",
    name: "Nom Complet",
    namePlaceholder: "Jean Dupont",
    email: "Adresse Email",
    emailPlaceholder: "jean.dupont@entreprise.com",
    message: "Message",
    messagePlaceholder: "Veuillez décrire les exigences et objectifs de votre projet...",
    submit: "Envoyer le Message",
  },
  pl: {
    badge: "Kontakt",
    heading: "Rozpocznijmy projekt razem",
    description: "Masz pomysł na projekt? Chętnie Cię wysłuchamy. Wyślij nam wiadomość, a odpowiemy tak szybko, jak to możliwe.",
    formTitle: "Skontaktuj się z nami",
    name: "Imię i Nazwisko",
    namePlaceholder: "Jan Kowalski",
    email: "Adres Email",
    emailPlaceholder: "jan.kowalski@firma.pl",
    message: "Wiadomość",
    messagePlaceholder: "Proszę opisać wymagania i cele projektu...",
    submit: "Wyślij wiadomość",
  }
};