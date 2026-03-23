import type { NextConfig } from "next";
import { setServers } from "node:dns/promises";

setServers(["1.1.1.1", "8.8.8.8"]);

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
