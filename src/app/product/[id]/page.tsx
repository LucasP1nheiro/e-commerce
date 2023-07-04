    'use client'

    import axios from 'axios'
    import { useContext, useEffect, useState } from 'react'
    import {CartContext} from '../../context/CartContext'
    import Loading from './loading'
    import {TotalPriceContext} from '../../context/TotalPriceContext'
    import Image from 'next/image'
    import ProductCard from '../../components/card/ProductCard'
    import { Button } from '../../components/ui/button'
    import ProductsWrapper from '../../components/ProductsWrapper'
   

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
    interface Params {
        params: {
            id: string
        }
    }

    const Page = ({params: {id}}: Params) => {
        const [data, setData] = useState<ProductsType | null>(null)
        const [similarProducts, setSimilarProducts] = useState<ProductsType[] | null>(null)
        const { cart, setCart } = useContext(CartContext)
        const [isSimilarProductsLoading, setIsSimilarProductsLoading] = useState(true)
        const [alreadyOnCart, setAlreadyOnCart] = useState(false)
        const [isLoading, setIsLoading] = useState(true)
        const { totalPrice, setTotalPrice } = useContext(TotalPriceContext)

        const handleFetch = async () => {
            await axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => setData(response.data))
            
            setIsLoading(false)
        }

        const addToCart = () => {
            if (data && alreadyOnCart === false) {
            setCart([...cart, data])
            setTotalPrice(totalPrice + data.price)
            }
        }
        
        useEffect(() => {
            handleFetch()
        }, [])

        // This useEffect prevents the product from  being added two times on the cart
        useEffect(() => {
            if (data) cart.map(product => {
                if (product.id === data.id) {
                    setAlreadyOnCart(true)
                }
            })
            if (cart.length === 0) setAlreadyOnCart(false)
        }, [cart, data])

        useEffect(() => {
            window.scroll(0,0)
        }, [data?.title])

        const handleSimiliarProductsFetch = async () => {
            console.log(data?.title)
            await axios.get(`https://fakestoreapi.com/products/category/${data?.category}`) 
                .then(response => setSimilarProducts(response.data))
            
            setIsSimilarProductsLoading(false)
        }

        useEffect(() => {
            handleSimiliarProductsFetch()
        }, [data])


    return (
        <>
            {isLoading && (
                <div className="min-h-screen w-screen flex flex-col items-center md:py-12 my-24 gap-36">
                    <Loading/>
                </div>
            )}
            
            {!isLoading && data && (
                <div className="min-h-screen w-screen flex flex-col items-center md:py-12 my-24 gap-36 p-4">
            
                    <div className="h-full w-screen flex justify-evenly items-center xl:items-start flex-col xl:flex-row gap-12 md:gap-0">
                        <div
                            className="md:w-1/3 p-12 w-4/5 md:p-24 bg-white flex items-center justify-center"
                        >
                            <img  
                                src={data?.image}
                                alt={`${data?.title} Image`}
                                className="md:h-auto md:w-auto h-44 w-44"
                            />
                        </div>
                        <div className="flex flex-col gap-8 2xl:w-1/3 xl:w-1/2 w-full p-8">
                                <h1 className="xl:text-3xl sm:text-2xl text-lg text-secondary font-semibold">{data?.title}</h1>
                                <p className="text-lg text-tertiary capitalize">{data?.category}</p>
                                <p className="text-lg text-tertiary">{data?.description}</p>
                            <p className="text-2xl text-black font-bold text-secondary"> ${data?.price}</p>
                            <Button
                                onClick={() => addToCart()}
                                className="flex w-full md:w-1/4 xl:w-1/2 items-center justify-center gap-4 bg-secondary rounded-md hover:bg-secondary/90 "
                            >
                                
                                <p
                                    className="text-primary "
                                >
                                    Add to cart
                                </p>
                                
                            </Button>
                        </div>
                    </div>
                    
                    <div className="w-4/5 flex justify-start">
                        <h1
                            className="text-2xl text-secondary"
                        >
                            More like this
                        </h1> 
                    </div>
                    
                        
                    <ProductsWrapper>
                        {isSimilarProductsLoading && (<Loading />)}

                        {!isSimilarProductsLoading  && similarProducts?.map(product => (
                            product.id !== data?.id && (<ProductCard data ={product} key={product.id} />)
                        ))}
                    </ProductsWrapper>
 
            </div>
            )}
        </>
    )
    }

    export default Page