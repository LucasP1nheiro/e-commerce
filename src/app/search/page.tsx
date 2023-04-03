'use client'

import axios from 'axios';
import {  useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';

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
    <div className="mt-20 flex flex-col items-center">
      <h1 className="text-3xl">Showing search results for : {search}</h1>


      <div className="w-5/6 flex">
      {data?.map(product => (
        <ProductCard title={product.title} price={product.price} thumbnail={product.thumbnail} brand={product.brand} rating={product.rating} />
      ))}
      </div>
    </div>
  )
}

export default page