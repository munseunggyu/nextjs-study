import React from 'react'
type Props = {
  params: {
    slug: string
  }
}
export default function Sulg({ params }: Props) {
  return (
    <div>Sulg {params.slug} </div>
  )
}
