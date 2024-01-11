'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '@/utilities/store'

export default function StoreProvider({
    children,
}: {
    children: React.ReactNode
}) {

    const storeRef = useRef<AppStore>()
    if (!storeRef.current) {
        storeRef.current = makeStore()

        storeRef.current.subscribe(() => {
            localStorage.setItem('reduxState', JSON.stringify(storeRef.current?.getState()))
        })
    }

    return (
        <Provider store={storeRef.current}>
            {children}
        </Provider>
    )
}