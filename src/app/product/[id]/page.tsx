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

    const [data, setData] = useState<ProductsType | null>(null)
    const [activeImage, setActiveImage] = useState("a")

    const handleFetch = async () => {
        await axios.get(`https://dummyjson.com/products/${id}`)
        .then(response => setData(response.data))
    }

    useEffect(() => {
        handleFetch()
    }, [])

    useEffect(() => {
        if (data !== null) setActiveImage(data.images[0])
    }, [data])


  return (
      <div className="h-screen w-screen flex justify-evenly items-center">
          
          <div className="flex items-center gap-8">
            <div>
                {data?.images.map(image => (
                    <img
                        src={image}
                        alt={`${data.title} Image`}
                        className="h-12 w-12 cursor-pointer py-2"
                        onClick={() => setActiveImage(image)}
                    />
                ))}
            </div>
            <img src={activeImage} alt={`${data?.title} Image`} className="h-96 w-96"/>
          </div>
          <div className="flex flex-col gap-5 w-1/3">
              <h1 className="text-3xl font-semibold">{data?.title}</h1>
              <p className="text-xl text-gray-500 font-semibold line-through"> ${data?.price},00</p>
              {data?.price && data.discountPercentage && (
                  <p className="text-xl text-blue-500 font-semibold">
                     $ {Math.round(data?.price - data?.price * (data?.discountPercentage / 100))},00
                  </p>
              )}
              <p>{data?.description}</p>
              <p>{data?.brand}</p>
              <button className="bg-blue-500 text-white uppercase p-5 w-1/3">Add to cart</button>
          </div>


    </div>
  )
}

export default page