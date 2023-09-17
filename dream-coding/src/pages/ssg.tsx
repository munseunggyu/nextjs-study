import { getProducts } from '@/app/service/products'
import Link from 'next/link'
import React from 'react'
interface IProps {
  products: IProducts[]
}

interface IProducts{
  id: string,
  name: string,
}
export default function SSGPage({products} :IProps) {
  return (
    <div>
      <h2>제품 소개 페이지</h2>
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

// SSG로 동작
export async function getStaticProps () {
  const products = await getProducts()

  return {
    props :{
      products
    },
    revalidate: 10
  }
}