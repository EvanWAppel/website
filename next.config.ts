import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingExcludes: {
    "*": ["images/**", "fiction/unzipped/**"],
  },
};

export default nextConfig;
