
// import { getAllBlogPosts, categories } from "@/lib/blog-data";
// import BlogClient from "@/app/blog/BlogClient";

// const translations = {
//   en: {
//     title: "Blog",
//     subtitle: "Insights, tutorials, and industry trends",
//     description: "Stay updated with the latest in software development, AI, mobile development, and IT.",
//     allPosts: "All Posts",
//     readMore: "Read More",
//     filterByCategory: "Filter by Category",
//     categories: {
//       "All": "All",
//       "AI": "AI",
//       "Mobile Development": "Mobile Development", 
//       "Software Development": "Software Development",
//       "IT": "IT",
//       "HOW TO?": "HOW TO?"
//     }
//   },
//   fr: {
//     title: "Blog",
//     subtitle: "Insights, tutoriels et tendances du secteur",
//     description: "Restez à jour avec les dernières nouveautés en développement logiciel, IA, développement mobile et IT.",
//     allPosts: "Tous les articles",
//     readMore: "Lire plus",
//     filterByCategory: "Filtrer par catégorie",
//     categories: {
//       "All": "Tous",
//       "AI": "IA",
//       "Mobile Development": "Développement Mobile",
//       "Software Development": "Développement Logiciel",
//       "IT": "IT",
//       "HOW TO?": "COMMENT FAIRE?"
//     }
//   },
//   pl: {
//     title: "Blog",
//     subtitle: "Insights, samouczki i trendy branżowe",
//     description: "Bądź na bieżąco z najnowszymi informacjami o rozwoju oprogramowania, AI, rozwoju mobilnym i IT.",
//     allPosts: "Wszystkie posty",
//     readMore: "Czytaj więcej",
//     filterByCategory: "Filtruj według kategorii",
//     categories: {
//       "All": "Wszystkie",
//       "AI": "AI",
//       "Mobile Development": "Rozwój Mobilny",
//       "Software Development": "Rozwój Oprogramowania",
//       "IT": "IT",
//       "HOW TO?": "JAK TO ZROBIĆ?"
//     }
//   },
// };

// export default function BlogPage() {
//   const allPosts = getAllBlogPosts();
  
//   return (
//     <BlogClient 
//       allPosts={allPosts}
//       categories={categories}
//       translations={translations}
//     />
//   );
// }

import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Blog — ITAGROUPE",
  description: "Insights, case studies, and thoughts on design, development, and digital culture.",
};

const posts = [
  {
    slug: "design-systems-that-scale",
    title: "Design Systems That Scale: Lessons from 40+ Projects",
    excerpt: "How we build design systems that grow with our clients—not against them. A deep dive into tokens, components, and governance.",
    category: "Design",
    date: "Jan 28, 2026",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "seo-beyond-keywords",
    title: "SEO Beyond Keywords: The Technical Foundation Most Agencies Ignore",
    excerpt: "Rankings start with architecture. We break down the technical SEO fundamentals that actually move the needle.",
    category: "SEO",
    date: "Jan 15, 2026",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "brand-identity-process",
    title: "Our Brand Identity Process: From Brief to Launch",
    excerpt: "A transparent look at how we take a brand from concept to market—strategy, design, and everything in between.",
    category: "Branding",
    date: "Dec 20, 2025",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "performance-first-development",
    title: "Performance-First Development: Why Speed Is a Feature",
    excerpt: "Every 100ms of load time costs conversions. Here's how we approach performance as a core design principle, not an afterthought.",
    category: "Development",
    date: "Dec 5, 2025",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "ux-research-methods",
    title: "5 UX Research Methods We Use on Every Project",
    excerpt: "Design decisions backed by data, not assumptions. The research techniques that help us create interfaces people love.",
    category: "UI/UX",
    date: "Nov 18, 2025",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "creative-culture-remote-teams",
    title: "Building Creative Culture in Remote Teams",
    excerpt: "How we maintain creative energy and collaboration across time zones without sacrificing quality or team wellbeing.",
    category: "Culture",
    date: "Nov 2, 2025",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
  },
];

const GRAIN_DATA_URL =
  "data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='1' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";
export default function BlogPage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden text-white bg-gradient-to-br from-[#09090b] via-[#1e3a8a] to-[#4338ca]/70">
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
            Blog
          </p>
          <h1 className="text-5xl lg:text-7xl 2xl:text-8xl font-semibold tracking-tighter leading-[1.05] max-w-3xl">
            Insights &amp; Ideas
          </h1>
          <p className="text-white/60 text-lg mt-6 max-w-xl">
            Thoughts on design, development, branding, and building things that matter.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-24 bg-white text-zinc-900">
        <div className="container mx-auto px-6 lg:px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <div className="aspect-[16/10] bg-zinc-100 rounded-2xl overflow-hidden mb-5 relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-zinc-200 text-zinc-500">
                    {post.category}
                  </span>
                  <span className="text-xs text-zinc-400">{post.date}</span>
                </div>
                <h2 className="text-xl font-semibold tracking-tight leading-snug group-hover:text-blue-600 transition-colors duration-300 mb-2">
                  {post.title}
                </h2>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
