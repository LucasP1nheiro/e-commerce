'use client'

import { createContext, useState } from 'react';

interface ProductsType {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[]
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

