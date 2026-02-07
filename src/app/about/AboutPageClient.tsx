import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "About — ITAGROUPE",
  description: "Learn more about ITAGROUPE, the design agency that moves culture.",
};

const GRAIN_DATA_URL =
  "data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='1' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

  export default function AboutPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col justify-end pb-20 pt-32 overflow-hidden text-white bg-gradient-to-br from-[#09090b] via-[#1e3a8a] to-[#4338ca]/70">
      <div
        aria-hidden
        style={{
          backgroundImage: `url("${GRAIN_DATA_URL}")`,
          backgroundSize: "180px 180px",
          backgroundRepeat: "repeat",
          mixBlendMode: "overlay",
        }}
        className="absolute inset-0 pointer-events-none opacity-90"
      />
        <div className="container mx-auto px-6 lg:px-4 relative z-10">
          <p className="uppercase text-white/60 text-xs font-bold tracking-[0.3rem] mb-6">
            About Us
          </p>
          <h1 className="text-5xl lg:text-7xl 2xl:text-8xl font-semibold tracking-tighter leading-[1.05] max-w-4xl">
            We are a creative studio built on passion, precision, and purpose.
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white text-zinc-900">
        <div className="container mx-auto px-6 lg:px-4">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4">
                Our Story
              </p>
              <h2 className="text-4xl lg:text-5xl font-semibold tracking-tighter leading-tight">
                Born from a shared belief in better.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 pt-2">
              <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                ITAGROUPE started in a small studio loft in France with a clear mission: create work that doesn&apos;t blend in. We saw too many brands settling for average—generic logos, forgettable websites, soulless campaigns. We knew there had to be a better way.
              </p>
              <p className="text-lg text-zinc-600 leading-relaxed mb-8">
                Over 12 years, we&apos;ve grown from two designers into a full-service creative agency. Our team now spans brand strategists, UI/UX designers, full-stack developers, and SEO specialists—all united by one principle: every pixel, every line of code, every word should have intention behind it.
              </p>
              <p className="text-lg text-zinc-600 leading-relaxed">
                We don&apos;t just deliver projects. We build partnerships. Our clients come back because we treat their vision as our own, and we push boundaries together to create something that truly stands out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-zinc-50 text-zinc-900">
        <div className="container mx-auto px-6 lg:px-4">
          <div className="mb-16">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4">
              What Drives Us
            </p>
            <h2 className="text-5xl lg:text-7xl font-semibold tracking-tighter bg-gradient-to-r from-blue-700 via-blue-500 to-indigo-400 bg-clip-text text-transparent leading-none">
              Our Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Craft Over Speed",
                desc: "We take the time to get it right. Rushed work is forgettable—crafted work endures.",
              },
              {
                title: "Bold by Default",
                desc: "Playing it safe never moved culture. We push creative limits while staying strategically grounded.",
              },
              {
                title: "Partnership, Not Service",
                desc: "We don't just take briefs. We challenge, question, and co-create to produce the best possible outcome.",
              },
              {
                title: "Simplicity Wins",
                desc: "The most powerful ideas are often the simplest. We strip away noise to find clarity.",
              },
              {
                title: "Results Matter",
                desc: "Beautiful design means nothing without impact. Every project is measured by the results it drives.",
              },
              {
                title: "Always Evolving",
                desc: "The digital landscape never stands still. Neither do we. Continuous learning is in our DNA.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-8 border border-zinc-100 hover:border-blue-200 transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold tracking-tight mb-3">{value.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white text-zinc-900 border-t border-zinc-100">
        <div className="container mx-auto px-6 lg:px-4">
          <div className="mb-16">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4">
              Our Team
            </p>
            <h2 className="text-5xl lg:text-7xl font-semibold tracking-tighter bg-gradient-to-r from-blue-700 via-blue-500 to-indigo-400 bg-clip-text text-transparent leading-none">
              The People Behind the Work
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Mohammed Talhaoui",
                role: "SEO Specialist · Website & Software Builder · Performance & Growth",
                image: "/images/mohamed.avif",
              },
              {
                name: "Khalil Akirar",
                role: "No-Code Product Builder & SEO Specialist · Growth-Focused Site Optimization",
                image: "/images/khalill.avif",
              },
              {
                name: "Yassine Ifguisse",
                role: "Software Engineer",
                image: "/images/Yassine-image.avif",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="group bg-white rounded-2xl border border-zinc-100 overflow-hidden hover:border-blue-200 transition-colors duration-300"
              >
                <div className="relative aspect-[4/3] bg-zinc-100 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold tracking-tight text-zinc-900">
                    {member.name}
                  </h3>
                  <p className="text-zinc-500 text-sm mt-1 font-medium">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-zinc-900">
        <div className="container mx-auto px-6 lg:px-4 text-center">
          <h2 className="text-4xl lg:text-6xl font-semibold tracking-tighter mb-6 max-w-3xl mx-auto">
            Ready to create something that matters?
          </h2>
          <p className="text-zinc-500 text-lg mb-10 max-w-xl mx-auto">
            Let&apos;s talk about your next project and how we can bring it to life.
          </p>
          <a
            href="mailto:hello@itagroupe.com"
            className="inline-flex items-center gap-4 bg-[#d9ff00] text-[#09090b] px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 active:scale-95 group"
          >
            Let&apos;s Collaborate
            <div className="size-10 bg-[#09090b] rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-[-45deg]">
              <ArrowRight size={20} className="text-[#d9ff00]" />
            </div>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
