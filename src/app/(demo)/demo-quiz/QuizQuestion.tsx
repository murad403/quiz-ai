"use client";
import { TQuizQuestion as QuizQuestionType } from "@/types/quiz";

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

const QuizQuestion = ({ question, currentIndex, totalQuestions, selectedAnswer, onAnswerSelect, onNext, onPrevious, isFirstQuestion, isLastQuestion}: QuizQuestionProps) => {

  const handleOptionClick = (option: string) => {
    onAnswerSelect(option);
  };

  const progress = ((currentIndex + 1) / totalQuestions) * 100;

  return (
    <div>
      <div className="w-full space-y-5">
        {/* Progress Section */}
        <div>
          <p className="text-title text-small mb-2">
            Question {currentIndex + 1} of {totalQuestions}
          </p>
          <div className="w-full bg-neutral-800 rounded-full h-2">
            <div
              className="bg-header h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="border border-gray-700/50 bg-card md:p-7 p-4 rounded-xl">
          <h2 className="text-subheading font-bold text-white md:mb-7 mb-4">
            {question.question}
          </h2>

          {/* Options */}
          <div className="space-y-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                className={`w-full text-left p-2 rounded-lg border transition-all ${
                  selectedAnswer === option
                    ? "border-header"
                    : "border-gray-700/50 hover:bg-green-500"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`size-4 rounded-full border flex items-center justify-center ${
                      selectedAnswer === option
                        ? "border-green-500"
                        : "border-gray-700/50"
                    }`}
                  >
                    {selectedAnswer === option && (
                      <div className="size-2 rounded-full bg-green-500" />
                    )}
                  </div>
                  <span className="text-white text-paragraph">{option}</span>
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
            className={`px-5 py-2 rounded-lg font-medium transition-colors text-small ${
              isFirstQuestion
                ? "bg-neutral-800 text-neutral-600 cursor-not-allowed"
                : "bg-neutral-800 text-white hover:bg-neutral-700"
            }`}
          >
            Previous
          </button>

          <button
            onClick={onNext}
            disabled={!selectedAnswer}
            className={`px-5 py-2 rounded-lg font-medium transition-colors text-small ${
              !selectedAnswer
                ? "bg-neutral-800 text-neutral-600 cursor-not-allowed"
                : "text-main rounded-lg transition-colors bg-header hover:bg-header/90"
            }`}
          >
            {isLastQuestion ? "Submit Quiz" : "Next Question"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizQuestion;