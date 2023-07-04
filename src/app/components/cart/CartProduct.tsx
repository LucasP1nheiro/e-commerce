import React, {useContext, useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

import {CartContext} from '../../context/CartContext'
import {TotalPriceContext} from '../../context/TotalPriceContext'
import { Button } from '../ui/button'
import { BsTrash3Fill } from 'react-icons/bs'

interface CartProductProps {
    image: string,
    title: string,
    price: number,
    id: number,
}

const CartProduct = ({ image, title, price, id }: CartProductProps) => {
    const [productCounter, setProductCounter] = useState(1)
    
    const { cart, setCart } = useContext(CartContext)
    const { totalPrice, setTotalPrice } = useContext(TotalPriceContext)

    const deleteProduct = () => {
        cart.map(product => {
            if (product.id === id) {
                setCart(cart.filter(item => item.id !== id))
                setTotalPrice(totalPrice - (price * productCounter))
            }   
        })
    }

    const increaseProductCounter = () => {
        setProductCounter(productCounter + 1)
        setTotalPrice(totalPrice + price)
    }

    const decreaseProductCounter = () => {
        if (productCounter > 1) {
            setProductCounter(productCounter - 1)
            setTotalPrice(totalPrice - price)
        }
    }

    function limitStringLength(str: string): string {
        if (str.length <= 20) {
          return str;
        }
      
        return str.slice(0, 20) + "...";
    }


    return (
    <div className="flex gap-4 py-3 w-full">
        <img src={image} alt={`${title} Image`} className="h-24 w-1/4" />

        <div className="flex flex-col justify-around w-full">
            <div className="w-full h-1/2 flex justify-between items-start gap-4">
                    <h1
                        className="text-secondary"
                    >
                        {limitStringLength(title)}
                    </h1>

                <Button
                    size="icon"
                    className="rounded-md border p-2 bg-primary hover:bg-white/10 cursor-pointer"
                    onClick={() => deleteProduct()}
                >
                        <BsTrash3Fill color="#fff" />
                </Button>
            </div>
            <div className="flex justify-between md:w-1/2 w-full">
                <div className="flex gap-4 items-center">
                    <Button
                        size="icon"
                        className= "rounded-md border p-2 bg-primary hover:bg-white/10 cursor-pointer"
                    >
                        <AiOutlineMinus
                            onClick={() => decreaseProductCounter()}
                            size={24}
                            color="#A0A0A9"
                        />   
                    </Button>
                    <p className="text-lg text-secondary">{productCounter}</p>
                    <Button
                        className="rounded-md border p-2 bg-primary hover:bg-white/10 cursor-pointer"
                    >
                        <AiOutlinePlus
                            onClick={() => increaseProductCounter()}
                            size={24}
                            color="#A0A0A9"
                        />  
                    </Button>
                        
                    <p className="text-secondary">${Math.round(price * productCounter)},00</p>
                </div>
                
            </div> 
        </div>

        
    </div>
    )
}

export default CartProduct