export type TPrivacy = {
    title: string;
    description?: string;
    features?: string[];
};

export const privacyIntroduction: TPrivacy = {
    title: "Introduction",
    description: "QuizAI (\"we,\" \"our,\" or \"us\") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service."
};

export const privacyInformationCollected: TPrivacy = {
    title: "Information We Collect",
    description: "We collect information that you provide directly to us, including:",
    features: [
        "Account information (name, email, password)",
        "Quiz content and student responses",
        "Usage data and analytics",
        "Communication preferences"
    ]
};

export const privacyHowWeUse: TPrivacy = {
    title: "How We Use Your Information",
    description: "We use the information we collect to:",
    features: [
        "Provide, maintain, and improve our services",
        "Process your transactions",
        "Send you technical notices and support messages",
        "Respond to your comments and questions",
        "Analyze usage patterns and trends"
    ]
};

export const privacyDataSecurity: TPrivacy = {
    title: "Data Security",
    description: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
};

export const privacyYourRights: TPrivacy = {
    title: "Your Rights",
    description: "You have the right to:",
    features: [
        "Access your personal information",
        "Correct inaccurate data",
        "Request deletion of your data",
        "Opt-out of marketing communications",
        "Export your data"
    ]
};

export const privacyContactUs: TPrivacy = {
    title: "Contact Us",
    description: "If you have questions about this Privacy Policy, please contact us at privacy@quizai.com"
};