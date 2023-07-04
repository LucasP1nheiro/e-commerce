import ProductsWrapper from "./components/ProductsWrapper"
import CardSkeleton from "./components/card/CardSkeleton"


const Loading = () => {
  return (
    <ProductsWrapper>
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
    </ProductsWrapper>
      
  )
}

export default Loading