"use client"
import SaveAndPublishModal from '@/components/ui/SaveAndPublishModal'
import { useGeneratedQuestionsQuery, usePublishQuizMutation } from '@/redux/features/dashboard/dashboard.api';
import { TQuizOption, TQuizQuestion } from '@/types/allTypes';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { MdSaveAlt } from 'react-icons/md'
import { RiLoopLeftLine } from 'react-icons/ri'
import { toast } from 'react-toastify';

const GeneratedQuestionsPage = () => {
    const { quizId } = useParams();
    const { data } = useGeneratedQuestionsQuery(Number(quizId));
    const [publishQuiz, {isLoading}] = usePublishQuizMutation();
    const [publishId, setPublishId] = useState<string | null>(null);

    const handleSaveAndPublish = async (id: number) => {
        try {
            const result = await publishQuiz(id).unwrap();
            toast.success(result?.message);
            setPublishId(result?.quiz_id);
            (document.getElementById('my_modal_2') as HTMLDialogElement).showModal();
        } catch (error) {
            toast.error("Failed to publish quiz. Please try again.");
        }
    }

    return (
        <div className='max-w-6xl mx-auto'>
            {
                data ? <div>
                    <div className='flex flex-col md:flex-row gap-4 justify-between md:items-center'>
                        <div>
                            <h1 className='font-semibold text-main text-heading'>{data?.title}</h1>
                            <p className='text-paragraph text-title'>{data?.num_questions} questions generated</p>
                        </div>

                        <div className='flex items-center gap-4'>
                            <Link href={"/profile/create-quiz"} className='flex gap-4 px-4 py-2 items-center border border-gray-700/50 hover:bg-header/90 rounded-lg font-medium text-main'>
                                <RiLoopLeftLine />
                                <span>Regenerate</span>
                            </Link>
                            <button onClick={() => {
                                
                                handleSaveAndPublish(data.id);
                            }} className="text-main font-semibold px-4 w-full text-center py-2 rounded-lg bg-header hover:bg-header/90 flex items-center justify-center gap-4">
                                <MdSaveAlt />
                                <span>
                                    {
                                        isLoading ? "Publishing..." : "Save & Publish"
                                    }
                                </span>
                            </button>
                        </div>
                        <SaveAndPublishModal publishId={publishId} />
                    </div>
                    <div className="mt-4">
                        <div className="space-y-6">
                            {data?.questions?.map((question: TQuizQuestion, index: number) => (
                                <div key={question?.id} className="bg-card border border-gray-700/50 rounded-lg p-4">
                                    <h2 className="text-main text-subheading font-medium mb-3">Question {index + 1}</h2>

                                    {/* Question Text */}
                                    <div className="mb-6">
                                        <label className="text-main font-medium text-paragraph block mb-2">
                                            Question Text
                                        </label>
                                        <p className='px-4 py-2 border border-gray-700/50 rounded-lg focus:outline-2 outline-header text-main'>{question?.text}</p>
                                    </div>

                                    {/* Answer Options */}
                                    <div>
                                        <h3 className="text-main font-medium text-paragraph block mb-3">
                                            Answer Options
                                        </h3>
                                        <div className="space-y-2">
                                            {question?.options?.map((option: TQuizOption) => {
                                                return (
                                                    <div key={option.id} className="flex items-center gap-2">
                                                        <p className='flex-1 px-4 py-2 space-x-2 border border-gray-700/50 rounded-lg text-main'>
                                                            <span>{option.text}</span>
                                                        </p>
                                                        {
                                                            option.is_correct && (
                                                                <span className='bg-header rounded-lg px-4 py-2'>Correct Answer</span>
                                                            )
                                                        }
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div> :
                    <div className='text-center text-title text-paragraph mt-8'>
                        No questions found
                    </div>
            }
        </div>
    )
}

export default GeneratedQuestionsPage;