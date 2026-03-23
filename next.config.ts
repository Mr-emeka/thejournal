import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    dangerouslyAllowLocalIP: true, // allows local ip addresses
    remotePatterns: [
      // They are both same way to allow localhost, but the second one is more specific and includes the port number
      {
        hostname: "localhost",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8001",
      },
    ],
  },
};

export default nextConfig;
