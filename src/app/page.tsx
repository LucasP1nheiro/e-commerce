'use client'

import ProductsByCategorie from './components/ProductsByCategorie'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import Loading from './loading'
import Header from './components/Header'
import { IsModalOpenContext } from './context/IsModalOpenContext'
import Banner from './components/Banner'


export default function Home() {
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(true)
 
  
  const handleFetch = async () => {
   await axios.get('https://fakestoreapi.com/products/categories')
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
        <main className="min-h-screen  w-screen mb-16  flex flex-col items-center gap-32"  >
          <Banner />
          {categories?.map(categorie => (
            <div className="flex flex-col  xl:w-4/5 w-full" key={categorie}>
              <h1 className="text-2xl md:text-3xl mb-5 uppercase ml-8 md:ml-20 text-strongRed font-bold">{categorie}</h1>
              <ProductsByCategorie key={categorie} categorie={categorie}/>
            </div>
        ))}
      </main>
      )}
    </div>
  )
}
