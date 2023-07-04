
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import { BsCartPlus } from 'react-icons/bs'
import {motion, AnimatePresence} from 'framer-motion'
import { CartContext } from '../../context/CartContext'
import { TotalPriceContext } from '../../context/TotalPriceContext'

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
    if (str.length <= 32) {
      return str;
    }
  
    return str.slice(0, 32) + "...";
  }

  return (
    <div
      className="p-2 flex flex-col gap-4 h-[430px] w-[320px] border-[1px] border-gray-400 border-opacity-20 rounded-sm justify-between"
    >
        <Link
          href={`/product/${data.id}`}
          className="flex flex-col gap-4 rounded-md h-3/4"
        >
          <div className="h-72 min-h-3/4 bg-white flex items-center justify-center">
            <img src={data.image} alt={`${data.title} Image`} className="h-full px-12 py-20 bg-center" />
          </div>
          <h1 className="text-md text-secondary">{limitStringLength(data.title)}</h1>
          <p className="text-md  text-tertiary">${data.price}</p>
        </Link>
      
  
      <div className="w-full flex items-center gap-4">
        <Link
            href={`/product/${data.id}`}
            className="rounded-md bg-primary border p-2 w-full flex items-center justify-center hover:bg-white/10 duration-300"
          >
            <p className="text-secondary text-sm">More details</p>
          </Link>
            
          <button 
            onClick={() => addToCart()}
            className="flex justify-center items-center w-full p-2 bg-secondary rounded-md hover:bg-secondary/90 duration-300"
          >
              <p className="text-black text-sm">Add to cart</p>
          </button>
      </div>
    </div>
  )
}

export default ProductCard