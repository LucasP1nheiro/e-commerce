'use client'

import axios from 'axios';
import {  useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/card/ProductCard'
import Loading from '../loading'  
import ProductsWrapper from '../components/ProductsWrapper';


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
  const [hasProducts, setHasProducts] = useState(false)
  const searchParams = useSearchParams();
  const search = searchParams.get('q');

  

  const handleFetch = async () => {
    await axios.get(`https://fakestoreapi.com/products`)
    .then(response => setData(response.data))
      
    setIsLoading(false)
  }

  const productFound = () => {
    let flag = false
    if (search) {
      data.map(product => {
        if (product.title.toLowerCase().includes(search)) {
          console.log("achouu")
          flag = true
        }
      })
      console.log(flag)
      setHasProducts(flag)
    }
  }

  

  useEffect(() => {
    handleFetch()
    productFound()
  }, [search, productFound])

  

  
  return (
    <>

      {isLoading && (
        <div className="mt-20 w-screen flex justify-center">
          <Loading />
        </div>
      )}

      {!isLoading && hasProducts && (
        <main className="w-screen h-full my-32 flex flex-col items-center justify-center gap-10"> 
    
          <ProductsWrapper>
            {data?.map(product => search && product.title.toLowerCase().includes(search) && (
                <ProductCard data={product} key={product.id} />
            ))}
          </ProductsWrapper>
        </main>
      )}

      {!hasProducts && (
        <div className="flex flex-col w-screen h-screen items-center justify-center text-center gap-4">
            <h1 className="text-secondary text-3xl">Product not found</h1>
            <h3 className="text-tertiary text-xl">There is no product named {search}</h3>
        </div>
      )}
    </>
  )
}

export default Page