'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'


export default function page() {

    const FormValue = z.object({
        name: z.string().trim().
            min(2, { message: " Name should have minimum 2 character." })
            .max(100, { message: "Name should have maximum 100 character" }),
        age: z.number()
            .min(10, { message: "Age should not be less than 10 years." })
            .max(60, { message: "Age should not be more than 60 years." }),
        state: z.string().optional(),
        country: z.string().optional()
    })

    type FormData = z.infer<typeof FormValue>

    const {
        setValue,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<FormData>({
        resolver: zodResolver(FormValue),
        defaultValues: {
            name: "",
            age: 0,
            state: "",
            country: "",

        }
    })

    const FormName = watch("name")
    const Formage = watch("age")
    const FormState = watch("state")
    const FormCountry = watch("country")

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
                                        onChange={(e) => { setValue("name", e.target.value, { shouldValidate: true }) }}
                                        placeholder="Enter name"
                                        className='w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                                    />
                                    {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
                                </div>
                                <div className='mt-5'>
                                    <input
                                        value={FormState}
                                        onChange={(e) => { setValue("state", e.target.value) }}
                                        placeholder="Enter State"
                                        className='w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400'
                                    />
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
