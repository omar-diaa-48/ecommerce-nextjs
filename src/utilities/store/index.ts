import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { LOCAL_STORAGE_PERSIST_KEY } from '../constants';
import cartReducer, { initialState as cartInitialState } from './slices/cart';

export const makeStore = () => {
    const persistedState = typeof window !== 'undefined' && localStorage.getItem(LOCAL_STORAGE_PERSIST_KEY)
        ? JSON.parse(localStorage?.getItem(LOCAL_STORAGE_PERSIST_KEY)!)
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