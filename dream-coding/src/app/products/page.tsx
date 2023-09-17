import Link from 'next/link'
import React from 'react'
import Counter from '../components/Counter'
import { getProducts } from '../service/products'

export default async function ProductsPage() {
  console.log('서버')
  // 서버 파일 (데이터베이스)에 있는 제품 리스트를 읽어와서, 그것을 보여준다
  const products = await getProducts()
  console.log(products)
  return (
    <div>
      <h2>제품 소개 페이지</h2>
      <Counter />
      <ul>
        {
          products.map(val => (
            <li key={val.id}>
              <Link href={`products/${val.id}`}  >
                {val.name}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
