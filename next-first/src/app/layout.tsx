import Link from 'next/link'
import './globals.css'
import type { Metadata } from 'next'

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
  
  const res = await fetch(url)
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
                    {topics.title}
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
        <ul>
          <li>
            <Link href="/create">Create</Link>
          </li>
          <li>
            <Link href="/upadate/1">Upadate</Link>
          </li>
          <li>
            <input type="button" value="delete" />
          </li>
        </ul>
        </body>
    </html>
  )
}
