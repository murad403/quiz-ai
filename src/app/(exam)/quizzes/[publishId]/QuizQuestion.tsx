"use client";
import { TQuizQuestion, TQuizQuestionOption } from "@/types/allTypes";

type TProps = {
  question: TQuizQuestion;
  currentIndex: number;
  totalQuestions: number;
  selectedAnswer?: number;
  onAnswerSelect: (answer: number) => void;
  onNext: () => void;
  onPrevious: () => void;
  isFirstQuestion: boolean;
  isLastQuestion: boolean;
  isSubmitting?: boolean;
  timeRemaining?: number;
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
  isSubmitting,
  timeRemaining
}: TProps) => {
  
  const handleOptionClick = (option: TQuizQuestionOption) => {
    onAnswerSelect(option.id);
  };

  const progress = ((currentIndex + 1) / totalQuestions) * 100;

  // Format time remaining
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <div className="w-full space-y-5">
        {/* Progress Section */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1">
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
          {timeRemaining !== undefined && (
            <div className={`text-sm font-semibold px-4 py-2 rounded-lg border ${timeRemaining < 10 ? 'text-red-500 border-red-500/50 bg-red-500/10' : 'text-main border-gray-700/50 bg-neutral-800'}`}>
              {formatTime(timeRemaining)}
            </div>
          )}
        </div>

        {/* Question Card */}
        <div className="border border-gray-700/50 bg-card md:p-7 p-4 rounded-xl">
          <h2 className="text-subheading font-bold text-white md:mb-7 mb-4">
            {question?.text}
          </h2>

          {/* Options */}
          <div className="space-y-4">
            {question?.options.map((option: TQuizQuestionOption, index: number) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                className={`w-full text-left p-2 rounded-lg border transition-all ${
                  selectedAnswer === option.id
                    ? "border-header"
                    : "border-gray-700/50 hover:bg-green-500"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`size-4 rounded-full border flex items-center justify-center ${
                      selectedAnswer === option.id
                        ? "border-green-500"
                        : "border-gray-700/50"
                    }`}
                  >
                    {selectedAnswer === option.id && (
                      <div className="size-2 rounded-full bg-green-500" />
                    )}
                  </div>
                  <span className="text-white text-paragraph">{option.text}</span>
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
            disabled={!selectedAnswer || isSubmitting}
            className={`px-5 py-2 rounded-lg font-medium transition-colors text-small ${
              !selectedAnswer || isSubmitting
                ? "bg-neutral-800 text-neutral-600 cursor-not-allowed"
                : "text-main rounded-lg transition-colors bg-header hover:bg-header/90"
            }`}
          >
            {isSubmitting ? "Submitting..." : isLastQuestion ? "Submit Quiz" : "Next Question"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default QuizQuestion
