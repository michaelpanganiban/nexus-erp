/** @type {import('next').NextConfig} */
// next.config.js
const nextConfig = {
    webpackDevMiddleware: config => {
        config.watchOptions = {
          ...config.watchOptions,
          poll: 1000,  // Enable polling for changes (useful when file syncing isn't working well)
          aggregateTimeout: 300,
        };
        return config;
      },
};

export default nextConfig;
