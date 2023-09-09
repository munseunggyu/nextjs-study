import NavBar from '../components/NavBar'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />

      <style global jsx>
        {`
          h1{
            font-size: 24px;
          }
        `}
      </style>
    </>
  )
}

export default MyApp
