import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Globe2, Instagram, Linkedin, Mail, PhoneCall } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Liens iTA Groupe - Contactez-nous",
  description:
    "Retrouvez tous les liens de contact iTA Groupe: WhatsApp, téléphone, site web, Instagram, LinkedIn et e-mail.",
  alternates: {
    canonical: "https://itagroupe.com/liens",
  },
  openGraph: {
    title: "Liens iTA Groupe - Contactez-nous",
    description:
      "Contactez iTA Groupe par WhatsApp, téléphone, e-mail ou réseaux sociaux.",
    url: "https://itagroupe.com/liens",
    siteName: "iTA Groupe",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Liens iTA Groupe - Contactez-nous",
    description:
      "Contactez iTA Groupe par WhatsApp, téléphone, e-mail ou réseaux sociaux.",
  },
};

const phoneNumber = "+212611303435";
const displayPhoneNumber = "+212 6 11 30 34 35";
const email = "hello@itagroupe.com";

const contactLinks = [
  {
    label: "WhatsApp",
    href: `https://wa.me/${phoneNumber.replace("+", "")}`,
    icon: FaWhatsapp,
    external: true,
    primary: true,
    ariaLabel: `Contacter iTA Groupe sur WhatsApp au ${displayPhoneNumber}`,
  },
  {
    label: "Appeler",
    href: `tel:${phoneNumber}`,
    icon: PhoneCall,
    ariaLabel: `Appeler iTA Groupe au ${displayPhoneNumber}`,
  },
  {
    label: "Site web",
    href: "https://itagroupe.com",
    icon: Globe2,
    external: true,
    ariaLabel: "Ouvrir le site web iTA Groupe",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ita.groupe/",
    icon: Instagram,
    external: true,
    ariaLabel: "Ouvrir Instagram iTA Groupe",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/itagroupe",
    icon: Linkedin,
    external: true,
    ariaLabel: "Ouvrir LinkedIn iTA Groupe",
  },
  {
    label: "E-mail",
    href: `mailto:${email}`,
    icon: Mail,
    ariaLabel: `Envoyer un e-mail à ${email}`,
  },
];

export default function LiensPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "iTA Groupe",
    url: "https://itagroupe.com",
    email,
    telephone: displayPhoneNumber,
    sameAs: [
      "https://www.instagram.com/ita.groupe/",
      "https://www.linkedin.com/company/itagroupe",
    ],
  };

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#0b3f34] px-5 py-8 text-white sm:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(62, 220, 175, 0.85) 0%, rgba(35, 157, 137, 0.52) 22%, rgba(10, 71, 60, 0.78) 58%, #083d33 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.18) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "linear-gradient(to bottom, black, transparent 86%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.10]"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(255,255,255,.72) 0 1px, transparent 1.5px)",
          backgroundSize: "4px 4px",
        }}
      />

      <section className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-[520px] flex-col items-center justify-start pt-3 sm:justify-center sm:pt-0">
        <div className="mb-10 flex w-full flex-col items-center text-center">
          <span className="mb-9 h-2 w-28 rounded-full bg-[#d9ff00] shadow-[0_0_22px_rgba(217,255,0,0.68)]" />

          <Link href="/" className="group inline-flex flex-col items-center" aria-label="Retour a l'accueil iTA Groupe">
            <span className="text-[3.25rem] font-black uppercase leading-none tracking-[0.02em] text-white drop-shadow-sm sm:text-[4rem]">
              iTA
            </span>
            <span className="mt-3 text-xl font-semibold uppercase tracking-[0.62em] text-white/82 sm:text-2xl">
              Groupe
            </span>
          </Link>

          <p className="mt-9 text-2xl font-semibold leading-tight text-white/92 sm:text-3xl">
            Agence digitale & créative
          </p>
          <p className="mt-5 text-base font-semibold uppercase tracking-[0.34em] text-white/42 sm:text-lg">
            Contactez-nous
          </p>
        </div>

        <nav className="w-full space-y-5" aria-label="Liens de contact iTA Groupe">
          {contactLinks.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                aria-label={item.ariaLabel}
                className={`group flex min-h-20 w-full items-center gap-6 rounded-[1.9rem] px-7 text-3xl font-extrabold transition duration-300 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#d9ff00] sm:min-h-24 sm:gap-8 sm:px-8 sm:text-[2.45rem] ${
                  item.primary
                    ? "bg-[#d9ff00] text-[#123d33] shadow-[0_18px_48px_rgba(10,36,28,0.26)] hover:-translate-y-1 hover:bg-[#e6ff33]"
                    : "border border-white/20 bg-white/[0.055] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur-md hover:-translate-y-1 hover:border-white/34 hover:bg-white/[0.10]"
                }`}
              >
                <span
                  className={`flex size-11 shrink-0 items-center justify-center rounded-full sm:size-12 ${
                    item.primary ? "text-[#123d33]" : "text-[#49d6b8]"
                  }`}
                >
                  <Icon className="size-9 sm:size-10" aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1 break-words">{item.label}</span>
                {item.external && (
                  <ArrowUpRight
                    className={`size-5 shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 ${
                      item.primary ? "text-[#123d33]" : "text-white/70"
                    }`}
                    aria-hidden="true"
                  />
                )}
              </a>
            );
          })}
        </nav>

        <p className="mt-10 text-center text-sm font-medium text-white/48">
          {displayPhoneNumber} · {email}
        </p>
      </section>
    </main>
  );
}
