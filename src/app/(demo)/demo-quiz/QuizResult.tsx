// components/QuizResult.tsx
"use client";

import { Check } from "lucide-react";

interface QuizResultProps {
  userName: string;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  onRetake: () => void;
}

const QuizResult = ({
  userName,
  score,
  totalQuestions,
  correctAnswers,
  incorrectAnswers,
  onRetake,
}: QuizResultProps) => {
  const percentage = Math.round(score);

  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-neutral-900 rounded-2xl p-8 md:p-12 border border-neutral-800">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center">
            <Check className="w-10 h-10 text-emerald-500" strokeWidth={3} />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-2">
          Quiz Complete!
        </h1>
        <p className="text-neutral-400 text-center mb-12">
          Great job, {userName}!
        </p>

        {/* Circular Progress */}
        <div className="flex justify-center mb-12">
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
              <span className="text-5xl font-bold text-white">{percentage}%</span>
              <span className="text-sm text-neutral-400">Score</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-neutral-800 rounded-xl p-6 text-center border border-neutral-700">
            <div className="text-3xl font-bold text-emerald-500 mb-2">
              {correctAnswers}
            </div>
            <div className="text-sm text-neutral-400">Correct Answers</div>
          </div>
          <div className="bg-neutral-800 rounded-xl p-6 text-center border border-neutral-700">
            <div className="text-3xl font-bold text-red-500 mb-2">
              {incorrectAnswers}
            </div>
            <div className="text-sm text-neutral-400">Incorrect Answers</div>
          </div>
        </div>

        {/* Message */}
        <p className="text-center text-neutral-400 text-sm mb-8">
          Your results have been submitted to your teacher
        </p>

        {/* Retake Button */}
        <button
          onClick={onRetake}
          className="w-full bg-transparent border-2 border-white text-white font-semibold py-3 rounded-lg hover:bg-white hover:text-black transition-colors"
        >
          Take Another Quiz
        </button>
      </div>
    </div>
  );
}

export default QuizResult;