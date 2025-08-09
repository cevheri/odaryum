import type { NextConfig } from "next";

// Derive basePath from environment for dynamic deployments (e.g., GitHub Pages project vs user site)
const resolvedBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  // Enable static HTML export so we can deploy by uploading the out/ folder
  output: "export",
  // Use trailingSlash for static hosting (e.g., GitHub Pages) so directories resolve to index.html
  trailingSlash: true,
  // Only set basePath when provided to avoid double slashes at root
  basePath: resolvedBasePath || undefined,
};

export default nextConfig;
