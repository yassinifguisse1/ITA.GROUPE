import type { Metadata } from "next";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getBlogPost, getAllBlogPosts } from "@/lib/blog-data";
import BlogPostClient from "./BlogPostClient";
import Image from "next/image";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  const title = post.title.en;
  const description = post.excerpt.en;
  const image = post.image;
  const publishedTime = new Date(post.date).toISOString();
  const modifiedTime = new Date(post.date).toISOString();

  return {
    title: `${title} | iTA Groupe Blog`,
    description,
    keywords: [
      "blog",
      "web development",
      "digital marketing",
      "SEO",
      "technology",
      "software development",
      post.category.toLowerCase(),
    ],
    authors: [{ name: post.author.name }],
    creator: post.author.name,
    publisher: "iTA Groupe",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: "article",
      locale: "en_US",
      url: `https://itagroupe.com/blog/${slug}`,
      siteName: "iTA Groupe",
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      publishedTime,
      modifiedTime,
      authors: [post.author.name],
      section: post.category,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@itagroupe",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `https://itagroupe.com/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getAllBlogPosts()
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  // JSON-LD structured data for the blog post
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title.en,
    "description": post.excerpt.en,
    "image": post.image,
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "jobTitle": post.author.role,
    },
    "publisher": {
      "@type": "Organization",
      "name": "iTA Groupe",
      "url": "https://itagroupe.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://itagroupe.com/logo.png",
      },
    },
    "datePublished": new Date(post.date).toISOString(),
    "dateModified": new Date(post.date).toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://itagroupe.com/blog/${slug}`,
    },
    "articleSection": post.category,
    "wordCount": post.content.en.split(' ').length,
    "timeRequired": post.readTime,
    "inLanguage": "en",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <Suspense   fallback={
        <div className="min-h-screen bg-gray-100 animate-pulse flex items-center justify-center">
          <div className="text-gray-600 flex flex-col items-center">
            {/* iTA Groupe Logo */}
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Untitled-design-29-1759847984982.png"
              alt="iTA Groupe Logo"
              width={100}
              height={100}
              priority
            />
            <span className="mt-4">Loading...</span>
          </div>
        </div>
      }>
        <BlogPostClient post={post} relatedPosts={relatedPosts} />
      </Suspense>
    </>
  );
}