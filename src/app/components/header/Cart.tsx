import React, { useContext } from 'react'
import { Button } from '../ui/button'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import {CartContext} from '../../context/CartContext'

const Cart = () => {
    const { cart } = useContext(CartContext)

    const handleCartSize = () => {
        if (cart.length < 10) return cart.length

        return "9+"
    }

  return (
      <>
        <Button
          className='cursor-pointer border hover:bg-white/10 flex items-center relative top-3 p-2'
          size="icon"
          asChild
        >
              <AiOutlineShoppingCart  fill='#fff' className="relative" />
        </Button>
        <p className="bg-white/10 h-6 w-6 p-[4px] rounded-full flex items-center justify-center text-white text-xs relative left-7 bottom-10 z-20">
            {handleCartSize()}
        </p>
      </>
  )
}

export default Cart