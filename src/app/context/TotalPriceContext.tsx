'use client'

import { createContext, useState } from 'react';

interface TotalPriceContextProps {
    totalPrice: number,
    setTotalPrice: (price: number) => void
}

interface TotalPriceContextProviderProps {
    children: React.ReactNode
}

export const TotalPriceContext = createContext<TotalPriceContextProps>({
    totalPrice: 0,
    setTotalPrice: () => {}
})

export default function TotalPriceContextProvider({ children }: TotalPriceContextProviderProps) {
    const [totalPrice, setTotalPrice] = useState(0)

    return (
    <TotalPriceContext.Provider value={{totalPrice, setTotalPrice}}>
        {children}
    </TotalPriceContext.Provider>
    )
}