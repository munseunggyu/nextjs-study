/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBIC_API_URL: process.env.NEXT_PUBIC_API_URL,
  },
  async redirects(){
    return [
      {
        source: '/contact',
        destination: 'https://github.com/munseunggyu',
        permanent: false
      }
    ]
  }
}

module.exports = nextConfig
