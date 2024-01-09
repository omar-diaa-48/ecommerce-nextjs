"use server"

import Hero from '@/components/presentational/Hero'
import CartIcon from '@/components/presentational/CartIcon'
import Products from '@/components/presentational/Products'
import { getProducts } from '@/utilities/data'

export default async function Home() {

  const products = await getProducts();

  return (
    <main className="relative">

      <div className='container mx-auto'>
        <Hero />
        <Products products={products} />
      </div>

      <CartIcon />

    </main>
  )
}
