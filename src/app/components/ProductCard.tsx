
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import { BsCartPlus } from 'react-icons/bs'
import {AiOutlineEye} from 'react-icons/ai'
import {motion, AnimatePresence} from 'framer-motion'
import { CartContext } from '../context/CartContext'
import {useRouter} from 'next/navigation'

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
  const {push} = useRouter()

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
    if (data && alreadyOnCart === false) setCart([...cart, data])
  }

  const handleRedirect = () => {
    push(`/product/${data.id}`)
  }

  return (
    <div
      className="p-2  flex flex-col gap-2"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <AnimatePresence>

      {hover && (
        <>
        <motion.button
          initial={{ x: '30px', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3}}
          exit={{  opacity: 0 }}
          onClick={() => addToCart()}
          className="absolute w-1/5 h-[15%] right-8 top-7 p-4 bg-darkGreen"
        >
          <BsCartPlus fill="white" size={32}/>
        </motion.button>
          
        <motion.button
          initial={{ x: '30px', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3}}
          exit={{  opacity: 0 }}
          onClick = {() => handleRedirect()}
          className="absolute w-1/5 h-[15%] right-8 top-28 p-4 bg-white border-darkGreen border-2"
        >
            <AiOutlineEye fill="#2D382A" size={32} />
        </motion.button>
        </>
      )}
      </AnimatePresence>
      <img src={data.image} alt={`${data.title} Image`} className="h-72 border-[1px] p-20" />
      <h2 className="text-md capitalize text-gray-500">{data.category}</h2>
      <h1 className="font-bold text-md w-3/4">{data.title}</h1>
      <p className="text-md text-darkGreen font-bold">${data.price}</p>
      
    </div>
  )
}

export default ProductCard