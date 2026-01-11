"use client"
import { useState } from "react";

const SubmissionAndAnalytics = () => {
    const [activeTab, setActiveTab] = useState<'submissions' | 'analytics'>('submissions');
    console.log(activeTab);
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
                            [0, 1, 2, 3].map((submission, index) =>
                                <div key={index} className="mt-4">
                                    <div className="p-4 border border-gray-700/50 hover:bg-gray-700/50 rounded-lg flex justify-between items-center">
                                        <div className="flex items-center gap-3">
                                            <div className='text-xl size-14 flex justify-center items-center bg-green-500/10 p-3 text-green-500 rounded-full'>
                                                AJ
                                            </div>
                                            <div className="text-main">
                                                <h2 className="text-paragraph font-medium">Alex Johnson</h2>
                                                <p className="text-sm">2024-01-16 10:30 AM </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-8">
                                            <div>
                                                <p className="text-title text-sm">Score</p>
                                                <h2 className="text-subheading font-medium text-main">80%</h2>
                                            </div>
                                            <div>
                                                <p className="text-title text-sm">Correct</p>
                                                <h2 className="text-subheading font-medium text-main">4/5</h2>
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
                            [0, 1, 2, 3, 4].map((question, index) =>
                                <div key={index} className="mt-4">
                                    <div className="flex justify-between">
                                        <div>
                                            <h3 className="text-paragraph text-main font-medium">Question 1</h3>
                                            <p className="text-sm text-title">In which year did World War II begin?</p>
                                        </div>
                                        <div>
                                            <h3 className="text-paragraph text-main font-medium">80%</h3>
                                            <p className="text-sm text-title">4 attempts</p>
                                        </div>
                                    </div>
                                    <progress className="progress text-header w-full" value={80} max="100"></progress>
                                </div>
                            )
                        }
                    </div>
            }
        </div>
    )
}

export default SubmissionAndAnalytics
