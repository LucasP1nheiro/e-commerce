'use client'

import axios from 'axios';
import {  useSearchParams } from 'next/navigation'
import React, { useCallback, useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import Loading from '../loading'
import Header from '../components/Header';


interface ProductsType {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
    rate: number,
    count: number
  }
}

const Page = () => {
  const [data, setData] = useState<ProductsType[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const searchParams = useSearchParams();
  const search = searchParams.get('q');

  

  const handleFetch = async () => {
    await axios.get(`https://fakestoreapi.com/products`)
    .then(response => setData(response.data))
      
    setIsLoading(false)
  }

  useEffect(() => {
    handleFetch()
  }, [search])

  
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
          {data?.map(product => search && product.title.toLowerCase().includes(search) && (
            <ProductCard data={product} key={product.id} />
          ))}
          </div>

        </main>
      )}
    </>
  )
}

export default Page