/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  // Optimizations for Vercel
  compress: true,
  productionBrowserSourceMaps: false,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
      },
    ],
    // Optimize image caching for Vercel
    minimumCacheTTL: 31536000, // 1 year
  },

  // Performance optimizations
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },

  // Environment variables
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || "https://api.themoviedb.org/3",
  },
};

export default nextConfig;