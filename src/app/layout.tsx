import Header from './components/Header'
import './globals.css'


export const metadata = {
  title: 'E-commerce',
  description: 'Fake e-commerce with dummyjson',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     
      <body className="overflow-x-hidden">
        <Header />
        {children}
      </body>
    </html>
  )
}
