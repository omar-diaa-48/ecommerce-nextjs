import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/presentational/Header'
import { getProducts } from '@/utilities/data'

const inter = Inter({ subsets: ['latin'] })

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'E-shop app',
  description: 'E-shop app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const products = await getProducts()

  return (
    <html lang="en">

      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
