
import Link from 'next/link'
import React from 'react'
import Counter from '../components/Counter'
import { getProducts } from '../service/products'
import axios from 'axios'
import MeowArticle from '../components/MeowArticle'
import Image from 'next/image'
// import cloth from '/public/next.svg'
import cloth from '/public/clothes.jpg'

type IProps = {
  props: {
    data: string
  }
}
export default async function ProductsPage() {
  // 서버 파일 (데이터베이스)에 있는 제품 리스트를 읽어와서, 그것을 보여준다
  const products = await getProducts()
  return (
    <div>
      <h2>제품 소개 페이지</h2>
      <Counter />
      <Image src={cloth} alt='' />
      <Image
        src="https://s3.amazonaws.com/my-bucket/profile.png"
        alt="Picture of the author"
        width={400}
        height={400}
      />
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
      <MeowArticle />
    </div>
  )
}


// export async function getStaticProps() {
//   const res = await axios('https://meowfacts.herokuapp.com')
//   const data = res.data.data[0]
//   return {
//     props: {
//       data
//     }
//   }
// }

