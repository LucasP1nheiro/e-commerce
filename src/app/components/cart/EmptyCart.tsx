import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const EmptyCart = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full h-full">
          <AiOutlineShoppingCart color="#A0A0A9" size={48} />
          <h1 className="text-tertiary">Your cart is empty!</h1>
    </div>
  )
}

export default EmptyCart