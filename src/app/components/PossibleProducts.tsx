import Link from 'next/link'
type PossibleProductsProps = {
    thumbnail: string,
    title: string,
    id: number,
    clearInput: () => void
}

// This component shows the possible products when the user is typing to search a product
const PossibleProducts = ({thumbnail, title, id, clearInput}: PossibleProductsProps) => {
  return (
      <Link
          href={`/product/${id}`}
          className="w-1/2 flex bg-white gap-4 items-center overflow-x-hidden border-gray-200 border-b-2"
          onClick={() => clearInput()}
      >
          <img
              src={thumbnail}
              alt={`${title} thumbnail`}
              className="h-14 w-14"
          />
          <p>{title}</p>
      </Link>
  )
}

export default PossibleProducts