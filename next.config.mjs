import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
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

export default nextConfig;
