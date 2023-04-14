'use client'

import React, { useContext } from 'react'
import { HasCheckedOutContext } from '../context/HasCheckedOut'
import Check from './Check'
import { AiOutlineClose } from 'react-icons/ai'

const Checkout = () => {
  const {hasCheckedOut, setHasCheckedOut} = useContext(HasCheckedOutContext)

  return (
      <>
          {hasCheckedOut && (
              <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
              <div className="bg-green-500 w-1/2 h-1/2 flex flex-col items-center justify-evenly  shadow-2xl">
                  <div className="w-3/4 flex justify-end">
                    <AiOutlineClose
                        size={'64px'}                
                        className="cursor-pointer"
                        fill={'#ffffff'}
                        onClick={() => setHasCheckedOut(false)}
                    /> 
                  </div>
                  <Check />
                <h1 className="text-white text-2xl font-semibold">Thank you for your purchase! Your order has been confirmed.</h1>
            </div>
        </div>
        )}
      </>
  )
}

export default Checkout