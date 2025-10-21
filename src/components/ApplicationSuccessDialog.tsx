"use client";

import { motion } from "framer-motion";
import { CheckCircle, X } from "lucide-react";

interface ApplicationSuccessDialogProps {
  isOpen: boolean;
  onClose: () => void;
  language: "en" | "fr" | "pl";
}

const translations = {
  en: {
    title: "Application Submitted Successfully!",
    message: "Thank you for your interest in joining iTA Groupe. We have received your application and will review it carefully. Our team will get back to you within 2-3 business days.",
    cta: "We'll be in touch soon!"
  },
  fr: {
    title: "Candidature envoyée avec succès!",
    message: "Merci de votre intérêt pour rejoindre iTA Groupe. Nous avons bien reçu votre candidature et l'examinerons attentivement. Notre équipe vous recontactera dans les 2-3 jours ouvrables.",
    cta: "Nous vous recontacterons bientôt!"
  },
  pl: {
    title: "Aplikacja została wysłana pomyślnie!",
    message: "Dziękujemy za zainteresowanie dołączeniem do iTA Groupe. Otrzymaliśmy Twoją aplikację i dokładnie ją przeanalizujemy. Nasz zespół skontaktuje się z Tobą w ciągu 2-3 dni roboczych.",
    cta: "Wkrótce się z Tobą skontaktujemy!"
  }
};

export default function ApplicationSuccessDialog({ isOpen, onClose, language }: ApplicationSuccessDialogProps) {
  if (!isOpen) return null;

  const t = translations[language];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-white dark:bg-[#0A1628] rounded-2xl max-w-md w-full p-8 relative shadow-2xl"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-[#1E3A5F] rounded-full transition-colors"
        >
          <X className="h-5 w-5 text-gray-500" />
        </button>

        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          className="flex justify-center mb-6"
        >
          <div className="h-16 w-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
            <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
          </div>
        </motion.div>

        {/* Content */}
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {t.title}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
          >
            {t.message}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="flex flex-col gap-3"
          >
            <button
              onClick={onClose}
              className="w-full py-3 px-6 bg-[#239D89] hover:bg-[#1E8575] text-white font-semibold rounded-lg transition-colors"
            >
              {t.cta}
            </button>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#239D89]/20 rounded-full"></div>
        <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#239D89]/30 rounded-full"></div>
      </motion.div>
    </div>
  );
}
