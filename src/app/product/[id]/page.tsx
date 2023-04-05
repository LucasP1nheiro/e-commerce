'use client'

import {usePathname} from 'next/navigation'


const page = () => {

    // getting id like this while useParams doesn't work
    const path = usePathname()
    const id = path.replace('/product/', '')

    
  return (
      <div>
          <p>{id}</p>
          <p>{id}</p>
          <p>{id}</p>
          <p>{id}</p>
          <p>{id}</p>
          <p>{id}</p>
          <p>{id}</p>
          <p>{id}</p>


    </div>
  )
}

export default page