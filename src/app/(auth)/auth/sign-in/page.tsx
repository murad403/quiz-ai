"use client"
import { signInValidation } from "@/validation/validation"
import { zodResolver } from "@hookform/resolvers/zod"
import { Check } from "lucide-react"
import Link from "next/link"
import { useForm, SubmitHandler } from "react-hook-form"
import z from "zod"
import { Eye, EyeOff } from 'lucide-react';
import { useState } from "react"

type TInputs = z.infer<typeof signInValidation>

const SignIn = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const { register, handleSubmit, formState: { errors }, } = useForm<TInputs>({
        resolver: zodResolver(signInValidation)
    })
    const onSubmit: SubmitHandler<TInputs> = (data) => {
        console.log(data)
    }
    return (
        <div className="flex w-full flex-col md:flex-row md:gap-0 gap-20">
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
                        Sign In
                    </button>
                </form>
            </div>

            <div className="bg-white/10 md:h-screen p-4 rounded-xl md:rounded-none md:p-0 md:border-l border-gray-700/50 w-full md:w-1/2 flex flex-col justify-center items-center">
                <div className="w-full md:w-1/2">
                    <div className="">
                        <p className='text-sm py-1 px-5 bg-white/10 rounded-2xl text-green-500 inline-block'>
                            <span>For Educators</span>
                        </p>
                        <h1 className="font-semibold text-[40px] text-main">Create engaging quizzes in minutes</h1>
                        <p className="text-paragraph text-title">Use AI to generate comprehensive quizzes from any topic. Track student progress and gain insights to improve learning outcomes.</p>
                    </div>
                    <div className="mt-7 space-y-3">
                        <div className="flex items-center gap-3">
                            <h1 className='size-10 bg-green-500/10 flex justify-center items-center p-3 text-green-500 rounded-xl'>
                                <Check size={19} className='text-header' />
                            </h1>
                            <div>
                                <h3 className="text-main font-semibold text-paragraph">AI-Powered Generation</h3>
                                <p className="text-small text-title">Generate quiz questions from any topic instantly</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <h1 className='size-10 bg-green-500/10 flex justify-center items-center p-3 text-green-500 rounded-xl'>
                                <Check size={19} className='text-header' />
                            </h1>
                            <div>
                                <h3 className="text-main font-semibold text-paragraph">Easy Sharing</h3>
                                <p className="text-small text-title">Share quiz links with students - no accounts needed</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <h1 className='size-10 bg-green-500/10 flex justify-center items-center p-3 text-green-500 rounded-xl'>
                                <Check size={19} className='text-header' />
                            </h1>
                            <div>
                                <h3 className="text-main font-semibold text-paragraph">Performance Tracking</h3>
                                <p className="text-small text-title">View detailed analytics and insights</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn
