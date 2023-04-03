'use client'

import axios from 'axios';
import {  useSearchParams } from 'next/navigation'
import React, { useCallback, useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import Loading from '../loading'

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
  const [isLoading, setIsLoading] = useState(false)
  const searchParams = useSearchParams();

  const search = searchParams.get('q');

  const handleFetch = async () => {
    setIsLoading(true)

    await axios.get(`https://dummyjson.com/products/search?q=${search}`)
    .then(response => setData(response.data.products))
      
    setIsLoading(false)
  }

  useEffect(() => {
    
    handleFetch()
  }, [])

  
  return (
    <>
      {isLoading && (
        <div className="mt-20 w-screen flex justify-center">
          <Loading />
        </div>
      )}

      {!isLoading && (
        <main className="mt-20 flex flex-col items-center gap-10">
          <h1 className="text-3xl">Showing search results for : {search}</h1>
    
    
          <div className="w-5/6 flex gap-10 flex-wrap items-center ">
          {data?.map(product => (
            <ProductCard title={product.title} price={product.price} thumbnail={product.thumbnail} brand={product.brand} rating={product.rating} />
          ))}
          </div>
        </main>
      )}
    </>
  )
}

export default page