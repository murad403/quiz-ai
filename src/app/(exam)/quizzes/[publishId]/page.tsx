"use client"
import { useParams } from "next/navigation";
import { useState } from "react";
import Welcome from "./QuizWelcome";

type QuizStep = "welcome" | "quiz" | "result";

const WelcomePage = () => {
    const {publishId} =  useParams();
    const [step, setStep] = useState<QuizStep>("welcome");
    // console.log( typeof publishId);

    if (step == "welcome") {
        return (
            <Welcome publishId={publishId as string}></Welcome>
        )
    }
    
}

export default WelcomePage;
