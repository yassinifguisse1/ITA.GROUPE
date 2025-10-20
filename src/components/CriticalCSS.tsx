"use client";

import { useEffect } from 'react';

export default function CriticalCSS() {
  useEffect(() => {
    // Inject critical CSS immediately for LCP optimization
    const criticalCSS = `
      /* Critical above-the-fold styles - no animations to prevent render delay */
      .hero-section {
        background: linear-gradient(135deg, #163C2E 0%, #239D89 100%);
        min-height: 65vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .hero-title {
        font-size: 3rem;
        font-weight: 700;
        color: white;
        text-align: center;
        margin-bottom: 1rem;
        opacity: 1;
        /* Remove animation delay to prevent render blocking */
      }
      .hero-subtitle {
        font-size: 1.25rem;
        color: rgba(255, 255, 255, 0.8);
        text-align: center;
        margin-bottom: 2rem;
        opacity: 1;
        /* Remove animation delay to prevent render blocking */
      }
      .hero-buttons {
        display: flex;
        gap: 1rem;
        justify-content: center;
        opacity: 1;
        /* Remove animation delay to prevent render blocking */
      }
      /* Optimized loading states */
      .loading-skeleton {
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 200% 100%;
        animation: loading 1.5s infinite;
      }
      @keyframes loading {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }
      /* Prevent layout shifts */
      .global-presence-section {
        min-height: 500px;
        contain: layout;
      }
      .services-grid {
        contain: layout;
      }
      .advantages-grid {
        contain: layout;
      }
    `;

    const style = document.createElement('style');
    style.textContent = criticalCSS;
    document.head.appendChild(style);

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return null;
}
