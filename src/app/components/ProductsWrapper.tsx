import React from 'react'

interface ProductsWrapperProps {
    children: React.ReactNode
}

const ProductsWrapper = ({children}: ProductsWrapperProps) => {
  return (
    <div
        className="w-full sm:w-4/5 flex flex-col justify-center items-center md:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12"
    >
        {children}
    </div>
  )
}

export default ProductsWrapper