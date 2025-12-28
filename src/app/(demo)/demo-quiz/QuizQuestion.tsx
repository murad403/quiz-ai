/* eslint-disable @typescript-eslint/no-explicit-any */
// components/QuizQuestion.tsx
"use client";
import { TQuizQuestion as QuizQuestionType } from "@/types/quiz";
import { useState, useEffect } from "react";

interface QuizQuestionProps {
  question: QuizQuestionType;
  currentIndex: number;
  totalQuestions: number;
  selectedAnswer?: string;
  onAnswerSelect: (answer: string) => void;
  onNext: () => void;
  onPrevious: () => void;
  isFirstQuestion: boolean;
  isLastQuestion: boolean;
}

const QuizQuestion = ({
  question,
  currentIndex,
  totalQuestions,
  selectedAnswer,
  onAnswerSelect,
  onNext,
  onPrevious,
  isFirstQuestion,
  isLastQuestion,
}: QuizQuestionProps) => {
  const [localSelected, setLocalSelected] = useState<string | undefined>(selectedAnswer);

  useEffect(() => {
    setLocalSelected(selectedAnswer);
  }, [selectedAnswer, question.id]);

  const handleOptionClick = (option: string) => {
    setLocalSelected(option);
    onAnswerSelect(option);
  };

  const progress = ((currentIndex + 1) / totalQuestions) * 100;

  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Progress Section */}
        <div className="mb-8">
          <p className="text-neutral-400 text-sm mb-3">
            Question {currentIndex + 1} of {totalQuestions}
          </p>
          <div className="w-full bg-neutral-800 rounded-full h-2">
            <div
              className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-neutral-900 rounded-2xl p-6 md:p-10 border border-neutral-800 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            {question.question}
          </h2>

          {/* Options */}
          <div className="space-y-4">
            {question.options.map((option: any, index: number) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  localSelected === option
                    ? "border-emerald-500 bg-emerald-500/10"
                    : "border-neutral-700 bg-neutral-800 hover:border-neutral-600"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      localSelected === option
                        ? "border-emerald-500"
                        : "border-neutral-600"
                    }`}
                  >
                    {localSelected === option && (
                      <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    )}
                  </div>
                  <span className="text-white text-lg">{option}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between gap-4">
          <button
            onClick={onPrevious}
            disabled={isFirstQuestion}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              isFirstQuestion
                ? "bg-neutral-800 text-neutral-600 cursor-not-allowed"
                : "bg-neutral-800 text-white hover:bg-neutral-700"
            }`}
          >
            Previous
          </button>

          <button
            onClick={onNext}
            disabled={!localSelected}
            className={`px-8 py-3 rounded-lg font-medium transition-colors ${
              !localSelected
                ? "bg-neutral-800 text-neutral-600 cursor-not-allowed"
                : "bg-emerald-500 text-black hover:bg-emerald-600"
            }`}
          >
            {isLastQuestion ? "Submit Quiz" : "Next Question"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuizQuestion;