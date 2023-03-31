
import { Inter } from 'next/font/google'
import ProductsByCategorie from './components/ProductsByCategorie'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={"h-screen bottom-0  w-screen  mt-16 " + inter.className} >
      <ProductsByCategorie categorie="smartphones" />
      <ProductsByCategorie categorie="laptops" />
      <ProductsByCategorie categorie="fragrances" />
      <ProductsByCategorie categorie="skincare"/>
    </main>
  )
}
