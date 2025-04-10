/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  staticPageGenerationTimeout: 180,
  swcMinify: true,
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: [],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
        stream: false,
        util: false,
        os: false,
      };
    }
    return config;
  },
}

module.exports = nextConfig 