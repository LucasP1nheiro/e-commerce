'use client'

import { BsArrowRight } from 'react-icons/bs'
import {RiDeleteBin5Line} from 'react-icons/ri'
import { IsModalOpenContext } from '../context/IsModalOpenContext'
import { useContext, useState } from 'react'
import {CartContext} from '../context/CartContext'
import CartProduct from './CartProduct'

const CartModal = () => {
    const {isModalOpen, setIsModalOpen} = useContext(IsModalOpenContext)
    const { cart, setCart } = useContext(CartContext)
    const [totalPrice, setTotalPrice] = useState(0)

    const deleteCart = () => {
        setCart([])
        setTotalPrice(0)
    }

    const handleTotalPrice = (price: number) => {
        setTotalPrice(totalPrice + price)

        console.log(price, totalPrice)
    }

    
    return (
        <>
        {isModalOpen && (
            <div
            className="w-1/3 h-screen fixed right-0 top-0 bg-white z-20 p-8 shadow-lg shadow-black flex flex-col items-center justify-around"
            onBlur={() => setIsModalOpen(false)}
            >
                <div className="flex h-[10%] w-full justify-between items-center p-2">
                    <h1 className="text-2xl font-semibold uppercase">Your order</h1>  
                    <BsArrowRight
                        size={'32px'}
                        className="cursor-pointer"
                        onClick={() => setIsModalOpen(!isModalOpen)}
                        fill={'#2D382A'}    
                    />
                    
                </div>
                    
                    <main className="h-[70%] border-b-darkGreen border-b-[1px] overflow-scroll">
                        {cart.map(product => (
                            <CartProduct
                                key={product.id}
                                id={product.id}
                                image={product.image}
                                title={product.title}
                                price={product.price}
                                handleTotalPrice={handleTotalPrice}
                            />
                        ))}
                    </main>
                    
                    <div className="h-[10%] flex flex-col w-2/3 gap-4 items-center justify-between">
                        <div className="w-full flex justify-between items-center ">
                            <p className="text-2xl uppercase font-semibold">Total: ${Math.round(totalPrice)},00</p>    

                            <button
                                onClick={() => deleteCart()}
                                className="p-4 bg-darkGreen"
                            >
                                <RiDeleteBin5Line fill="white" />
                            </button>
                        </div>

                        <button
                            className="bg-darkGreen text-white w-full py-4"
                        >
                            Checkout
                        </button>
                    </div>
            </div>
        )}
        </>
    )
}

export default CartModal