/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useSignInMutation } from '@/redux/features/auth/auth.api';
import { saveToken } from '@/utils/auth';
import { signInValidation } from '@/validation/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff } from 'lucide-react';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import z from 'zod';

type TInputs = z.infer<typeof signInValidation>

const SignInForm = () => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const { register, handleSubmit, formState: { errors }, } = useForm<TInputs>({
        resolver: zodResolver(signInValidation),
        defaultValues: {
            email: "teacher@example.com",
            password: "password123"
        }
    })
    const [signIn, {isLoading}] = useSignInMutation();

    const onSubmit: SubmitHandler<TInputs> = async(data) => {
        try {
            const result = await signIn(data).unwrap();
            await saveToken(result.access, result.refresh);
            // console.log(result);
            toast.success("Signed in successfully!");
            router.push("/");
        } catch (error: any) {
            // console.log(error);
            toast.error("Failed to sign in. Please check your credentials.");
        }
    }
    return (
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-8">
            <div className="text-center">
                <h2 className='text-main font-semibold text-subheading'>QuizAI</h2>
                <h1 className="font-semibold text-[40px] text-main">Welcome back</h1>
                <p className="text-paragraph text-title">Enter your credentials to access your account</p>
            </div>

            <form className="w-full md:w-1/2 space-y-4" onSubmit={handleSubmit(onSubmit)}>
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
                            placeholder="enter your password"
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

                <div className="flex justify-end">
                    <Link href={"/auth/forgot-password"} className="text-green-500 text-sm hover:underline underline-offset-2">
                        Forgot password?
                    </Link>
                </div>

                <button
                    type="submit"
                    className="text-main font-semibold w-full text-center py-2 rounded-lg bg-header hover:bg-header/90"
                >
                    {
                        isLoading ? "Signing in..." : "Sign In"
                    }
                </button>
            </form>

            <p className="text-center text-sm">
                <span className="text-title">{`Don't`} have an account? </span>
                <Link href={"/auth/sign-up"} className="text-green-500">Sign up</Link>
            </p>
        </div>
    )
}

export default SignInForm
