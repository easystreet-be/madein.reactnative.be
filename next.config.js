/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: false,
  env: {
    locale: 'nl',
    basePath: '/react-native',
  },
  images: {
    unoptimized: true,
    domains: ['api.madein.reactnative.be'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = nextConfig;
