"use client";

import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import { ArrowRight, Link, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden text-white bg-gradient-to-br from-[#09090b] via-[#1e3a8a] to-[#4338ca]/70">
        <div
          style={{
            backgroundImage: "url(/grain.svg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            mixBlendMode: "overlay",
          }}
          className="absolute inset-0 bg-zinc-600 pointer-events-none opacity-50"
        />
        <div className="absolute inset-0 bg-[#4b5563] pointer-events-none opacity-50 mix-blend-overlay" />
        <div className="container mx-auto px-6 lg:px-4 relative z-10">
          <p className="uppercase text-white/60 text-xs font-bold tracking-[0.3rem] mb-6">
            Contact
          </p>
          <h1 className="text-5xl lg:text-7xl 2xl:text-8xl font-semibold tracking-tighter leading-[1.05] max-w-4xl">
            Let&apos;s build something extraordinary together.
          </h1>
          <p className="text-white/50 text-lg mt-6 max-w-xl">
            Have a project in mind? We&apos;d love to hear about it. Drop us a
            line and let&apos;s start the conversation.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-24 bg-white text-zinc-900">
        <div className="container mx-auto px-6 lg:px-4">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Left — Info */}
            <div className="lg:col-span-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-6">
                Get In Touch
              </p>
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tighter leading-tight mb-8">
                We respond within 24 hours.
              </h2>
              <p className="text-zinc-500 text-sm leading-relaxed mb-12">
                Whether you have a fully scoped project or just the seed of an
                idea, we&apos;re here to help shape it into something real.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="size-12 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center shrink-0">
                    <Mail className="size-5 text-zinc-400" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-400 mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:hello@itagroupe.com"
                      className="text-sm font-medium text-zinc-900 hover:text-blue-600 transition-colors"
                    >
                      hello@itagroupe.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="size-12 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center shrink-0">
                    <Phone className="size-5 text-zinc-400" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-400 mb-1">
                      Phone
                    </p>
                    <Link
                      href="tel:+212611303435"
                      className="text-sm font-medium text-zinc-900 hover:text-blue-600 transition-colors"
                    >
                      +212 6 11 30 34 35
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="size-12 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center shrink-0">
                    <MapPin className="size-5 text-zinc-400" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-400 mb-1">
                      Studio
                    </p>
                    <p className="text-sm font-medium text-zinc-900">
                      We operate remotely.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-7 lg:col-start-6">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-400 mb-3 block">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full bg-transparent border-b border-zinc-200 pb-3 text-sm font-medium text-zinc-900 placeholder:text-zinc-300 focus:outline-none focus:border-blue-600 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-400 mb-3 block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com"
                      className="w-full bg-transparent border-b border-zinc-200 pb-3 text-sm font-medium text-zinc-900 placeholder:text-zinc-300 focus:outline-none focus:border-blue-600 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-400 mb-3 block">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      className="w-full bg-transparent border-b border-zinc-200 pb-3 text-sm font-medium text-zinc-900 placeholder:text-zinc-300 focus:outline-none focus:border-blue-600 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-400 mb-3 block">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-zinc-200 pb-3 text-sm font-medium text-zinc-900 focus:outline-none focus:border-blue-600 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Select a range</option>
                      <option value="5k-10k">$5,000 — $10,000</option>
                      <option value="10k-25k">$10,000 — $25,000</option>
                      <option value="25k-50k">$25,000 — $50,000</option>
                      <option value="50k+">$50,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-400 mb-3 block">
                    Service Interested In
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "Brand Identity",
                      "UI/UX Design",
                      "Development",
                      "SEO",
                    ].map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() =>
                          setFormData({ ...formData, service })
                        }
                        className={`text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full border transition-all duration-300 cursor-pointer ${
                          formData.service === service
                            ? "bg-zinc-900 text-white border-zinc-900"
                            : "border-zinc-200 text-zinc-500 hover:border-zinc-400"
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-400 mb-3 block">
                    Tell Us About Your Project *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Describe your project, goals, and timeline..."
                    className="w-full bg-transparent border-b border-zinc-200 pb-3 text-sm font-medium text-zinc-900 placeholder:text-zinc-300 focus:outline-none focus:border-blue-600 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center gap-4 bg-[#d9ff00] text-[#09090b] px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 active:scale-95 group cursor-pointer"
                >
                  Send Message
                  <div className="size-10 bg-[#09090b] rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-[-45deg]">
                    <ArrowRight size={20} className="text-[#d9ff00]" />
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-zinc-50 text-zinc-900">
        <div className="container mx-auto px-6 lg:px-4">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4">
                FAQ
              </p>
              <h2 className="text-4xl lg:text-5xl font-semibold tracking-tighter leading-tight">
                Common questions, answered.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              {[
                {
                  q: "What is your typical process?",
                  a: "We start with a discovery call to understand your goals, then move into strategy, design, development, and launch. Every project includes regular check-ins and revisions.",
                },
                {
                  q: "How long does a project take?",
                  a: "Timelines vary by scope. A brand identity typically runs 4-6 weeks, a full website 8-12 weeks. We'll give you a clear timeline after our discovery phase.",
                },
                {
                  q: "Do you work with startups?",
                  a: "Yes. We work with companies at every stage — from early-stage startups to established enterprises. What matters most is alignment on vision and ambition.",
                },
                {
                  q: "What happens after launch?",
                  a: "We offer ongoing support, maintenance, and optimization packages. Many of our clients continue working with us long after the initial project wraps.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="py-8 border-b border-zinc-200 last:border-0"
                >
                  <h3 className="text-lg font-semibold tracking-tight mb-3">
                    {item.q}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
