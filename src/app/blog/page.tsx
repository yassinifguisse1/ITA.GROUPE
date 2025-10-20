"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getAllBlogPosts, getBlogPostsByCategory, categories } from "@/lib/blog-data";
import Footer from "@/components/Footer";

const translations = {
  en: {
    title: "Blog",
    subtitle: "Insights, tutorials, and industry trends",
    description: "Stay updated with the latest in software development, AI, mobile development, and IT.",
    allPosts: "All Posts",
    readMore: "Read More",
    filterByCategory: "Filter by Category",
    categories: {
      "All": "All",
      "AI": "AI",
      "Mobile Development": "Mobile Development", 
      "Software Development": "Software Development",
      "IT": "IT",
      "HOW TO?": "HOW TO?"
    }
  },
  fr: {
    title: "Blog",
    subtitle: "Insights, tutoriels et tendances du secteur",
    description: "Restez à jour avec les dernières nouveautés en développement logiciel, IA, développement mobile et IT.",
    allPosts: "Tous les articles",
    readMore: "Lire plus",
    filterByCategory: "Filtrer par catégorie",
    categories: {
      "All": "Tous",
      "AI": "IA",
      "Mobile Development": "Développement Mobile",
      "Software Development": "Développement Logiciel",
      "IT": "IT",
      "HOW TO?": "COMMENT FAIRE?"
    }
  },
  pl: {
    title: "Blog",
    subtitle: "Insights, samouczki i trendy branżowe",
    description: "Bądź na bieżąco z najnowszymi informacjami o rozwoju oprogramowania, AI, rozwoju mobilnym i IT.",
    allPosts: "Wszystkie posty",
    readMore: "Czytaj więcej",
    filterByCategory: "Filtruj według kategorii",
    categories: {
      "All": "Wszystkie",
      "AI": "AI",
      "Mobile Development": "Rozwój Mobilny",
      "Software Development": "Rozwój Oprogramowania",
      "IT": "IT",
      "HOW TO?": "JAK TO ZROBIĆ?"
    }
  },
};

export default function BlogPage() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const posts = selectedCategory === "All" 
    ? getAllBlogPosts() 
    : getBlogPostsByCategory(selectedCategory);

  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-background" />
          
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text">
              {t.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
              {t.subtitle}
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.description}
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category: string) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2.5 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {t.categories[category as keyof typeof t.categories]}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 px-4 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post: any) => (
                <article
                  key={post.slug}
                  className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Image */}
                  <Link href={`/blog/${post.slug}`} className="block relative h-56 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title[language]}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                        {t.categories[post.category as keyof typeof t.categories] || post.category}
                      </span>
                    </div>
                  </Link>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4" />
                        <time>{new Date(post.date).toLocaleDateString(language)}</time>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <Link href={`/blog/${post.slug}`}>
                      <h2 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {post.title[language]}
                      </h2>
                    </Link>

                    {/* Excerpt */}
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {post.excerpt[language]}
                    </p>

                    {/* Author & CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-2 text-sm">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span className="text-foreground font-medium">{post.author.name}</span>
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all"
                      >
                        {t.readMore}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Empty State */}
            {posts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-xl text-muted-foreground">
                  No posts found in this category.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
      <Footer language={language} />
    </>
  );
}