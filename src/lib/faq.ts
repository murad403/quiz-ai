export type TFAQ = {
    id: number;
    question: string;
    answer: string;
}

export const faqGettingStarted: TFAQ[] = [
    {
        id: 1,
        question: "How do I create my first quiz?",
        answer: "After signing up, click 'Create Quiz' in your dashboard. Enter your topic and optional context, select the number of questions, and our AI will generate a complete quiz for you to review and customize."
    },
    {
        id: 2,
        question: "Do students need accounts to take quizzes?",
        answer: "No! Students simply need the quiz link you share with them. They enter their name and can immediately start taking the quiz without any account registration."
    },
    {
        id: 3,
        question: "How does the AI generate questions?",
        answer: "Our AI analyzes your topic and context to create relevant, educationally sound questions with multiple choice options. You can review and edit all questions before publishing."
    }
];

export const faqPricingAndPlans: TFAQ[] = [
    {
        id: 4,
        question: "What's included in the free plan?",
        answer: "The free plan includes up to 5 quizzes per month, 10 questions per quiz, basic analytics, and support for up to 50 students per quiz."
    },
    {
        id: 5,
        question: "Can I switch between monthly and yearly billing?",
        answer: "Yes! You can upgrade or change your billing cycle at any time from your account settings. Yearly plans save you 17% compared to monthly billing."
    },
    {
        id: 6,
        question: "What happens if I exceed my plan limits?",
        answer: "You'll be notified when approaching your limits. You can upgrade your plan at any time, and the new limits apply immediately."
    }
];

export const faqFeaturesAndUsage: TFAQ[] = [
    {
        id: 7,
        question: "Can I edit AI-generated questions?",
        answer: "After the AI generates your quiz, you can edit questions, modify answer options, change correct answers, or delete questions you don't want."
    },
    {
        id: 8,
        question: "How do I share quizzes with students?",
        answer: "After publishing a quiz, you'll receive a unique shareable link. You can copy this link and share it via email, learning management systems, or any communication platform."
    },
    {
        id: 9,
        question: "Can I see individual student results?",
        answer: "Yes! Your dashboard shows all student submissions with names, scores, time taken, and detailed question-by-question performance analytics."
    },
    {
        id: 10,
        question: "Can I reuse or duplicate quizzes?",
        answer: "Yes! You can duplicate any quiz from your dashboard to create variations or reuse content for different classes or time periods."
    }
];

export const faqTechnicalAndSecurity: TFAQ[] = [
    {
        id: 11,
        question: "Is student data secure?",
        answer: "Yes. We use industry-standard encryption and security practices. Student quiz responses are only visible to the teacher who created the quiz. See our Privacy Policy for details."
    },
    {
        id: 12,
        question: "Can I export quiz results?",
        answer: "Pro and Team plans include CSV export functionality, allowing you to download student results for further analysis or record-keeping."
    },
    {
        id: 13,
        question: "What browsers are supported?",
        answer: "QuizAI works on all modern browsers including Chrome, Firefox, Safari, and Edge. Mobile browsers are fully supported for both creating and taking quizzes."
    }
];