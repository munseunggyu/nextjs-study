import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Seo from '../components/Seo'

const Home: NextPage = () => {
  return (
    <>
      <Seo title='Home'/>
      <h1>
        home
      </h1>
    </>
  )
}

export default Home
