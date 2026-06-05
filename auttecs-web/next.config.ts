import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.183", "192.168.1.*", "192.168.100.23", "192.168.100.*", "localhost"],
  devIndicators: false,
};

export default nextConfig;
