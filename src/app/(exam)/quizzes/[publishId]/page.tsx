"use client"
import { useParams } from "next/navigation";
import { useState } from "react";
import QuizQuestion from "./QuizQuestion";
import QuizWelcome from "./QuizWelcome";
import { TQuizQuestion } from "@/types/allTypes";

type QuizStep = "welcome" | "quiz" | "result";

const WelcomePage = () => {
    const {publishId} =  useParams();
    const [step, setStep] = useState<QuizStep>("welcome");
    const [quizzes, setQuizzes] = useState<TQuizQuestion[]>([]);
    const [attemptId, setAttemptId] = useState<number | null>(null);
    // console.log(attemptId);

    if (step == "welcome") {
        return (
            <QuizWelcome publishId={publishId as string} setStep={setStep} setQuizzes={setQuizzes} setAttemptId={setAttemptId}></QuizWelcome>
        )
    }
    if (step == "quiz") {
        return (
            <QuizQuestion quizzes={quizzes} setStep={setStep}></QuizQuestion>
        )
    }
    
}

export default WelcomePage;
