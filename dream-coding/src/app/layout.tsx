import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import styles from './layout.module.css'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en">
      <body className={inter.className}>
        <header className={styles.header}>
          <h1>
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
