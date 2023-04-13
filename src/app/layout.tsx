import { Roboto } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import CartModal from './components/CartModal'
import IsModalOpenContextProvider from './context/IsModalOpenContext'
import CartContextProvider from './context/CartContext'
import TotalPriceContextProvider from './context/TotalPriceContext'
import logo from '../../public/logo.svg'


export const metadata = {
  title: 'ShopEase',
  description: 'Fake e-commerce with dummyjson',
}

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
  
    
  return (
    <TotalPriceContextProvider>
      <CartContextProvider>
      <IsModalOpenContextProvider>
        <html lang="en">
          <head>
            <link rel="shortcut icon" href='/logo.svg' />
          </head>
          <body className={"overflow-x-hidden " + roboto.className}>
            <Header />
            {children}
            <CartModal />
          </body>
        </html>
      </IsModalOpenContextProvider>
    </CartContextProvider>
    </TotalPriceContextProvider>
  )
}
