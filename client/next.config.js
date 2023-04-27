/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['fakestoreapi.com'],
  }
}

module.exports = nextConfig
