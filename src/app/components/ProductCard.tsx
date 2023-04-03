type ProductsType =  {  
    title: string,
    price: number,
    brand: string,
    thumbnail: string,
    rating: number
}

const ProductCard = ( {title, price, thumbnail, brand, rating} : ProductsType) => {
  return (
    <div className="border-2 p-2 w-full">
      <img src={thumbnail} alt={`${title} Image`} className="h-56 w-full" />
          <h1>{title}</h1>
          <p>{brand}</p>
      <p>{price}</p>
      <p>{rating}</p>
    </div>
  )
}

export default ProductCard