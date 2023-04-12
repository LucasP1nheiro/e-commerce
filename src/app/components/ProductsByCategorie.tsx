'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import { Carousel } from '@mantine/carousel'
import {AiOutlineRight, AiOutlineLeft} from 'react-icons/ai'

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

const ProductsByCategorie = ({ categorie }: { categorie: string }) => {
    
    const [data, setData] = useState<ProductsType[] | null>([])
    const [hover, setHover] = useState(false)

    const handleFetch = async () => {
        await axios.get(`https://fakestoreapi.com/products/category/${categorie}`) 
            .then(response => setData(response.data))
    }
    
    useEffect(() => {
        handleFetch()
    }, [])
    

  return (
      <div className="mt-10 w-3/5">
          <h1 className="text-3xl mb-5 capitalize ml-24 text-darkGreen">{categorie}</h1>
          <Carousel
              slideSize="34%"
              slideGap="lg"
              containScroll="trimSnaps"
              align="start" 
              controlsOffset="xs"
              loop={true}
              styles={{
                  control: {
                     border: 0
                  }
              }}
              previousControlIcon={hover && (<div><AiOutlineLeft size={32} fill={'#2D382A'} /></div>)}
              nextControlIcon={hover && (<div><AiOutlineRight size={32} fill={'#2D382A'} /></div>)}
              className="flex  w-full overflow-x-hidden gap-3 px-20"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
          >
          {data?.map(product => (
              <Carousel.Slide>
                  <ProductCard title={product.title} category={product.category}  image={product.image} price={product.price}  id={product.id} key={product.id} />
              </Carousel.Slide>
          ))}
          </Carousel>
      </div>
  )
}

export default ProductsByCategorie