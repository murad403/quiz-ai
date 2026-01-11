"use client"
import { personalInfoValidation } from '@/validation/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import z from 'zod'

type TInputs = z.infer<typeof personalInfoValidation>

const PersonalInformation = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm<TInputs>({
        resolver: zodResolver(personalInfoValidation)
    })

    const onSubmit: SubmitHandler<TInputs> = (data) => {
        console.log(data)
    }
    return (
        <div className='bg-card border border-gray-700/50 rounded-lg p-4'>
            <h3 className='text-main font-medium text-subheading'>Profile Information</h3>
            <p className='text-title text-paragraph'>Update your personal information</p>

            <form className="w-full space-y-4 mt-8" onSubmit={handleSubmit(onSubmit)}>

                {/* Full Name Field */}
                <div>
                    <label className="text-main font-semibold text-paragraph block mb-2" htmlFor="fullName">
                        Full Name
                    </label>
                    <input
                        className="w-full appearance-none px-4 py-2 border border-gray-700/70 rounded-lg focus:outline-2 outline-header text-title"
                        placeholder="John Doe"
                        {...register("fullName")}
                    />
                    {errors.fullName && <p className="text-red-500 text-sm mt-2">{errors.fullName.message}</p>}
                </div>

                {/* Email Field */}
                <div>
                    <label className="text-main font-semibold text-paragraph block mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="w-full appearance-none px-4 py-2 border border-gray-700/70 rounded-lg focus:outline-2 outline-header text-title"
                        placeholder="info@gmail.com"
                        {...register("email")}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>}
                </div>


                {/* Institute Field */}
                <div>
                    <label className="text-main font-semibold text-paragraph block mb-2" htmlFor="institute">
                        School/Institute
                    </label>
                    <input
                        className="w-full appearance-none px-4 py-2 border border-gray-700/70 rounded-lg focus:outline-2 outline-header text-title"
                        placeholder="School/Institute"
                        {...register("institute")}
                    />
                    {errors.institute && <p className="text-red-500 text-sm mt-2">{errors.institute.message}</p>}
                </div>


                <div className='flex justify-end'>
                    <button
                        type="submit"
                        className="text-main px-4 font-semibold text-center py-2 rounded-lg bg-header hover:bg-header/90"
                    >
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    )
}

export default PersonalInformation
