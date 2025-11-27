const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
      },
    ],
  },
  webpack: (config) => {
    config.resolve.alias['bidi-js$'] = path.resolve(__dirname, 'node_modules/bidi-js/dist/bidi.js');
    return config;
  },
};

module.exports = nextConfig;

