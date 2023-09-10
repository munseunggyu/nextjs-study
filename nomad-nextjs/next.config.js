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
  },
  async rewrites(){
    return [
      {
        source: '/api/movies',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBIC_API_URL}`
      },
      {
        source: '/api/movies/:id',
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${process.env.NEXT_PUBIC_API_URL}`
      }
    ]
  }
}

module.exports = nextConfig
