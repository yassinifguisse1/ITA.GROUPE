export interface Project {
    slug: string;
    title: string;
    category: string;
    description: string;
    tags: string[];
    image: string;
    link: string;
    featured: boolean;
    client: string;
    industry: string;
    services: string[];
    year: string;
    challenge: string;
    solution: string;
    results: { metric: string; value: string }[];
    /** Optional gallery images for the project detail page. Falls back to hero image if missing. */
    gallery?: string[];
  }
  
  export const projects: Project[] = [
    {
      slug: "luminaire-authentik",
      title: "Luminaire Authentik",
      category: "E-commerce",
      description:
        "Elegant e-commerce platform for authentic Quebecois lighting fixtures. Features advanced product customization with multiple color options, immersive 3D product visualization, and seamless shopping experience.",
      tags: ["E-commerce", "3D Product View", "Custom Design"],
      image:
        "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/ecooo-1760966381124.jpg",
      link: "https://www.luminaireauthentik.com/",
      featured: true,
      client: "Luminaire Authentik",
      industry: "E-commerce / Lighting Design",
      services: ["E-commerce Development", "3D Visualization", "UI/UX Design", "Product Customization"],
      year: "2024",
      challenge:
        "Luminaire Authentik needed an online store that could convey the craftsmanship of their handmade lighting fixtures. Static product photos couldn't communicate the range of finishes, colors, and sizes available. Customers needed to visualize products in context before purchasing high-ticket items.",
      solution:
        "We built a custom e-commerce platform with an immersive 3D product viewer that lets customers rotate, zoom, and switch between color options in real time. The checkout flow was streamlined for high-value purchases, with a design that mirrors the elegance of the brand. Every detail — from typography to micro-interactions — reflects Quebecois craftsmanship.",
      results: [
        { metric: "Conversion Rate", value: "+45%" },
        { metric: "Avg. Order Value", value: "+30%" },
        { metric: "Product Engagement", value: "3x" },
      ],
    },
    {
      slug: "misterfish",
      title: "Mister Fish",
      category: "Restaurant",
      description:
        "Website for Mister Fish, a fish and seafood restaurant. The site showcases the menu, atmosphere, and location with a clean, modern design. Multilingual (English/French) to serve both local and international visitors.",
      tags: ["Restaurant", "Fish & Seafood", "Website", "Multilingual"],
      image: "/images/misterfish.avif",
      link: "https://www.misterfish.ma/en",
      featured: true,
      client: "Mister Fish",
      industry: "Restaurant / Fish & Seafood",
      services: ["Website Design", "Frontend Development", "Content Strategy", "Multilingual"],
      year: "2024",
      challenge:
        "Mister Fish needed a website that could showcase its food and atmosphere and attract both locals and tourists. It had to be easy to navigate, highlight the menu and location, and support multiple languages.",
      solution:
        "We built a modern restaurant website that puts the menu and visuals first. The design is clean and easy to navigate, with multilingual support (English and French). The site drives reservations and foot traffic while reflecting the restaurant's quality.",
      results: [
        { metric: "Online Visibility", value: "Improved" },
        { metric: "Reservations", value: "Increased" },
        { metric: "Multilingual Reach", value: "EN / FR" },
      ],
      gallery: [
        "/images/misterfish.avif",
        "/images/misterfish-first-emp.avif",
        "/images/misterfish-menu.avif",
      ],
    },
    {
      slug: "assembly-coffee",
      title: "Assembly Coffee Co.",
      category: "E-commerce",
      description:
        "Premium specialty coffee e-commerce platform with subscription management, advanced filtering, and immersive product storytelling.",
      tags: ["Shopify", "Subscriptions", "SEO"],
      image:
        "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/eco-1760965919565.png",
      link: "https://assemblycoffee.co.uk/",
      featured: true,
      client: "Assembly Coffee Co.",
      industry: "Food & Beverage / Coffee",
      services: ["Shopify Development", "Subscription System", "SEO", "Content Strategy"],
      year: "2024",
      challenge:
        "Assembly Coffee needed more than a simple Shopify store. Their specialty coffee subscriptions required flexible management — pause, skip, swap beans — without frustrating customers. They also needed their product pages to tell the story behind each origin and roast to justify premium pricing.",
      solution:
        "We built a custom Shopify theme with a fully integrated subscription management system. Customers can manage their subscriptions with ease — adjusting frequency, swapping blends, or pausing deliveries. Product pages feature immersive storytelling with tasting notes, origin maps, and brew guides. A robust SEO strategy ensures discoverability for specialty coffee search terms.",
      results: [
        { metric: "Subscription Growth", value: "+65%" },
        { metric: "Organic Traffic", value: "+120%" },
        { metric: "Customer Retention", value: "85%" },
      ],
    },
    {
      slug: "hunter-healthcare",
      title: "Hunter Healthcare",
      category: "Healthcare",
      description:
        "We place people at the epicentre of healthcare. Comprehensive healthcare consulting and services platform focusing on convergence of industries in future delivery of healthcare services with elegant interface and intuitive navigation.",
      tags: ["Healthcare", "Consulting", "Corporate"],
      image:
        "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/helt2-1760970603177.png",
      link: "https://hunter-healthcare.com/",
      featured: true,
      client: "Hunter Healthcare",
      industry: "Healthcare Consulting",
      services: ["Website Design", "Frontend Development", "Content Architecture", "SEO"],
      year: "2024",
      challenge:
        "Hunter Healthcare operates at the intersection of multiple industries converging in healthcare delivery. Their previous website failed to communicate the depth of their expertise and the breadth of their services. They needed a digital presence that positioned them as thought leaders while making complex healthcare consulting accessible.",
      solution:
        "We designed a clean, authoritative website with a content architecture that maps to their diverse service offerings. The information hierarchy guides visitors from high-level value propositions to detailed service pages. A resource hub with articles and case studies establishes thought leadership, while clear CTAs drive consultation bookings.",
      results: [
        { metric: "Lead Generation", value: "+80%" },
        { metric: "Page Views", value: "25K/mo" },
        { metric: "Avg. Session", value: "4m 20s" },
      ],
    },
    {
      slug: "acibadem-healthcare",
      title: "Acıbadem Healthcare",
      category: "Healthcare",
      description:
        "Leading Turkish healthcare institution with comprehensive medical services. Modern digital platform featuring hospital locations, medical departments, doctor profiles, online appointment scheduling, and patient portal with elegant multilingual support.",
      tags: ["Healthcare", "Medical Services", "Patient Portal"],
      image:
        "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/heal-1760970518473.jpg",
      link: "https://www.acibadem.com.tr/",
      featured: true,
      client: "Acıbadem Healthcare Group",
      industry: "Healthcare / Hospital Network",
      services: ["UI/UX Design", "Full Stack Development", "Patient Portal", "Multilingual Support"],
      year: "2024",
      challenge:
        "Acıbadem is one of Turkey's largest healthcare networks with dozens of hospitals and thousands of doctors. Their digital platform needed to serve international patients seeking medical tourism, local patients booking appointments, and medical professionals managing their profiles — all in multiple languages with complex data relationships.",
      solution:
        "We built a comprehensive digital platform with intuitive hospital and department finders, detailed doctor profiles with appointment scheduling, and a patient portal for managing health records. The multilingual architecture supports Turkish and English seamlessly. The search and filter systems make it easy to find the right doctor, department, or hospital across the entire network.",
      results: [
        { metric: "Online Appointments", value: "+150%" },
        { metric: "International Patients", value: "+40%" },
        { metric: "Portal Adoption", value: "70%" },
      ],
    },
    {
      slug: "himalaya-usa",
      title: "Himalaya USA",
      category: "Healthcare",
      description:
        "Making the world well, one person at a time. Trusted herbal wellness and healthcare products platform featuring natural supplements, Ayurvedic medicine, product catalog with health benefits, and comprehensive wellness resources for holistic health.",
      tags: ["Wellness", "Natural Products", "E-commerce"],
      image:
        "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/helat3-1760970674441.png",
      link: "https://himalayausa.com/",
      featured: true,
      client: "Himalaya Wellness",
      industry: "Wellness / Natural Healthcare",
      services: ["E-commerce", "UI/UX Design", "Content Strategy", "SEO"],
      year: "2024",
      challenge:
        "Himalaya needed to bridge the gap between ancient Ayurvedic knowledge and modern e-commerce expectations. Customers needed to understand the benefits of natural supplements without feeling overwhelmed by clinical information. The product catalog had to educate while converting, and the brand had to feel trustworthy in a market full of dubious health claims.",
      solution:
        "We designed a clean, wellness-focused e-commerce experience that puts product education front and center. Each product page combines clinical research summaries with accessible benefit descriptions. A comprehensive wellness resource section drives organic traffic while establishing Himalaya as a trusted authority. The visual design uses natural tones and clean layouts that reflect the brand's commitment to purity.",
      results: [
        { metric: "Online Sales", value: "+55%" },
        { metric: "Organic Traffic", value: "+90%" },
        { metric: "Product Page Conv.", value: "+35%" },
      ],
    },
    {
      slug: "amseel-cars",
      title: "Amseel Cars",
      category: "Services",
      description:
        "Premium car rental service platform featuring luxury vehicle fleet with real-time booking system, elegant showcase of high-end vehicles, seamless rental management, and immersive photo galleries for exotic car rentals.",
      tags: ["Car Rental", "Booking System", "Luxury Services"],
      image:
        "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/image-1761042786652.png",
      link: "https://amseelcars.com/",
      featured: true,
      client: "Amseel Cars",
      industry: "Car Rental / Luxury Services",
      services: ["Website Development", "CRM System", "SEO", "Local SEO", "Booking System"],
      year: "2024 — Ongoing",
      challenge:
        "Amseel Cars had no online presence and was losing potential customers to competitors who ranked higher on Google. They needed a website that converts visitors into bookings, a backend system to manage their growing fleet, and a strategy to dominate local search results in their market.",
      solution:
        "We built a conversion-optimized website with an integrated booking flow and immersive vehicle galleries. The custom CRM allows the admin to manage cars, create blog posts, and track bookings from a single dashboard. For SEO, we implemented a comprehensive local SEO strategy — optimizing their Google Business Profile, building local citations, and creating location-targeted content.",
      results: [
        { metric: "Booking Increase", value: "+95%" },
        { metric: "Google Maps", value: "1st Page" },
        { metric: "Organic Traffic", value: "+280%" },
      ],
    },
    {
      slug: "soul-surf-house",
      title: "Soul Surf House",
      category: "Services",
      description:
        "Surf camp and accommodation booking platform combining adventure tourism with comfortable lodging. Features stunning beach photography, activity scheduling, accommodation booking, and immersive surf lifestyle experience.",
      tags: ["Tourism", "Booking", "Adventure"],
      image:
        "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/image-1760970115144.png",
      link: "https://www.soulsurfhouse.com/",
      featured: true,
      client: "Soul Surf House",
      industry: "Hospitality / Tourism",
      services: ["Technical SEO", "Content Strategy", "Local SEO", "Analytics Setup"],
      year: "2023 — Ongoing",
      challenge:
        "Soul Surf House was almost invisible on search engines. Most of their bookings came through third-party platforms like Booking.com, which took significant commissions. They needed to drive direct organic traffic to their own website to increase profitability and build a direct relationship with their guests.",
      solution:
        "We implemented a full technical SEO audit and overhaul — fixing site structure, improving page speed, and optimizing metadata. Then we built a content strategy targeting surf-related travel queries in the Agadir region. Local SEO efforts included Google Business Profile optimization, review management, and local link building.",
      results: [
        { metric: "Organic Traffic", value: "+90%" },
        { metric: "Direct Bookings", value: "+65%" },
        { metric: "Keyword Rankings", value: "Top 10" },
      ],
    },
    {
      slug: "dadofseo",
      title: "DadOfSEO",
      category: "SaaS",
      description:
        "Comprehensive SEO tools and analytics platform for digital marketers. Features keyword tracking, rank monitoring, competitor analysis, site audits, and advanced reporting dashboards for SEO professionals and agencies.",
      tags: ["SaaS", "SEO Tools", "Analytics"],
      image:
        "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/image-1761043906770.png",
      gallery: [
        "/images/dadofseo-dashboard.avif",
        "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/image-1761043906770.png",
        "/images/dadofseo-dashboard.avif",
      ],
      link: "https://dadofseo.com/",
      featured: true,
      client: "DadOfSEO",
      industry: "SaaS / Content Marketing",
      services: ["UI/UX Design", "Full Stack Development", "AI Integration", "SEO Tools"],
      year: "2024 — Ongoing",
      challenge:
        "Bloggers and content creators spend hours researching keywords, writing optimized content, and creating visuals. They often juggle multiple tools — one for SEO research, another for writing, and yet another for images. DadOfSEO needed to consolidate all of this into a single, intuitive platform.",
      solution:
        "We designed and built a full-stack SaaS platform from scratch. The UI prioritizes speed and simplicity — users can go from keyword idea to published-ready article in minutes. We integrated AI models for content generation and image creation, built a robust keyword analysis engine, and implemented a clean dashboard that makes SEO data accessible to non-technical users.",
      results: [
        { metric: "Active Users", value: "500+" },
        { metric: "Content Generated", value: "10K+" },
        { metric: "Avg. Time to Article", value: "5 min" },
      ],
    },
    {
      slug: "unity-hvac",
      title: "Unity HVAC",
      category: "Services",
      description:
        "Professional HVAC services company website showcasing heating, ventilation, and air conditioning solutions. Features service booking, emergency response system, customer testimonials, and comprehensive service area coverage.",
      tags: ["HVAC", "Services", "Booking"],
      image:
        "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/image-1760969888607.png",
      link: "https://unityhvac.com/",
      featured: false,
      client: "Unity HVAC",
      industry: "HVAC Services",
      services: ["WordPress Development", "SEO", "Local SEO", "Content Strategy"],
      year: "2024 — Ongoing",
      challenge:
        "Unity HVAC was struggling to compete with established HVAC companies in their area. Their previous website was outdated, slow, and not optimized for search engines. They needed a modern website that would generate qualified leads and establish them as a trusted local provider.",
      solution:
        "We built a fast, professional WordPress website optimized for conversions — with clear service pages, trust signals, and prominent CTAs. The SEO strategy focused on local service-area keywords, technical optimizations, and a content plan targeting common HVAC questions.",
      results: [
        { metric: "Organic Traffic", value: "+150%" },
        { metric: "Domain Authority", value: "+40%" },
        { metric: "Lead Generation", value: "+110%" },
      ],
    },
    {
      slug: "huts",
      title: "Huts",
      category: "Real Estate",
      description:
        "Premium prefabricated homes and architectural solutions. Modern showcase featuring sustainable cabin designs, contemporary architecture, immersive project galleries, and innovative modular housing solutions for off-grid living.",
      tags: ["Prefab Homes", "Architecture", "Sustainable Design"],
      image:
        "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/arrr-1760968689507.jpg",
      link: "https://huts.com/",
      featured: false,
      client: "Huts",
      industry: "Real Estate / Architecture",
      services: ["Website Design", "Frontend Development", "3D Gallery", "Brand Identity"],
      year: "2024",
      challenge:
        "Huts needed a digital presence that matched the architectural quality of their prefab homes. Static floor plans and basic galleries couldn't convey the craftsmanship and livability of their designs. They needed to inspire potential buyers while clearly communicating the customization options and sustainability benefits.",
      solution:
        "We designed an immersive website with full-screen project galleries, detailed specification pages, and a visual configurator for exploring cabin models. The design language mirrors the brand's commitment to clean, sustainable architecture — minimal layouts, natural tones, and generous whitespace that lets the photography speak.",
      results: [
        { metric: "Inquiry Rate", value: "+70%" },
        { metric: "Page Engagement", value: "5m avg" },
        { metric: "Lead Quality", value: "+45%" },
      ],
    },
    {
      slug: "eider-inc",
      title: "Eider Inc.",
      category: "Real Estate",
      description:
        "Exceptional home builders on the coast of Maine. Elegant real estate showcase featuring luxury coastal properties with stunning photography, immersive project galleries, and refined design aesthetic capturing Maine's coastal charm.",
      tags: ["Real Estate", "Luxury Homes", "Portfolio"],
      image:
        "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/ar-1760968562515.jpg",
      link: "https://www.eiderinc.com/",
      featured: false,
      client: "Eider Inc.",
      industry: "Real Estate / Luxury Construction",
      services: ["Website Design", "Photography Direction", "Frontend Development", "SEO"],
      year: "2024",
      challenge:
        "Eider builds some of the most beautiful homes on the Maine coast, but their online presence didn't reflect that quality. Potential clients — often high-net-worth individuals — expect a digital experience as refined as the homes themselves. The portfolio needed to showcase craftsmanship while driving high-value inquiries.",
      solution:
        "We created an elegant portfolio website that puts the architecture front and center. Full-bleed photography, smooth transitions, and a refined color palette create a luxury digital experience. The project detail pages tell the story of each build — from site selection to finishing touches. Strategic SEO targets luxury coastal real estate searches in the Maine region.",
      results: [
        { metric: "Client Inquiries", value: "+60%" },
        { metric: "Portfolio Views", value: "18K/mo" },
        { metric: "Avg. Session", value: "4m 10s" },
      ],
    },
    {
      slug: "eden-build",
      title: "Eden Build",
      category: "Real Estate",
      description:
        "Modern construction and fit-outs company showcasing building expertise. Official partner of the King's Trust, featuring contemporary architecture projects with immersive project galleries and professional services presentation.",
      tags: ["Construction", "Architecture", "Portfolio"],
      image:
        "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/arche-1760968374036.jpg",
      link: "https://edenbuild.co.uk/",
      featured: false,
      client: "Eden Build",
      industry: "Construction / Fit-Outs",
      services: ["Website Design", "Frontend Development", "Content Strategy", "SEO"],
      year: "2024",
      challenge:
        "Eden Build needed a website that communicated both their construction expertise and their prestigious partnership with the King's Trust. The site had to appeal to commercial clients seeking fit-out services while showcasing their portfolio of contemporary architecture projects across the UK.",
      solution:
        "We designed a professional website with a strong project portfolio section featuring immersive galleries and detailed case studies. The trust signals — including the King's Trust partnership — are prominently featured without being overbearing. Service pages are structured to address specific client needs, with clear pathways to consultation.",
      results: [
        { metric: "Website Leads", value: "+85%" },
        { metric: "Portfolio Engagement", value: "3x" },
        { metric: "Organic Traffic", value: "+95%" },
      ],
    },
    {
      slug: "bcu-financial",
      title: "BCU Financial",
      category: "Finance",
      description:
        "Full-service financial institution focused on well-being. Modern banking platform featuring personal and business banking solutions, investment services, wealth management, and comprehensive financial products with elegant user experience.",
      tags: ["Banking", "Financial Services", "Fintech"],
      image:
        "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/fi-1760970346789.png",
      link: "https://bcufinancial.com/",
      featured: false,
      client: "BCU Financial",
      industry: "Banking / Financial Services",
      services: ["UI/UX Design", "Frontend Development", "Content Architecture", "Accessibility"],
      year: "2024",
      challenge:
        "BCU Financial needed to modernize their digital banking experience. The existing platform felt dated and didn't communicate their focus on member well-being. They needed to simplify complex financial products into an intuitive experience that builds trust while driving online account openings and loan applications.",
      solution:
        "We redesigned the digital banking experience with a focus on clarity and trust. Complex financial products are presented through simple comparison tools and guided flows. The design language is warm and approachable — breaking from the cold, corporate aesthetic typical of financial institutions. Accessibility was a priority throughout, ensuring the platform serves all members.",
      results: [
        { metric: "Account Openings", value: "+50%" },
        { metric: "User Satisfaction", value: "92%" },
        { metric: "Bounce Rate", value: "-35%" },
      ],
    },
  ];
  
  export const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
  
  export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug);
  }
  
  export function getNextProject(currentSlug: string): Project {
    const idx = projects.findIndex((p) => p.slug === currentSlug);
    return projects[(idx + 1) % projects.length];
  }
  