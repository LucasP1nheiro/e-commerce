'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'

interface ProductsType {
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

const ProductsByCategorie = ({ categorie }: { categorie: string }) => {
    
    const [data, setData] = useState<ProductsType[]>([])

    const handleFetch = async () => {
        await axios.get(`https://dummyjson.com/products/category/${categorie}`) 
        .then(response => setData(response.data.products))
    }
    
    useEffect(() => {
        handleFetch()
    }, [])
    

  return (
      <div className="mt-10 w-5/6">
          <h1 className="text-3xl mb-5">{categorie}</h1>
          <div className="flex gap-4">
          {data?.map(product => (
              <ProductCard title={product.title} brand={product.brand} thumbnail={product.thumbnail} price={product.price} rating={product.rating} id={product.id} key={product.id} />
          ))}
          </div>
      </div>
  )
}

export default ProductsByCategorie