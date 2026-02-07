// import Header from "@/components/Home/Header";
// import Footer from "@/components/Home/Footer";
// import Image from "next/image";
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";

// export const metadata = {
//   title: "Projects — ITAGROUPE",
//   description:
//     "Explore our portfolio of digital products, brand identities, and experiences we've crafted for ambitious brands.",
// };

// const projects = [
//   {
//     slug: "chat-genius",
//     title: "Chat Genius",
//     year: "2024 — Ongoing",
//     category: "Website Design & Development",
//     tags: ["Website Design", "Development"],
//     image:
//       "https://images.unsplash.com/photo-1741348571852-fabd00511e92?q=80&w=800&auto=format&fit=crop",
//     featured: true,
//   },
//   {
//     slug: "field-type",
//     title: "Field Type",
//     year: "2023 — Jan 2025",
//     category: "Branding & Social Media",
//     tags: ["Branding", "Social Media"],
//     image:
//       "https://images.unsplash.com/photo-1604076984203-587c92ab2e58?q=80&w=800&auto=format&fit=crop",
//     featured: true,
//   },
//   {
//     slug: "rock-bottom",
//     title: "Rock Bottom",
//     year: "2025",
//     category: "Graphic Design",
//     tags: ["Graphic Design", "Brand Identity"],
//     image:
//       "https://images.unsplash.com/photo-1660490987070-b7cc89e41b38?q=80&w=800&auto=format&fit=crop",
//     featured: false,
//   },
//   {
//     slug: "aurora-finance",
//     title: "Aurora Finance",
//     year: "2024 — 2025",
//     category: "UI/UX Design & Development",
//     tags: ["UI/UX Design", "Development", "Fintech"],
//     image:
//       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
//     featured: true,
//   },
//   {
//     slug: "neon-streetwear",
//     title: "Neon Streetwear",
//     year: "2024",
//     category: "Brand Identity & E-Commerce",
//     tags: ["Brand Identity", "E-Commerce", "Photography"],
//     image:
//       "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop",
//     featured: false,
//   },
//   {
//     slug: "verde-organics",
//     title: "Verde Organics",
//     year: "2023 — 2024",
//     category: "Branding & Website",
//     tags: ["Branding", "Website Design", "SEO"],
//     image:
//       "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop",
//     featured: false,
//   },
//   {
//     slug: "pulse-health",
//     title: "Pulse Health",
//     year: "2024 — Ongoing",
//     category: "App Design & Development",
//     tags: ["Mobile App", "UI/UX Design", "Health"],
//     image:
//       "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
//     featured: true,
//   },
//   {
//     slug: "arch-studio",
//     title: "Arch Studio",
//     year: "2025",
//     category: "Website Redesign",
//     tags: ["Website Design", "Development", "Architecture"],
//     image:
//       "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=800&auto=format&fit=crop",
//     featured: false,
//   },
// ];

// const LETTERS = "ITAGROUPE".split("");

// const GRAIN_DATA_URL =
//   "data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='1' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";
// export default function ProjectsPage() {
//   const featured = projects.filter((p) => p.featured);
//   const other = projects.filter((p) => !p.featured);

//   return (
//     <>
//       <Header />

//       {/* Hero */}
//       <section className="relative min-h-[70vh] flex flex-col justify-end pb-20 pt-32 overflow-hidden text-white bg-gradient-to-br from-[#09090b] via-[#1e3a8a] to-[#4338ca]/70">
//       <div
//         aria-hidden
//         style={{
//           backgroundImage: `url("${GRAIN_DATA_URL}")`,
//           backgroundSize: "180px 180px",
//           backgroundRepeat: "repeat",
//           mixBlendMode: "overlay",
//         }}
//         className="absolute inset-0 pointer-events-none opacity-90"
//       />
//         <div className="container mx-auto px-6 lg:px-4 relative z-10">
//           <p className="uppercase text-white/60 text-xs font-bold tracking-[0.3rem] mb-6">
//             Our Work
//           </p>
//           <h1 className="text-5xl lg:text-7xl 2xl:text-8xl font-semibold tracking-tighter leading-[1.05] max-w-4xl">
//             Projects that move culture forward.
//           </h1>
//           <p className="text-white/50 text-lg mt-6 max-w-xl">
//             A curated selection of work across brand identity, digital products,
//             and immersive experiences.
//           </p>
//         </div>
//          {/* HUGE BRAND-TEXT with wave animation */}
//       {/* <div className="relative w-full">
//         <h1
//           className="absolute text-white text-[100px] text-center justify-center items-center tracking-tighter font-bold -rotate-90 bottom-2 2xl:-bottom-60 -right-42 2xl:left-[120px] lg:rotate-0 lg:left-[60px] lg:-bottom-32 lg:text-[18vw] leading-none select-none flex"
//           style={{ letterSpacing: "-0.05em" }}
//           aria-label="ITAGROUPE"
//         >
//           {LETTERS.map((letter, i) => (
//             <span
//               key={i}
//               className="wave-letter inline-block"
//               style={{ animationDelay: `${i * 80}ms` }}
//             >
//               {letter}
//             </span>
//           ))}
//         </h1>
//       </div> */}
//       </section>

//       {/* Featured Projects */}
//       <section className="py-24 bg-white text-zinc-900">
//         <div className="container mx-auto px-6 lg:px-4">
//           <div className="flex items-baseline justify-between mb-16">
//             <div>
//               <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4">
//                 Featured
//               </p>
//               <h2 className="text-5xl lg:text-7xl font-semibold tracking-tighter bg-gradient-to-r from-blue-700 via-blue-500 to-indigo-400 bg-clip-text text-transparent leading-none">
//                 Selected Work
//               </h2>
//             </div>
//             <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest hidden lg:block">
//               ({projects.length} Projects)
//             </p>
//           </div>

//           {/* Featured — 2-col grid */}
//           <div className="grid lg:grid-cols-2 gap-8 mb-20">
//             {featured.map((project) => (
//               <Link
//                 key={project.slug}
//                 href={`/projects/${project.slug}`}
//                 className="group"
//               >
//                 <div className="aspect-[4/3] bg-zinc-100 rounded-[2.5rem] overflow-hidden mb-8 relative">
//                   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 bg-zinc-900/20 backdrop-blur-[2px]">
//                     <div className="size-20 bg-zinc-900/30 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center">
//                       <ArrowRight className="size-6 text-white -rotate-45" />
//                     </div>
//                   </div>
//                   <Image
//                     src={project.image}
//                     alt={project.title}
//                     fill
//                     className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out"
//                   />
//                 </div>
//                 <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 px-2">
//                   <div>
//                     <h3 className="text-2xl font-semibold tracking-tight group-hover:text-blue-600 transition-colors duration-300">
//                       {project.title}
//                     </h3>
//                     <p className="text-zinc-500 text-sm mt-2 font-medium">
//                       ({project.year})
//                     </p>
//                   </div>
//                   <div className="flex flex-wrap gap-2">
//                     {project.tags.map((tag) => (
//                       <span
//                         key={tag}
//                         className="text-[10px] font-bold uppercase tracking-widest px-5 py-2.5 rounded-full border border-zinc-200 text-zinc-600"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>

//           {/* Other Projects — 3-col grid */}
//           <div className="border-t border-zinc-100 pt-20">
//             <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-12">
//               More Projects
//             </p>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {other.map((project) => (
//                 <Link
//                   key={project.slug}
//                   href={`/projects/${project.slug}`}
//                   className="group"
//                 >
//                   <div className="aspect-[4/3] bg-zinc-100 rounded-2xl overflow-hidden mb-6 relative">
//                     <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 bg-zinc-900/20 backdrop-blur-[2px]">
//                       <div className="size-14 bg-zinc-900/30 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center">
//                         <ArrowRight className="size-5 text-white -rotate-45" />
//                       </div>
//                     </div>
//                     <Image
//                       src={project.image}
//                       alt={project.title}
//                       fill
//                       className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out"
//                     />
//                   </div>
//                   <h3 className="text-xl font-semibold tracking-tight group-hover:text-blue-600 transition-colors duration-300 mb-1">
//                     {project.title}
//                   </h3>
//                   <p className="text-zinc-400 text-xs font-medium mb-3">
//                     {project.year}
//                   </p>
//                   <div className="flex flex-wrap gap-2">
//                     {project.tags.slice(0, 2).map((tag) => (
//                       <span
//                         key={tag}
//                         className="text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-zinc-200 text-zinc-500"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-24 bg-zinc-50 text-zinc-900">
//         <div className="container mx-auto px-6 lg:px-4 text-center">
//           <h2 className="text-4xl lg:text-6xl font-semibold tracking-tighter mb-6 max-w-3xl mx-auto">
//             Have a project in mind?
//           </h2>
//           <p className="text-zinc-500 text-lg mb-10 max-w-xl mx-auto">
//             We&apos;re always looking for ambitious brands to collaborate with.
//             Let&apos;s create something that stands out.
//           </p>
//           <Link
//             href="/contact"
//             className="inline-flex items-center gap-4 bg-[#d9ff00] text-[#09090b] px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 active:scale-95 group"
//           >
//             Start a Project
//             <div className="size-10 bg-[#09090b] rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-[-45deg]">
//               <ArrowRight size={20} className="text-[#d9ff00]" />
//             </div>
//           </Link>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }

import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/project";

export const metadata = {
  title: "Projects — ITAGROUPE",
  description:
    "Explore our portfolio of real projects — SaaS platforms, car rental websites, restaurant sites, SEO campaigns, and more.",
};

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col justify-end pb-20 pt-32 overflow-hidden text-white bg-gradient-hero">
        <div
          style={{
            backgroundImage: "url(/images/grain.avif)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            mixBlendMode: "overlay",
          }}
          className="absolute inset-0 bg-zinc-600 pointer-events-none opacity-50"
        />
        <div className="absolute inset-0 bg-[#4b5563] pointer-events-none opacity-50 mix-blend-overlay" />
        <div className="container mx-auto px-6 lg:px-4 relative z-10 ">
          <p className="uppercase text-white/60 text-xs font-bold tracking-[0.3rem] mb-6">
            Our Work
          </p>
          <h1 className="text-5xl lg:text-7xl 2xl:text-8xl font-semibold tracking-tighter leading-[1.05] max-w-4xl">
            Real projects, real results.
          </h1>
          <p className="text-white/50 text-lg mt-6 max-w-xl">
            From SaaS platforms to SEO campaigns — we build digital products
            that drive growth for ambitious brands.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-white text-zinc-900">
        <div className="container mx-auto px-6 lg:px-4">
          <div className="flex items-baseline justify-between mb-16">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4">
                Featured
              </p>
              <h2 className="text-5xl lg:text-7xl font-semibold tracking-tighter bg-gradient-text bg-clip-text text-transparent leading-none">
                Selected Work
              </h2>
            </div>
            <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest hidden lg:block">
              ({projects.length} Projects)
            </p>
          </div>

          {/* Featured — 2-col grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {featured.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group"
              >
                <div className="aspect-[4/3] bg-zinc-100 rounded-[2.5rem] overflow-hidden mb-8 relative min-w-0">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 bg-zinc-900/20 backdrop-blur-[2px]">
                    <div className="size-20 bg-zinc-900/30 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center">
                      <ArrowRight className="size-6 text-white -rotate-45" />
                    </div>
                  </div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                </div>
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 px-2">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight group-hover:bg-gradient-text bg-clip-text text-transparent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-zinc-500 text-sm mt-2 font-medium">
                      ({project.year})
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold uppercase tracking-widest px-5 py-2.5 rounded-full border border-zinc-200 text-zinc-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Other Projects — 3-col grid */}
          {other.length > 0 && (
            <div className="border-t border-zinc-100 pt-20">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-12">
                More Projects
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {other.map((project) => (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    className="group"
                  >
                    <div className="aspect-[4/3] bg-zinc-100 rounded-2xl overflow-hidden mb-6 relative min-w-0">
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 bg-zinc-900/20 backdrop-blur-[2px]">
                        <div className="size-14 bg-zinc-900/30 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center">
                          <ArrowRight className="size-5 text-white -rotate-45" />
                        </div>
                      </div>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out"
                      />
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight group-hover:bg-gradient-text bg-clip-text text-transparent transition-colors duration-300 mb-1">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 text-xs font-medium mb-3">
                      {project.year}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-zinc-200 text-zinc-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-zinc-50 text-zinc-900">
        <div className="container mx-auto px-6 lg:px-4 text-center">
          <h2 className="text-4xl lg:text-6xl font-semibold tracking-tighter mb-6 max-w-3xl mx-auto">
            Have a project in mind?
          </h2>
          <p className="text-zinc-500 text-lg mb-10 max-w-xl mx-auto">
            We&apos;re always looking for ambitious brands to collaborate with.
            Let&apos;s create something that stands out.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-4 bg-[#d9ff00] text-[#09090b] px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 active:scale-95 group"
          >
            Start a Project
            <div className="size-10 bg-[#09090b] rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-[-45deg]">
              <ArrowRight size={20} className="text-[#d9ff00]" />
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
