
export type TQuizQuestion = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
};


export type TQuizData = {
  title: string;
  description: string;
  totalQuestions: number;
  estimatedTime: number;
  questions: TQuizQuestion[]; 
};


export type TUserAnswer = {
  questionId: number;
  selectedAnswer: string;
};


export type TQuizState = {
  userName: string;
  currentQuestion: number;
  answers: TUserAnswer[];
  isCompleted: boolean;
  score: number;
};