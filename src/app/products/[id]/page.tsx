import { Product } from "@/components/presentational/products/Product";
import { getProduct } from "@/utilities/data";

export const revalidate = 60

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