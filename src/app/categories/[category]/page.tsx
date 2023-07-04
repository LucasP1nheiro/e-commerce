'use client'

import axios from "axios"
import { useEffect, useState } from "react"
import ProductCard from "../../components/card/ProductCard"
import CardSkeleton from "../../components/card/CardSkeleton"
import Loading from "../../loading"
import ProductsWrapper from "../../components/ProductsWrapper"

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


interface Params {
    params: {
        category: string
    }
}

const Page = ({ params: { category } }: Params) => {
  const [data, setData] = useState<ProductsType[] | null>([])
  const [isLoading, setIsLoading] = useState(true)
    

  const handleFetch = async () => {
      await axios.get(`https://fakestoreapi.com/products/category/${category}`) 
      .then(response => setData(response.data))
    
      setIsLoading(false)
  }
  
  const handleCategoyName = (name: string) => {
    const decodedString = decodeURIComponent(name.replace(/\+/g, ' '));
    return decodedString;
  }
    
  useEffect(() => {
      handleFetch()
  }, [])
     

  return (
    <main className="min-h-screen py-36 w-screen bg-primary flex flex-col items-center gap-12 p-4 overflow-x-hidden">
        <div className=" w-full sm:w-4/5 flex flex-col gap-4 justify-start text-center md:text-start">
            <h1 className="text-secondary capitalize text-2xl md:text-4xl font-black">{handleCategoyName(category)}</h1>
            <h2 className="text-tertiary text-md">Buy the best {handleCategoyName(category)} available on the market.</h2>
        </div>
    
        {isLoading && (<Loading />)}
      
        {!isLoading && (
            <ProductsWrapper>
                {data?.map(product => (
                  <ProductCard data={product} key={product.id}/>
                ))}
            </ProductsWrapper>
         )}
    </main>
  )
}

export default Page


