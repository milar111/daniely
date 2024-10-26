/** @type {import('next').NextConfig} */
const isGithubPages = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Disable Image Optimization for static export
  },
  basePath: isGithubPages ? '/daniely' : '',
  assetPrefix: isGithubPages ? '/daniely/' : '',
  env: {
    NEXT_PUBLIC_CURSOR_PATH: isGithubPages ? '/daniely/cursor/' : '/cursor/',
  },
};

export default nextConfig;
