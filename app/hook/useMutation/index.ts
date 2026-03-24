import { APIEndPoints } from '@/app/endPoints'
import { ProductAPIPostRequest } from '@/app/type/product'
import { QueryClient, useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

export const useCreateProductData = () => {

    const queryClient= useQueryClient()

    const createProduct = useMutation({
        mutationFn : async (request : ProductAPIPostRequest)=>{
           return await axios.post(APIEndPoints.ProductAPI.CreateProduct, request)
        },
        onSuccess : ()=>(
            queryClient.invalidateQueries()
        )

    })

    return {
        createProductsData: createProduct,
    }
     
    }
