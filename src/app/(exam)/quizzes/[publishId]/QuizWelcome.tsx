/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useQuizWelcomeQuery, useStartQuizMutation } from "@/redux/features/dashboard/dashboard.api";
import { quizWelcomeValidation } from "@/validation/validation"
import { zodResolver } from "@hookform/resolvers/zod";
import { Clock, FileText } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import z from "zod"

type TInputs = z.infer<typeof quizWelcomeValidation>;

type TProps = {
    publishId: string;
    setStep: (step: "welcome" | "quiz" | "result") => void;
    setQuizzes: (quizzes: any[]) => void;
    setAttemptId: (id: number) => void;
}

const QuizWelcome = ({publishId, setStep, setQuizzes, setAttemptId}: TProps) => {
    const {data} = useQuizWelcomeQuery(publishId);
    const [startQuiz, {isLoading}] = useStartQuizMutation();
    const { register, handleSubmit, formState: { errors },} = useForm<TInputs>({
        resolver: zodResolver(quizWelcomeValidation),
        defaultValues: {
            student_name: 'Md Murad',
            student_email: 'mdmurad.dev2004@gmail.com'
        }
    });

    const onSubmit: SubmitHandler<TInputs> = async(data) =>{
        try {
            const result = await startQuiz({id: publishId, data}).unwrap();
            setQuizzes(result?.questions);
            setAttemptId(result?.attempt_id);
            setStep("quiz");
        } catch (error) {
            toast.error("Failed to start the quiz. Please try again.");
        }
    }

    return (
        <div className="w-full rounded-xl border border-gray-700/50 bg-card md:p-7 p-4">
            <h1 className="text-subheading font-bold text-main mb-2">
                {data?.title}
            </h1>
            <p className="text-title text-paragraph">{data?.context}</p>
            <div className="flex items-center gap-6 my-6 border-y border-gray-700/50 py-4">
                <div className="flex items-center gap-2">
                    <FileText className="text-green-500" size={20} />
                    <span className="text-sm font-medium text-main">{data?.num_questions} Questions</span>
                </div>
                <div className="flex items-center gap-2">
                    <Clock className="text-green-500" size={20} />
                    <span className="text-sm font-medium text-main">~ {data?.time_limit} minutes</span>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-6">
                    <label htmlFor="userName" className="text-main font-semibold text-paragraph block mb-2">
                        Your Name
                    </label>
                    <input
                        type="text"
                        {...register("student_name")}
                        className="w-full appearance-none px-4 py-2 border border-gray-700/70 rounded-lg focus:outline-2 outline-header text-title"
                        placeholder="Enter your name"
                    />
                    {errors.student_name && (
                        <p className="mt-2 text-sm text-red-500">{errors.student_name.message}</p>
                    )}
                </div>

                <div className="mb-6">
                    <label htmlFor="userEmail" className="text-main font-semibold text-paragraph block mb-2">
                        Your Email
                    </label>
                    <input
                        type="text"
                        {...register("student_email")}
                        className="w-full appearance-none px-4 py-2 border border-gray-700/70 rounded-lg focus:outline-2 outline-header text-title"
                        placeholder="Enter your email"
                    />
                    {errors.student_email && (
                        <p className="mt-2 text-sm text-red-500">{errors.student_email.message}</p>
                    )}
                </div>

                <button
                    type="submit"
                    className="text-main font-semibold w-full text-center py-2 rounded-lg transition-colors bg-header hover:bg-header/90"
                >
                    {
                        isLoading ? "Starting..." : "Start Quiz"
                    }
                </button>
            </form>
        </div>
    )
}

export default QuizWelcome;
