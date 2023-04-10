import React, { useContext, useEffect, useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'
import {CartContext} from '../context/CartContext'

interface CartProductProps {
    image: string,
    title: string,
    price: number,
    id: number,
    handleTotalPrice: (price: number) => void
}

const CartProduct = ({ image, title, price, id, handleTotalPrice }: CartProductProps) => {
    const [productCounter, setProductCounter] = useState(1)
    const [hoverTitle, setHoverTitle] = useState(false)
    const { cart, setCart } = useContext(CartContext)

    const decreaseOneProduct = () => {
        if (productCounter > 1) {
            setProductCounter(productCounter - 1)
            handleTotalPrice(-price)
        }    
    }

    const increaseOneProduct = () => { 
        setProductCounter(productCounter + 1)
        handleTotalPrice(price)
    }

    const deleteProduct = () => {
        cart.map(product => {
            if (product.id === id) {
                setCart(cart.filter(item => item.id !== id))
                handleTotalPrice(-price * productCounter)
            }   
        })
     }

    useEffect(() => {
        handleTotalPrice(price)
    }, [])


    return (
    <div className="flex gap-4 py-3">
        <img src={image} alt={`${title} Image`} className="h-24 w-1/4" />

        <div className="flex flex-col justify-around w-full">
            <div className="w-full h-1/2 flex justify-between items-start gap-4">
                <Link href={`/product/${id}`}>
                    <h1
                        onMouseEnter={() => setHoverTitle(true)}
                        onMouseLeave={() => setHoverTitle(false)}
                        className={hoverTitle ? "w-fit cursor-pointer underline" : "w-fit"}
                    >
                        {title}
                    </h1>
                </Link>

                <div>
                    <AiOutlineClose
                        size={'24px'}
                        width={'24px'}
                        className="cursor-pointer"
                        fill={'#2D382A'} 
                        onClick={() => deleteProduct()}
                    /> 
                </div> 
            </div>
            <div className="flex justify-between w-1/2">
                <div className="flex gap-4 border-gray-200 border-y-[1px]">
                    <AiOutlineMinus
                        className="border-gray-200 border-x-[1px] cursor-pointer p-1"
                        onClick={() => decreaseOneProduct()}
                        size={'30px'}
                    />
                    <p className="text-lg text-black">{productCounter}</p>
                    <AiOutlinePlus
                        className="border-gray-200 border-x-[1px] cursor-pointer p-1"
                        onClick={() => increaseOneProduct()}
                        size={'30px'}
                    />
                </div>
                <p>${Math.round(price * productCounter)},00</p>
            </div> 
        </div>

        
    </div>
    )
}

export default CartProduct