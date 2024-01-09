import Hero from '@/components/presentational/Hero'
import Products from '@/components/presentational/Products'
import { getProducts } from '@/utilities/data'

export default async function Home() {

  const products = await getProducts();

  return (
    <main>

      <div className='container mx-auto'>
        <Hero />
        <Products products={products} />
      </div>

    </main>
  )
}
