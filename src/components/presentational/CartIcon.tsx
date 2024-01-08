import { Fab } from '@mui/material'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function CartIcon() {
    return (
        <Fab
            sx={{
                position: 'fixed',
                bottom: 16,
                right: 16
            }}
            aria-label="add"
            className='bg-teal-500 hover:bg-teal-700'
        >
            <div className='absolute flex justify-center items-center w-6 h-6 rounded-full bg-teal-900 -left-2 -top-2'>
                <p>1</p>
            </div>
            <ShoppingCartIcon className='text-white' />
        </Fab>
    )
}

export default CartIcon