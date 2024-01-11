import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartReducer, { initialState as cartInitialState } from './slices/cart';

export const makeStore = () => {
    const persistedState = typeof window !== 'undefined' && localStorage.getItem('reduxState')
        ? JSON.parse(localStorage?.getItem('reduxState')!)
        : {
            cart: cartInitialState,
        }

    return configureStore({
        reducer: combineReducers({
            cart: cartReducer
        }),
        preloadedState: persistedState
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']