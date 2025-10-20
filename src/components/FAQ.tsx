"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
  title?: string;
  description?: string;
  language?: "en" | "fr" | "pl";
}

const translations = {
  en: {
    badge: "FAQ",
    defaultTitle: "Frequently Asked Questions"
  },
  fr: {
    badge: "FAQ",
    defaultTitle: "Questions Fréquentes"
  },
  pl: {
    badge: "FAQ",
    defaultTitle: "Często Zadawane Pytania"
  }
};

export default function FAQ({ 
  faqs, 
  title, 
  description,
  language = "fr" 
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const content = translations[language];

  // Generate Google FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      {/* Google FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <HelpCircle className="h-3 w-3 mr-2" />
            {content.badge}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {title || content.defaultTitle}
          </h2>
          {description && (
            <p className="text-lg text-muted-foreground">{description}</p>
          )}
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-all"
            >
              <button
                className="w-full text-left p-6 flex items-start justify-between gap-4"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  {openIndex === index && (
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      {faq.answer}
                    </p>
                  )}
                </div>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}