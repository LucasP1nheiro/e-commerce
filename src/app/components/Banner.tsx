import bg from '../assets/banner.svg'
import { Redressed, Italiana } from 'next/font/google'

const redressed = Redressed({
  weight: '400',
  subsets: ['latin'],
})

const italiana = Italiana({
  weight: '400',
  subsets: ['latin'],
})


const Banner = () => {
  
  return (
    <div
      style={{ backgroundImage: `url(${bg.src})` }}
      className={`w-screen h-screen flex flex-col gap-8 justify-center md:px-32 px-10  bg-norepeat bg-cover bg-center`}
      >
      <h2
      className={"md:text-2xl text-xl text-black italic " + redressed.className}
      >
        Simple & Elegant
      </h2>

      <h1
      className={"md:text-7xl text-4xl text-black italic  " + italiana.className}
      >
        Latest Jewelry <br/>Collections
      </h1>

      <p>Adorn Yourself with Beauty - Shop Our Stunning Jewelry Collection Today!</p>

      <a
        className="border-black border-2 p-4 px-8 w-fit hover:bg-black hover:text-white duration-200"
        href="#jewelery"
      >
        Shop Now
      </a>
          
    </div>
  )
}

export default Banner