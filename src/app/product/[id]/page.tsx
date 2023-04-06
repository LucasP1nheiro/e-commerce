'use client'

import axios from 'axios'
import {usePathname} from 'next/navigation'
import { useEffect, useState } from 'react'

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

const page = () => {

    // getting id like this while useParams doesn't work
    const path = usePathname()
    const id = path.replace('/product/', '')
    const [data, setData] = useState<ProductsType | null >(null)  

    const handleFetch = async () => {
        await axios.get(`https://dummyjson.com/products/${id}`)
        .then(response => setData(response.data))
    }

    useEffect(() => {
        handleFetch()
    }, [])
  return (
      <div className="mt-20">
          
          <h1>{data?.title}</h1>
          <p>{data?.description}</p>

    </div>
  )
}

export default page