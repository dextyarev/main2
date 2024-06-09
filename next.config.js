/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        domains: ["utfs.io", "i.imgur.com", "picabox.ru"],
    },
    experimental: {
        serverActions: true,
    }
}

module.exports = nextConfig
