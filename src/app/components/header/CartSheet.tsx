'use client'

import React, { useContext } from 'react'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter
} from "../ui/sheet"
import Cart from './Cart'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import {CartContext} from '../../context/CartContext'
import EmptyCart from '../cart/EmptyCart'
import CartProduct from '../cart/CartProduct'
import {TotalPriceContext} from '../../context/TotalPriceContext'
import { Button } from '../ui/button'
import { BsTrash3Fill } from 'react-icons/bs'


const CartSheet = () => {

  const { cart, setCart } = useContext(CartContext)
  const { totalPrice, setTotalPrice } = useContext(TotalPriceContext)

  const deleteCart = () => {
    setCart([])
    setTotalPrice(0)
  } 
    

  return (
    <Sheet>
        <SheetTrigger>
          <Cart />
        </SheetTrigger>
        <SheetContent className="overflow-auto pb-0 w-full">
            <SheetHeader className="flex flex-row items-center gap-4 py-2 border-b h-[5%]">
                <AiOutlineShoppingCart color='#fff' size={24} />
                <SheetTitle className="text-secondary">Cart</SheetTitle>
            </SheetHeader>


            {cart.length === 0 && (
              <div
                className="flex flex-col h-[95%] w-full items-center justify-center overflow-hidden"
              >
                <EmptyCart />
              </div>
            )}


            {cart.length !== 0 && (
              <div
                className="w-full min-h-full flex flex-col items-center gap-16" 
              >
                {cart.map(product => (
                  <CartProduct
                    image={product.image}
                    title={product.title}
                    price={product.price}
                    id={product.id} 
                    key={product.id}
                  />
                ))}
              </div>
            )}
        
              
            {cart.length !== 0 && (
              <div
                className="w-full sticky bottom-0 flex flex-col gap-4 border-t p-4 bg-primary"
              >
                  <div
                    className="w-full flex items-center justify-between gap-4"
                  >
                    <div
                      className="flex items-center gap-4"
                    >
                      <h1 className="text-xl text-secondary">Total:</h1>
                      <h1 className="text-lg text-tertiary">${totalPrice.toFixed()},00</h1>
                    </div>

                    <Button
                      size='icon'
                      onClick={() => deleteCart()}
                      className="bg-secondary rounded-md hover:bg-secondary/90"
                    >
                      <BsTrash3Fill color="#111" />
                    </Button>
                  </div>

                  <Button
                    className='w-full bg-secondary text-primary flex items-center justify-center rounded-md hover:bg-secondary/90'
                  >
                    <p>Chekcout</p>
                  </Button>
              </div>
            )}
            
        </SheetContent>
    </Sheet>
  )
}

export default CartSheet