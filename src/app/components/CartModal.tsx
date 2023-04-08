'use client'

import { AiOutlineClose } from 'react-icons/ai'
import {RiDeleteBin5Line} from 'react-icons/ri'
import { IsModalOpenContext } from '../context/IsModalOpenContext'
import { useContext } from 'react'
import {CartContext} from '../context/CartContext'
import CartProduct from './CartProduct'

const CartModal = () => {
    const {isModalOpen, setIsModalOpen} = useContext(IsModalOpenContext)
    const { cart, setCart } = useContext(CartContext)

    const deleteCart = () => {
        setCart([])
    }
    return (
        <>
        {isModalOpen && (
            <div
            className="w-1/3 h-screen fixed right-0 top-0 bg-white z-20 p-8"
            onBlur={() => setIsModalOpen(false)}
            >
                <div className="flex w-full justify-between items-center p-2 border-b-gray-200 border-b-[1px]">
                    <h1 className="text-2xl ">Cart</h1>  
                    <AiOutlineClose
                        size={'32px'}
                        className="cursor-pointer"
                        onClick={() => setIsModalOpen(!isModalOpen)}
                    />
                </div>
                    
                    {cart.map(product => (
                        <CartProduct
                            key={product.id}
                            id={product.id}
                            thumbnail={product.thumbnail}
                            title={product.title}
                            price={Math.round(product?.price - product?.price * (product?.discountPercentage / 100))}
                        />
                    ))}
                    
                    <button
                        onClick={() => deleteCart()}
                        className="p-4 bg-red-500"
                    >
                        <RiDeleteBin5Line fill="white" />
                    </button>
            </div>
        )}
        </>
    )
}

export default CartModal