"use client"

import { keepPreviousData, useMutation, useQuery } from "@tanstack/react-query"
import { APIEndPoints } from "../endPoints"
import { ProductAPIRequet } from "../type/product"

export const useProductData = (request:ProductAPIRequet) => {

    const productQuery = useQuery({
        queryKey: ["product",request],
        queryFn: async () => {
            const res = await fetch(`${APIEndPoints.ProductAPI.ProductList}?${request}`)
            return res.json()
            
        },
        staleTime: 50000,
        retry :3,
        retryDelay: 100,
        placeholderData : keepPreviousData
    })



    return {
        productData: productQuery.data,
        isLoading: productQuery.isLoading,
        error: productQuery.error,
        isFetching : productQuery.isFetching
    }
}