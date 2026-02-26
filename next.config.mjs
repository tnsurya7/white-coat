/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.santiamestates.com',
      },
      {
        protocol: 'https',
        hostname: 'www.roofandfloor.com',
      },
      {
        protocol: 'https',
        hostname: '4.imimg.com',
      },
      {
        protocol: 'https',
        hostname: 'dynamic.realestateindia.com',
      },
    ],
  },
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  // Optimize production builds
  swcMinify: true,
};

export default nextConfig;
