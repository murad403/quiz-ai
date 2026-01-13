/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useParams } from "next/navigation";
import { useState } from "react";
import QuizQuestion from "./QuizQuestion";
import QuizWelcome from "./QuizWelcome";
import QuizResult from "./QuizResult";
import { TQuizQuestion, TSelectAnswer } from "@/types/allTypes";
import { useSubmitQuizMutation } from "@/redux/features/dashboard/dashboard.api";
import { toast } from "react-toastify";

type QuizStep = "welcome" | "quiz" | "result";

const MainPage = () => {
    const { publishId } = useParams();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [step, setStep] = useState<QuizStep>("welcome");
    const [quizzes, setQuizzes] = useState<TQuizQuestion[]>([]);
    const [attemptId, setAttemptId] = useState<number | null>(null);
    const [answers, setAnswers] = useState<TSelectAnswer[]>([]);
    const [studentName, setStudentName] = useState("");
    const [resultData, setResultData] = useState<any>(null);
    const [submitQuiz, { isLoading: isSubmitting }] = useSubmitQuizMutation();


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
        } else {
            handleSubmitQuiz();
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const handleSubmitQuiz = async () => {
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
    if (step == "quiz") {
        const currentQuestion = quizzes[currentQuestionIndex];
        return (
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
            />
        )
    }

    if (step == "result") {
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

}

export default MainPage;
