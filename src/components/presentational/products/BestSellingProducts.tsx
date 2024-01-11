'use client'
import { mapArrayToArraysOfDifferentLengths } from '@/utilities/helpers/mappers'
import { IProduct } from '@/utilities/interfaces/product.interface'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

interface Props {
    products: Array<IProduct>
}

export const BestSellingProducts: React.FC<Props> = ({ products }) => {
    const router = useRouter();

    const handleNavigate = (productId: string) => {
        router.push(`/products/${productId}`)
    }

    const [mappedProducts, setMappedProducts] = useState<Array<Array<IProduct>>>([])

    useEffect(() => {
        setMappedProducts(mapArrayToArraysOfDifferentLengths(products))
    }, [products])

    return (
        <section className="">
            <div className="mx-auto max-w-md sm:max-w-lg md:max-w-screen-xl">
                <div className="px-4 py-8 md:px-6 md:py-12 lg:px-20">
                    <h1 className="text-center text-3xl font-semibold text-gray-800 lg:text-4xl">Our Best Selling Collection</h1>

                    {mappedProducts.map((group, index) => {
                        const grid = group.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'
                        return (
                            <div key={index} className={`mt-8 grid grid-cols-1 gap-6 md:mt-10 ${grid} lg:gap-8`}>
                                {group.map((product) => (
                                    <div key={product.id} onClick={() => handleNavigate(product.id)} className="bg-slate-50 p-8 cursor-pointer">
                                        <div className="">
                                            <h2 className="text-xl text-gray-600">{product.title}</h2>
                                        </div>
                                        <div className="mt-8 flex items-center justify-center md:mt-24">
                                            <img className="" src={product.images[0]} alt="" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>

    )
}
