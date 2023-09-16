import Link from 'next/link'
import React from 'react'

export default function ProductsPage() {
  const data = ['shirt', 'pants', 'skirt', 'shoes']
  return (
    <div>
      <h2>제품 소개 페이지</h2>
      <ul>
        {
          data.map(val => (
            <li key={val}>
              <Link href={`products/${val}`}  >
                {val}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
