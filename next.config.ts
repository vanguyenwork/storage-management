import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "png.pngtree.com",
        protocol: "https",
      },
      {
        hostname: "cloud.appwrite.io",
        protocol: "https",
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "100MB",
    },
  },
};

export default nextConfig;
