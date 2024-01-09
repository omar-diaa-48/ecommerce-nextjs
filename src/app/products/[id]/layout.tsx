import { getProduct } from '@/utilities/data'
import React from 'react'

export default async function Layout({
    params: { id },
    children
}: {
    params: { id: string },
    children: React.ReactNode
}) {

    const product = await getProduct(id)

    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}
