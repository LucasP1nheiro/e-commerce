'use client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import PossibleProducts from './PossibleProducts'
import Cart from './Cart'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'
import logo from '../../../public/logo.svg'
import { motion } from 'framer-motion'

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
  const [showInput, setShowInput] = useState(false)
  

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

  const handleInputHide = () => {
    setShowInput(false)
    setSearch("")
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
    <nav className="w-screen h-[10vh] flex justify-between lg:px-36 xl:px-72 items-center fixed z-50 bg-white border-b-strongRed border-2 top-0 left-0 px-4 ">
    
      <Link href='/'>
        <img
          src={logo.src}
          alt="logo"
          className="h-8 hidden md:block"
        />
      </Link>

      {!showInput && (
        <Link href='/'>
        <img
          src={logo.src}
          alt="logo"
          className="h-8 block md:hidden"
        />
      </Link>
      )}
      <div className="h-full flex gap-4 items-center w-full justify-end md:w-[300px]">
        <div className={showInput ? "flex flex-col w-full" : "flex flex-col w-fit"}>
          <div className="flex items-center gap-2 bg-white  p-1  z-50">
            {!showInput && (
              <AiOutlineSearch
              size={32}
              fill='#990011FF'
              className="rounded-full bg-white p-1  hover:bg-strongRed/10 duration-300 cursor-pointer"
              onClick={() => setShowInput(true)}
            />
            )}
            {showInput && (
              <>
                <AiOutlineClose
                  size={32}
                  fill='#990011FF'
                  className="rounded-full bg-white p-1  hover:bg-strongRed/10 duration-300 cursor-pointer"
                  onClick={() => handleInputHide()}
                />

                <motion.input
                  initial={{ width: '0' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.6 }}
                  exit={{width: '0'}}
                  placeholder="Search product"
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="outline-none border-strongRed border-b-2 text-strongRed w-full"
                  onKeyDown={(e) => handleRedirect(e)}
                />
              </>
            )}
            </div>
            <div className="absolute top-14 md:w-[300px] w-full">
              {data.map((product) =>
                search.length > 2 && product.title.toLowerCase().includes(search.toLocaleLowerCase()) && (
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
        <div className="hidden md:block">
          <Cart />
        </div>

        {!showInput && (
          <div className="block md:hidden">
          <Cart />
        </div>
        )}
      </div>
    </nav>
  )
}

export default Header