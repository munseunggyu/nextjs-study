import Link from 'next/link'
import './globals.css'
import type { Metadata } from 'next'
import { Control } from './Control'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
export interface Topics{
    id: number,
    title: string,
    body: string
}

export const url = 'http://localhost:9999/topics'
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const apiURL = process.env.NEXT_PUBIC_API_URL
  const res = await fetch(apiURL + 'topics', { cache: 'no-store' })
  const topics: Topics[] = await res.json()
  
    
  return (
    <html>
      <body>
        <h1>
          <Link href="/">WEB</Link>
        </h1>
        <ol>
            {
              topics.map(topics => {
                return(
                  <li key={topics.id}>
                    
                    <Link href={`/read/${topics.id}`}>{topics.title} </Link>
                    </li>
                )
              })
            }
          <li>
            <Link href="/read/1">html</Link>
          </li>
          <li>
            <Link href="/read/2">css</Link>
          </li>
        </ol>
        {children}
        <Control />
        </body>
    </html>
  )
}
