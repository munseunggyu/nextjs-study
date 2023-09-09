import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'

const Home: NextPage = () => {
  return (
    <div>
      <NavBar />
      <h1>
        home
      </h1>
    </div>
  )
}

export default Home
