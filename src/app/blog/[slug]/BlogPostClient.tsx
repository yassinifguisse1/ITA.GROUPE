"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Footer from "@/components/Footer";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const translations = {
  en: {
    backToBlog: "Back to Blog",
    share: "Share",
    save: "Save",
    relatedPosts: "Related Posts",
    readMore: "Read More",
  },
  fr: {
    backToBlog: "Retour au Blog",
    share: "Partager",
    save: "Sauvegarder",
    relatedPosts: "Articles connexes",
    readMore: "Lire plus",
  },
  pl: {
    backToBlog: "Powrót do Bloga",
    share: "Udostępnij",
    save: "Zapisz",
    relatedPosts: "Powiązane posty",
    readMore: "Czytaj więcej",
  },
};

interface BlogPostClientProps {
  post: any;
  relatedPosts: any[];
}

export default function BlogPostClient({ post, relatedPosts }: BlogPostClientProps) {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-32 pb-12 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-background" />
          
          <div className="relative max-w-4xl mx-auto">
            {/* Back Button */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              {t.backToBlog}
            </Link>

            {/* Category Badge */}
            <div className="mb-6">
              <span className="inline-block px-4 py-1.5 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              {post.title[language]}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <time>{new Date(post.date).toLocaleDateString(language, { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <div>
                  <p className="font-medium text-foreground">{post.author.name}</p>
                  <p className="text-sm">{post.author.role}</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 mb-8">
              <button className="flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors">
                <Share2 className="h-4 w-4" />
                <span className="text-sm font-medium">{t.share}</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors">
                <Bookmark className="h-4 w-4" />
                <span className="text-sm font-medium">{t.save}</span>
              </button>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="px-4 mb-12">
          <div className="max-w-5xl mx-auto">
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={post.image}
                alt={post.title[language]}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                priority
              />
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="px-4 pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <ReactMarkdown
                components={{
                  code({ node, inline, className, children, ...props }: any) {
                    const match = /language-(\w+)/.exec(className || '');
                    return !inline && match ? (
                      <SyntaxHighlighter
                        style={vscDarkPlus}
                        language={match[1]}
                        PreTag="div"
                        {...props}
                      >
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  },
                }}
              >
                {post.content[language]}
              </ReactMarkdown>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="px-4 py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                {t.relatedPosts}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <article
                    key={relatedPost.slug}
                    className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <Link href={`/blog/${relatedPost.slug}`} className="block relative h-48 overflow-hidden">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title[language]}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </Link>
                    <div className="p-6">
                      <Link href={`/blog/${relatedPost.slug}`}>
                        <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {relatedPost.title[language]}
                        </h3>
                      </Link>
                      <p className="text-muted-foreground line-clamp-2 mb-4">
                        {relatedPost.excerpt[language]}
                      </p>
                      <Link
                        href={`/blog/${relatedPost.slug}`}
                        className="text-sm font-medium text-primary hover:underline"
                      >
                        {t.readMore} →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
      <Footer language={language} />
    </>
  );
}
