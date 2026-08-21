import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: { optimizePackageImports: ["lucide-react"] },
  // Required for Arena's proxied live preview to load Next.js client chunks.
  allowedDevOrigins: ["3000-ia3s6tgzem2yu7wny5jee.e2b.app"],
};

export default nextConfig;
