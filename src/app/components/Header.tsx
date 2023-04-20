'use client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import PossibleProducts from './PossibleProducts'
import Cart from './Cart'
import Link from 'next/link'
import { AiOutlineSearch } from 'react-icons/ai'
import logo from '../../../public/logo.svg'

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


const Header = () => {
  const [search, setSearch] = useState("")
  const [data, setData] = useState<ProductsType[]>([])
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const { push } = useRouter()
  

  const clearInput = () => {
    // this function clears input when the user clicks in the possible products component
    setSearch("")
  }

  const handleFetch = async () => {
    await axios.get('https://fakestoreapi.com/products')
    .then(response => setData(response.data))
  }

  const handleRedirect = (e: {key: string}) => {
    if (e.key === 'Enter' && search !== '') {
      setShouldRedirect(true)
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
    handleFetch()
  }, [])
  

  return (
    <div className="w-screen h-[7vh] flex justify-between px-44 items-center fixed z-10 bg-white border-b-strongRed border-2 top-0 left-0">
    
      <Link href='/'>
        <img
          src={logo.src}
          alt="logo"
          className="h-8"
        />
      </Link>
      <div className="flex gap-4 items-center w-1/4 ">
        <div className="flex flex-col w-full">
          <div className="flex items-center gap-2 bg-white rounded-xl p-1 border-strongRed border-2">
            <AiOutlineSearch size={'24px'} fill='#990011FF'/>
              <input
                placeholder="Search product"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="outline-none"
                onKeyDown={(e) => handleRedirect(e)}
              />
            </div>
            <div className="absolute top-14 w-1/3">
              {data.map((product) =>
                search.length > 2 && product.title.toLowerCase().includes(search.toLocaleLowerCase( )) && (
                  <PossibleProducts
                    key={product.id}
                    image = {product.image}
                    title={product.title}
                    id={product.id} 
                    clearInput={clearInput}
                  />
                )
              )}
            </div>
        </div>
        <Cart />
      </div>
    </div>
  )
}

export default Header