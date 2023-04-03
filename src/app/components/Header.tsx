'use client'

import React, { useEffect, useState } from 'react'

const header = () => {
  const [search, setSearch] = useState("")

  const handleSearch = () => {
    // passar como parametro de link o search para a pagina de busca
  }

  return (
     <div className="w-screen h-[7vh] flex justify-around items-center fixed z-50 bg-blue-500 top-0 left-0">
          <p>Header</p>
          <form onSubmit={handleSearch}>
            <input
              placeholder="Search product"
              type="text"
              onChange={(e) => setSearch(e.target.value)}
              className="outline-none p-1 rounded-sm"
            />
    
          </form>
     </div>
  )
}

export default header