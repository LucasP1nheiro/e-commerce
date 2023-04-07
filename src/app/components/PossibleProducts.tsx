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
          className="w-full flex bg-white gap-4 items-center overflow-x-hidden"
          onClick={() => clearInput()}
      >
          <img
              src={thumbnail}
              alt={`${title} thumbnail`}
              className="h-10"
          />
          <p>{title}</p>
      </Link>
  )
}

export default PossibleProducts