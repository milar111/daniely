/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Disable Image Optimization for static export
  },
  basePath: '/daniely', // Add repository name for GitHub Pages
  assetPrefix: '/daniely/', // Ensure asset paths are prefixed with repository name
};

export default nextConfig;
