"use client";
import { Clock } from "lucide-react";

interface QuizRulesProps {
  questionTimeLimit: number;
  onAcceptRules: () => void;
  onBack: () => void;
}

const QuizRules = ({ questionTimeLimit, onAcceptRules, onBack }: QuizRulesProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAcceptRules();
  };

  return (
    <div>
      <div className="w-full rounded-xl border border-gray-700/50 bg-card md:p-7 p-4">
        <h1 className="text-subheading font-bold text-main mb-2">
          Quiz Rules & Guidelines
        </h1>
        <p className="text-title text-paragraph mb-6">
          Please read and accept the following rules before proceeding
        </p>

        {/* Rules Container */}
        <div className="bg-neutral-800/50 border border-gray-700/50 rounded-lg p-6 space-y-4 max-h-96 overflow-y-auto mb-6">
          <div className="space-y-4">
            {/* Rule 1 */}
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-7 w-7 rounded-full bg-header text-black text-sm font-semibold">
                  1
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-main text-paragraph mb-1">Honest Participation</h3>
                <p className="text-sm text-title">
                  Answer all questions to the best of your knowledge without any external help or assistance.
                </p>
              </div>
            </div>

            {/* Rule 2 */}
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-7 w-7 rounded-full bg-header text-black text-sm font-semibold">
                  2
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-main text-paragraph mb-1">No Cheating Tools</h3>
                <p className="text-sm text-title">
                  Do not use copy/paste, screenshots, or any external resources. These actions will be detected and logged.
                </p>
              </div>
            </div>

            {/* Rule 3 */}
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-7 w-7 rounded-full bg-header text-black text-sm font-semibold">
                  3
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-main text-paragraph mb-1">Single Window Requirement</h3>
                <p className="text-sm text-title">
                  Keep this quiz window active. Switching tabs or minimizing the window multiple times will lock your quiz.
                </p>
              </div>
            </div>

            {/* Rule 4 */}
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-7 w-7 rounded-full bg-header text-black text-sm font-semibold">
                  4
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-main text-paragraph mb-1">Developer Tools Disabled</h3>
                <p className="text-sm text-title">
                  Opening DevTools or browser inspection features will immediately lock your quiz.
                </p>
              </div>
            </div>

            {/* Rule 5 */}
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-7 w-7 rounded-full bg-header text-black text-sm font-semibold">
                  5
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-main text-paragraph mb-1">Time Limit</h3>
                <p className="text-sm text-title">
                  Each question has a {questionTimeLimit / 60} minute time limit. The quiz will auto-advance when time expires.
                </p>
              </div>
            </div>

            {/* Rule 6 */}
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-7 w-7 rounded-full bg-header text-black text-sm font-semibold">
                  6
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-main text-paragraph mb-1">Submission & Recording</h3>
                <p className="text-sm text-title">
                  All responses are automatically recorded. Once submitted, you cannot retake the same quiz.
                </p>
              </div>
            </div>

            {/* Rule 7 */}
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-7 w-7 rounded-full bg-header text-black text-sm font-semibold">
                  7
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-main text-paragraph mb-1">Academic Integrity</h3>
                <p className="text-sm text-title">
                  Violations will be reported. Maintain honesty and integrity throughout the quiz.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Acceptance Checkbox */}
        <form onSubmit={handleSubmit}>
          <div className="flex items-center gap-3 p-4 bg-header/10 border border-header/20 rounded-lg mb-6">
            <input
              type="checkbox"
              id="accept"
              required
              className="w-4 h-4 rounded accent-header cursor-pointer"
            />
            <label htmlFor="accept" className="text-sm text-main cursor-pointer flex-1">
              I have read and agree to follow all the above rules and guidelines
            </label>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              type="button"
              onClick={onBack}
              className="flex-1 bg-transparent border border-gray-700/50 text-main font-semibold py-2 rounded-lg hover:bg-neutral-800 transition-colors"
            >
              Back
            </button>
            <button
              type="submit"
              className="flex-1 text-main font-semibold py-2 rounded-lg transition-colors bg-header hover:bg-header/90"
            >
              Start Quiz
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuizRules;
