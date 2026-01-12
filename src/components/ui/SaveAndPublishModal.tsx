"use client"
import Link from 'next/link';
import { useState } from 'react';
import { IoCheckmark, IoCopyOutline } from 'react-icons/io5';

const SaveAndPublishModal = () => {
    const [copied, setCopied] = useState(false);
    const quizLink = "https://v0-quiz-app-mvp-pink.vercel.app/quiz/demo-quiz-1767506097744";

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(quizLink);
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
            }, 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <dialog id="my_modal_2" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box bg-card border border-gray-700/50 shadow-xl rounded-xl p-5">

                <div className="flex items-center mb-1 gap-4">
                    <IoCheckmark className='text-green-500' size={22} />
                    <span className='text-main font-medium text-paragraph'>Quiz Published Successfully!</span>
                </div>
                <p className='text-title text-sm'>Share this link with your students to take the quiz</p>

                <div className='flex justify-between items-center gap-2 mt-4'>
                    <div className='border border-gray-700/50 rounded-lg'>
                        <p className='text-main font-medium text-sm'>{quizLink}</p>
                    </div>
                    <button onClick={handleCopyLink} className='p-3 hover:bg-header/90 rounded-lg'>
                        {copied ? <IoCheckmark className='text-green-500' /> : <IoCopyOutline />}
                    </button>
                </div>


                <div className="modal-action flex justify-center gap-10">
                    <form method="dialog">
                        <button className="border border-gray-700/50 py-2 px-6 rounded-lg text-main transition font-medium capitalize">
                            Cancel
                        </button>
                    </form>
                    <Link href={"/quizzes"}
                        className="bg-header hover:bg-header/90 rounded-lg py-2 px-6 text-main font-medium transition capitalize"
                    >
                        View all quizzes
                    </Link>
                </div>
            </div>
        </dialog>
    )
}

export default SaveAndPublishModal