
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