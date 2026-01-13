"use client";
import { TQuizQuestion } from "@/types/allTypes";

type TProps = {
    quizzes: TQuizQuestion[];
    setStep: (step: "welcome" | "quiz" | "result") => void;
}

const QuizQuestion = ({quizzes, setStep}: TProps) => {
  // console.log(quizzes);
  return (
    <div>
      quqtion
    </div>
  )
}

export default QuizQuestion
