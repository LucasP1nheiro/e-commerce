'use client'

import { Inter } from 'next/font/google'
import ProductsByCategorie from './components/ProductsByCategorie'
import axios from 'axios'
import { useEffect, useState } from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories')
    .then(response => setCategories(response.data))
  }, [])

  return (
    <main className={" bottom-0  w-screen  mt-16 pb-16 flex flex-col items-center " + inter.className} >
      {categories?.map(categorie => (
        <ProductsByCategorie categorie={categorie}/>
      ))}
    </main>
  )
}
