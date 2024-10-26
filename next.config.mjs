/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/daniely' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/daniely/' : '',
};

export default nextConfig;
=======
    output: "export",
    images: {
      unoptimized: true, // Disable Image Optimization for static export
    },
  };
  
  export default nextConfig;
  
>>>>>>> parent of de6b0eb (small changes made. Tryin to fix cursor not showing.)
