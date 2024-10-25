/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/daniely' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/daniely/' : '',
};

export default nextConfig;
