/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // async rewrites() {
  //   return [
  //     {
  //       source: "/uploads/:path*",
  //       destination: "/public/uploads/:path*",
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
