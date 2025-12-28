/* eslint-disable @typescript-eslint/no-explicit-any */
// app/quiz/page.tsx
"use client";
import { useState } from "react";
import QuizWelcome from "./QuizWelcome";
import { quizData } from "@/lib/quiz";
import QuizQuestion from "./QuizQuestion";
import QuizResult from "./QuizResult";
import { TUserAnswer } from "@/types/quiz";

type QuizStep = "welcome" | "quiz" | "result";

const DemoQuiz = () => {
  const [step, setStep] = useState<QuizStep>("welcome");
  const [userName, setUserName] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<TUserAnswer[]>([]);

  const handleStart = (name: string) => {
    setUserName(name);
    setStep("quiz");
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
    } else {
      setStep("result");
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleRetake = () => {
    setStep("welcome");
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setUserName("");
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

  if (step === "quiz") {
    const currentQuestion = quizData.questions[currentQuestionIndex];
    return (
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
      />
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