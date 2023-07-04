'use client'

import { createContext, useState } from 'react';

interface IsModalOpenContextProps {
    isModalOpen: boolean
    setIsModalOpen: (bool: boolean) => void
}

interface IsModalOpenContextProviderProps {
    children: React.ReactNode
}

export const IsModalOpenContext = createContext<IsModalOpenContextProps>({
    isModalOpen: false,
    setIsModalOpen: () => {}
})

export default function IsModalOpenContextProvider({ children }: IsModalOpenContextProviderProps) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    
    return (
        <IsModalOpenContext.Provider value={{isModalOpen, setIsModalOpen}}>
            {children}
        </IsModalOpenContext.Provider>
    )
}