
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import { BsCartPlus } from 'react-icons/bs'
import {motion, AnimatePresence} from 'framer-motion'
import { CartContext } from '../context/CartContext'
import { TotalPriceContext } from '../context/TotalPriceContext'

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

interface ProductCardProps {
  data: ProductsType
}

const ProductCard = ({data}: ProductCardProps) => {
  const [hover, setHover] = useState(false)
  const { cart, setCart } = useContext(CartContext)
  const [alreadyOnCart, setAlreadyOnCart] = useState(false)
  const { totalPrice, setTotalPrice } = useContext(TotalPriceContext)

  // This useEffect prevents the product from  being added two times on the cart
  useEffect(() => {
    if (data) cart.map(product => {
        if (product.id === data.id) {
            setAlreadyOnCart(true)
        }
    })
    if (cart.length === 0) setAlreadyOnCart(false)
}, [cart, data])

  const addToCart = () => {
    if (data && alreadyOnCart === false) {
      setCart([...cart, data])
      setTotalPrice(totalPrice + data.price)
    }
  }

  

  function limitStringLength(str: string): string {
    if (str.length <= 50) {
      return str;
    }
  
    return str.slice(0, 50) + "...";
  }

  return (
    <div
      className="p-2 h-[510px] flex flex-col gap-8 w-[320px] border-[1px] border-gray-400 border-opacity-20 rounded-sm hover:shadow-lg  hover:shadow-gray-400"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      
      {data && (
        <Link
        href={`/product/${data.id}`}
        className="flex flex-col gap-2"
      >
        <img src={data.image} alt={`${data.title} Image`} className="h-72 p-20" />
        <h2 className="text-md capitalize text-gray-500">{data.category}</h2>
        <h1 className="font-bold text-md h-12">{limitStringLength(data.title)}</h1>
        <p className="text-2xl text-strongRed font-bold">${data.price}</p>
      </Link>
      )}
      
      <AnimatePresence>

        {hover && (
          <>
          <motion.button
            initial={{  opacity: 0 }}
            animate={{  opacity: 1 }}
            transition={{ duration: 0.3}}
            exit={{  opacity: 0 }}
            onClick={() => addToCart()}
            className="flex justify-center items-center gap-4 w-full  p-2 bg-strongRed"
            >
              
              <BsCartPlus fill="white" size={32} />
              <p className="text-white uppercase font-semibold">Add to cart</p>
          </motion.button>

          
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ProductCard