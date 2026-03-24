'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCreateProductData } from '../hook/useMutation'
import { ProductAPIPostRequest } from '../type/product'


export default function page() {

    const FormValue = z.object({
        title: z.string().trim()
            .min(2, { message: "Title must be at least 2 characters" }),

        category: z.string().trim()
            .min(1, { message: "Category is required" }),

        price: z.number()
            .min(1, { message: "Price must be greater than 0" }),

        mrp: z.number()
            .min(1, { message: "MRP must be greater than 0" }),

        brand: z.string().trim()
            .min(1, { message: "Brand is required" }),

        color: z.string().trim()
            .min(1, { message: "Color is required" }),

        size: z.number()
            .min(1, { message: "Size is required" }),

        description: z.string()
            .min(2, { message: "Description must be at least 2 characters" }),

        quantity: z.number()
            .min(1, { message: "Quantity must be at least 1" }),

        type: z.string().trim()
            .min(1, { message: "Type is required" }),
    });

    type FormData = z.infer<typeof FormValue>

    const productPayload = (): ProductAPIPostRequest => {

    }

    const { createProductsData } = useCreateProductData(productPayload)

    const {
        setValue,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<FormData>({
        resolver: zodResolver(FormValue),
        defaultValues: {
            title: "",
            category: "",
            price: undefined,
            mrp: undefined,
            brand: "",
            color: "",
            size: undefined,
            description: "",
            quantity: undefined,
            type: ""
        }
    })

    const FormTitle = watch("title")
    const FormPrice = watch("price")
    const FormCategory = watch("category")
    const FormMRP = watch("mrp")
    const Formbrand = watch("brand")
    const FormColour = watch("color")
    const FormSize = watch("size")
    const Formdescription = watch("description")
    const Formquantity = watch("quantity")
    const FormType = watch("type")

    return (
        <div>
            <div className='flex justify-center items-center m-4 bg-[#105fa3] text-white text-2xl h-[60px]'>
                <h1>Use-Form Hook </h1>
            </div>
            <div className="">
                <form>
                    <div className='grid grid-cols-2 gap-5 m-5'>
                        <div className='grid grid-cols-4 '>
                            <div className='col-span-2 col-start-3'>
                                <div>
                                    <input
                                        value={FormTitle}
                                        onChange={(e) => { setValue("title", e.target.value, { shouldValidate: true }) }}
                                        placeholder="Enter Title"
                                        className='w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                                    />
                                    {errors.title && <p style={{ color: 'red' }}>{errors.title.message}</p>}
                                </div>
                                <div className='mt-5'>
                                    <input
                                        value={FormCategory}
                                        onChange={(e) => { setValue("category", e.target.value) }}
                                        placeholder="Enter Category"
                                        className='w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                                    />
                                    {errors.category && <p style={{ color: 'red' }}>{errors.category.message}</p>}
                                </div>
                                <div className='mt-5'>
                                    <input
                                        value={Formbrand}
                                        onChange={(e) => { setValue("brand", e.target.value) }}
                                        placeholder="Enter Brand"
                                        className='w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                                    />
                                    {errors.brand && <p style={{ color: 'red' }}>{errors.brand.message}</p>}
                                </div>
                                <div className='mt-5'>
                                    <input
                                        value={FormMRP}
                                        onChange={(e) => { setValue("mrp", Number(e.target.value)) }}
                                        placeholder="Enter MRP"
                                        className='w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                                    />
                                    {errors.mrp && <p style={{ color: 'red' }}>{errors.mrp.message}</p>}
                                </div>
                                <div className='mt-5'>
                                    <input
                                        value={Formquantity}
                                        onChange={(e) => { setValue("quantity", Number(e.target.value)) }}
                                        placeholder="Enter Quantity"
                                        className='w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                                    />
                                    {errors.quantity && <p style={{ color: 'red' }}>{errors.quantity.message}</p>}
                                </div>
                            </div>

                        </div>
                        <div className='grid grid-cols-4'>
                            <div className='col-span-2 '>
                                <div>
                                    <input
                                        value={FormPrice}
                                        onChange={(e) => { setValue("price", Number(e.target.value), { shouldValidate: true }) }}
                                        placeholder="Enter Price"
                                        className='w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                                    />
                                    {errors.price && <p style={{ color: 'red' }}>{errors.price.message}</p>}
                                </div>
                                <div className='mt-5'>
                                    <input
                                        value={FormColour}
                                        onChange={(e) => { setValue("color", e.target.value) }}
                                        placeholder="Enter Color"
                                        className='w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                                    />
                                    {errors.color && <p style={{ color: 'red' }}>{errors.color.message}</p>}

                                </div>
                                <div className='mt-5'>
                                    <input
                                        value={FormSize}
                                        onChange={(e) => { setValue("size", Number(e.target.value)) }}
                                        placeholder="Enter Size"
                                        className='w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                                    />
                                    {errors.size && <p style={{ color: 'red' }}>{errors.size.message}</p>}

                                </div>

                                <div className='mt-5'>
                                    <input
                                        value={Formdescription}
                                        onChange={(e) => { setValue("description", e.target.value) }}
                                        placeholder="Enter Description"
                                        className='w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                                    />
                                    {errors.description && <p style={{ color: 'red' }}>{errors.description.message}</p>}

                                </div>
                                <div className='mt-5'>
                                    <input
                                        value={FormType}
                                        onChange={(e) => { setValue("type", e.target.value) }}
                                        placeholder="Enter Type"
                                        className='w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                                    />
                                    {errors.type && <p style={{ color: 'red' }}>{errors.type.message}</p>}

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex justify-center mt-4' >
                        <button className='bg-[#105fa3] text-white px-6 py-2 rounded-md'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
