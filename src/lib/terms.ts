export type TTerms = {
    title: string;
    description?: string;
    features?: string[];
};

export const termsAcceptance: TTerms = {
    title: "Acceptance of Terms",
    description: "By accessing and using QuizAI, you accept and agree to be bound by the terms and provision of this agreement."
};

export const termsUseLicense: TTerms = {
    title: "Use License",
    description: "Permission is granted to temporarily use QuizAI for personal or commercial use. This is the grant of a license, not a transfer of title, and under this license you may not:",
    features: [
        "Modify or copy the materials",
        "Use the materials for any commercial purpose without authorization",
        "Attempt to decompile or reverse engineer any software contained on QuizAI",
        "Remove any copyright or other proprietary notations from the materials"
    ]
};

export const termsUserAccounts: TTerms = {
    title: "User Accounts",
    description: "You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password. You agree not to disclose your password to any third party."
};

export const termsContentOwnership: TTerms = {
    title: "Content Ownership",
    description: "You retain all rights to the quizzes and educational content you create using QuizAI. We do not claim ownership of your content."
};

export const termsLimitationOfLiability: TTerms = {
    title: "Limitation of Liability",
    description: "In no event shall QuizAI or its suppliers be liable for any damages arising out of the use or inability to use the service."
};

export const termsModifications: TTerms = {
    title: "Modifications to Terms",
    description: "QuizAI may revise these terms of service at any time without notice. By using this service, you are agreeing to be bound by the then current version of these terms of service."
};

export const termsContactInformation: TTerms = {
    title: "Contact Information",
    description: "If you have any questions about these Terms, please contact us at legal@quizai.com"
};