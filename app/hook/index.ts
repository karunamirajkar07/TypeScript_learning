"use client"

import { useMutation, useQuery } from "@tanstack/react-query"
import { APIEndPoints } from "../endPoints"

export const useProductData = () => {


    const productQuery = useQuery({
        queryKey: ["product"],
        queryFn: async () => {
            const res = await fetch(APIEndPoints.ProductAPI.ProductList)
            return res.json()
        }
    })



    return {
        productData: productQuery.data,
        isLoading: productQuery.isLoading,
        error: productQuery.error,
    }
}