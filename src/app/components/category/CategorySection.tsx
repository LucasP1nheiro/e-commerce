import React from 'react'
import Category from './Category'

const CategorySection = () => {
    const categories = [
        "Electronics",
        "Jewelery",
        "Men's Clothing",
        "Women's Clothing"
      ]

  return (
    <div
        className="w-full flex flex-col items-center justify-center gap-24 text-center"
    >
        <div
            className="flex flex-col gap-4"
        >
            <h1
                className="text-secondary text-3xl md:text-5xl font-semibold"
            >
                For every style
            </h1>
            <h3
                className="text-tertiary text-xl"
            >
                Explore our wide range of collections available
            </h3>
        </div>

        <div
            className="w-full flex flex-wrap gap-12 items-center justify-center p-4"
        >
            {categories.map(category => (
                <Category key={category} name={category}/>
            ))}
        </div>
    </div>
  )
}

export default CategorySection