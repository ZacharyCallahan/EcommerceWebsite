/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['assets.myntassets.com', 'tailwindui.com'],

  }
}

module.exports = nextConfig
