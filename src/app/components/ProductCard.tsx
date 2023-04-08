
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
      className="p-2 w-1/5 flex flex-col gap-2"
      href={`/product/${id}`}
    >
      <img src={image} alt={`${title} Image`} className="h-64 w-64 border-[1px] p-8" />
      <div className="flex justify-between">
        <h1 className="font-bold text-md">{title}</h1>
        <p className="text-md text-black font-bold">${price}</p>
      </div>
      <h2 className="text-md capitalize">{category}</h2>
    </Link>
  )
}

export default ProductCard