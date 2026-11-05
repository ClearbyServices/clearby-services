import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.clearbyservices.com",
          },
        ],
        destination: "https://clearbyservices.com/:path*",
        permanent: true, // This triggers a proper 301 Permanent Redirect
      },
    ];
  },
};

export default nextConfig;