import { Card } from '@/components/presentational/Card'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="container mx-auto">
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
    </main>
  )
}
