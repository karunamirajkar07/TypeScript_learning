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
            <div>
                <form>
                    <div>
                        <input
                            value={FormName}
                            onChange={(e) => { setValue("name", e.target.value, { shouldValidate: true }) }}
                            placeholder="Enter name"
                        />
                        {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
                    </div>
                    <div>
                        <input
                            value={Formage}
                            type='number'
                            onChange={(e) => { setValue("age", Number(e.target.value), { shouldValidate: true }) }}
                            placeholder="Enter age"
                        />
                        {errors.age && <p style={{ color: 'red' }}>{errors.age.message}</p>}
                    </div>
                    <div>
                        <input
                            value={FormState}
                            onChange={(e) => { setValue("state", e.target.value) }}
                            placeholder="Enter State"
                        />
                       
                    </div>
                    <div>
                        <input
                            value={FormCountry}
                            onChange={(e) => { setValue("country", e.target.value) }}
                            placeholder="Enter age"
                        />
                      
                    </div>
                </form>
            </div>
        </div>
    )
}
