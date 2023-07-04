'use client'


import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import Loading from './loading'
import Banner from './components/Banner'
import ProductCard from './components/card/ProductCard'
import Pagination from './components/Pagination'
import CategorySection from './components/category/CategorySection'
import ProductsWrapper from './components/ProductsWrapper'

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



export default function Home() {

  const [isLoading, setIsLoading] = useState(true)
 
  const [data, setData] = useState<ProductsType[] | null>([])


  const [pageRange, setPageRange] = useState({
    start: 1,
    end: 8
  })
    

  const handleFetch = async () => {
      await axios.get(`https://fakestoreapi.com/products/`) 
      .then(response => setData(response.data))
    
      setIsLoading(false)
  }

  useEffect(() => {
    handleFetch()
    console.log(data)
  }, [])

  const handlePageRange = (n: number) => {
    switch (n) {
      case 1:
        setPageRange({
          start: 1,
          end: 8
        })
        break
      case 2:
        setPageRange({
          start: 9,
          end: 16
        })
        break
      case 3:
        setPageRange({
          start: 17,
          end: 20
        })
        break
    }
  }
  
  


  return (
    <>

      {isLoading && (
        <main className="min-h-screen  w-screen mb-16  flex flex-col items-center justify-center gap-32">
          <Banner />
          <CategorySection />
          <Loading/>
        </main>
      )}

      {!isLoading && (
        <main className="min-h-screen w-screen mb-16  flex flex-col items-center justify-center gap-44"  >
            <Banner />
            <CategorySection />
            <ProductsWrapper>
              {data?.map(product => 
                  product.id >= pageRange.start && product.id <= pageRange.end && (<ProductCard data={product} key={product.id} />)
              )}
            </ProductsWrapper>
            <div className="w-full flex items-center justify-center">
              <Pagination handlePageRange={handlePageRange}/>
            </div>
        </main>
      )}
    </>
  )
}
