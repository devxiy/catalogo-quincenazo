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
  async redirects() {
    return [
      {
        source: '/',
        has: [{ type: 'host', value: '(www\\.)?akiquincenazo\\.com' }],
        destination: 'https://www.aki.com.ec/quincenazo?categoria=black-days',
        permanent: false,
      },
    ];
  },
  webpack: (config) => {
    config.resolve.alias['bidi-js$'] = path.resolve(__dirname, 'node_modules/bidi-js/dist/bidi.js');
    return config;
  },
};

module.exports = nextConfig;

