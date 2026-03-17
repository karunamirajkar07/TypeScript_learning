"use client"

import { useProductData } from "../hook"
import { ProductAPIList } from "../type/product"
export default function ReactQuery() {

    const { productData, isLoading, error } = useProductData()

    if (isLoading) return <p> Loding</p>
    if (error) return <p>Someting went wrong</p>

    return (
        <div>
            <ul>
                {productData.map((x: ProductAPIList) => (
                    <li key={x.id}>
                        <h3>{x.title}</h3>
                        <p>{x.category}</p>
                        <p>₹{x.price}</p>
                        <img src={x.imageURL} alt={x.title} width={100} />
                    </li>

                ))}
            </ul>
        </div>
    )
}
