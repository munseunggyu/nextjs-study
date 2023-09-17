import { getProduct, getProducts } from '@/app/service/products'
import React from 'react'
type Props = {
  params: {
    slug: string
  }
}
export function generateMetadata({ params }: Props){
  return {
    title: `제품의 이름은 ${params.slug}입니다`
  }
}
export const revalidate = 3 // revalidate at most every hour
export default async function Sulg({ params: {slug} }: Props) {
  // 서버 파일에 있는 데이터중 해당 제품의 정보를 찾아서 그것을 보여준다.
  const product = await getProduct(slug)
  return (
    <div>Sulg {product?.name} </div>
  )
}

export async function generateStaticParams() {
  // 모든 제품의 페이지들을 미리 만들어 둘 것이다
  const products = await getProducts()
  return products.map(product => {
    slug: product.id
  })
}