import { Roboto, Inter } from 'next/font/google'
import './globals.css'
import Header from './components/header/Header'
import IsModalOpenContextProvider from './context/IsModalOpenContext'
import CartContextProvider from './context/CartContext'
import TotalPriceContextProvider from './context/TotalPriceContext'
import HasCheckedOutContextProvider from './context/HasCheckedOut'



export const metadata = {
  title: 'ShopEase',
  description: 'Fake e-commerce',
}

const roboto = Inter({
  weight: '400',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
  
    
  return (
    <HasCheckedOutContextProvider>
        <TotalPriceContextProvider>
          <CartContextProvider>
            <IsModalOpenContextProvider>
              <html lang="en">
                <head>
                  <link rel="shortcut icon" href='/logo.svg' />
                </head>
                <body className={"overflow-x-hidden bg-primary " + roboto.className}>
                  <Header />
                  {children}
                </body>
              </html>
            </IsModalOpenContextProvider>
        </CartContextProvider>
      </TotalPriceContextProvider>
    </HasCheckedOutContextProvider>
  )
}
