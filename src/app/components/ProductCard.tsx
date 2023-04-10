
import Link from 'next/link'

type ProductsType = {  
    title: string,
    price: number,
    image: string,
    id: number,
    category: string
}

const ProductCard = ( {title, price, image, category, id} : ProductsType) => {
  return (
    <Link
      className="p-2  flex flex-col gap-2"
      href={`/product/${id}`}
    >
      <img src={image} alt={`${title} Image`} className="h-72 border-[1px] p-16" />
      <h2 className="text-md capitalize text-gray-500">{category}</h2>
      <h1 className="font-bold text-md w-3/4">{title}</h1>
      <p className="text-md text-darkGreen font-bold">${price},00</p>
      
    </Link>
  )
}

export default ProductCard