/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useParams } from "next/navigation";
import { useState, useEffect, useRef, useCallback } from "react";
import QuizQuestion from "./QuizQuestion";
import QuizWelcome from "./QuizWelcome";
import QuizRules from "./QuizRules";
import QuizResult from "./QuizResult";
import { TQuizQuestion, TSelectAnswer } from "@/types/allTypes";
import { useSubmitQuizMutation } from "@/redux/features/dashboard/dashboard.api";
import { toast } from "react-toastify";

type QuizStep = "welcome" | "rules" | "quiz" | "result";

const QUESTION_TIME_LIMIT = 10; // seconds per question

const MainPage = () => {
    const { publishId } = useParams();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [step, setStep] = useState<QuizStep>("welcome");
    const [quizzes, setQuizzes] = useState<TQuizQuestion[]>([]);
    const [attemptId, setAttemptId] = useState<number | null>(null);
    const [answers, setAnswers] = useState<TSelectAnswer[]>([]);
    const [studentName, setStudentName] = useState("");
    const [resultData, setResultData] = useState<any>(null);
    const [timeRemaining, setTimeRemaining] = useState(QUESTION_TIME_LIMIT);
    const [violationCount, setViolationCount] = useState(0);
    const [isQuizLocked, setIsQuizLocked] = useState(false);
    const [showWarning, setShowWarning] = useState(false);
    const [warningMessage, setWarningMessage] = useState("");
    const [timedOutQuestions, setTimedOutQuestions] = useState<number[]>([]); // Track questions that timed out
    const [submitQuiz, { isLoading: isSubmitting }] = useSubmitQuizMutation();

    const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);
    const warningTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Handler functions that need to be declared early
    const handleSubmitQuiz = useCallback(async () => {
        try {
            const result = await submitQuiz({
                publishId: publishId as string,
                answers: {attempt_id: attemptId, answers: [...answers]}
            }).unwrap();
            // console.log(result)
            setResultData(result);
            setStep("result");
        } catch (error) {
            console.log(error)
            toast.error("Failed to submit quiz. Please try again.");
        }
    }, [submitQuiz, publishId, attemptId, answers]);

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
                        handleSubmitQuiz();
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
                    handleSubmitQuiz();
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
    }, [step, violationCount, isQuizLocked, handleSubmitQuiz]);

    // Reset timer when question changes
    useEffect(() => {
        if (step === "quiz" && !isQuizLocked) {
            // Check if current question was answered (not timed out)
            const currentQuestion = quizzes[currentQuestionIndex];
            const hasAnswer = answers.some((a) => a.question_id === currentQuestion?.id);
            
            // If question was answered before, give 5 seconds to change answer
            // Otherwise give full 10 seconds
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setTimeRemaining(hasAnswer ? 5 : QUESTION_TIME_LIMIT);
        }
    }, [currentQuestionIndex, step, isQuizLocked, answers, quizzes]);

    // Timer functionality
    useEffect(() => {
        if (step !== "quiz" || isQuizLocked) {
            if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
            return;
        }

        const handleTimeExpired = () => {
            // Mark current question as timed out
            setTimedOutQuestions(prev => [...prev, currentQuestionIndex]);
            
            if (currentQuestionIndex < quizzes.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
            } else {
                handleSubmitQuiz();
            }
        };

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
    }, [step, currentQuestionIndex, isQuizLocked, quizzes.length, handleSubmitQuiz]);


    const handleAcceptRules = () => {
        setStep("quiz");
        setCurrentQuestionIndex(0);
        setAnswers([]);
        setTimeRemaining(QUESTION_TIME_LIMIT);
        setViolationCount(0);
        setIsQuizLocked(false);
        setTimedOutQuestions([]);
    };

    const handleBackToWelcome = () => {
        setStep("welcome");
    };

    const handleAnswerSelect = (answer: number) => {
        const currentQuestion = quizzes[currentQuestionIndex];
        const existingAnswerIndex = answers.findIndex(
            (a) => a.question_id === currentQuestion.id
        );

        if (existingAnswerIndex !== -1) {
            const newAnswers = [...answers];
            newAnswers[existingAnswerIndex] = {
                question_id: currentQuestion.id,
                option_id: answer,
            };
            setAnswers(newAnswers);
        } else {
            setAnswers([
                ...answers,
                { question_id: currentQuestion.id, option_id: answer },
            ]);
        }
    };

    const handleNext = () => {
        if (currentQuestionIndex < quizzes.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            // Timer will be set by useEffect based on whether next question has answer
        } else {
            handleSubmitQuiz();
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            const prevIndex = currentQuestionIndex - 1;
            
            // Check if previous question timed out
            if (timedOutQuestions.includes(prevIndex)) {
                toast.warning("Cannot go back to a timed-out question!");
                return;
            }
            
            setCurrentQuestionIndex(prevIndex);
            // Timer will be set by useEffect (5 seconds if answered, 10 if not)
        }
    };

    const getCurrentAnswer = () => {
        const currentQuestion = quizzes[currentQuestionIndex];
        const answer = answers.find((a) => a.question_id === currentQuestion.id);
        return answer?.option_id;
    };

    const handleRetake = () => {
        window.location.href = "/";
    };

    if (step == "welcome") {
        return (
            <QuizWelcome 
                publishId={publishId as string} 
                setStep={setStep} 
                setQuizzes={setQuizzes} 
                setAttemptId={setAttemptId}
                setStudentName={setStudentName}
            />
        )
    }

    if (step == "rules") {
        return (
            <QuizRules
                questionTimeLimit={QUESTION_TIME_LIMIT}
                onAcceptRules={handleAcceptRules}
                onBack={handleBackToWelcome}
            />
        )
    }

    if (step == "quiz" && isQuizLocked) {
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

    if (step == "quiz") {
        const currentQuestion = quizzes[currentQuestionIndex];
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
                    totalQuestions={quizzes.length}
                    selectedAnswer={getCurrentAnswer()}
                    onAnswerSelect={handleAnswerSelect}
                    onNext={handleNext}
                    onPrevious={handlePrevious}
                    isFirstQuestion={currentQuestionIndex === 0}
                    isLastQuestion={currentQuestionIndex === quizzes.length - 1}
                    isSubmitting={isSubmitting}
                    timeRemaining={timeRemaining}
                />
            </div>
        )
    }

    // Result page
    return (
        <QuizResult
            studentName={studentName}
            score={resultData?.percentage}
            totalQuestions={quizzes.length}
            correctAnswers={resultData?.correct}
            incorrectAnswers={resultData?.incorrect}
            onRetake={handleRetake}
        />
    )
}

export default MainPage;
