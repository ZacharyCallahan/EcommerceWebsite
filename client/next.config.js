/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverActions: true,
  },
  images: {
    domains: ['assets.myntassets.com', 'tailwindui.com'],

  }
}

module.exports = nextConfig
