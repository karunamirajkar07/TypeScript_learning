import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

export const useCreateProductData = () => {

    const createProduct = useMutation({
        mutationFn : async ()=>{
            await axios.post("")
        }

    })

    return {
        
        createProducts: createProduct
    }
     
    }
