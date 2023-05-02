import Link from 'next/link'
type PossibleProductsProps = {
    image: string,
    title: string,
    id: number,
    clearInput: () => void
}

// This component shows the possible products when the user is typing to search a product
const PossibleProducts = ({ image, title, id, clearInput }: PossibleProductsProps) => {
    function limitStringLength(str: string): string {
        if (str.length <= 50) {
          return str;
        }
      
        return str.slice(0, 20) + "...";
    }

  return (
      <Link
          href={`/product/${id}`}
          className="w-full flex bg-white gap-4 items-center overflow-x-hidden  hover:bg-gray-200"
          onClick={() => clearInput()}
      >
          <img
              src={image}
              alt={`${title} thumbnail`}
              className="h-14 w-14"
          />
          <p>{limitStringLength(title)}</p>
      </Link>
  )
}

export default PossibleProducts