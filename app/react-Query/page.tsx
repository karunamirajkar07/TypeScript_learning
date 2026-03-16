"use client"
import { useQuery } from '@tanstack/react-query'
import React from 'react'

export default function ReactQuery() {

    interface Product {
        id: number
        title : string
        category : string
    }

    const { data } = useQuery<Product[]>({
        queryKey: ["product"],
        queryFn: async () => {
            const response = await fetch("https://6776460912a55a9a7d0b1821.mockapi.io/product")
            return await response.json()
        }
    })
    return (
        <div>
            <ul>
                {data?.map((x) => (
                    <div>

                        <li key={x.id}>{x.title}</li>
                        <li key={x.category}>{x.category}</li>
                    </div>
                ))}
            </ul>
        </div>
    )
}
