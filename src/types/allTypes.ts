
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