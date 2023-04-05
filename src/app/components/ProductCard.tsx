import { AiFillStar } from 'react-icons/ai'
import Link from 'next/link'

type ProductsType = {  
    title: string,
    price: number,
    brand: string,
    thumbnail: string,
    rating: number
    id: number
}

const ProductCard = ( {title, price, thumbnail, brand, rating, id} : ProductsType) => {
  return (
    <Link
      className="border-[1px] p-2 w-1/5"
      href={`/product/${id}`}
    >
      <img src={thumbnail} alt={`${title} Image`} className="h-56 w-full" />
          <h1 className="font-bold">{title}</h1>
          <p>{brand}</p>
      <div className="flex justify-between">
        <p className="text-xl text-blue-500 font-semibold">$ {price}</p>
        <div className="flex items-center justify-center gap-2">
          <AiFillStar fill={'orange'} />
          <p className="text-xl text-blue-500 font-semibold"> {rating}</p>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard