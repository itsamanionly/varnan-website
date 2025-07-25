import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/api/medium-feed',
        destination: 'https://medium.com/feed/@varnan',
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tierly.app",
      },
    ],
  },
};

export default nextConfig;
