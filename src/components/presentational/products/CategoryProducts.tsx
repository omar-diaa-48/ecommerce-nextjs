import React from 'react'
import { Card } from './Card'
import { IProduct } from '@/utilities/interfaces/product.interface'

interface Props {
    products: Array<IProduct>
}

const CategoryProducts: React.FC<Props> = ({ products }) => {
    return (
        <div className='columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 my-8'>
            {
                products.map((item, index) => (
                    <Card key={item.id} size={index % 2 === 0 ? 'md' : 'lg'} product={item} />
                ))
            }
        </div>
    )
}

export default CategoryProducts;