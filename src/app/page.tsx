import { Card } from '@/components/presentational/Card'
import Hero from '@/components/presentational/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="container mx-auto">

      <Hero />

      <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
        {
          [
            { id: 1, img: 'https://pixahive.com/wp-content/uploads/2020/10/Gym-shoes-153180-pixahive.jpg', name: 'Nike Force', price: 340 },
            { id: 2, img: 'https://pixahive.com/wp-content/uploads/2020/10/Gym-shoes-153180-pixahive.jpg', name: 'Adidas Boost', price: 250 },
            { id: 3, img: 'https://pixahive.com/wp-content/uploads/2020/10/Gym-shoes-153180-pixahive.jpg', name: 'Puma Ignite', price: 180 },
            { id: 4, img: 'https://pixahive.com/wp-content/uploads/2020/10/Gym-shoes-153180-pixahive.jpg', name: 'Under Armour Charge', price: 300 },
          ].map((item) => (
            <Card key={item.id} {...item} />
          ))
        }
      </div>

    </main>
  )
}
