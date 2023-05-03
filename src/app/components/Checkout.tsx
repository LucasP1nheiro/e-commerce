'use client'

import React, { useContext } from 'react'
import { HasCheckedOutContext } from '../context/HasCheckedOut'
import Check from './Check'
import { AiOutlineClose } from 'react-icons/ai'
import {CartContext} from '../context/CartContext'
import { TotalPriceContext } from '../context/TotalPriceContext'

const Checkout = () => {
  const { hasCheckedOut, setHasCheckedOut } = useContext(HasCheckedOutContext)
  const { setCart } = useContext(CartContext)
  const {setTotalPrice} = useContext(TotalPriceContext)
  
  const closeModal = () => {
    setHasCheckedOut(false)
    setCart([])
    setTotalPrice(0)
  }

  return (
      <>
          {hasCheckedOut && (
              <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
              <div className="bg-white w-1/2 h-1/2 flex flex-col items-center justify-evenly  shadow-2xl">
                  <div className="w-3/4 flex justify-end">
                    <AiOutlineClose
                        size={'64px'}                
                        className="cursor-pointer"
                        fill={'#22c55e'}
                        onClick={() => closeModal()}
                    /> 
                  </div>
                  <Check />
                <p className="text-green-500 text-2xl font-semibold">Thank you for your purchase! Your order has been confirmed.</p>
            </div>
        </div>
        )}
      </>
  )
}

export default Checkout