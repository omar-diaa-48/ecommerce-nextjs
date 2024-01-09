import { IProduct } from '@/utilities/interfaces/product.interface';
import { createAction, createReducer } from '@reduxjs/toolkit';

interface CartState {
    items: Array<IProduct>
}

const addItemToCart = createAction<IProduct>('cart/addItemToCart')
const clearCart = createAction<IProduct>('cart/clearCart')

const initialState = { items: [] } as CartState;

const cartReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addItemToCart, (state, action) => ({
            ...state,
            items: [...state.items, action.payload]
        }))
        .addCase(clearCart, () => ({
            ...initialState
        }))
})

export default cartReducer;