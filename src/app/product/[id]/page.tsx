'use client'

import axios from 'axios'
import {usePathname} from 'next/navigation'
import { useContext, useEffect, useState } from 'react'
import {CartContext} from '../../context/CartContext'
import Loading from '../../loading'

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

const page = () => {
    // getting id like this while useParams doesn't work
    const path = usePathname()
    const id = path.replace('/product/', '')
    const [data, setData] = useState<ProductsType | null>(null)
    const { cart, setCart } = useContext(CartContext)
    const [alreadyOnCart, setAlreadyOnCart] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const handleFetch = async () => {
        await axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response => setData(response.data))
        
        setIsLoading(false)
    }

    const addToCart = () => {
        if (data && alreadyOnCart === false) setCart([...cart, data])
    }

    useEffect(() => {
        handleFetch()
    }, [])

    // This useEffect prevents the product from  being added two times on the cart
    useEffect(() => {
        if (data) cart.map(product => {
            if (product.id === data.id) {
                setAlreadyOnCart(true)
            }
        })
        if (cart.length === 0) setAlreadyOnCart(false)
    }, [cart, data])

  return (
      <>
          {isLoading && (
              <div className="mt-20 w-screen h-screen flex justify-center">
              <Loading/>
            </div>
          )}
          
          {!isLoading && (
            <div className="h-screen w-screen flex justify-around items-center">
          
              <img     
              src={data?.image}
              alt={`${data?.title} Image`}
              className="h-80 w-80 cursor-pointer py-2"
              />
              <div className="flex flex-col gap-5 w-1/3">
                    <h1 className="text-3xl text-darkGreen font-semibold">{data?.title}</h1>
                    <p>{data?.description}</p>
                  <p className="text-xl text-black font-semibold"> ${data?.price},00</p>
                  <button
                      onClick={() => addToCart()}
                      className="bg-darkGreen text-white uppercase p-5 w-1/3"
                  >
                      Add to cart
                  </button>
              </div>
          </div>
          )}
      </>
  )
}

export default page