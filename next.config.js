const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    images: {
        remotePatterns: [
            {
                hostname: 'github.com',
            },
            {
                hostname: 'api.microlink.io',
            },
        ]
    }
};

module.exports = withMDX(nextConfig)
