import Link from 'next/link'
type PossibleProductsProps = {
    image: string,
    title: string,
    id: number,
    clearInput: () => void
}

// This component shows the possible products when the user is typing to search a product
const PossibleProducts = ({image, title, id, clearInput}: PossibleProductsProps) => {
  return (
      <Link
          href={`/product/${id}`}
          className="w-1/2 flex bg-white gap-4 items-center overflow-x-hidden my-2 hover:bg-gray-200"
          onClick={() => clearInput()}
      >
          <img
              src={image}
              alt={`${title} thumbnail`}
              className="h-14 w-14"
          />
          <p>{title}</p>
      </Link>
  )
}

export default PossibleProducts