import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Optimize images for better performance and SEO
  // images: {
  //   formats: ['image/webp'],
  //   deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  //   imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  // },
  // Security and SEO headers
  // async headers() {
  //   return [
  //     {
  //       source: "/:path*",
  //       headers: [
  //         {
  //           key: "X-DNS-Prefetch-Control",
  //           value: "on",
  //         },
  //         {
  //           key: "X-Frame-Options",
  //           value: "SAMEORIGIN",
  //         },
  //         {
  //           key: "X-Content-Type-Options",
  //           value: "nosniff",
  //         },
  //         {
  //           key: "Referrer-Policy",
  //           value: "origin-when-cross-origin",
  //         },
  //       ],
  //     },
  //   ];
  // },
};

export default nextConfig;
