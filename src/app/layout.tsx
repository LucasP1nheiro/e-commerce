import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import CartModal from './components/CartModal'
import IsModalOpenContextProvider from './context/IsModalOpenContext'
import CartContextProvider from './context/CartContext'

export const metadata = {
  title: 'E-commerce',
  description: 'Fake e-commerce with dummyjson',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
  
    
  return (
    <CartContextProvider>
      <IsModalOpenContextProvider>
        <html lang="en">
          <body className={"overflow-x-hidden " + inter.className}>
            <Header />
            {children}
            <CartModal />
          </body>
        </html>
      </IsModalOpenContextProvider>
    </CartContextProvider>
  )
}
