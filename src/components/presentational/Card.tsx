'use client'
import { IProduct } from '@/utilities/interfaces/product.interface';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'
import { motion } from "framer-motion"

interface Props {
    product: IProduct;
    size?: 'md' | 'lg'
}

export const Card: React.FC<Props> = (props) => {
    const { product: { id, image, title, price }, size = 'md' } = props;
    const router = useRouter()

    const handleNavigate = () => {
        router.push(`/products/${id}`)
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            onClick={handleNavigate} className="relative max-w-full bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer"
        >
            <div className="overflow-x-hidden rounded-2xl relative">
                <img className={`${size === 'md' ? 'h-40' : 'h-60'} rounded-2xl w-full object-cover`} src={image} alt={`${title} product`} />
                <p className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-50 opacity-70" fill="none" viewBox="0 0 24 24" stroke="black">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </p>
            </div>
            <div className="mt-4 pl-2 mb-2 flex justify-between ">
                <div>
                    <p className="text-lg font-semibold text-gray-900 mb-0">{title}</p>
                    <p className="text-md text-gray-800 mt-0">{price}</p>
                </div>
            </div>
        </motion.div>
    )
}
