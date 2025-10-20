"use client";

import { useEffect } from 'react';

export default function PreloadResources() {
  useEffect(() => {
    // Preload critical resources to improve LCP
    const preloadCriticalResources = () => {
      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
      fontLink.as = 'style';
      document.head.appendChild(fontLink);

      // Preload critical images
      const imagePreloads = [
        'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Untitled-design-29-1759847984982.png'
      ];

      imagePreloads.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = src;
        link.as = 'image';
        document.head.appendChild(link);
      });

      // Preload critical CSS
      const criticalCSSLink = document.createElement('link');
      criticalCSSLink.rel = 'preload';
      criticalCSSLink.href = '/_next/static/css/app/layout.css';
      criticalCSSLink.as = 'style';
      document.head.appendChild(criticalCSSLink);
    };

    preloadCriticalResources();
  }, []);

  return null;
}
