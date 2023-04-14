'use client'

import { createContext, useState } from "react"

interface HasCheckedOutContext {
    hasCheckedOut: boolean
    setHasCheckedOut:(value: boolean) => void
}

interface HasCheckedOutContextProviderProps {
    children: React.ReactNode
}

export const HasCheckedOutContext = createContext<HasCheckedOutContext>({
    hasCheckedOut: false,
    setHasCheckedOut: () => {}
})

export default function HasCheckedOutContextProvider({ children }: HasCheckedOutContextProviderProps) {
    const [hasCheckedOut, setHasCheckedOut] = useState(true)

    return (
        <HasCheckedOutContext.Provider value={{hasCheckedOut, setHasCheckedOut}}>
            {children}
        </HasCheckedOutContext.Provider>
    )
}