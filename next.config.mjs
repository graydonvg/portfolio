/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "graydonvongossler.com" }],
        destination: "https://www.graydonvongossler.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
