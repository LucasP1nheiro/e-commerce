'use client'

import axios from 'axios';
import {  useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

interface ProductsType   {
  id: number,
  title: string,
  description: string,
  price: number,
  discountPercentage: number,
  rating: number,
  stock: number,
  brand: string,
  category: string,
  thumbnail: string,
  images: string[]
}

const page = () => {
  const [data, setData] = useState<ProductsType[]>([])

  const searchParams = useSearchParams();

  const search = searchParams.get('q');

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/search?q=${search}`)
    .then(response => setData(response.data.products) )
  }, [])

  return (
    <>
      <h1>Teste</h1>


      {data?.map(product => (
        <h2>{product.title}</h2>
      ))}
    </>
  )
}

export default page