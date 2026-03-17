"use client"
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

export default function ReactQuery() {

    interface Product {
        id: number
        title: string
        category: string
    }

    const fetchData = async (): Promise<Product[]> => {
        const data = await axios.get("https://6776460912a55a9a7d0b1821.mockapi.io/product")
        return data.data
        }

    const { data } = useQuery<Product[]>({
        queryKey: ["product"],
        queryFn: fetchData
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
