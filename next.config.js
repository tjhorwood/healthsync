/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Emit a fully static site into ./out for Cloudflare Pages
  trailingSlash: true, // Emit dir/index.html so routes resolve on static hosts
  images: { unoptimized: true }, // Required: no image optimization server on Pages
};

module.exports = nextConfig;
