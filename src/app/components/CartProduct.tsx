import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import Link from 'next/link'

interface CartProductProps {
    thumbnail: string,
    title: string,
    price: number,
    id: number
}

const CartProduct = ({ thumbnail, title, price, id }: CartProductProps) => {
    const [productCounter, setProductCounter] = useState(1)
    const [hoverTitle, setHoverTitle] = useState(false)

    const deleteProduct = () => {
       if (productCounter > 1) setProductCounter(productCounter - 1)
    }

    return (
    <div className="flex gap-4 py-3 border-b-gray-200 border-b-[1px]">
        <img src={thumbnail} alt={`${title} Image`} className="h-24 w-1/4" />

        <div className="flex flex-col justify-around w-1/2">
            <Link href={`/product/${id}`}>
                <h1
                    onMouseEnter={() => setHoverTitle(true)}
                    onMouseLeave={() => setHoverTitle(false)}
                    className={hoverTitle ? "w-fit border-b-2 border-b-black cursor-pointer" : "w-fit border-b-2 border-b-white"}
                >
                    {title}
                </h1>
            </Link>
            <div className="flex justify-between w-1/2">
                <div className="flex gap-4 border-gray-200 border-y-[1px]">
                    <AiOutlineMinus
                        className="border-gray-200 border-x-[1px] cursor-pointer p-1"
                        onClick={() => deleteProduct()}
                        size={'30px'}
                    />
                    <p className="text-lg text-black">{productCounter}</p>
                    <AiOutlinePlus
                        className="border-gray-200 border-x-[1px] cursor-pointer p-1"
                        onClick={() => setProductCounter(productCounter + 1)}
                        size={'30px'}
                    />
                </div>
                <p>${price * productCounter},00</p>
            </div> 
        </div>

        
    </div>
    )
}

export default CartProduct