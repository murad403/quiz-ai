import { z } from "zod";

export const signInValidation = z.object({
    email: z.string().min(1, { message: "Email is required" }).email({ message: "Please enter a valid email address" }),
    password: z.string().min(1, { message: "Password is required" })
});


export const signUpValidation = z.object({
    name: z.string().min(1, { message: "Name is required" }),

    email: z
        .string()
        .min(1, { message: "Email is required" })
        .email({ message: "Please enter a valid email address" }),

    password: z
        .string()
        .min(1, { message: "Password is required" })
        .min(8, { message: "Must be at least 8 characters" }),
});

export const resetPasswordValidation = z.object({
    email: z
        .string()
        .min(1, { message: "Email is required" })
        .email({ message: "Please enter a valid email address" })
})

export const verifyEmailValidation = z.object({
    code: z.string().min(6, "Verification code must be 6 digits").max(6, "Verification code must be 6 digits")
});