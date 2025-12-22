export type TPricing = {
    id: number;
    title: string;
    description: string;
    price: number;
    button: string;
    features: string[];
}

export const pricing: TPricing[] = [
    {
        id: 1,
        title: "Free",
        description: "Perfect for trying out QuizAI",
        price: 0,
        button: "get started",
        features: ["Up to 5 quizzes per month", "10 questions per quiz", "Basic analytics", "Email support", "Student responses tracking"]
    },
    {
        id: 2,
        title: "Pro",
        description: "For professional educators",
        price: 19,
        button: "start pro trial",
        features: ["Unlimited quizzes", "Unlimited questions", "Advanced analytics", "Priority support", "Custom branding", "Export results", "Question bank library"]
    },
    {
        id: 3,
        title: "Team",
        description: "For schools and institutions",
        price: 49,
        button: "contact sales",
        features: ["Everything in Pro", "Up to 10 team members", "Shared question banks", "Team analytics dashboard", "Admin controls", "Dedicated support", "Custom integrations"]
    },
]