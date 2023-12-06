/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['i.ibb.co'],
        formats: ['image/avif', 'image/webp'],
    },
    reactStrictMode: true,
};

module.exports = nextConfig;
