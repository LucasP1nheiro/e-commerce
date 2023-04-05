'use client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import PossibleProducts from './PossibleProducts'
import Link from 'next/link'

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


const Header = () => {
  const [search, setSearch] = useState("")
  const [data, setData] = useState<ProductsType[]>([])
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const { push } = useRouter()

  const clearInput = () => {
    // this function clears input when the user clicks in the possible products component
    setSearch("")
  }

  const handleRedirect = (e: {key: string}) => {
    if (e.key === 'Enter' && search !== '') {
      setShouldRedirect(true)
    }
  }

  const handleSearch = async () => {
    if (search !== '') {
      await axios.get(`https://dummyjson.com/products/search?q=${search}`)
      .then(response => setData(response.data.products))
    } else {
      setData([])
    }
  }

  useEffect(() => {
    if (shouldRedirect) { 
      push('/search?q=' + search)
      setSearch("")
    }
    setShouldRedirect(false)
  }, [shouldRedirect, search]) 

  
  useEffect(() => {
     handleSearch()
  }, [search])

  


  return (
    <div className="w-screen h-[7vh] flex justify-around items-center fixed z-50 bg-blue-500 top-0 left-0">
    
      <Link href='/'>
      <p>Header</p>
      </Link>
      <div className="flex flex-col">
      <input
          placeholder="Search product"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="outline-none p-1 rounded-sm fixed top-5"
          onKeyDown={(e) => handleRedirect(e)}
        />
        <div className="absolute top-14">
        {data.map((product, i) =>
          i < 9 &&  (
            <PossibleProducts
              thumbnail={product.thumbnail}
              title={product.title}
              id={product.id} 
              clearInput={clearInput}
            />
          )
        )}
        </div>
      </div>
    </div>
  )
}

export default Header