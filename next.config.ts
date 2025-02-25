/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your existing config settings...
  images: {
    domains: ['www.chach-a.com'],
  },
  // Add this ESLint configuration
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig