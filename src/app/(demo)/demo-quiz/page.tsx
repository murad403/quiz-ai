/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useEffect, useRef } from "react";
import QuizWelcome from "./QuizWelcome";
import QuizRules from "./QuizRules";
import { quizData } from "@/lib/quiz";
import QuizQuestion from "./QuizQuestion";
import QuizResult from "./QuizResult";
import { TUserAnswer } from "@/types/quiz";

type QuizStep = "welcome" | "rules" | "quiz" | "result";

const QUESTION_TIME_LIMIT = 120; // seconds per question

const DemoQuiz = () => {
  const [step, setStep] = useState<QuizStep>("welcome");
  const [userName, setUserName] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<TUserAnswer[]>([]);
  const [timeRemaining, setTimeRemaining] = useState(QUESTION_TIME_LIMIT);
  const [violationCount, setViolationCount] = useState(0);
  const [isQuizLocked, setIsQuizLocked] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");

  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const warningTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Security: Prevent copy/paste and right-click
  useEffect(() => {
    const setupBrowserProtections = () => {
      document.addEventListener("copy", (e) => e.preventDefault());
      document.addEventListener("paste", (e) => e.preventDefault());
      document.addEventListener("contextmenu", (e) => e.preventDefault());
      document.addEventListener("selectstart", (e) => e.preventDefault());

      document.addEventListener("keydown", (e) => {
        if ((e.ctrlKey || e.metaKey) && (e.key === "c" || e.key === "v" || e.key === "s")) {
          e.preventDefault();
        }
      });
    };

    if (step === "quiz") {
      setupBrowserProtections();
    }

    return () => {
      document.removeEventListener("copy", (e) => e.preventDefault());
      document.removeEventListener("paste", (e) => e.preventDefault());
      document.removeEventListener("contextmenu", (e) => e.preventDefault());
      document.removeEventListener("selectstart", (e) => e.preventDefault());
    };
  }, [step]);

  // Security: Detect DevTools
  useEffect(() => {
    const detectDevTools = () => {
      if (step !== "quiz" || isQuizLocked || violationCount < 1) return;

      const threshold = 160;
      if (window.outerHeight - window.innerHeight > threshold) {
        setIsQuizLocked(true);
        console.log("[Security] DevTools detected - quiz locked");
      }
    };

    if (step === "quiz") {
      const interval = setInterval(detectDevTools, 500);
      return () => clearInterval(interval);
    }
  }, [step, isQuizLocked, violationCount]);

  // Security: Tab switching and focus loss detection
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (step !== "quiz" || isQuizLocked) return;

      if (document.visibilityState === "hidden") {
        const newCount = violationCount + 1;
        setViolationCount(newCount);

        // Show warning
        const remaining = 3 - newCount;
        if (newCount >= 3) {
          setWarningMessage("Quiz locked! Your quiz has been auto-submitted due to multiple violations.");
          setShowWarning(true);
          setIsQuizLocked(true);
          
          // Auto-submit after 2 seconds
          setTimeout(() => {
            setStep("result");
          }, 2000);
          
          console.log("[Security] Multiple tab switches - quiz submitted");
        } else {
          setWarningMessage(`⚠️ Warning! Tab switching detected. ${remaining} warning${remaining !== 1 ? 's' : ''} remaining before auto-submit.`);
          setShowWarning(true);
          
          // Hide warning after 4 seconds
          if (warningTimeoutRef.current) clearTimeout(warningTimeoutRef.current);
          warningTimeoutRef.current = setTimeout(() => {
            setShowWarning(false);
          }, 4000);
        }
      }
    };

    const handleWindowBlur = () => {
      if (step !== "quiz" || isQuizLocked) return;

      const newCount = violationCount + 1;
      setViolationCount(newCount);

      // Show warning
      const remaining = 3 - newCount;
      if (newCount >= 3) {
        setWarningMessage("Quiz locked! Your quiz has been auto-submitted due to multiple violations.");
        setShowWarning(true);
        setIsQuizLocked(true);
        
        // Auto-submit after 2 seconds
        setTimeout(() => {
          setStep("result");
        }, 2000);
        
        console.log("[Security] Multiple focus loss events - quiz submitted");
      } else {
        setWarningMessage(`⚠️ Warning! Window focus lost. ${remaining} warning${remaining !== 1 ? 's' : ''} remaining before auto-submit.`);
        setShowWarning(true);
        
        // Hide warning after 4 seconds
        if (warningTimeoutRef.current) clearTimeout(warningTimeoutRef.current);
        warningTimeoutRef.current = setTimeout(() => {
          setShowWarning(false);
        }, 4000);
      }
    };

    if (step === "quiz") {
      document.addEventListener("visibilitychange", handleVisibilityChange);
      window.addEventListener("blur", handleWindowBlur);

      return () => {
        document.removeEventListener("visibilitychange", handleVisibilityChange);
        window.removeEventListener("blur", handleWindowBlur);
        if (warningTimeoutRef.current) clearTimeout(warningTimeoutRef.current);
      };
    }
  }, [step, violationCount, isQuizLocked]);

  // Timer functionality
  useEffect(() => {
    if (step !== "quiz" || isQuizLocked) {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
      return;
    }

    setTimeRemaining(QUESTION_TIME_LIMIT);

    timerIntervalRef.current = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          handleTimeExpired();
          return QUESTION_TIME_LIMIT;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
  }, [step, currentQuestionIndex, isQuizLocked]);

  const handleTimeExpired = () => {
    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setStep("result");
    }
  };

  const handleStart = (name: string) => {
    setUserName(name);
    setStep("rules");
  };

  const handleAcceptRules = () => {
    setStep("quiz");
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setTimeRemaining(QUESTION_TIME_LIMIT);
    setViolationCount(0);
    setIsQuizLocked(false);
  };

  const handleBackToWelcome = () => {
    setStep("welcome");
    setUserName("");
  };

  const handleAnswerSelect = (answer: string) => {
    const currentQuestion = quizData.questions[currentQuestionIndex];
    const existingAnswerIndex = answers.findIndex(
      (a) => a.questionId === currentQuestion.id
    );

    if (existingAnswerIndex !== -1) {
      const newAnswers = [...answers];
      newAnswers[existingAnswerIndex] = {
        questionId: currentQuestion.id,
        selectedAnswer: answer,
      };
      setAnswers(newAnswers);
    } else {
      setAnswers([
        ...answers,
        { questionId: currentQuestion.id, selectedAnswer: answer },
      ]);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeRemaining(QUESTION_TIME_LIMIT);
    } else {
      setStep("result");
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setTimeRemaining(QUESTION_TIME_LIMIT);
    }
  };

  const handleRetake = () => {
    setStep("welcome");
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setUserName("");
    setTimeRemaining(QUESTION_TIME_LIMIT);
    setViolationCount(0);
    setIsQuizLocked(false);
    setShowWarning(false);
    setWarningMessage("");
  };

  const calculateResults = () => {
    let correct = 0;
    answers.forEach((answer) => {
      const question = quizData.questions.find((q: any) => q.id === answer.questionId);
      if (question && question.correctAnswer === answer.selectedAnswer) {
        correct++;
      }
    });

    const incorrect = quizData.questions.length - correct;
    const score = (correct / quizData.questions.length) * 100;

    return { correct, incorrect, score };
  };

  const getCurrentAnswer = () => {
    const currentQuestion = quizData.questions[currentQuestionIndex];
    const answer = answers.find((a) => a.questionId === currentQuestion.id);
    return answer?.selectedAnswer;
  };

  if (step === "welcome") {
    return (
      <QuizWelcome
        title={quizData.title}
        description={quizData.description}
        totalQuestions={quizData.totalQuestions}
        estimatedTime={quizData.estimatedTime}
        onStart={handleStart}
      />
    );
  }

  if (step === "rules") {
    return (
      <QuizRules
        questionTimeLimit={QUESTION_TIME_LIMIT}
        onAcceptRules={handleAcceptRules}
        onBack={handleBackToWelcome}
      />
    );
  }

  if (step === "quiz" && isQuizLocked) {
    return (
      <div className="w-full max-w-3xl mx-auto">
        <div className="text-center p-8 border border-red-500/50 rounded-lg bg-red-500/10">
          <p className="text-red-500 font-semibold text-lg mb-2">
            Quiz has been locked due to security violation
          </p>
          <p className="text-red-400 text-sm">
            Suspicious activity detected. Your quiz has been automatically submitted.
          </p>
        </div>
      </div>
    );
  }

  if (step === "quiz") {
    const currentQuestion = quizData.questions[currentQuestionIndex];
    return (
      <div className="relative">
        {/* Warning Toast */}
        {showWarning && (
          <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 animate-in slide-in-from-top duration-300">
            <div className={`px-6 py-4 rounded-lg shadow-lg border-2 max-w-md ${
              violationCount >= 3 
                ? 'bg-red-500/90 border-red-600 text-white' 
                : 'bg-yellow-500/90 border-yellow-600 text-black'
            }`}>
              <p className="font-semibold text-center">{warningMessage}</p>
            </div>
          </div>
        )}

        <QuizQuestion
          question={currentQuestion}
          currentIndex={currentQuestionIndex}
          totalQuestions={quizData.totalQuestions}
          selectedAnswer={getCurrentAnswer()}
          onAnswerSelect={handleAnswerSelect}
          onNext={handleNext}
          onPrevious={handlePrevious}
          isFirstQuestion={currentQuestionIndex === 0}
          isLastQuestion={currentQuestionIndex === quizData.questions.length - 1}
          timeRemaining={timeRemaining}
        />
      </div>
    );
  }

  const { correct, incorrect, score } = calculateResults();

  return (
    <QuizResult
      userName={userName}
      score={score}
      totalQuestions={quizData.totalQuestions}
      correctAnswers={correct}
      incorrectAnswers={incorrect}
      onRetake={handleRetake}
    />
  );
}

export default DemoQuiz;