import React from 'react'


// This component shows the possible products when the user is typing to search a product
const PossibleProducts = ({thumbnail, title}: {thumbnail: string, title: string}) => {
  return (
      <div className="w-full flex bg-white gap-4 items-center">
          <img
              src={thumbnail}
              alt={`${title} thumbnail`}
              className="h-10"
          />
          <p>{title}</p>
      </div>
  )
}

export default PossibleProducts