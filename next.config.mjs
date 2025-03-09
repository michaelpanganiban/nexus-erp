/** @type {import('next').NextConfig} */
// next.config.js
const nextConfig = {
    basePath: '/nexus-erp',
    assetPrefix: '/nexus-erp',
    output: 'export',

    experimental: {
        appDir: true, // Enable App Directory feature if you are using it
    },
};

export default nextConfig;
