'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCreateProductData } from '../hook/useMutation'
import { ProductAPIPostRequest } from '../type/product'


export default function page() {

    const FormValue = z.object({
        title: z.string().trim().
            min(2, { message: " Name should have minimum 2 character." })
            .max(100, { message: "Name should have maximum 100 character" }),
            price: z.number()
            .min(10, { message: "Age should not be less than 10 years." })
            .positive()
            .int(),
        state: z.string().optional(),
        country: z.string().optional(),
        date : z.date().min((new Date("2000-01-01")))
    })

    type FormData = z.infer<typeof FormValue>

    const productPayload= () : ProductAPIPostRequest =>{

    }

    const { createProductsData} = useCreateProductData(productPayload)

    const {
        setValue,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<FormData>({
        resolver: zodResolver(FormValue),
        defaultValues: {
            title: "",
            age: 0,
            state: "",
            country: "",
            date : undefined

        }
    })

    const FormName = watch("title")
    const Formage = watch("age")
    const FormState = watch("state")
    const FormCountry = watch("country")
    const FormDate = watch("date")

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
                                        value={FormName}
                                        onChange={(e) => { setValue("title", e.target.value, { shouldValidate: true }) }}
                                        placeholder="Enter name"
                                        className='w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                                    />
                                    {errors.title && <p style={{ color: 'red' }}>{errors.title.message}</p>}
                                </div>
                                <div className='mt-5'>
                                    <input
                                        value={FormState}
                                        onChange={(e) => { setValue("state", e.target.value) }}
                                        placeholder="Enter State"
                                        className='w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                                    />
                                </div>
                                <div className='mt-5'>
                                    <input
                                        type='date'
                                        value={FormDate ? FormDate.toISOString().split("T")[0] : ""}
                                        onChange={(e) => { setValue("date", new Date(e.target.value)) }}
                                        placeholder="Enter State"
                                        className='w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                                    />
                                      {errors.date && <p style={{ color: 'red' }}>{errors.date.message}</p>}
                                </div>
                            </div>

                        </div>
                        <div className='grid grid-cols-4'>
                            <div className='col-span-2 '>
                                <div>
                                    <input
                                        value={Formage}
                                        type='number'
                                        onChange={(e) => { setValue("age", Number(e.target.value), { shouldValidate: true }) }}
                                        placeholder="Enter age"
                                        className='w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                                    />
                                    {errors.age && <p style={{ color: 'red' }}>{errors.age.message}</p>}
                                </div>
                                <div className='mt-5'>
                                    <input
                                        value={FormCountry}
                                        onChange={(e) => { setValue("country", e.target.value) }}
                                        placeholder="Enter State"
                                        className='w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
