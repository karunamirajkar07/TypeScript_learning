import { APIEndPoints } from '@/app/endPoints'
import { ProductAPIList, ProductAPIPostRequest, ProductAPIRequet } from '@/app/type/product'
import { QueryClient, keepPreviousData, useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

export const useCreateProductData = (request:ProductAPIRequet , id : string) => {

    const queryClient= useQueryClient()

    const createProduct = useMutation({
        mutationFn : async (request : ProductAPIPostRequest)=>{
           return await axios.post(APIEndPoints.ProductAPI.CreateProduct, request)
        },
        onSuccess : ()=>(
            queryClient.invalidateQueries()
        )

    })

    const productQuery = useQuery({
        queryKey: ["product",request],
        queryFn: async () => {
            const res = await fetch(`${APIEndPoints.ProductAPI.GetByIdPRoduct}?${request}`)
            return res.json()
            
        },
        enabled: true,
        staleTime: 10 * 1000,
        retry :3,
        retryDelay: 100,
        placeholderData : keepPreviousData
    })

    const getByIdProduct = useQuery<ProductAPIList>({
        queryKey:["getById", id],
        queryFn: async () =>{
            const res = await axios.get(`${APIEndPoints.ProductAPI.ProductList}/${id}`)
            return res.data;
        },
        enabled: !!id,

        
    })

    return {
        createProductsData: createProduct,

        productData: productQuery.data,
        isLoading: productQuery.isLoading,
        error: productQuery.error,
        isFetching : productQuery.isFetching,

         productById: getByIdProduct.data
    }
     
    }
