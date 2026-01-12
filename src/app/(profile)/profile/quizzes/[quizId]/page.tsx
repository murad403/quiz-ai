"use client"
import PageHeading from "@/components/shared/PageHeading";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import ResultStats from "./ResultStats";
import SubmissionAndAnalytics from "./SubmissionAndAnalytics";
import { useQuizDetailsQuery } from "@/redux/features/dashboard/dashboard.api";


const QuizResult = () => {
    const { quizId } = useParams();
    const { data, isLoading } = useQuizDetailsQuery(Number(quizId), {skip: !quizId});
    return (
        <div className="space-y-4">
            <div className="inline-block">
                <Link href={"/profile/quizzes"} className="text-sm text-title flex items-center gap-2 hover:text-main transition-colors duration-300">
                    <MoveLeft />
                    <p>Back to Dashboard</p>
                </Link>
            </div>
            <PageHeading title={data?.title} paragraph={`${data?.num_questions} questions • Created on ${new Date(data?.created_at).toLocaleDateString()}`}></PageHeading>
            <ResultStats stats={data?.stats}></ResultStats>
            <SubmissionAndAnalytics submissions={data?.submissions} questionAnalytics={data?.question_analytics}></SubmissionAndAnalytics>
        </div>
    )
}

export default QuizResult
