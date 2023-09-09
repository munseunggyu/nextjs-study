# NextJs Study

## env
- .env.local 파일 생성
- .env.local파일에 NEXT_PUBIC_KEY_NAME=KEY 키 설정
- next.config.js 파일에 NEXT_PUBIC_KEY: process.env.NEXT_PUBIC_KEY, 설정
```js
const nextConfig = {
  env: {
    NEXT_PUBIC_API_URL: process.env.NEXT_PUBIC_API_URL,
  }
}
```
```js
  async rewrites(){
    return [
      {
        source: '/api/movies',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBIC_API_URL}`
      }
    ]
  }
```