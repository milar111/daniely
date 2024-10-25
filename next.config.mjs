/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
      unoptimized: true, // Disable Image Optimization for static export
    },
  };
  
  export default nextConfig;
  