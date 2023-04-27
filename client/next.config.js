/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['assets.myntassets.com'],
  }
}

module.exports = nextConfig
