import type { NextConfig } from "next";
import { setServers } from "node:dns/promises";

setServers(["1.1.1.1", "8.8.8.8"]);

const nextConfig: NextConfig = {
  images: {
    domains: [
      "dynamic-media-cdn.tripadvisor.com",
      "img.wongnai.com",
      "images.unsplash.com"
    ],
  },
};

export default nextConfig;