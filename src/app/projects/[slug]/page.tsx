// import Header from "@/components/Home/Header";
// import Footer from "@/components/Home/Footer";
// import Image from "next/image";
// import Link from "next/link";
// import { ArrowLeft, ArrowRight } from "lucide-react";
// import { notFound } from "next/navigation";

// interface ProjectData {
//   slug: string;
//   title: string;
//   year: string;
//   category: string;
//   tags: string[];
//   client: string;
//   industry: string;
//   services: string[];
//   heroImage: string;
//   description: string;
//   challenge: string;
//   solution: string;
//   gallery: string[];
//   results: { metric: string; value: string }[];
//   nextProject: { slug: string; title: string };
// }

// const projectsData: Record<string, ProjectData> = {
//   "chat-genius": {
//     slug: "chat-genius",
//     title: "Chat Genius",
//     year: "2024 — Ongoing",
//     category: "Website Design & Development",
//     tags: ["Website Design", "Development"],
//     client: "Chat Genius Inc.",
//     industry: "SaaS / AI",
//     services: ["UI/UX Design", "Frontend Development", "Backend Integration"],
//     heroImage:
//       "https://images.unsplash.com/photo-1741348571852-fabd00511e92?q=80&w=1200&auto=format&fit=crop",
//     description:
//       "Chat Genius is an AI-powered conversational platform that needed a complete digital presence to match its cutting-edge technology. We designed and developed a website that communicates the product's intelligence through clean interactions and purposeful animations.",
//     challenge:
//       "The challenge was translating complex AI capabilities into an interface that feels approachable and human. The existing brand lacked visual cohesion, and the product's value proposition wasn't landing with target users.",
//     solution:
//       "We stripped back the complexity and built a design system rooted in clarity. Every interaction was designed to mirror the product's conversational nature — fluid transitions, responsive micro-interactions, and a content hierarchy that guides users naturally from discovery to conversion.",
//     gallery: [
//       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=800&auto=format&fit=crop",
//     ],
//     results: [
//       { metric: "Conversion Rate", value: "+142%" },
//       { metric: "Avg. Session Duration", value: "+68%" },
//       { metric: "Bounce Rate", value: "-35%" },
//     ],
//     nextProject: { slug: "field-type", title: "Field Type" },
//   },
//   "field-type": {
//     slug: "field-type",
//     title: "Field Type",
//     year: "2023 — Jan 2025",
//     category: "Branding & Social Media",
//     tags: ["Branding", "Social Media"],
//     client: "Field Type Co.",
//     industry: "Typography / Design Tools",
//     services: ["Brand Identity", "Social Media Strategy", "Content Design"],
//     heroImage:
//       "https://images.unsplash.com/photo-1604076984203-587c92ab2e58?q=80&w=1200&auto=format&fit=crop",
//     description:
//       "Field Type is a boutique typography foundry that needed a brand identity as refined as their typefaces. We crafted a visual system and social presence that celebrates the art of letterforms while driving commercial engagement.",
//     challenge:
//       "Typography foundries struggle to stand out in a saturated market. Field Type had exceptional products but their brand didn't communicate the craft and precision behind each typeface.",
//     solution:
//       "We developed a minimalist brand system that lets the type speak for itself. The social media strategy focused on process-driven content — showing the craft behind each letterform, building a community of design enthusiasts who became loyal customers.",
//     gallery: [
//       "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=800&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=800&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
//     ],
//     results: [
//       { metric: "Social Following", value: "+320%" },
//       { metric: "Brand Recognition", value: "+89%" },
//       { metric: "Revenue Growth", value: "+56%" },
//     ],
//     nextProject: { slug: "rock-bottom", title: "Rock Bottom" },
//   },
//   "rock-bottom": {
//     slug: "rock-bottom",
//     title: "Rock Bottom",
//     year: "2025",
//     category: "Graphic Design",
//     tags: ["Graphic Design", "Brand Identity"],
//     client: "Rock Bottom Records",
//     industry: "Music / Entertainment",
//     services: ["Graphic Design", "Album Art", "Visual Identity"],
//     heroImage:
//       "https://images.unsplash.com/photo-1660490987070-b7cc89e41b38?q=80&w=1200&auto=format&fit=crop",
//     description:
//       "Rock Bottom Records is an independent label pushing boundaries in experimental music. We created a visual identity and graphic design system that captures the raw energy and artistic integrity of their roster.",
//     challenge:
//       "The label needed a visual language that could flex across genres — from ambient electronica to hardcore punk — while maintaining a cohesive brand presence across physical and digital formats.",
//     solution:
//       "We designed a modular graphic system built on strong typographic foundations and a monochromatic palette that adapts through texture and composition. Each release gets a unique visual treatment while staying unmistakably Rock Bottom.",
//     gallery: [
//       "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=800&auto=format&fit=crop",
//     ],
//     results: [
//       { metric: "Merch Sales", value: "+210%" },
//       { metric: "Social Engagement", value: "+175%" },
//       { metric: "Streaming Growth", value: "+94%" },
//     ],
//     nextProject: { slug: "aurora-finance", title: "Aurora Finance" },
//   },
//   "aurora-finance": {
//     slug: "aurora-finance",
//     title: "Aurora Finance",
//     year: "2024 — 2025",
//     category: "UI/UX Design & Development",
//     tags: ["UI/UX Design", "Development", "Fintech"],
//     client: "Aurora Financial Technologies",
//     industry: "Fintech",
//     services: [
//       "UI/UX Design",
//       "Frontend Development",
//       "Backend Development",
//       "Data Visualization",
//     ],
//     heroImage:
//       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
//     description:
//       "Aurora Finance is a next-generation personal finance platform. We designed and built a dashboard experience that makes complex financial data feel intuitive, turning numbers into actionable insights.",
//     challenge:
//       "Financial dashboards are notoriously cluttered. Users were overwhelmed by data and struggling to find the insights that mattered most to their financial health.",
//     solution:
//       "We implemented a progressive disclosure pattern — surfacing key metrics first and allowing users to drill down on demand. Custom data visualizations replaced generic charts, and a conversational UI layer helped users understand their finances in plain language.",
//     gallery: [
//       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
//     ],
//     results: [
//       { metric: "User Retention", value: "+87%" },
//       { metric: "Task Completion", value: "+62%" },
//       { metric: "App Store Rating", value: "4.8★" },
//     ],
//     nextProject: { slug: "neon-streetwear", title: "Neon Streetwear" },
//   },
//   "neon-streetwear": {
//     slug: "neon-streetwear",
//     title: "Neon Streetwear",
//     year: "2024",
//     category: "Brand Identity & E-Commerce",
//     tags: ["Brand Identity", "E-Commerce", "Photography"],
//     client: "Neon Streetwear Co.",
//     industry: "Fashion / Retail",
//     services: [
//       "Brand Identity",
//       "E-Commerce Design",
//       "Product Photography Direction",
//     ],
//     heroImage:
//       "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
//     description:
//       "Neon Streetwear is a direct-to-consumer fashion brand targeting Gen-Z culture. We built their brand from the ground up — from logo to lookbook, from Shopify to social — creating a cohesive identity that resonates with a digitally native audience.",
//     challenge:
//       "Entering a crowded streetwear market requires more than good product. The brand needed a distinctive visual identity and seamless shopping experience that could compete with established players.",
//     solution:
//       "We developed a bold, neon-inflected brand system paired with a high-performance Shopify storefront. Art direction for product photography emphasized lifestyle over catalog, and the social strategy prioritized community-building through user-generated content.",
//     gallery: [
//       "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=800&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1741348571852-fabd00511e92?q=80&w=800&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1604076984203-587c92ab2e58?q=80&w=800&auto=format&fit=crop",
//     ],
//     results: [
//       { metric: "Launch Revenue", value: "$180K" },
//       { metric: "Return Customers", value: "43%" },
//       { metric: "Social Followers", value: "25K+" },
//     ],
//     nextProject: { slug: "verde-organics", title: "Verde Organics" },
//   },
//   "verde-organics": {
//     slug: "verde-organics",
//     title: "Verde Organics",
//     year: "2023 — 2024",
//     category: "Branding & Website",
//     tags: ["Branding", "Website Design", "SEO"],
//     client: "Verde Organics Ltd.",
//     industry: "Health & Wellness",
//     services: ["Brand Identity", "Website Design", "SEO Optimization"],
//     heroImage:
//       "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop",
//     description:
//       "Verde Organics is a premium organic skincare brand committed to sustainability. We crafted a brand and digital experience that reflects their values — clean, natural, and intentionally designed with purpose.",
//     challenge:
//       "The organic beauty space is crowded with greenwashing. Verde needed to communicate authentic sustainability without falling into cliched visual tropes that make every eco brand look the same.",
//     solution:
//       "We built a brand rooted in honesty — real textures, real ingredients, real photography. The website prioritizes ingredient transparency and storytelling, with an SEO strategy focused on long-tail wellness queries that drive qualified organic traffic.",
//     gallery: [
//       "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=800&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=800&auto=format&fit=crop",
//     ],
//     results: [
//       { metric: "Organic Traffic", value: "+240%" },
//       { metric: "E-Commerce Revenue", value: "+156%" },
//       { metric: "Brand Awareness", value: "+112%" },
//     ],
//     nextProject: { slug: "pulse-health", title: "Pulse Health" },
//   },
//   "pulse-health": {
//     slug: "pulse-health",
//     title: "Pulse Health",
//     year: "2024 — Ongoing",
//     category: "App Design & Development",
//     tags: ["Mobile App", "UI/UX Design", "Health"],
//     client: "Pulse Health Technologies",
//     industry: "Health Tech",
//     services: [
//       "Mobile App Design",
//       "UI/UX Design",
//       "React Native Development",
//     ],
//     heroImage:
//       "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
//     description:
//       "Pulse Health is a health monitoring app that makes personal wellness data accessible and actionable. We designed and developed a cross-platform mobile experience that turns health metrics into daily habits.",
//     challenge:
//       "Health apps often overwhelm users with too much data and not enough guidance. Pulse needed to balance comprehensive tracking with simplicity that keeps users engaged long-term.",
//     solution:
//       "We designed around daily rituals rather than raw data. A personalized dashboard surfaces the three most important metrics each day, with gentle nudges powered by behavioral design patterns. The React Native build ensures a native feel on both iOS and Android.",
//     gallery: [
//       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
//     ],
//     results: [
//       { metric: "Daily Active Users", value: "+195%" },
//       { metric: "30-Day Retention", value: "72%" },
//       { metric: "App Store Rating", value: "4.9★" },
//     ],
//     nextProject: { slug: "arch-studio", title: "Arch Studio" },
//   },
//   "arch-studio": {
//     slug: "arch-studio",
//     title: "Arch Studio",
//     year: "2025",
//     category: "Website Redesign",
//     tags: ["Website Design", "Development", "Architecture"],
//     client: "Arch Studio Paris",
//     industry: "Architecture",
//     services: ["Website Design", "Frontend Development", "3D Integration"],
//     heroImage:
//       "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200&auto=format&fit=crop",
//     description:
//       "Arch Studio is a Paris-based architecture firm known for blending modernism with cultural heritage. We redesigned their digital portfolio to showcase their work with the same spatial awareness and precision they bring to their buildings.",
//     challenge:
//       "Architecture websites often feel like static galleries. Arch Studio needed a digital experience that captured the spatial quality of their work and conveyed the firm's design philosophy to prospective clients.",
//     solution:
//       "We built a scroll-driven narrative that unfolds like walking through a building — each project is revealed through carefully choreographed transitions and full-bleed imagery. Subtle 3D elements add depth without distracting from the architecture itself.",
//     gallery: [
//       "https://images.unsplash.com/photo-1660490987070-b7cc89e41b38?q=80&w=800&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop",
//     ],
//     results: [
//       { metric: "Inquiry Rate", value: "+88%" },
//       { metric: "Avg. Time on Site", value: "4m 32s" },
//       { metric: "Portfolio Views", value: "+210%" },
//     ],
//     nextProject: { slug: "chat-genius", title: "Chat Genius" },
//   },
// };

// export function generateStaticParams() {
//   return Object.keys(projectsData).map((slug) => ({ slug }));
// }

// export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
//   const { slug } = await params;
//   const project = projectsData[slug];
//   if (!project) return { title: "Project Not Found" };
//   return {
//     title: `${project.title} — ITAGROUPE`,
//     description: project.description.slice(0, 160),
//   };
// }

// export default async function ProjectDetailPage({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;
//   const project = projectsData[slug];
//   if (!project) notFound();
//   const GRAIN_DATA_URL =
//   "data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='1' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

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
//         <div className="container mx-auto px-6 lg:px-4 relative z-10 mb-12">
//           <Link
//             href="/projects"
//             className="inline-flex items-center gap-2 text-white/50 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors mb-10"
//           >
//             <ArrowLeft className="size-4" />
//             All Projects
//           </Link>
//           <p className="uppercase text-white/40 text-xs font-bold tracking-[0.3rem] mb-6">
//             {project.category}
//           </p>
//           <h1 className="text-5xl lg:text-7xl 2xl:text-8xl font-semibold tracking-tighter leading-[1.05]">
//             {project.title}
//           </h1>
//           <div className="flex flex-wrap gap-3 mt-8">
//             {project.tags.map((tag) => (
//               <span
//                 key={tag}
//                 className="text-[10px] font-bold uppercase tracking-widest px-5 py-2.5 rounded-full border border-white/20 text-white/60"
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Full-bleed hero image */}
//         <div className="relative container mx-auto px-6 lg:px-4 aspect-[16/7] mt-8 rounded-2xl overflow-hidden bg-white">
//           <Image
//             src={project.heroImage}
//             alt={project.title}
//             fill
//             className="object-cover rounded-2xl bg-white"
//             priority
//           />
//         </div>
//       </section>

//       {/* Project Info Bar */}
//       <section className="py-16 bg-white text-zinc-900 border-b border-zinc-100">
//         <div className="container mx-auto px-6 lg:px-4">
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
//             <div>
//               <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-400 mb-2">
//                 Client
//               </p>
//               <p className="text-sm font-semibold tracking-tight">
//                 {project.client}
//               </p>
//             </div>
//             <div>
//               <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-400 mb-2">
//                 Industry
//               </p>
//               <p className="text-sm font-semibold tracking-tight">
//                 {project.industry}
//               </p>
//             </div>
//             <div>
//               <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-400 mb-2">
//                 Timeline
//               </p>
//               <p className="text-sm font-semibold tracking-tight">
//                 {project.year}
//               </p>
//             </div>
//             <div>
//               <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-400 mb-2">
//                 Services
//               </p>
//               <p className="text-sm font-semibold tracking-tight">
//                 {project.services.join(", ")}
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Overview */}
//       <section className="py-24 bg-white text-zinc-900">
//         <div className="container mx-auto px-6 lg:px-4">
//           <div className="grid lg:grid-cols-12 gap-16">
//             <div className="lg:col-span-4">
//               <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4">
//                 Overview
//               </p>
//               <h2 className="text-4xl lg:text-5xl font-semibold tracking-tighter leading-tight">
//                 The Project
//               </h2>
//             </div>
//             <div className="lg:col-span-7 lg:col-start-6">
//               <p className="text-lg text-zinc-600 leading-relaxed">
//                 {project.description}
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Challenge & Solution */}
//       <section className="py-24 bg-zinc-50 text-zinc-900">
//         <div className="container mx-auto px-6 lg:px-4">
//           <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
//             <div>
//               <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4">
//                 The Challenge
//               </p>
//               <h3 className="text-3xl font-semibold tracking-tighter mb-6">
//                 What we were solving
//               </h3>
//               <p className="text-zinc-600 leading-relaxed">
//                 {project.challenge}
//               </p>
//             </div>
//             <div>
//               <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4">
//                 The Solution
//               </p>
//               <h3 className="text-3xl font-semibold tracking-tighter mb-6">
//                 How we approached it
//               </h3>
//               <p className="text-zinc-600 leading-relaxed">
//                 {project.solution}
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Gallery */}
//       <section className="py-24 bg-white">
//         <div className="container mx-auto px-6 lg:px-4">
//           <div className="grid lg:grid-cols-2 gap-8">
//             <div className="aspect-[4/3] bg-zinc-100 rounded-[2rem] overflow-hidden relative">
//               <Image
//                 src={project.gallery[0]}
//                 alt={`${project.title} gallery 1`}
//                 fill
//                 className="object-cover"
//               />
//             </div>
//             <div className="aspect-[4/3] bg-zinc-100 rounded-[2rem] overflow-hidden relative">
//               <Image
//                 src={project.gallery[1]}
//                 alt={`${project.title} gallery 2`}
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </div>
//           <div className="mt-8">
//             <div className="aspect-[16/7] bg-zinc-100 rounded-[2rem] overflow-hidden relative">
//               <Image
//                 src={project.gallery[2]}
//                 alt={`${project.title} gallery 3`}
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Results */}
//       <section className="py-24 bg-zinc-50 text-zinc-900">
//         <div className="container mx-auto px-6 lg:px-4">
//           <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4">
//             Impact
//           </p>
//           <h2 className="text-5xl lg:text-7xl font-semibold tracking-tighter bg-gradient-to-r from-blue-700 via-blue-500 to-indigo-400 bg-clip-text text-transparent leading-none mb-16">
//             The Results
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//             {project.results.map((result) => (
//               <div key={result.metric}>
//                 <span className="text-5xl lg:text-6xl font-bold tracking-tighter text-zinc-900 leading-none block mb-4">
//                   {result.value}
//                 </span>
//                 <span className="text-zinc-500 text-sm font-medium tracking-wide">
//                   {result.metric}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Next Project */}
//       <section className="py-24 bg-white text-zinc-900 border-t border-zinc-100">
//         <div className="container mx-auto px-6 lg:px-4 text-center">
//           <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-6">
//             Next Project
//           </p>
//           <Link
//             href={`/projects/${project.nextProject.slug}`}
//             className="group inline-block"
//           >
//             <h2 className="text-5xl lg:text-8xl font-semibold tracking-tighter group-hover:text-blue-600 transition-colors duration-300">
//               {project.nextProject.title}
//             </h2>
//             <div className="mt-8 inline-flex items-center gap-3 text-sm font-bold text-zinc-400 group-hover:text-blue-600 transition-colors">
//               View Project
//               <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
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
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug, getNextProject } from "@/data/project";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — ITAGROUPE`,
    description: project.description.slice(0, 160),
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const next = getNextProject(slug);
  const gallery =
    project.gallery && project.gallery.length >= 3
      ? project.gallery
      : [project.image, project.image, project.image];

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex flex-col justify-end pb-20 pt-32 overflow-hidden text-white bg-gradient-to-br from-[#09090b] via-[#1e3a8a] to-[#4338ca]/70">
        <div
          style={{
            backgroundImage: "url(/images/grain.avif)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            mixBlendMode: "overlay",
          }}
          className="absolute inset-0 bg-zinc-600 pointer-events-none opacity-50"
        />
        <div className="container mx-auto px-6 lg:px-4 relative z-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-white/50 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors mb-10"
          >
            <ArrowLeft className="size-4" />
            All Projects
          </Link>
          <p className="uppercase text-white/40 text-xs font-bold tracking-[0.3rem] mb-6">
            {project.category}
          </p>
          <h1 className="text-5xl lg:text-7xl 2xl:text-8xl font-semibold tracking-tighter leading-[1.05]">
            {project.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 mt-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-bold uppercase tracking-widest px-5 py-2.5 rounded-full border border-white/20 text-white/60"
              >
                {tag}
              </span>
            ))}
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest px-5 py-2.5 rounded-full border border-[#d9ff00]/40 text-[#d9ff00] hover:bg-[#d9ff00]/10 transition-colors"
            >
              Visit Live Site
              <ExternalLink className="size-3" />
            </Link>
          </div>
        </div>

        {/* Full-bleed hero image */}
        <div className="relative container mx-auto px-6 lg:px-4 aspect-[16/7] mt-8 rounded-2xl overflow-hidden bg-white">
          <Image
            src={project.image}
            alt={`${project.title} – ${project.client} project hero`}
            fill
            sizes="100vw"
            className="object-cover object-top"
            priority
          />
        </div>
      </section>

      {/* Project Info Bar */}
      <section className="py-16 bg-white text-zinc-900 border-b border-zinc-100">
        <div className="container mx-auto px-6 lg:px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-400 mb-2">
                Client
              </p>
              <p className="text-sm font-semibold tracking-tight">
                {project.client}
              </p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-400 mb-2">
                Industry
              </p>
              <p className="text-sm font-semibold tracking-tight">
                {project.industry}
              </p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-400 mb-2">
                Timeline
              </p>
              <p className="text-sm font-semibold tracking-tight">
                {project.year}
              </p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-400 mb-2">
                Services
              </p>
              <p className="text-sm font-semibold tracking-tight">
                {project.services.join(", ")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-white text-zinc-900">
        <div className="container mx-auto px-6 lg:px-4">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4">
                Overview
              </p>
              <h2 className="text-4xl lg:text-5xl font-semibold tracking-tighter leading-tight">
                The Project
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <p className="text-lg text-zinc-600 leading-relaxed">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
              >
                View Live Website
                <ExternalLink className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-24 bg-zinc-50 text-zinc-900">
        <div className="container mx-auto px-6 lg:px-4">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4">
                The Challenge
              </p>
              <h3 className="text-3xl font-semibold tracking-tighter mb-6">
                What we were solving
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4">
                The Solution
              </p>
              <h3 className="text-3xl font-semibold tracking-tighter mb-6">
                How we approached it
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {/* <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="aspect-[4/3] bg-zinc-100 rounded-[2rem] overflow-hidden relative">
              <Image
                src={gallery[0]}
                alt={`${project.title} gallery 1`}
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-[4/3] bg-zinc-100 rounded-[2rem] overflow-hidden relative">
              <Image
                src={gallery[1]}
                alt={`${project.title} gallery 2`}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="mt-8">
            <div className="aspect-[16/7] bg-zinc-100 rounded-[2rem] overflow-hidden relative">
              <Image
                src={gallery[2]}
                alt={`${project.title} gallery 3`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Results */}
      <section className="py-24 bg-zinc-50 text-zinc-900">
        <div className="container mx-auto px-6 lg:px-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4">
            Impact
          </p>
          <h2 className="text-5xl lg:text-7xl font-semibold tracking-tighter bg-gradient-to-r from-blue-700 via-blue-500 to-indigo-400 bg-clip-text text-transparent leading-none mb-16">
            The Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {project.results.map((result) => (
              <div key={result.metric}>
                <span className="text-5xl lg:text-6xl font-bold tracking-tighter text-zinc-900 leading-none block mb-4">
                  {result.value}
                </span>
                <span className="text-zinc-500 text-sm font-medium tracking-wide">
                  {result.metric}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-24 bg-white text-zinc-900 border-t border-zinc-100">
        <div className="container mx-auto px-6 lg:px-4 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-6">
            Next Project
          </p>
          <Link
            href={`/projects/${next.slug}`}
            className="group inline-block"
          >
            <h2 className="text-5xl lg:text-8xl font-semibold tracking-tighter group-hover:text-blue-600 transition-colors duration-300">
              {next.title}
            </h2>
            <div className="mt-8 inline-flex items-center gap-3 text-sm font-bold text-zinc-400 group-hover:text-blue-600 transition-colors">
              View Project
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
