"use client"
import PageHeading from "@/components/shared/PageHeading";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import ResultStats from "./ResultStats";
import SubmissionAndAnalytics from "./SubmissionAndAnalytics";


const QuizResult = () => {
    const { quizId } = useParams();
    // console.log(quizId);
    return (
        <div className="space-y-4">
            <div className="inline-block">
                <Link href={"/profile"} className="text-sm text-title flex items-center gap-2 hover:text-main transition-colors duration-300">
                    <MoveLeft />
                    <p>Back to Dashboard</p>
                </Link>
            </div>
            <PageHeading title="World War II History" paragraph="5 questions • Created on 1/15/2024"></PageHeading>
            <ResultStats></ResultStats>
            <SubmissionAndAnalytics></SubmissionAndAnalytics>
        </div>
    )
}

export default QuizResult
