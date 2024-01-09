import { IProduct } from '@/utilities/interfaces/product.interface';
import { createAction, createReducer } from '@reduxjs/toolkit';

interface CartState {
    items: Array<IProduct>;
    count: number;
}

const addItemToCart = createAction<IProduct>('cart/addItemToCart')

const initialState = { items: [], count: 5 } as CartState;

const cartReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addItemToCart, (state, action) => ({
            ...state,
            items: [...state.items, action.payload]
        }))
})

export default cartReducer;