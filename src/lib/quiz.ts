import { TQuizData } from "@/types/quiz";

export const quizData: TQuizData = {
  title: "World War II History",
  description: "Test your knowledge about World War II events, battles, and key figures",
  totalQuestions: 5,
  estimatedTime: 10,
  questions: [
    {
      id: 1,
      question: "In which year did World War II begin?",
      options: ["1937", "1939", "1941", "1945"],
      correctAnswer: "1939",
    },
    {
      id: 2,
      question: "Which battle is considered the turning point of World War II in Europe?",
      options: [
        "Battle of Britain",
        "Battle of Stalingrad",
        "Battle of Normandy",
        "Battle of the Bulge",
      ],
      correctAnswer: "Battle of Stalingrad",
    },
    {
      id: 3,
      question: "Who was the Prime Minister of the United Kingdom during most of World War II?",
      options: [
        "Neville Chamberlain",
        "Winston Churchill",
        "Clement Attlee",
        "Anthony Eden",
      ],
      correctAnswer: "Winston Churchill",
    },
    {
      id: 4,
      question: "What was the code name for the Allied invasion of Normandy?",
      options: [
        "Operation Barbarossa",
        "Operation Overlord",
        "Operation Market Garden",
        "Operation Torch",
      ],
      correctAnswer: "Operation Overlord",
    },
    {
      id: 5,
      question: "In which year did World War II end?",
      options: ["1943", "1944", "1945", "1946"],
      correctAnswer: "1945",
    },
  ],
};