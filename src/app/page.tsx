import Hero from '@/components/presentational/Hero'
import { BestSellingProducts } from '@/components/presentational/products/BestSellingProducts';
import { FeaturedProducts } from '@/components/presentational/products/FeaturedProducts';
import { getProducts } from '@/utilities/data'
import { mapToPagination } from '@/utilities/helpers/mappers';

export default async function Home() {

  const pagination = mapToPagination(15)
  const products = await getProducts(pagination);

  return (
    <main>

      <div className='container mx-auto'>
        <Hero />
        <FeaturedProducts products={products.slice(0, 4)} />
        <BestSellingProducts products={products.slice(4)} />
      </div>

    </main>
  )
}
