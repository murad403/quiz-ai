"use client"
import { TQuestionAnalytics, TSubmission } from "@/types/allTypes";
import { useState } from "react";



const SubmissionAndAnalytics = ({ submissions, questionAnalytics }: { submissions: TSubmission[], questionAnalytics: TQuestionAnalytics[] }) => {
    const [activeTab, setActiveTab] = useState<'submissions' | 'analytics'>('submissions');
    // console.log(questionAnalytics); 
    return (
        <div className="space-y-6">
            <div className='bg-gray-700/50 py-1 px-3 rounded-lg inline-block text-paragraph space-x-2 text-title mt-6'>
                <button onClick={() => setActiveTab("submissions")} className={`${activeTab === 'submissions' ? 'bg-header py-1 px-2 rounded-lg text-white' : ''}`}>Student Submission</button>
                <button onClick={() => setActiveTab("analytics")} className={`${activeTab === 'analytics' ? 'bg-header py-1 px-2 rounded-lg text-white' : ''}`}>Question Analytics</button>
            </div>

            {
                activeTab === 'submissions' ?
                    <div className="bg-card border border-gray-700/50 rounded-xl p-6">
                        <h2 className="text-paragraph font-medium text-main">All Submissions</h2>
                        {
                            submissions?.map((submission: TSubmission) =>
                                <div key={submission?.id} className="mt-4">
                                    <div className="p-4 border border-gray-700/50 hover:bg-gray-700/50 rounded-lg flex justify-between items-center">
                                        <div className="flex items-center gap-3">
                                            <div className='text-xl size-12 flex justify-center items-center bg-green-500/10 p-3 text-header rounded-full'>
                                                AJ
                                            </div>
                                            <div className="text-main">
                                                <h2 className="text-paragraph font-medium">{submission?.student_name}</h2>
                                                <p className="text-sm">{new Date(submission?.date).toLocaleDateString()}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-8">
                                            <div>
                                                <p className="text-title text-sm">Score</p>
                                                <h2 className="text-subheading font-medium text-main">{submission?.score_percentage.toFixed(0)}%</h2>
                                            </div>
                                            <div>
                                                <p className="text-title text-sm">Correct</p>
                                                <h2 className="text-subheading font-medium text-main">{submission?.score_fraction}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div> :


                    <div className="bg-card border border-gray-700/50 rounded-xl p-6">
                        <h2 className="text-paragraph font-medium text-main">Question Performance</h2>
                        {
                            questionAnalytics?.map((question: TQuestionAnalytics, index: number) =>
                                <div key={question.id} className="mt-4">
                                    <div className="flex justify-between">
                                        <div>
                                            <h3 className="text-paragraph text-main font-medium">Question {index + 1}</h3>
                                            <p className="text-sm text-title">{question.question_text}</p>
                                        </div>
                                        <div>
                                            <h3 className="text-paragraph text-main font-medium">{question.percentage_correct}%</h3>
                                            <p className="text-sm text-title">{question.total_attempts} attempts</p>
                                        </div>
                                    </div>
                                    <progress className="progress text-header w-full" value={question.percentage_correct} max="100"></progress>
                                </div>
                            )
                        }
                    </div>
            }
        </div>
    )
}

export default SubmissionAndAnalytics
