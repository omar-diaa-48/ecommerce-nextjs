import React from 'react'
import { Card } from './Card'
import { IProduct } from '@/utilities/interfaces/product.interface'

interface Props {
    products: Array<IProduct>
}

const Products: React.FC<Props> = ({ products }) => {
    return (
        <div className='grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2 xl:grid-cols-4 xl:gap-x-8 px-4 py-2'>
            {
                products.map((item) => (
                    <Card key={item.id} product={item} />
                ))
            }
        </div>
    )
}

export default Products;