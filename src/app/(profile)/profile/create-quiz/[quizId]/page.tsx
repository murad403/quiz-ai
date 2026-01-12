"use client"
import SaveAndPublishModal from '@/components/ui/SaveAndPublishModal'
import Link from 'next/link';
import { MdSaveAlt } from 'react-icons/md'
import { RiLoopLeftLine } from 'react-icons/ri'

const questions = [
    {
        id: 1,
        questionText: "Sample question 1 about df",
        options: [
            { id: 'A', text: 'Option A' },
            { id: 'B', text: 'Option B' },
            { id: 'C', text: 'Option C' },
            { id: 'D', text: 'Option D' }
        ],
        correctOption: 'A'
    },
    {
        id: 2,
        questionText: "Sample question 2",
        options: [
            { id: 'A', text: 'Option A' },
            { id: 'B', text: 'Option B' },
            { id: 'C', text: 'Option C' },
            { id: 'D', text: 'Option D' }
        ],
        correctOption: 'B'
    },
    {
        id: 3,
        questionText: "Sample question 3",
        options: [
            { id: 'A', text: 'Option A' },
            { id: 'B', text: 'Option B' },
            { id: 'C', text: 'Option C' },
            { id: 'D', text: 'Option D' }
        ],
        correctOption: 'C'
    },
    {
        id: 4,
        questionText: "Sample question 4",
        options: [
            { id: 'A', text: 'Option A' },
            { id: 'B', text: 'Option B' },
            { id: 'C', text: 'Option C' },
            { id: 'D', text: 'Option D' }
        ],
        correctOption: 'A'
    },
    {
        id: 5,
        questionText: "Sample question 5",
        options: [
            { id: 'A', text: 'Option A' },
            { id: 'B', text: 'Option B' },
            { id: 'C', text: 'Option C' },
            { id: 'D', text: 'Option D' }
        ],
        correctOption: 'D'
    }
];

const GeneratedQuestionsPage = () => {
   
    return (
        <div className='max-w-6xl mx-auto'>
            <div className='flex flex-col md:flex-row gap-4 justify-between md:items-center'>
                <div>
                    <h1 className='font-semibold text-main text-heading'>Topic</h1>
                    <p className='text-paragraph text-title'>5 questions generated</p>
                </div>
                <div className='flex items-center gap-4'>
                    <Link href={"/profile/create-quiz"} className='flex gap-4 px-4 py-2 items-center border border-gray-700/50 hover:bg-header/90 rounded-lg font-medium text-main'>
                        <RiLoopLeftLine />
                        <span>Regenerate</span>
                    </Link>
                    <button onClick={() => {
                        (document.getElementById('my_modal_2') as HTMLDialogElement).showModal()
                    }} className="text-main font-semibold px-4 w-full text-center py-2 rounded-lg bg-header hover:bg-header/90 flex items-center justify-center gap-4">
                        <MdSaveAlt />
                        <span>Save & Publish</span>
                    </button>
                </div>
                <SaveAndPublishModal />
            </div>
            <div className="mt-4">
                <div className=" space-y-6">
                    {questions.map((question, index) => (
                        <div key={question.id} className="bg-card border border-gray-700/50 rounded-lg p-4">
                            <h2 className="text-main text-subheading font-medium mb-3">Question {index + 1}</h2>

                            {/* Question Text */}
                            <div className="mb-6">
                                <label className="text-main font-medium text-paragraph block mb-2">
                                    Question Text
                                </label>
                                <p className='px-4 py-2 border border-gray-700/50 rounded-lg focus:outline-2 outline-header text-main'>{question.questionText}</p>
                            </div>

                            {/* Answer Options */}
                            <div>
                                <h3 className="text-main font-medium text-paragraph block mb-3">
                                    Answer Options
                                </h3>
                                <div className="space-y-2">
                                    {question.options.map((option) => (
                                        <div key={option.id} className="flex items-center gap-2">
                                            <p className='flex-1 px-4 py-2 border border-gray-700/50 rounded-lg text-main'>{option.text}</p>
                                            {
                                                question.correctOption === option.id && <p className='bg-header rounded-lg px-4 py-2'>correct</p>
                                            }
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default GeneratedQuestionsPage;
