"use client";

import { useEffect } from 'react';

export default function CriticalCSS() {
  useEffect(() => {
    // Inject critical CSS for above-the-fold content
    const criticalCSS = `
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
        opacity: 0;
        animation: fadeInUp 0.8s ease-out 0.2s forwards;
      }
      .hero-subtitle {
        font-size: 1.25rem;
        color: rgba(255, 255, 255, 0.8);
        text-align: center;
        margin-bottom: 2rem;
        opacity: 0;
        animation: fadeInUp 0.8s ease-out 0.4s forwards;
      }
      .hero-buttons {
        display: flex;
        gap: 1rem;
        justify-content: center;
        opacity: 0;
        animation: fadeInUp 0.8s ease-out 0.6s forwards;
      }
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .loading-skeleton {
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 200% 100%;
        animation: loading 1.5s infinite;
      }
      @keyframes loading {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }
    `;

    const style = document.createElement('style');
    style.textContent = criticalCSS;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
}
