/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBIC_API_URL: process.env.NEXT_PUBIC_API_URL,
  }
}

module.exports = nextConfig
