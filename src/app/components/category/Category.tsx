import React from 'react'
import electronics from '../../assets/electronics.jpg'
import jewelery from '../../assets/jewelery.jpg'
import mensClothing from '../../assets/mens-clothing.jpg'
import womensClothing from '../../assets/womens-clothing.jpg'
import Link from 'next/link'

interface CategoryProps {
    name: string
}

const Category = ({name}: CategoryProps) => {


    const categoryArray = [
        {
            name: 'Electronics',
            image: electronics,
            href: '/categories/electronics'
        },
        {
            name: 'Jewelery',
            image: jewelery,
            href: '/categories/jewelery'
        },
        {
            name: "Men's Clothing",
            image: mensClothing,
            href: "/categories/men's clothing"
        },
        {
            name: "Women's Clothing",
            image: womensClothing,
            href: "/categories/women's clothing"
        }
    ]


  return (
    <>
        {categoryArray.map(category => category.name === name && (
            <Link 
                key={category.name}
                href={category.href}
                style={{backgroundImage: `url(${category.image.src})`}}
                className="h-96 w-72 flex items-center justify-center  duration-300 bg-norepeat bg-cover bg-center hover:brightness-50"
            >
                <h1 className="text-secondary text-3xl font-bold">{category.name}</h1>
            </Link>
        ))}
    
    </>
  )
}

export default Category