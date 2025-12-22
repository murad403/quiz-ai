"use client"
import { signUpValidation } from '@/validation/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff } from 'lucide-react';
import Link from 'next/link'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import z from 'zod';

type TInputs = z.infer<typeof signUpValidation>

const SignUpForm = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const { register, handleSubmit, formState: { errors }, } = useForm<TInputs>({
        resolver: zodResolver(signUpValidation)
    })
    const onSubmit: SubmitHandler<TInputs> = (data) => {
        console.log(data)
    }
    return (
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-8">
            <div className="text-center">
                <h2 className='text-main font-semibold text-subheading'>QuizAI</h2>
                <h1 className="font-semibold text-[40px] text-main">Create your account</h1>
                <p className="text-paragraph text-title">Start creating AI-powered quizzes in minutes</p>
            </div>

            <form className="w-full md:w-1/2 space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label className="text-main font-semibold text-paragraph block mb-2" htmlFor="email">
                        Full Name
                    </label>
                    <input
                        className="w-full appearance-none px-4 py-2 border border-gray-700/70 rounded-lg focus:outline-2 outline-header text-title"
                        placeholder="john doe"
                        {...register("name")}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name.message}</p>}
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

                {/* Password Field with Eye Icon */}
                <div>
                    <label className="text-main font-semibold text-paragraph block mb-2" htmlFor="password">
                        Password
                    </label>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            className="w-full appearance-none px-4 py-2 pr-12 border border-gray-700/70 rounded-lg focus:outline-2 outline-header text-title"
                            placeholder="minimum 8 characters"
                            {...register("password")}
                        />
                        {/* Eye Icon Button */}
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 flex items-center pr-4 text-header hover:text-header/80"
                            aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                    {errors.password && <p className="text-red-500 text-sm mt-2">{errors.password.message}</p>}
                </div>
                <button
                    type="submit"
                    className="text-main font-semibold w-full text-center py-2 rounded-lg bg-header hover:bg-header/90"
                >
                    Create account
                </button>
            </form>
            <p className='text-sm text-center text-title'>
                By creating an account, you agree to our <Link href={'/terms-of-service'} className='text-green-500'>Terms of Service</Link> and <Link href={"/privacy-policy"} className='text-green-500'>Privacy Policy</Link>
            </p>

            <p className="text-center text-sm">
                <span className="text-title">Already have an account? </span>
                <Link href={"/auth/sign-in"} className="text-green-500">Sign in</Link>
            </p>
        </div>
    )
}

export default SignUpForm
