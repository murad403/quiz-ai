import Link from 'next/link'
import { FiShare2 } from 'react-icons/fi'
import { GoPlus } from 'react-icons/go'

const RecentQuizzes = () => {
    return (
        <div className='space-y-4 mt-10'>
            <div className='flex justify-between items-center'>
                <h2 className='text-subheading text-main font-bold'>Recent Quizzes</h2>
                <button>
                    <Link href={"/profile/create-quiz"} className='flex items-center gap-2 text-main font-medium text-center py-2 rounded-lg bg-header hover:bg-header/90 px-4 capitalize'>
                        <GoPlus size={18} />
                        <span className='text-paragraph'>create quiz</span>
                    </Link>
                </button>
            </div>

            <div className='space-y-4'>
                <div className='bg-card border border-gray-700/50 px-6 md:py-10 py-6 rounded-lg flex flex-col md:flex-row gap-4 justify-between md:items-center'>
                    <div>
                        <h2 className='text-lg font-medium text-main mb-4 md:mb-0'>World War II History</h2>
                        <div className='flex items-center md:gap-4 gap-2 text-title text-sm md:text-paragraph'>
                            <p>10 questions</p>
                            <p>•</p>
                            <p>24 submissions</p>
                            <p>•</p>
                            <p>Created 1/15/2024</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <Link href={`/quizzes/${1}`} className='text-sm font-medium text-center py-2 rounded-lg bg-black border border-gray-700/50 hover:bg-header/90 px-4 capitalize'>
                            View Results
                        </Link>
                        <button className='p-2 hover:bg-header/90 rounded-lg'>
                            <FiShare2 />
                        </button>
                    </div>
                </div>
                <div className='bg-card border border-gray-700/50 px-6 md:py-10 py-6 rounded-lg flex flex-col md:flex-row gap-4 justify-between md:items-center'>
                    <div>
                        <h2 className='text-lg font-medium text-main mb-4 md:mb-0'>World War II History</h2>
                        <div className='flex items-center md:gap-4 gap-2 text-title text-sm md:text-paragraph'>
                            <p>10 questions</p>
                            <p>•</p>
                            <p>24 submissions</p>
                            <p>•</p>
                            <p>Created 1/15/2024</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <Link href={`/quizzes/${1}`} className='text-sm font-medium text-center py-2 rounded-lg bg-black border border-gray-700/50 hover:bg-header/90 px-4 capitalize'>
                            View Results
                        </Link>
                        <button className='p-2 hover:bg-header/90 rounded-lg'>
                            <FiShare2 />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentQuizzes
