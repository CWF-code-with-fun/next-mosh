import React from 'react'

interface Props {
params:{
    slug: string[];

}}
const Product = ({params:{slug}}:Props) => {
  return (
    <div>{
      slug.map((slug, index) =><div key={slug}>{slug}</div>)
      }</div>
  )
}

export default Product