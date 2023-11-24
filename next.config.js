/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.devtool = "eval-source-map";
    }

    return config;
  },

  experimental: {
    serverSourceMaps: true,
  },
};

module.exports = nextConfig;
