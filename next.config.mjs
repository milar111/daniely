//localhost

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: "export",
//   images: {
//     unoptimized: true,
//   },
//   basePath: process.env.NODE_ENV === 'production' ? '/daniely' : '',
//   assetPrefix: process.env.NODE_ENV === 'production' ? '/daniely/' : '',
// };

// export default nextConfig;


//deployement

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: false,
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  basePath: '/daniely',
  assetPrefix: '/daniely/',
};

export default nextConfig;