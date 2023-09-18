import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import styles from './layout.module.css'
import Link from 'next/link'
import { Open_Sans } from 'next/font/google'
import { Nanum_Gothic } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const sans = Open_Sans({ subsets: ['latin'] })
const gothic = Nanum_Gothic({ subsets: ['latin'], weight: '700' })

export const metadata: Metadata = {
  title: '제품 사이트',
  description: '판매 사이트',
  icons :{
    icon: '/favicoin.ico'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={sans.className}>
      <body className={inter.className}>
        <header className={styles.header}>
          <h1 className={gothic.className}>
            Demo Note App
          </h1>
          <nav className={styles.nav}>
            <Link href='/'>
             home
            </Link>
            <Link href='/contact'>
              contanct
            </Link>
            <Link href='/products'>
              product
            </Link>
          </nav>
        </header>
      {children}
      </body>
    </html>
  )
}
