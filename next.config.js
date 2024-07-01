const withMDX = require('@next/mdx')()

const withPWA = require('@ducanh2912/next-pwa').default({
    dest: 'public',
    cacheOnFrontendNav: true,
    aggressiveFrontEndNavCaching: true,
    reloadOnOnline: true,
    disable: false,
    workboxOptions: {
        disabledDevLogs: true,
    }
})

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

module.exports = withMDX(withMDX(nextConfig))
