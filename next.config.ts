import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Blob storage in prod (Vercel Blob), local filesystem in dev
  // Stage outputs land in jobs/<id>/<stage>.json — never committed
  serverExternalPackages: ["better-sqlite3"],
};

export default nextConfig;
