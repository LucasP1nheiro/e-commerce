type ProductsType =  {  
    title: string,
    price: number,
    brand: string,
    thumbnail: string
}

const ProductCard = ( {title, price, thumbnail, brand} : ProductsType) => {
  return (
    <div className="border-2 p-2 w-5/6">
      <img src={thumbnail} alt={`${title} Image`} className="" />
          <h1>{title}</h1>
          <p>{brand}</p>
      <p>{price}</p>
    </div>
  )
}

export default ProductCard