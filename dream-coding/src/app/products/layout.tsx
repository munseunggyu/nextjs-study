// import styles from './layout.module.css'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '제품 소개',
  description: '제품 소개 페이지.'
}

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ul className='gen'>
        <li>
          <Link href={'/products/man'}>
            남성 옷
          </Link>
        </li>
        <li>
          <Link href={'/products/woman'}>
            여성 옷
          </Link>
        </li>
      </ul>
      {children}
      <style>
        {`
          .gen{
            display: flex;
            gap: 12px;
            padding: 16px;
            border: 1px solid gray;
          }
        `}  
      </style>
    </>
  )
}
