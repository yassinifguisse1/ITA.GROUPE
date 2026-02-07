// import type { Metadata } from "next";
// import { Suspense } from "react";
// import { notFound } from "next/navigation";
// import { getBlogPost, getAllBlogPosts } from "@/lib/blog-data";
// import BlogPostClient from "./BlogPostClient";
// import Image from "next/image";

// interface BlogPostPageProps {
//   params: Promise<{
//     slug: string;
//   }>;
// }

// export async function generateStaticParams() {
//   const posts = getAllBlogPosts();
//   return posts.map((post) => ({
//     slug: post.slug,
//   }));
// }

// export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
//   const { slug } = await params;
//   const post = getBlogPost(slug);

//   if (!post) {
//     return {
//       title: "Post Not Found",
//       description: "The requested blog post could not be found.",
//     };
//   }

//   const title = post.title.en;
//   const description = post.excerpt.en;
//   const image = post.image;
//   const publishedTime = new Date(post.date).toISOString();
//   const modifiedTime = new Date(post.date).toISOString();

//   return {
//     title: `${title} | iTA Groupe Blog`,
//     description,
//     keywords: [
//       "blog",
//       "web development",
//       "digital marketing",
//       "SEO",
//       "technology",
//       "software development",
//       post.category.toLowerCase(),
//     ],
//     authors: [{ name: post.author.name }],
//     creator: post.author.name,
//     publisher: "iTA Groupe",
//     formatDetection: {
//       email: false,
//       address: false,
//       telephone: false,
//     },
//     openGraph: {
//       type: "article",
//       locale: "en_US",
//       url: `https://itagroupe.com/blog/${slug}`,
//       siteName: "iTA Groupe",
//       title,
//       description,
//       images: [
//         {
//           url: image,
//           width: 1200,
//           height: 630,
//           alt: title,
//         },
//       ],
//       publishedTime,
//       modifiedTime,
//       authors: [post.author.name],
//       section: post.category,
//     },
//     twitter: {
//       card: "summary_large_image",
//       title,
//       description,
//       images: [image],
//       creator: "@itagroupe",
//     },
//     robots: {
//       index: true,
//       follow: true,
//       googleBot: {
//         index: true,
//         follow: true,
//         "max-video-preview": -1,
//         "max-image-preview": "large",
//         "max-snippet": -1,
//       },
//     },
//     alternates: {
//       canonical: `https://itagroupe.com/blog/${slug}`,
//     },
//   };
// }

// export default async function BlogPostPage({ params }: BlogPostPageProps) {
//   const { slug } = await params;
//   const post = getBlogPost(slug);

//   if (!post) {
//     notFound();
//   }

//   const relatedPosts = getAllBlogPosts()
//     .filter((p) => p.category === post.category && p.slug !== post.slug)
//     .slice(0, 3);

//   // JSON-LD structured data for the blog post
//   const jsonLd = {
//     "@context": "https://schema.org",
//     "@type": "BlogPosting",
//     "headline": post.title.en,
//     "description": post.excerpt.en,
//     "image": post.image,
//     "author": {
//       "@type": "Person",
//       "name": post.author.name,
//       "jobTitle": post.author.role,
//     },
//     "publisher": {
//       "@type": "Organization",
//       "name": "iTA Groupe",
//       "url": "https://itagroupe.com",
//       "logo": {
//         "@type": "ImageObject",
//         "url": "https://itagroupe.com/logo.png",
//       },
//     },
//     "datePublished": new Date(post.date).toISOString(),
//     "dateModified": new Date(post.date).toISOString(),
//     "mainEntityOfPage": {
//       "@type": "WebPage",
//       "@id": `https://itagroupe.com/blog/${slug}`,
//     },
//     "articleSection": post.category,
//     "wordCount": post.content.en.split(' ').length,
//     "timeRequired": post.readTime,
//     "inLanguage": "en",
//   };

//   return (
//     <>
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify(jsonLd),
//         }}
//       />
//       <Suspense   fallback={
//         <div className="min-h-screen bg-gray-100 animate-pulse flex items-center justify-center">
//           <div className="text-gray-600 flex flex-col items-center">
//             {/* iTA Groupe Logo */}
//             <Image
//               src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Untitled-design-29-1759847984982.png"
//               alt="iTA Groupe Logo"
//               width={100}
//               height={100}
//               priority
//             />
//             <span className="mt-4">Loading...</span>
//           </div>
//         </div>
//       }>
//         <BlogPostClient post={post} relatedPosts={relatedPosts} />
//       </Suspense>
//     </>
//   );
// }
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

const posts: Record<string, {
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content: string[];
}> = {
  "design-systems-that-scale": {
    title: "Design Systems That Scale: Lessons from 40+ Projects",
    category: "Design",
    date: "Jan 28, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=1200&auto=format&fit=crop",
    content: [
      "After building design systems for over 40 clients, we've learned that the difference between a system that thrives and one that gets abandoned comes down to three things: clear governance, flexible tokens, and team buy-in from day one.",
      "Most agencies treat design systems as a deliverable—a Figma file with components. But a design system is a living product. It needs maintenance, documentation, and someone who owns it. Without that, it becomes outdated within months.",
      "We start every design system project by auditing what already exists. You'd be surprised how many organizations already have the raw materials for a system—they just need structure. We catalog every color, typeface, spacing value, and component pattern currently in use.",
      "Tokens are the foundation. We use a three-tier token architecture: global tokens (raw values), alias tokens (semantic meanings), and component tokens (specific overrides). This structure lets you rebrand an entire product by changing a single layer.",
      "Component architecture follows atomic design principles, but we've evolved the approach. Instead of atoms, molecules, and organisms, we think in terms of primitives, composites, and patterns. This language resonates better with development teams and reduces the translation gap between design and code.",
      "The biggest lesson? Start small. Ship a system with 10 solid components rather than 100 mediocre ones. Teams adopt systems that solve immediate problems, not theoretical ones. Build what's needed now, document it well, and expand based on real usage data.",
    ],
  },
  "seo-beyond-keywords": {
    title: "SEO Beyond Keywords: The Technical Foundation Most Agencies Ignore",
    category: "SEO",
    date: "Jan 15, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    content: [
      "Everyone talks about keywords. Few talk about the technical foundation that determines whether those keywords ever rank. After years of auditing sites that 'should' rank but don't, we've identified the patterns that actually matter.",
      "Site architecture is the most underrated ranking factor. How your pages link to each other, how deep your content is buried, and how crawlers navigate your site—these structural decisions compound over time. A flat, well-linked architecture outperforms deep hierarchies every time.",
      "Core Web Vitals aren't just a Google checkbox. They're a user experience metric that directly correlates with conversions. We've seen clients gain 15-20% more organic traffic simply by improving LCP and CLS scores, without changing a single word of content.",
      "Structured data is free visibility. Schema markup helps search engines understand your content contextually, and it can unlock rich snippets that dramatically improve click-through rates. Yet most sites implement it poorly or not at all.",
      "Internal linking strategy is where most SEO efforts fall apart. We build topic clusters with clear pillar pages and supporting content, connected through intentional internal links. This isn't just good for SEO—it creates better user journeys.",
      "The technical foundation doesn't replace great content. But without it, great content sits in the dark. Get the architecture right first, then build content on top of a structure that's designed to perform.",
    ],
  },
  "brand-identity-process": {
    title: "Our Brand Identity Process: From Brief to Launch",
    category: "Branding",
    date: "Dec 20, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=1200&auto=format&fit=crop",
    content: [
      "Every brand project starts with listening. Before we touch a single pixel, we spend significant time understanding the business, the audience, and the competitive landscape. This discovery phase is where the real work happens.",
      "We conduct stakeholder interviews, competitive audits, and audience research to build a strategic foundation. The output is a brand strategy document that defines positioning, personality, and key messages—the blueprint everything else builds on.",
      "Visual exploration begins with mood boards and style tiles, not logos. We establish the visual world first—color palettes, typography systems, photographic direction, and graphic elements. The logo is born from this ecosystem, not the other way around.",
      "Logo design goes through multiple rounds of ideation. We typically explore 50-100 rough concepts before refining 3-5 directions to present. Each direction is shown in context—on business cards, websites, signage—so clients can evaluate how it lives in the real world.",
      "The brand guidelines document is more than a PDF. It's a practical toolkit that covers every touchpoint: digital, print, environmental, and social. We include do's and don'ts, template files, and usage examples that make implementation straightforward for any team.",
      "Launch day is just the beginning. A brand needs consistent application to build equity. We offer ongoing brand stewardship to ensure everything that goes out into the world maintains the standard we set together.",
    ],
  },
  "performance-first-development": {
    title: "Performance-First Development: Why Speed Is a Feature",
    category: "Development",
    date: "Dec 5, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    content: [
      "Performance isn't an optimization you add later. It's a design constraint you build around from the start. Every architectural decision—framework choice, image strategy, rendering method—should be evaluated through the lens of user experience speed.",
      "We default to static generation and incremental static regeneration wherever possible. Server-side rendering is powerful, but it adds latency. If content doesn't change on every request, there's no reason to compute it on every request.",
      "Image optimization alone can cut page weight by 60-80%. We use modern formats (WebP, AVIF), responsive sizing, lazy loading, and blur placeholders. These aren't optional enhancements—they're baseline requirements for every project we ship.",
      "JavaScript budgets are real. We set a maximum bundle size at the start of every project and treat exceeding it like a failing test. Tree-shaking, code splitting, and dynamic imports keep the initial payload lean.",
      "Third-party scripts are the silent killers of performance. Analytics, chat widgets, tracking pixels—they accumulate. We audit every external resource and defer or eliminate anything that doesn't directly serve the user experience.",
      "Measuring performance is as important as optimizing it. We set up real-user monitoring from day one, tracking Core Web Vitals in production. Lab scores are useful for development, but field data tells the real story.",
    ],
  },
  "ux-research-methods": {
    title: "5 UX Research Methods We Use on Every Project",
    category: "UI/UX",
    date: "Nov 18, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1200&auto=format&fit=crop",
    content: [
      "Design without research is decoration. Every interface we build is grounded in understanding—who uses it, why they use it, and what gets in their way. Here are the five research methods we rely on for every project.",
      "Stakeholder interviews come first. We talk to the people closest to the business—founders, product managers, support teams. They hold institutional knowledge about user pain points that no analytics dashboard can capture.",
      "Competitive analysis goes beyond screenshots. We sign up for competitor products, go through their flows, and document what works and what doesn't. This gives us a map of user expectations in the space and opportunities to differentiate.",
      "User interviews are non-negotiable. Even five conversations reveal patterns. We use semi-structured interviews that balance consistency with the freedom to follow interesting threads. The insights from these sessions directly inform our information architecture and interaction patterns.",
      "Usability testing happens early and often. We test low-fidelity wireframes before investing in visual design. Paper prototypes and click-through mockups reveal navigation issues, confusing labels, and missing features at a fraction of the cost of fixing them in code.",
      "Analytics review provides the quantitative backbone. We look at existing data—page views, drop-off rates, search queries, support tickets—to identify where users struggle. Combined with qualitative research, this gives us a complete picture to design against.",
    ],
  },
  "creative-culture-remote-teams": {
    title: "Building Creative Culture in Remote Teams",
    category: "Culture",
    date: "Nov 2, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
    content: [
      "Creative work thrives on collaboration, spontaneity, and shared energy. When your team is distributed across time zones, you have to be intentional about creating the conditions for these things to happen.",
      "We structure our week around synchronous and asynchronous rhythms. Mondays and Thursdays are meeting-heavy—kickoffs, reviews, brainstorms. The rest of the week is protected deep work time with minimal interruptions.",
      "Design critiques are the heartbeat of our creative process. We run them twice a week over video, with clear structure: present for 5 minutes, discuss for 15. Everyone participates, from junior designers to founders. This keeps quality high and perspectives diverse.",
      "Async communication is an art form. We write detailed briefs, record Loom walkthroughs of our work, and document decisions in shared spaces. Over-communication is the antidote to the isolation that remote work can create.",
      "We invest in team rituals that aren't about work. Monthly virtual hangouts, annual retreats, and a dedicated channel for sharing inspiration keep us connected as humans, not just colleagues. Creative chemistry requires personal trust.",
      "The tools matter less than the habits. We've tried every app, platform, and workflow tool out there. What actually works is a shared commitment to showing up, giving honest feedback, and celebrating wins together—regardless of the software we use to do it.",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: "Post Not Found — ITAGROUPE" };
  return {
    title: `${post.title} — ITAGROUPE Blog`,
    description: post.content[0],
  };
}

const GRAIN_DATA_URL =
  "data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='1' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

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
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/20 text-white/70">
              {post.category}
            </span>
            <span className="text-xs text-white/50">{post.date}</span>
            <span className="text-xs text-white/50">{post.readTime}</span>
          </div>
          <h1 className="text-4xl lg:text-6xl 2xl:text-7xl font-semibold tracking-tighter leading-[1.05] max-w-4xl">
            {post.title}
          </h1>
        </div>
      {/* Featured Image */}
      <div className="container mx-auto px-6 lg:px-4 -mt-0 mt-10">
        <div className="aspect-[21/9] bg-zinc-100 rounded-2xl overflow-hidden relative">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      </section>


      {/* Content */}
      <article className="py-16 bg-white text-zinc-900">
        <div className="container mx-auto px-6 lg:px-4">
          <div className="max-w-3xl mx-auto">
            {post.content.map((paragraph, i) => (
              <p
                key={i}
                className="text-lg text-zinc-600 leading-relaxed mb-8 last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>

      {/* Back to Blog CTA */}
      <section className="pb-24 bg-white">
        <div className="container mx-auto px-6 lg:px-4 text-center">
          <div className="border-t border-zinc-100 pt-16">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-900 text-sm font-medium transition-colors"
            >
              <ArrowLeft size={16} />
              Back to all posts
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
