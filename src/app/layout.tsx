import { Inter } from 'next/font/google'
import Header from './components/Header'
import './globals.css'


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
    <html lang="en">
     
      <body className={"overflow-x-hidden " + inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
