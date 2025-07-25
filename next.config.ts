import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/api/medium-feed',
        // Change the destination to the rss2json proxy URL
        destination: 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@varnan',
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
