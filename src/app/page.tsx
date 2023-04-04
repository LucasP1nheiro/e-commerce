'use client'

import ProductsByCategorie from './components/ProductsByCategorie'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Loading from './loading'
import Header from './components/Header'


export default function Home() {
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
  
  
  const handleFetch = () => {
    axios.get('https://dummyjson.com/products/categories')
      .then(response => setCategories(response.data))
    
    setIsLoading(false)
  }


  useEffect(() => {
    handleFetch()
  }, [])


  return (
    <div>

      {isLoading && (
        <div className="mt-20 w-screen h-screen flex justify-center">
          <Loading/>
        </div>
      )}

      {!isLoading && (
        <main className=" bottom-0  w-screen  mt-16 pb-16 flex flex-col items-center " >
        {categories?.map(categorie => (
          <ProductsByCategorie key={categorie} categorie={categorie}/>
        ))}
      </main>
      )}
    </div>
  )
}
