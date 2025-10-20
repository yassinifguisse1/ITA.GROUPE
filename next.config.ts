import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },
  outputFileTracingRoot: path.resolve(__dirname),
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  serverExternalPackages: ['@paper-design/shaders-react'],
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Simplified webpack optimizations for better compatibility
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Enable tree shaking
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;
    }
    return config;
  },
};

export default nextConfig;
// Clean rebuild timestamp: 1760895476346