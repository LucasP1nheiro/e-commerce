'use client'

import { createContext, useState } from 'react';

interface ProductsType {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
      rate: number,
      count: number
    }
}

interface CartContextProps {
    cart: ProductsType[],
    setCart: (ar: ProductsType[]) => void
}

interface CartContextProviderProps {
    children: React.ReactNode
}

export const CartContext = createContext<CartContextProps>({
    cart: [],
    setCart: () => {}
})

export default function CartContextProvider({ children }: CartContextProviderProps) {
    const [cart, setCart] = useState<ProductsType[]>([])

    

    return (
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>
    )
}

