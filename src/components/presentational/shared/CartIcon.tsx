'use client'

import { Fab } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useAppDispatch, useAppSelector } from '@/utilities/store/hooks';
import { RootState } from '@/utilities/store';
import { AnimatePresence, motion } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import { clearCart } from '@/utilities/store/slices/cart';

function CartIcon() {
    const dispatch = useAppDispatch();
    const { items } = useAppSelector((state: RootState) => state.cart)

    const [animations] = useState({
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0, transition: { duration: 1 } }
    })

    const [itemsCount, setItemsCount] = useState(0)

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    useEffect(() => {
        setItemsCount(items.length)
    }, [items])

    return (
        <Fab
            sx={{
                position: 'fixed',
                bottom: 16,
                right: 16
            }}
            className='bg-teal-500 hover:bg-teal-700'
        >
            {itemsCount > 0 && (
                <AnimatePresence>
                    <motion.div
                        className='absolute flex justify-center items-center w-6 h-6 rounded-full bg-teal-900 -left-2 -top-2'
                        {...animations}
                    >
                        <p title={`${itemsCount} items in cart`} className='text-white'>{itemsCount}</p>
                    </motion.div>
                </AnimatePresence>
            )}
            <ShoppingCartIcon className='text-white' />
            {itemsCount > 0 && (
                <AnimatePresence>
                    <motion.div
                        title='Clear cart'
                        onClick={handleClearCart}
                        className='absolute flex justify-center items-center w-6 h-6 rounded-full bg-teal-900 -right-2 -top-2'
                        {...animations}
                    >
                        <CloseIcon />
                    </motion.div>
                </AnimatePresence>
            )}
        </Fab>
    )
}

export default CartIcon