"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, ArrowUpRight, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { z } from 'zod';
import SuccessMessage from "@/components/SuccessMessage";
import { FaSquareXTwitter } from "react-icons/fa6";

// Create validation schemas for each language
const createValidationSchema = (language: "en" | "fr" | "pl") => {
  const messages = {
    en: {
      fullName: "Full name must be at least 2 characters",
      email: "Please enter a valid email address",
      phone: "Please enter a valid phone number",
      subject: "Subject must be at least 5 characters",
      service: "Please select a service",
      message: "Message must be at least 10 characters",
    },
    fr: {
      fullName: "Le nom complet doit contenir au moins 2 caractères",
      email: "Veuillez entrer une adresse email valide",
      phone: "Veuillez entrer un numéro de téléphone valide",
      subject: "Le sujet doit contenir au moins 5 caractères",
      service: "Veuillez sélectionner un service",
      message: "Le message doit contenir au moins 10 caractères",
    },
    pl: {
      fullName: "Imię i nazwisko musi mieć co najmniej 2 znaki",
      email: "Proszę podać prawidłowy adres email",
      phone: "Proszę podać prawidłowy numer telefonu",
      subject: "Temat musi mieć co najmniej 5 znaków",
      service: "Proszę wybrać usługę",
      message: "Wiadomość musi mieć co najmniej 10 znaków",
    }
  };

  const msg = messages[language];

  return z.object({
    fullName: z.string().min(2, msg.fullName),
    email: z.string().email(msg.email),
    phone: z.string().optional().refine((val) => {
      if (!val) return true; // Optional field
      const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
      return phoneRegex.test(val.replace(/[\s\-\(\)]/g, ''));
    }, msg.phone),
    company: z.string().optional(),
    subject: z.string().min(5, msg.subject),
    service: z.string().min(1, msg.service),
    budget: z.string().optional(),
    timeline: z.string().optional(),
    message: z.string().min(10, msg.message),
  });
};

type ContactFormData = z.infer<ReturnType<typeof createValidationSchema>>;

interface ContactProps {
  language: "en" | "fr" | "pl";
}

export default function Contact({ language }: ContactProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
      // Validate form data with language-specific schema
      const validationSchema = createValidationSchema(language);
      validationSchema.parse(formData);

      setIsSubmitting(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, language }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      // Show success message
      setShowSuccessMessage(true);

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        service: "",
        budget: "",
        timeline: "",
        message: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Map Zod errors to form field errors
        const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
        
        error.issues.forEach((err) => {
          const field = err.path[0] as keyof ContactFormData;
          if (field) {
            fieldErrors[field] = err.message;
          }
        });
        
        setErrors(fieldErrors);
      } else {
        // Set a general error message
        setErrors({
          message: language === 'fr'
            ? 'Erreur lors de l\'envoi du message. Veuillez réessayer.'
            : language === 'en'
            ? 'Error sending message. Please try again.'
            : 'Błąd podczas wysyłania wiadomości. Spróbuj ponownie.'
        });
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
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-neutral-700 dark:text-gray-300 mb-2"
                  >
                    {content[language].fullName} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.fullName 
                        ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                        : 'border-neutral-300 dark:border-[#1E3A5F] focus:ring-[#239D89] focus:border-[#239D89]'
                    } bg-white dark:bg-[#0A1628] text-[#163C2E] dark:text-white focus:outline-none focus:ring-2 transition-colors`}
                    placeholder={content[language].fullNamePlaceholder}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <span className="text-xs">⚠</span> {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-700 dark:text-gray-300 mb-2"
                  >
                    {content[language].email} <span className="text-red-500">*</span>
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

                {/* Phone and Company Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-neutral-700 dark:text-gray-300 mb-2"
                    >
                      {content[language].phone}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.phone 
                          ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                          : 'border-neutral-300 dark:border-[#1E3A5F] focus:ring-[#239D89] focus:border-[#239D89]'
                      } bg-white dark:bg-[#0A1628] text-[#163C2E] dark:text-white focus:outline-none focus:ring-2 transition-colors`}
                      placeholder={content[language].phonePlaceholder}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                        <span className="text-xs">⚠</span> {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-neutral-700 dark:text-gray-300 mb-2"
                    >
                      {content[language].company}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.company 
                          ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                          : 'border-neutral-300 dark:border-[#1E3A5F] focus:ring-[#239D89] focus:border-[#239D89]'
                      } bg-white dark:bg-[#0A1628] text-[#163C2E] dark:text-white focus:outline-none focus:ring-2 transition-colors`}
                      placeholder={content[language].companyPlaceholder}
                    />
                    {errors.company && (
                      <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                        <span className="text-xs">⚠</span> {errors.company}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-neutral-700 dark:text-gray-300 mb-2"
                  >
                    {content[language].subject} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.subject 
                        ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                        : 'border-neutral-300 dark:border-[#1E3A5F] focus:ring-[#239D89] focus:border-[#239D89]'
                    } bg-white dark:bg-[#0A1628] text-[#163C2E] dark:text-white focus:outline-none focus:ring-2 transition-colors`}
                    placeholder={content[language].subjectPlaceholder}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <span className="text-xs">⚠</span> {errors.subject}
                    </p>
                  )}
                </div>

                {/* Service Selection */}
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-neutral-700 dark:text-gray-300 mb-2"
                  >
                    {content[language].service} <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.service 
                        ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                        : 'border-neutral-300 dark:border-[#1E3A5F] focus:ring-[#239D89] focus:border-[#239D89]'
                    } bg-white dark:bg-[#0A1628] text-[#163C2E] dark:text-white focus:outline-none focus:ring-2 transition-colors`}
                  >
                    <option value="">{content[language].servicePlaceholder}</option>
                    {content[language].services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <span className="text-xs">⚠</span> {errors.service}
                    </p>
                  )}
                </div>

                {/* Budget and Timeline Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm font-medium text-neutral-700 dark:text-gray-300 mb-2"
                    >
                      {content[language].budget}
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.budget 
                          ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                          : 'border-neutral-300 dark:border-[#1E3A5F] focus:ring-[#239D89] focus:border-[#239D89]'
                      } bg-white dark:bg-[#0A1628] text-[#163C2E] dark:text-white focus:outline-none focus:ring-2 transition-colors`}
                    >
                      <option value="">{content[language].budgetPlaceholder}</option>
                      {content[language].budgetOptions.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                      ))}
                    </select>
                    {errors.budget && (
                      <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                        <span className="text-xs">⚠</span> {errors.budget}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="timeline"
                      className="block text-sm font-medium text-neutral-700 dark:text-gray-300 mb-2"
                    >
                      {content[language].timeline}
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.timeline 
                          ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                          : 'border-neutral-300 dark:border-[#1E3A5F] focus:ring-[#239D89] focus:border-[#239D89]'
                      } bg-white dark:bg-[#0A1628] text-[#163C2E] dark:text-white focus:outline-none focus:ring-2 transition-colors`}
                    >
                      <option value="">{content[language].timelinePlaceholder}</option>
                      {content[language].timelineOptions.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                      ))}
                    </select>
                    {errors.timeline && (
                      <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                        <span className="text-xs">⚠</span> {errors.timeline}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-neutral-700 dark:text-gray-300 mb-2"
                  >
                    {content[language].message} <span className="text-red-500">*</span>
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
                const isSocialMedia = card.label === "LinkedIn" || card.label === "Instagram" || card.label === "Twitter";
                const socialMediaLinks = {
                  LinkedIn: "https://www.linkedin.com/company/itagroupe",
                  Instagram: "https://www.instagram.com/ita.groupe/",
                  Twitter: "https://x.com/ITAGROUPE"
                };
                
                const CardComponent = isSocialMedia ? 'a' : 'div';
                const cardProps = isSocialMedia ? {
                  href: socialMediaLinks[card.label as keyof typeof socialMediaLinks],
                  target: "_blank",
                  rel: "noopener noreferrer"
                } : {};
                
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                  >
                    <CardComponent
                      {...cardProps}
                      className="group relative overflow-hidden bg-neutral-50 dark:bg-[#0D1B2A] border border-neutral-200 dark:border-[#1E3A5F] rounded-2xl p-8 hover:border-[#239D89] transition-all duration-300 cursor-pointer block"
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
                    </CardComponent>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Success Message Modal */}
      <SuccessMessage
        isOpen={showSuccessMessage}
        onClose={() => setShowSuccessMessage(false)}
        language={language}
      />
    </section>
  );
}

// Enhanced content definitions
const content = {
  en: {
    badge: "Contact Us",
    heading: "Let's start a project together",
    description: "Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
    formTitle: "Get in touch with us",
    fullName: "Full Name",
    fullNamePlaceholder: "John Doe",
    email: "Email Address",
    emailPlaceholder: "john.doe@company.com",
    phone: "Phone Number",
    phonePlaceholder: "+1 (555) 123-4567",
    company: "Company",
    companyPlaceholder: "Your Company Name",
    subject: "Subject",
    subjectPlaceholder: "Brief description of your project",
    service: "Service Interested In",
    servicePlaceholder: "Select a service",
    services: [
      "Website Development",
      "Mobile App Development",
      "E-commerce Solutions",
      "SEO & Digital Marketing",
      "UI/UX Design",
      "Software Development",
      "Quality Assurance",
      "Business Analysis",
      "Dedicated Team",
      "Other"
    ],
    budget: "Estimated Budget",
    budgetPlaceholder: "Select budget range",
    budgetOptions: [
      "Under $5,000",
      "$5,000 - $10,000",
      "$10,000 - $25,000",
      "$25,000 - $50,000",
      "$50,000 - $100,000",
      "Over $100,000",
      "To be discussed"
    ],
    timeline: "Project Timeline",
    timelinePlaceholder: "Select timeline",
    timelineOptions: [
      "ASAP (Rush job)",
      "1-2 weeks",
      "1 month",
      "2-3 months",
      "3-6 months",
      "6+ months",
      "Flexible"
    ],
    message: "Project Details",
    messagePlaceholder: "Please describe your project requirements, objectives, and any specific features you need...",
    submit: "Send Message",
    infoCards: [
      
      {
        icon: Phone,
        label: "Phone",
        title: "+1 (555) 123-4567",
        value: "Available Monday to Friday, 9AM to 6PM"
      },
      {
        icon: Mail,
        label: "Email",
        title: "hello.itagroupe@gmail.com",
        value: "We'll respond within 24 hours"
      },
      {
        icon: Linkedin,
        label: "LinkedIn",
        title: "Follow us on LinkedIn",
        value: "Stay updated with our latest projects and insights"
      },
      {
        icon: Instagram,
        label: "Instagram",
        title: "Follow us on Instagram",
        value: "See our work and company culture"
      },
      {
        icon: FaSquareXTwitter,
        label: "Twitter",
        title: "Follow us on Twitter",
        value: "Stay updated with our latest projects and insights"
      }
    ]
  },
  fr: {
    badge: "Contactez-nous",
    heading: "Commençons un projet ensemble",
    description: "Vous avez un projet en tête? Nous serions ravis de vous entendre. Envoyez-nous un message et nous vous répondrons dès que possible.",
    formTitle: "Contactez-nous",
    fullName: "Nom Complet",
    fullNamePlaceholder: "Jean Dupont",
    email: "Adresse Email",
    emailPlaceholder: "jean.dupont@entreprise.com",
    phone: "Numéro de Téléphone",
    phonePlaceholder: "+33 1 23 45 67 89",
    company: "Entreprise",
    companyPlaceholder: "Nom de votre entreprise",
    subject: "Sujet",
    subjectPlaceholder: "Brève description de votre projet",
    service: "Service Intéressé",
    servicePlaceholder: "Sélectionnez un service",
    services: [
      "Développement de Site Web",
      "Développement d'Application Mobile",
      "Solutions E-commerce",
      "SEO & Marketing Digital",
      "Design UI/UX",
      "Développement Logiciel",
      "Assurance Qualité",
      "Analyse d'Affaires",
      "Équipe Dédiée",
      "Autre"
    ],
    budget: "Budget Estimé",
    budgetPlaceholder: "Sélectionnez la fourchette de budget",
    budgetOptions: [
      "Moins de 5 000€",
      "5 000€ - 10 000€",
      "10 000€ - 25 000€",
      "25 000€ - 50 000€",
      "50 000€ - 100 000€",
      "Plus de 100 000€",
      "À discuter"
    ],
    timeline: "Délai du Projet",
    timelinePlaceholder: "Sélectionnez le délai",
    timelineOptions: [
      "ASAP (Urgent)",
      "1-2 semaines",
      "1 mois",
      "2-3 mois",
      "3-6 mois",
      "6+ mois",
      "Flexible"
    ],
    message: "Détails du Projet",
    messagePlaceholder: "Veuillez décrire les exigences, objectifs et fonctionnalités spécifiques de votre projet...",
    submit: "Envoyer le Message",
    infoCards: [
      {
        icon: MapPin,
        label: "Localisation",
        title: "Casablanca, Maroc",
        value: "Nous sommes basés au cœur de la capitale économique du Maroc"
      },
      {
        icon: Phone,
        label: "Téléphone",
        title: "+1 (555) 123-4567",
        value: "Disponible du lundi au vendredi, 9h à 18h"
      },
      {
        icon: Mail,
        label: "Email",
        title: "hello.itagroupe@gmail.com",
        value: "Nous répondrons dans les 24 heures"
      },
      {
        icon: Linkedin,
        label: "LinkedIn",
        title: "Suivez-nous sur LinkedIn",
        value: "Restez informé de nos derniers projets et insights"
      },
      {
        icon: Instagram,
        label: "Instagram",
        title: "Suivez-nous sur Instagram",
        value: "Découvrez notre travail et notre culture d'entreprise"
      }
    ]
  },
  pl: {
    badge: "Kontakt",
    heading: "Rozpocznijmy projekt razem",
    description: "Masz pomysł na projekt? Chętnie Cię wysłuchamy. Wyślij nam wiadomość, a odpowiemy tak szybko, jak to możliwe.",
    formTitle: "Skontaktuj się z nami",
    fullName: "Imię i Nazwisko",
    fullNamePlaceholder: "Jan Kowalski",
    email: "Adres Email",
    emailPlaceholder: "jan.kowalski@firma.pl",
    phone: "Numer Telefonu",
    phonePlaceholder: "+48 123 456 789",
    company: "Firma",
    companyPlaceholder: "Nazwa Twojej firmy",
    subject: "Temat",
    subjectPlaceholder: "Krótki opis Twojego projektu",
    service: "Zainteresowana Usługa",
    servicePlaceholder: "Wybierz usługę",
    services: [
      "Tworzenie Stron Internetowych",
      "Tworzenie Aplikacji Mobilnych",
      "Rozwiązania E-commerce",
      "SEO & Marketing Cyfrowy",
      "Projektowanie UI/UX",
      "Tworzenie Oprogramowania",
      "Zapewnienie Jakości",
      "Analiza Biznesowa",
      "Dedykowany Zespół",
      "Inne"
    ],
    budget: "Szacowany Budżet",
    budgetPlaceholder: "Wybierz zakres budżetu",
    budgetOptions: [
      "Poniżej 20 000 zł",
      "20 000 - 40 000 zł",
      "40 000 - 100 000 zł",
      "100 000 - 200 000 zł",
      "200 000 - 400 000 zł",
      "Powyżej 400 000 zł",
      "Do omówienia"
    ],
    timeline: "Harmonogram Projektu",
    timelinePlaceholder: "Wybierz harmonogram",
    timelineOptions: [
      "ASAP (Pilne)",
      "1-2 tygodnie",
      "1 miesiąc",
      "2-3 miesiące",
      "3-6 miesięcy",
      "6+ miesięcy",
      "Elastyczny"
    ],
    message: "Szczegóły Projektu",
    messagePlaceholder: "Proszę opisać wymagania, cele i konkretne funkcje, których potrzebujesz...",
    submit: "Wyślij wiadomość",
    infoCards: [
      {
        icon: MapPin,
        label: "Lokalizacja",
        title: "Casablanca, Maroko",
        value: "Jesteśmy zlokalizowani w sercu marokańskiej stolicy biznesu"
      },
      {
        icon: Phone,
        label: "Telefon",
        title: "+1 (555) 123-4567",
        value: "Dostępni od poniedziałku do piątku, 9:00-18:00"
      },
      {
        icon: Mail,
        label: "Email",
        title: "hello.itagroupe@gmail.com",
        value: "Odpowiemy w ciągu 24 godzin"
      },
      {
        icon: Linkedin,
        label: "LinkedIn",
        title: "Obserwuj nas na LinkedIn",
        value: "Bądź na bieżąco z naszymi najnowszymi projektami i spostrzeżeniami"
      },
      {
        icon: Instagram,
        label: "Instagram",
        title: "Obserwuj nas na Instagramie",
        value: "Zobacz naszą pracę i kulturę firmy"
      }
    ]
  }
};