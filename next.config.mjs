/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains:["cdn.sanity.io","images.pexels.com"]
    },
    typescript: {
        ignoreBuildErrors: true,
      },
      eslint: {
        ignoreDuringBuilds: true,
      },
};

export default nextConfig;
