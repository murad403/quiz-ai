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

export const contactValidation = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    subject: z.string().min(1, "Subject is required"),
    message: z.string().min(10, "Message must be at least 10 characters"),
})

export const quizValidation = z.object({
  topic: z.string().min(1, "Quiz topic is required"),
  context: z.string().optional(),
  numberOfQuestions: z.number().min(1, "At least 1 question is required").max(50, "Maximum 50 questions allowed")
});

export const changePasswordValidation = z.object({
    currentPassword: z.string().min(6, "Current password must be at least 6 characters"),
    newPassword: z.string().min(6, "New password must be at least 6 characters"),
    confirmNewPassword: z.string().min(6, "Confirm password must be at least 6 characters")
}).refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Passwords don't match",
    path: ["confirmNewPassword"]
});

export const personalInfoValidation = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().min(1, "Email is required").email("Please enter a valid email address"),
  institute: z.string().min(1, "Institute name is required").optional()
});
