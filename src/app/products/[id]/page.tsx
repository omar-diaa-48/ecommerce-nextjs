import { Product } from "@/components/presentational/products/Product";
import { getProduct } from "@/utilities/data";
import { Metadata } from "next";

export const revalidate = 60

export async function generateMetadata({ params }: { params: { id: string } }) {
    return {
        title: `Product #${params.id}`,
    }
}

export default async function ProductDetails({
    params: { id },
}: {
    params: { id: string }
}) {

    const product = await getProduct(id)

    return (
        <Product product={product} />
    )
}