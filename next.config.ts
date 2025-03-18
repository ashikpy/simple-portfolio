import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "ashikpy.tech",
      "ashbio.vercel.app",
    ],
  },
  devIndicators: false,
};

export default nextConfig;
