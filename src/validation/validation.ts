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
    title: z.string().min(1, "Quiz topic is required"),
    context: z.string().optional(),
    num_questions: z.number().min(3, "At least 3 questions are required").max(50, "Maximum 50 questions allowed")
});

export const changePasswordValidation = z.object({
    current_password: z.string().min(1, "Current password is required"),
    new_password: z.string().min(6, "New password must be at least 6 characters"),
    confirm_password: z.string().min(6, "Confirm password must be at least 6 characters")
}).refine((data) => data.new_password === data.confirm_password, {
    message: "Passwords don't match",
    path: ["confirm_password"]
});

export const personalInfoValidation = z.object({
    name: z.string().min(1, "Full name is required"),
    email: z.string().min(1, "Email is required").email("Please enter a valid email address"),
    institute: z.string().min(1, "Institute name is required").optional()
});


export const quizWelcomeValidation = z.object({
    student_name: z.string().min(1, "Student name is required"),
    student_email: z.string().min(1, "Student email is required").email("Please enter a valid email address")
});


export type TQuizOption = {
    id: number;
    text: string;
}

export type TQuizQuestion = {
    id: number;
    text: string;
    options: TQuizOption[];
}
