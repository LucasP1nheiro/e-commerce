'use client'


import { useRouter } from 'next/navigation'
import React, { FormEvent, useEffect, useState } from 'react'



const Header = () => {
  const [search, setSearch] = useState("")
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const { push } = useRouter()

  const handleSearch = (e: {key: string}) => {
    if (e.key === 'Enter') {
      setShouldRedirect(true)
    }
  }

  useEffect(() => {
    if (shouldRedirect) { 
      push('/search?q=' + search)
      setSearch("")
    }
    setShouldRedirect(false)
  }, [shouldRedirect, search]) 


  return (
    <div className="w-screen h-[7vh] flex justify-around items-center fixed z-50 bg-blue-500 top-0 left-0">
    
      <p>Header</p>
      <input
          placeholder="Search product"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="outline-none p-1 rounded-sm"
          onKeyDown={(e) => handleSearch(e)}
      />
    </div>
  )
}

export default Header