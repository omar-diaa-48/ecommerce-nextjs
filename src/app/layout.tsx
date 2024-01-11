import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'nprogress/nprogress.css';
import Header from '@/components/presentational/shared/Header'
import CartIcon from '@/components/presentational/shared/CartIcon'
import StoreProvider from './StoreProvider';

const inter = Inter({ subsets: ['latin'] })

export const revalidate = 60

export const metadata: Metadata = {
  title: 'E-shop app',
  description: 'E-shop app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <StoreProvider>
      <html lang="en">

        <body className={`${inter.className} relative`}>
          <Header />
          {children}
          <CartIcon />
        </body>
      </html>
    </StoreProvider>
  )
}
