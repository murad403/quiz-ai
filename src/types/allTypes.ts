
export type TAnalytics = {
    total_quizzes: number;
    total_submissions: number;
    average_score: number;
    active_students: number;
}

export type TWeeklySubmission = {
    day: string;
    count: number;
};

export type TWeeklySubmissions = TWeeklySubmission[];


export type TTopPerformingQuiz = {
    id: number;
    title: string;
    submissions: number;
    score_percentage: number;
};

export type TRecentQuizzes = {
    id: number;
    title: string;
    questions_count: number;
    submissions_count: number;
    created_at: string;
}

export type TOverviewStats = {
    total_quizzes: number,
    quizzes_change: number,
    total_submissions: number,
    submissions_change: number,
    average_score: number,
    score_change: number
}

export type TQuiz = {
    id: number;
    title: string;
    questions_count: number;
    submissions_count: number;
    average_score: number;
    created_at: string;
}

export type TQuizDetailsStats = {
    total_submissions: number;
    average_score: number;
    completion_rate: number;
}

export type TQuestionAnalytics = {
    id: number;
    question_text: string;
    total_attempts: number;
    percentage_correct: number;
}

export type TSubmission = {
    id: number,
    student_name: string;
    email: string;
    date: string;
    score_percentage: number;
    score_fraction: string;
}


export type TQuizOption = {
  id: number;
  text: string;
  is_correct: boolean;
}
export type TQuizQuestion = {
  id: number;
  text: string;
  options: TQuizOption[];
}

export type TQuizQuestionOption = {
    id: number; 
    text: string;
}

export type TSelectAnswer = {
    question_id: number;
    option_id: number;
}