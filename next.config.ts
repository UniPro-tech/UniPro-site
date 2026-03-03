import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.discordapp.com",
      },
    ],
  },
  experimental: {
    authInterrupts: true,
  },
  output: "standalone",
};

export default nextConfig;
