'use client'

import ProductsByCategorie from './components/ProductsByCategorie'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import Loading from './loading'
import Header from './components/Header'
import { IsModalOpenContext } from './context/IsModalOpenContext'


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
      <main className="min-h-screen  w-screen  my-16 py-32 flex flex-col items-center gap-12"  >
          {categories?.map(categorie => (
            <div className="flex flex-col w-3/5">
              <h1 className="text-3xl mb-5 uppercase ml-24 text-darkGreen">{categorie}</h1>
              <ProductsByCategorie key={categorie} categorie={categorie}/>
            </div>
        ))}
      </main>
      )}
    </div>
  )
}
