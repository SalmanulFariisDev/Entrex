import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    // ❗ Prevent ESLint errors from blocking Vercel builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;




