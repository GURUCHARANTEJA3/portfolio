import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  // Only add /portfolio prefix in production (GitHub Pages)
  basePath: isProduction ? "/portfolio" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;