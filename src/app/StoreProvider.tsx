'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '@/utilities/store'
import { LOCAL_STORAGE_PERSIST_KEY } from '@/utilities/constants'

export default function StoreProvider({
    children,
}: {
    children: React.ReactNode
}) {

    const storeRef = useRef<AppStore>()
    if (!storeRef.current) {
        storeRef.current = makeStore()

        storeRef.current.subscribe(() => {
            localStorage.setItem(LOCAL_STORAGE_PERSIST_KEY, JSON.stringify(storeRef.current?.getState()))
        })
    }

    return (
        <Provider store={storeRef.current}>
            {children}
        </Provider>
    )
}