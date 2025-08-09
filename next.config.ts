import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static HTML export so we can deploy by uploading the out/ folder
  output: "export",
};

export default nextConfig;
