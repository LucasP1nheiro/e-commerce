'use client'

import { BsArrowRight } from 'react-icons/bs'
import {RiDeleteBin5Line} from 'react-icons/ri'
import { IsModalOpenContext } from '../context/IsModalOpenContext'
import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import {motion, AnimatePresence} from 'framer-motion'
import CartProduct from './CartProduct'
import {TotalPriceContext} from '../context/TotalPriceContext'
import { HasCheckedOutContext } from '../context/HasCheckedOut'

const CartModal = () => {
    const {isModalOpen, setIsModalOpen} = useContext(IsModalOpenContext)
    const { cart, setCart } = useContext(CartContext)
    const { totalPrice, setTotalPrice } = useContext(TotalPriceContext)
    const {setHasCheckedOut} = useContext(HasCheckedOutContext)


    const deleteCart = () => {
        setCart([])
        setTotalPrice(0)
    }

    const handleCheckout = () => {
        setHasCheckedOut(true)
        setIsModalOpen(false)
    }

   
    
    return (
        <>
        <AnimatePresence>
        {isModalOpen && (
            <motion.div
                    initial={{ x: '100vw' }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.7 }}
                    exit={{ x: '100vw' }}
                    className="w-1/3 h-screen fixed right-0 top-0 bg-white z-20 p-8 shadow-lg shadow-black flex flex-col items-center justify-around"         
            >
                <div className="flex h-[10%] w-full justify-between items-center p-2">
                    <h1 className="text-2xl font-semibold uppercase">Your order</h1>  
                    <BsArrowRight
                        size={'32px'}
                        className="cursor-pointer"
                        onClick={() => setIsModalOpen(false)}
                        fill={'#990011FF'}    
                    />
                    
                </div>
                    
                    <main className="h-[70%] w-full border-b-strongRed border-b-[1px] overflow-scroll">
                        {cart.map((product, i) => (
                            <CartProduct
                                key={product.id}
                                id={product.id}
                                image={product.image}
                                title={product.title}
                                price={product.price}
                            />
                        ))}
                    </main>
                    
                    <div className="h-[10%] flex flex-col w-2/3 gap-4 items-center justify-between">
                        <div className="w-full flex justify-between items-center ">
                            <p className="text-2xl uppercase font-semibold">Total: ${Math.round(totalPrice)},00</p>    

                            <button
                                onClick={() => deleteCart()}
                                className="p-4 bg-strongRed"
                            >
                                <RiDeleteBin5Line fill="white" />
                            </button>
                        </div>

                        <button
                                className="bg-strongRed text-white w-full py-4"
                                onClick={() => handleCheckout()}
                                disabled={cart.length === 0}
                        >
                            Checkout
                        </button>
                    </div>
            </motion.div>
        )}
        </AnimatePresence>
        </>
    )
}

export default CartModal