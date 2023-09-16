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

export default function Sulg({ params }: Props) {
  return (
    <div>Sulg {params.slug} </div>
  )
}

export function generateStaticParams() {
  const products = ['pants', 'skrit']
  return products.map(product => {
    slug: product
  })
}