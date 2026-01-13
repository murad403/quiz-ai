"use client";
import { Check } from "lucide-react";
import Link from "next/link";

interface QuizResultProps {
    studentName: string;
    score: number;
    totalQuestions: number;
    correctAnswers: number;
    incorrectAnswers: number;
    onRetake: () => void;
}

const QuizResult = ({ 
    studentName, 
    score, 
    correctAnswers, 
    incorrectAnswers, 
    onRetake 
}: QuizResultProps) => {

    const percentage = Math.round(score);
    const radius = 70;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <div>
            <div className="border border-gray-700/50 bg-card md:p-7 p-4 rounded-xl">

                {/* Success Icon */}
                <div className="flex justify-center md:mb-6 mb-2">
                    <div className="size-20 rounded-full bg-green-500/10 flex items-center justify-center">
                        <Check className="size-8 text-emerald-500" strokeWidth={3} />
                    </div>
                </div>

                {/* Title */}
                <h1 className="text-heading font-bold text-main text-center">
                    Quiz Complete!
                </h1>
                <p className="text-title text-center">
                    Great job, {studentName}!
                </p>

                {/* Circular Progress */}
                <div className="flex justify-center md:mb-10 mb-0">
                    <div className="relative">
                        <svg width="180" height="180" className="transform -rotate-90">
                            {/* Background circle */}
                            <circle
                                cx="90"
                                cy="90"
                                r={radius}
                                stroke="#262626"
                                strokeWidth="12"
                                fill="none"
                            />
                            {/* Progress circle */}
                            <circle
                                cx="90"
                                cy="90"
                                r={radius}
                                stroke="#10b981"
                                strokeWidth="12"
                                fill="none"
                                strokeDasharray={circumference}
                                strokeDashoffset={strokeDashoffset}
                                strokeLinecap="round"
                                className="transition-all duration-1000 ease-out"
                            />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-5xl font-bold text-main">{percentage}%</span>
                            <span className="text-sm text-title">Score</span>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl p-6 text-center border border-gray-700/50">
                        <div className="text-3xl font-bold text-green-500 mb-2">
                            {correctAnswers}
                        </div>
                        <div className="text-small text-title">Correct Answers</div>
                    </div>
                    <div className="rounded-xl p-6 text-center border border-gray-700/50">
                        <div className="text-3xl font-bold text-red-500 mb-2">
                            {incorrectAnswers}
                        </div>
                        <div className="text-small text-title">Incorrect Answers</div>
                    </div>
                </div>

                {/* Message */}
                <p className="text-center text-title text-small md:my-8 my-5">
                    Your results have been submitted to your teacher
                </p>

                {/* Retake Button */}
                {/* <button
                    onClick={onRetake}
                    className="w-full bg-transparent border border-gray-700/50 text-main font-semibold py-2 rounded-lg hover:bg-header hover:text-black transition-colors"
                >
                    Take Another Quiz
                </button> */}

                <Link href={"/"} className="md:mt-8 hover:underline underline-offset-2 mt-5 text-green-500 text-small flex justify-center">
                    Back to home 
                </Link>
            </div>
        </div>
    );
}

export default QuizResult;
