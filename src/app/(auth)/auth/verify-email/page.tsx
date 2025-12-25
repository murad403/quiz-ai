"use client";
import { verifyEmailValidation } from "@/validation/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import z from "zod";



type TInputs = z.infer<typeof verifyEmailValidation>

const VerifyEmail = () => {
    const [countdown, setCountdown] = useState(0);
    const [isResendDisabled, setIsResendDisabled] = useState(false);
    const { register, handleSubmit, formState: { errors }, } = useForm<TInputs>({
        resolver: zodResolver(verifyEmailValidation)
    })

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (countdown > 0) {
            timer = setInterval(() => {
                setCountdown((prev) => {
                    if (prev <= 1) {
                        setIsResendDisabled(false);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [countdown]);
     const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }



    const onSubmit: SubmitHandler<TInputs> = (data) => {
        console.log(data);
    }


    
    const handleResendCode = () => {
        console.log("Resend code clicked");
        setCountdown(60);
        setIsResendDisabled(true);
    }

   

    return (
        <div className="md:w-1/2 w-full space-y-8">
            <div className="text-center">
                <h2 className='text-main font-semibold text-subheading'>QuizAI</h2>
                <h1 className="font-semibold text-[40px] text-main">Verify your email</h1>
                <p className="text-paragraph text-title">
                    {`We've sent a 6-digit verification code to`}
                </p>
                <p className="text-paragraph text-main font-semibold">mdmurad.dev2004@gmail.com</p>
            </div>
            <form className="w-full md:w-1/2 space-y-4 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label className="text-main font-semibold text-paragraph block mb-2" htmlFor="code">
                        Verification Code
                    </label>
                    <input
                        className="w-full appearance-none px-4 py-2 border border-gray-700/70 rounded-lg focus:outline-2 outline-header text-title"
                        placeholder="Enter 6-digit code"
                        maxLength={6}
                        {...register("code")}
                    />
                    <p className="text-title text-sm mt-2 text-center">Enter the code from your email</p>
                    {errors.code && <p className="text-red-500 text-sm mt-2">{errors.code.message}</p>}
                </div>
                <button
                    type="submit"
                    className="text-main font-semibold w-full text-center py-2 rounded-lg bg-header hover:bg-header/90"
                >
                    Verify Email
                </button>
            </form>
            <div>
                <p className="text-center text-title text-sm mb-3">
                    {`DIDN'T RECEIVE THE CODE?`}
                </p>
                <button
                    onClick={handleResendCode}
                    disabled={isResendDisabled}
                    className={`text-main font-semibold w-full md:w-1/2 mx-auto block text-center py-2 rounded-lg border border-gray-700/70 ${
                        isResendDisabled 
                            ? 'opacity-50 cursor-not-allowed' 
                            : 'hover:bg-header'
                    }`}
                >
                    {isResendDisabled ? `Resend Code (${formatTime(countdown)})` : 'Resend Code'}
                </button>
                <p className="text-center mt-3">
                    <Link href={"/auth/sign-up"} className="text-green-500 text-sm hover:underline underline-offset-2">Change email address</Link>
                </p>
            </div>
        </div>
    )
}

export default VerifyEmail