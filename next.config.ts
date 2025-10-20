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
  // Enable webpack optimizations
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Enable tree shaking
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;
      
      // Split chunks more aggressively for better caching and performance
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 10000,
        maxSize: 200000,
        minChunks: 1,
        cacheGroups: {
          // Critical libraries that should load first
          react: {
            test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
            name: 'react',
            chunks: 'all',
            priority: 30,
            enforce: true,
          },
          next: {
            test: /[\\/]node_modules[\\/]next[\\/]/,
            name: 'next',
            chunks: 'all',
            priority: 25,
            enforce: true,
          },
          // UI libraries
          framerMotion: {
            test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
            name: 'framer-motion',
            chunks: 'async',
            priority: 20,
          },
          lucide: {
            test: /[\\/]node_modules[\\/]lucide-react[\\/]/,
            name: 'lucide-react',
            chunks: 'async',
            priority: 20,
          },
          // Heavy shader libraries - load async
          shaders: {
            test: /[\\/]node_modules[\\/]@paper-design[\\/]/,
            name: 'shaders',
            chunks: 'async',
            priority: 20,
          },
          // Other vendor libraries
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'async',
            priority: 10,
            maxSize: 200000,
          },
          // Common code
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 5,
            reuseExistingChunk: true,
            maxSize: 200000,
          },
        },
      };
    }
    return config;
  },
};

export default nextConfig;
// Clean rebuild timestamp: 1760895476346