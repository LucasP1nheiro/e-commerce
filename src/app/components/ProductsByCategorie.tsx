'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'

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

const ProductsByCategorie = ({ categorie }: { categorie: string }) => {
    
    const [data, setData] = useState<ProductsType[] | null>([])
    

    const handleFetch = async () => {
        await axios.get(`https://fakestoreapi.com/products/category/${categorie}`) 
            .then(response => setData(response.data))
    }
    
    useEffect(() => {
        handleFetch()
    }, [])
    

  return (
      <div className="mt-10 w-5/6">
          <h1 className="text-3xl mb-5 capitalize">{categorie}</h1>
          <div className="flex gap-4">
          {data?.map(product => (
              <ProductCard title={product.title} category={product.category}  image={product.image} price={product.price}  id={product.id} key={product.id} />
          ))}
          </div>
      </div>
  )
}

export default ProductsByCategorie