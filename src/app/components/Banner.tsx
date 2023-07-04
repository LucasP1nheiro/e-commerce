import banner from '../assets/banner.svg'
import { Poppins, Noto_Serif_JP } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'



const noto = Noto_Serif_JP({
  weight: '400',
  subsets: ['latin'],
})

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})


const Banner = () => {
  
  return (
    <section
      className="h-screen w-screen flex justify-around flex-col items-center lg:flex-row mt-10 px-4"
      > 

      <Image src={banner} alt="Banner" priority className="w-auto h-auto md:w-4/5 lg:hidden"/>  
:
      <div className="flex flex-col gap-8 justify-center items-center text-center lg:text-start lg:items-start">

        <h1
          className={"xl:text-7xl md:text-5xl text-3xl text-secondary italic  " + noto.className}
        >
          Discover the <br/>Exceptional jewelery <br />With Us
        </h1>

        <p className={"text-[#91919B] " + poppins.className}>Adorn Yourself with Beauty - Shop Our Stunning Jewelery Collection Today!</p>

        <Link
          className="bg-secondary border-2 p-2 px-16 w-fit duration-200 hover:bg-white/70 rounded-md"
          href="/categories/jewelery"
        >
          Shop Now
        </Link>
      </div>

      <Image src={banner} alt="Banner" priority className="w-auto h-auto hidden lg:block"/>
          
    </section>
  )
}

export default Banner