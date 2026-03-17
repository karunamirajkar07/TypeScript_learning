"use client"
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { ProductAPIList } from '../type/product'
import { APIEndPoints } from '../endPoints'

export default function ReactQuery() {

    const { data } = useQuery<ProductAPIList[]>({
        queryKey: ["product"],
        queryFn: async()=>{
            const response =await fetch(APIEndPoints.ProductAPI.ProductList)
            return response.json()
        }
    })
    return (
        <div>
            <ul>
                {data?.map((x) => (
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
