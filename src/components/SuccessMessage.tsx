"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, X, Clock, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SuccessMessageProps {
  isOpen: boolean;
  onClose: () => void;
  language: "en" | "fr" | "pl";
}

const successContent = {
  en: {
    title: "Message Sent Successfully!",
    subtitle: "Thank you for reaching out to us",
    message: "We've received your message and will get back to you within 24 hours. Our team is excited to discuss your project with you.",
    nextSteps: "What happens next?",
    steps: [
      {
        icon: Mail,
        title: "Email Confirmation",
        description: "You'll receive a confirmation email shortly"
      },
      {
        icon: Clock,
        title: "Quick Response",
        description: "We'll review your message within 2-4 hours"
      },
      {
        icon: Phone,
        title: "Personal Contact",
        description: "Our team will reach out to discuss your project"
      }
    ],
    cta: "Close",
    additionalInfo: "In the meantime, feel free to explore our portfolio or check out our latest blog posts."
  },
  fr: {
    title: "Message Envoyé avec Succès!",
    subtitle: "Merci de nous avoir contactés",
    message: "Nous avons reçu votre message et vous répondrons dans les 24 heures. Notre équipe est impatiente de discuter de votre projet avec vous.",
    nextSteps: "Que se passe-t-il ensuite?",
    steps: [
      {
        icon: Mail,
        title: "Confirmation par Email",
        description: "Vous recevrez un email de confirmation sous peu"
      },
      {
        icon: Clock,
        title: "Réponse Rapide",
        description: "Nous examinerons votre message dans les 2-4 heures"
      },
      {
        icon: Phone,
        title: "Contact Personnel",
        description: "Notre équipe vous contactera pour discuter de votre projet"
      }
    ],
    cta: "Fermer",
    additionalInfo: "En attendant, n'hésitez pas à explorer notre portfolio ou consulter nos derniers articles de blog."
  },
  pl: {
    title: "Wiadomość Wysłana Pomyślnie!",
    subtitle: "Dziękujemy za skontaktowanie się z nami",
    message: "Otrzymaliśmy Twoją wiadomość i odpowiemy w ciągu 24 godzin. Nasz zespół jest podekscytowany możliwością omówienia Twojego projektu.",
    nextSteps: "Co się dzieje dalej?",
    steps: [
      {
        icon: Mail,
        title: "Potwierdzenie Email",
        description: "Wkrótce otrzymasz email potwierdzający"
      },
      {
        icon: Clock,
        title: "Szybka Odpowiedź",
        description: "Przejrzymy Twoją wiadomość w ciągu 2-4 godzin"
      },
      {
        icon: Phone,
        title: "Kontakt Osobisty",
        description: "Nasz zespół skontaktuje się z Tobą, aby omówić projekt"
      }
    ],
    cta: "Zamknij",
    additionalInfo: "W międzyczasie zapraszamy do zapoznania się z naszym portfolio lub przeczytania najnowszych wpisów na blogu."
  }
};

export default function SuccessMessage({ isOpen, onClose, language }: SuccessMessageProps) {
  const [isVisible, setIsVisible] = useState(false);
  const content = successContent[language];

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative bg-white dark:bg-[#0A1628] rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>

            {/* Content */}
            <div className="p-8">
              {/* Success Icon */}
              <div className="text-center mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
                </motion.div>
                
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl font-bold text-[#163C2E] dark:text-white mb-2"
                >
                  {content.title}
                </motion.h2>
                
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg text-[#239D89] font-medium"
                >
                  {content.subtitle}
                </motion.p>
              </div>

              {/* Main Message */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-center mb-8"
              >
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  {content.message}
                </p>
              </motion.div>

              {/* Next Steps */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-8"
              >
                <h3 className="text-xl font-semibold text-[#163C2E] dark:text-white mb-6 text-center">
                  {content.nextSteps}
                </h3>
                
                <div className="space-y-4">
                  {content.steps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 dark:bg-[#0D1B2A] border border-gray-200 dark:border-[#1E3A5F]"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#239D89]/10 flex items-center justify-center flex-shrink-0">
                        <step.icon className="h-5 w-5 text-[#239D89]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#163C2E] dark:text-white mb-1">
                          {step.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="text-center mb-6"
              >
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {content.additionalInfo}
                </p>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="text-center"
              >
                <Button
                  onClick={handleClose}
                  className="bg-[#239D89] hover:bg-[#1d8070] text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#239D89]/30"
                >
                  {content.cta}
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
