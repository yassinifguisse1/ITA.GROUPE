"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What services does your agency offer?",
    answer:
      "We offer a full range of creative and digital services including Brand Identity design, UI/UX Design, Web & Mobile Development, and SEO optimization. Each service is tailored to meet your specific business goals and audience needs.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines vary based on project scope and complexity. A brand identity project typically takes 4-6 weeks, UI/UX design 6-8 weeks, and full-stack development 8-12 weeks. We provide a detailed timeline during our discovery phase.",
  },
  {
    question: "What is your design process like?",
    answer:
      "Our process follows four key phases: Discovery (research & strategy), Design (concepts & iteration), Development (building & testing), and Delivery (launch & support). We keep you involved at every stage with regular check-ins and reviews.",
  },
  {
    question: "Do you work with startups or only established brands?",
    answer:
      "We work with businesses of all sizes — from early-stage startups to enterprise companies. Whether you need to build a brand from scratch or refresh an existing one, we tailor our approach to fit your stage and budget.",
  },
  {
    question: "How much does a project typically cost?",
    answer:
      "Every project is unique, so we provide custom quotes based on scope, complexity, and timeline. We offer flexible engagement models including fixed-price projects and retainer agreements. Reach out for a free consultation and estimate.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes. We offer post-launch support packages that include maintenance, performance monitoring, content updates, and iterative improvements. We believe in long-term partnerships, not one-off transactions.",
  },
];

const FAQItem = ({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) => {
  return (
    <div className="border-b border-zinc-100 last:border-0">
      <button
        className="w-full py-8 flex items-start justify-between gap-8 text-left group cursor-pointer"
        onClick={onToggle}
      >
        <div className="flex items-baseline gap-6">
          <span className="text-sm font-medium text-zinc-300 font-sans tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h4
            className={cn(
              "text-xl md:text-2xl font-medium tracking-tight transition-colors duration-300 font-sans",
              isOpen
                ? "text-zinc-900"
                : "text-zinc-600 group-hover:text-zinc-900"
            )}
          >
            {question}
          </h4>
        </div>
        <span
          className={cn(
            "text-2xl font-light text-zinc-400 mt-1 shrink-0 transition-transform duration-300",
            isOpen && "rotate-45"
          )}
        >
          +
        </span>
      </button>

      <div
        className={cn(
          "overflow-hidden transition-all duration-500 ease-in-out",
          isOpen ? "max-h-[300px] opacity-100 pb-8" : "max-h-0 opacity-0"
        )}
      >
        <p className="text-zinc-500 text-base leading-relaxed pl-12 max-w-2xl font-sans">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 bg-white text-zinc-900 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-4">
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-7xl lg:text-9xl font-semibold tracking-tighter bg-gradient-text   bg-clip-text text-transparent mb-8 leading-none">
            FAQ
          </h2>
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
            <p className="text-sm font-medium text-zinc-500 mt-2 font-sans tracking-tight">
              (FAQ - 06)
            </p>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight max-w-2xl font-sans tracking-tightest">
              Questions we get{" "}
              <span className="italic font-normal">asked</span> the most.
            </h3>
          </div>
        </div>

        <div className="border-t border-zinc-100"></div>

        {/* FAQ Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left column - description */}
          <div className="lg:col-span-4 pt-8">
            <p className="text-zinc-500 text-base leading-relaxed mb-8 font-sans">
              Can&apos;t find what you&apos;re looking for? Reach out to us
              directly and we&apos;ll get back to you within 24 hours.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 border border-zinc-200 rounded-full px-6 py-3 hover:bg-zinc-50 transition-colors font-sans"
            >
              Contact Us
              <span className="rotate-45">&#8599;</span>
            </a>
          </div>

          {/* Right column - accordion */}
          <div className="lg:col-span-8">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? -1 : index)
                }
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
