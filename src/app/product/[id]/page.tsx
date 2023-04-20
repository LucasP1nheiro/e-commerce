'use client'

import axios from 'axios'
import {usePathname} from 'next/navigation'
import { useContext, useEffect, useState } from 'react'
import {CartContext} from '../../context/CartContext'
import Loading from '../../loading'
import {TotalPriceContext} from '../../context/TotalPriceContext'
import ProductsByCategorie from '../../components/ProductsByCategorie'
import { BsCartPlus } from 'react-icons/bs'

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
    const { totalPrice, setTotalPrice } = useContext(TotalPriceContext)

    const handleFetch = async () => {
        await axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response => setData(response.data))
        
        setIsLoading(false)
    }

    const addToCart = () => {
        if (data && alreadyOnCart === false) {
          setCart([...cart, data])
          setTotalPrice(totalPrice + data.price)
        }
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

    useEffect(() => {
        window.scroll(0,0)
    }, [data?.title])

  return (
      <>
          {isLoading && (
              <div className="mt-20 w-screen h-screen flex justify-center">
              <Loading/>
            </div>
          )}
          
          {!isLoading && (
            <div className="min-h-screen w-screen flex flex-col items-center md:py-12 py-32 gap-24">
          
              <div className="h-screen w-screen flex xl:justify-around justify-evenly items-center flex-col xl:flex-row gap-12 md:gap-0">
                <img     
                src={data?.image}
                alt={`${data?.title} Image`}
                className="md:h-80 md:w-80  h-44 w-44 cursor-pointer py-2"
                />
                <div className="flex flex-col gap-8 2xl:w-1/3 xl:w-1/2 w-full p-8">
                        <h1 className="xl:text-3xl sm:text-2xl text-lg text-strongRed font-semibold">{data?.title}</h1>
                        <p className="text-lg">{data?.description}</p>
                    <p className="text-2xl text-black font-bold"> ${data?.price}</p>
                    <button
                    onClick={() => addToCart()}
                    className="flex justify-center items-center gap-4 xl:w-2/5  sm:w-1/2 w-full p-4 bg-strongRed"
                    >       
                        <BsCartPlus fill="white" size={32} />
                        <p className="text-white uppercase font-semibold">Add to cart</p>
                    </button>
                </div>
              </div>
                  
                <div className="flex flex-col xl:w-4/5 w-full p-2">
                    <h1 className="xl:text-5xl text-2xl  text-strongRed xl:ml-24 ml-12 uppercase font-semibold">Similar Products</h1>
                    {data && <ProductsByCategorie categorie={data?.category} />} 
                </div>
          </div>
          )}
      </>
  )
}

export default page