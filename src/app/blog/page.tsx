
import { getAllBlogPosts, categories } from "@/lib/blog-data";
import BlogClient from "@/app/blog/BlogClient";

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
  const allPosts = getAllBlogPosts();
  
  return (
    <BlogClient 
      allPosts={allPosts}
      categories={categories}
      translations={translations}
    />
  );
}