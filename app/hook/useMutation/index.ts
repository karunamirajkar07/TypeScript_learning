import { APIEndPoints } from '@/app/endPoints'
import { ProductAPIPostRequest } from '@/app/type/product'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

export const useCreateProductData = (request : ProductAPIPostRequest) => {

    const createProduct = useMutation({
        mutationFn : async ()=>{
           const res= await axios.post(`${APIEndPoints.ProductAPI.CreateProduct}?${request}`)
        },
        onSuccess : (

        )

    })

    return {
        
        createProducts: createProduct
    }
     
    }
