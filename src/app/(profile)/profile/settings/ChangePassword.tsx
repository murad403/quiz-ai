"use client"
import { changePasswordValidation } from '@/validation/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff } from 'lucide-react';
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import z from 'zod';

type TInputs = z.infer<typeof changePasswordValidation>

const ChangePassword = () => {
    const [showCurrentPassword, setShowCurrentPassword] = useState<boolean>(false);
    const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
    
    const { register, handleSubmit, formState: { errors }, } = useForm<TInputs>({
        resolver: zodResolver(changePasswordValidation)
    })

    const onSubmit: SubmitHandler<TInputs> = (data) => {
        console.log(data)
    }

    return (
        <div className='bg-card border border-gray-700/50 rounded-lg p-4'>
            <h3 className='text-main font-medium text-subheading'>Change Password</h3>
            <p className='text-title text-paragraph'>Update your password to keep your account secure</p>

            <form className="w-full space-y-4 mt-8" onSubmit={handleSubmit(onSubmit)}>
                {/* Current Password Field */}
                <div>
                    <label className="text-main font-semibold text-paragraph block mb-2" htmlFor="currentPassword">
                        Current Password
                    </label>
                    <div className="relative">
                        <input
                            type={showCurrentPassword ? "text" : "password"}
                            className="w-full appearance-none px-4 py-2 pr-12 border border-gray-700/70 rounded-lg focus:outline-2 outline-header text-title"
                            placeholder="enter your current password"
                            {...register("currentPassword")}
                        />
                        <button
                            type="button"
                            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                            className="absolute inset-y-0 right-0 flex items-center pr-4 text-header hover:text-header/80"
                            aria-label={showCurrentPassword ? "Hide password" : "Show password"}
                        >
                            {showCurrentPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                        </button>
                    </div>
                    {errors.currentPassword && <p className="text-red-500 text-sm mt-2">{errors.currentPassword.message}</p>}
                </div>

                {/* New Password Field */}
                <div>
                    <label className="text-main font-semibold text-paragraph block mb-2" htmlFor="newPassword">
                        New Password
                    </label>
                    <div className="relative">
                        <input
                            type={showNewPassword ? "text" : "password"}
                            className="w-full appearance-none px-4 py-2 pr-12 border border-gray-700/70 rounded-lg focus:outline-2 outline-header text-title"
                            placeholder="enter your new password"
                            {...register("newPassword")}
                        />
                        <button
                            type="button"
                            onClick={() => setShowNewPassword(!showNewPassword)}
                            className="absolute inset-y-0 right-0 flex items-center pr-4 text-header hover:text-header/80"
                            aria-label={showNewPassword ? "Hide password" : "Show password"}
                        >
                            {showNewPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                        </button>
                    </div>
                    {errors.newPassword && <p className="text-red-500 text-sm mt-2">{errors.newPassword.message}</p>}
                </div>

                {/* Confirm New Password Field */}
                <div>
                    <label className="text-main font-semibold text-paragraph block mb-2" htmlFor="confirmNewPassword">
                        Confirm New Password
                    </label>
                    <div className="relative">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            className="w-full appearance-none px-4 py-2 pr-12 border border-gray-700/70 rounded-lg focus:outline-2 outline-header text-title"
                            placeholder="confirm your new password"
                            {...register("confirmNewPassword")}
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute inset-y-0 right-0 flex items-center pr-4 text-header hover:text-header/80"
                            aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                        >
                            {showConfirmPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                        </button>
                    </div>
                    {errors.confirmNewPassword && <p className="text-red-500 text-sm mt-2">{errors.confirmNewPassword.message}</p>}
                </div>

                <button
                    type="submit"
                    className="text-main font-semibold w-full text-center py-2 rounded-lg bg-header hover:bg-header/90"
                >
                    Change Password
                </button>
            </form>
        </div>
    )
}

export default ChangePassword