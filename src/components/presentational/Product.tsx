'use client'

import { ColorEnum, SizeEnum } from '@/utilities/enums'
import { IAddItem } from '@/utilities/interfaces/add-item.interface'
import { IProduct } from '@/utilities/interfaces/product.interface'
import schema from '@/utilities/schemas/add-item'
import { useAppDispatch } from '@/utilities/store/hooks'
import { addItemToCart } from '@/utilities/store/slices/cart'
import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'

interface Props {
    product: IProduct
}

export const Product: React.FC<Props> = ({ product }) => {
    const dispatch = useAppDispatch();

    const methods = useForm<IAddItem>({
        mode: "onChange",
        criteriaMode: "all",
        shouldFocusError: true,
        reValidateMode: "onChange",
        resolver: yupResolver(schema),
        defaultValues: {
            productId: product.id,
            size: SizeEnum.MEDIUM
        }
    })

    const { setValue, watch, formState } = methods;

    const handleUserChoice = (field: 'size' | 'color', choice: SizeEnum | ColorEnum) => {
        setValue(field, choice, { shouldDirty: true, shouldTouch: true, shouldValidate: true })
    }

    const handleAddItemToCart = () => {
        dispatch(addItemToCart(product))
    }

    const selectedColor = watch('color');
    const selectedSize = watch('size');

    return (
        <div className="py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row">
                    <div className="md:flex-1 px-4">
                        <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                            <img className="w-full h-full object-cover" src={product.image} alt={product.title} />
                        </div>
                        <div className="flex -mx-2 mb-4">
                            <div className="w-1/2 px-2">
                                <button onClick={handleAddItemToCart} disabled={!formState.isValid} className="w-full bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 disabled:cursor-not-allowed">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex-1 px-4">
                        <h2 className="text-2xl font-bold mb-2">Product Name</h2>
                        <p className="text-sm mb-4">
                            {product.title}
                        </p>
                        <div className="flex mb-4">
                            <div className="mr-4">
                                <span className="font-bold text-gray-700">Price:</span>
                                <span className="text-gray-600">${product.price}</span>
                            </div>
                            <div>
                                <span className="font-bold text-gray-700">Availability:</span>
                                <span className="text-gray-600">In Stock</span>
                            </div>
                        </div>
                        <div className="mb-4">
                            <span className="font-bold text-gray-700">Select Color:</span>
                            <div className="flex items-center mt-2">
                                {
                                    [
                                        { title: 'gray', color: 'bg-gray-500' },
                                        { title: 'red', color: 'bg-red-500' },
                                        { title: 'blue', color: 'bg-blue-500' },
                                        { title: 'yellow', color: 'bg-yellow-500' }
                                    ].map((color) => (
                                        <div onClick={() => handleUserChoice('color', color.title as ColorEnum)} key={color.title} title={color.title} className={`cursor-pointer w-6 h-6 rounded-full mr-2 ${color.color} ${selectedColor === color.title ? 'border-black border-2 p-2' : ''}`}></div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="mb-4">
                            <span className="font-bold text-gray-700">Select Size:</span>
                            <div className="flex items-center mt-2">
                                {
                                    ['s', 'md', 'l', 'xl', 'xxl'].map((size) => (
                                        <div onClick={() => handleUserChoice('size', size as SizeEnum)} key={size} className={`cursor-pointer bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 ${selectedSize === size ? 'border-black border-2 p-2' : ''}`}>{size}</div>
                                    ))
                                }
                            </div>
                        </div>
                        <div>
                            <span className="font-bold text-gray-700">Product Description:</span>
                            <p className="text-gray-600 text-sm mt-2">
                                {product.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
