"use client"
import { useQuizzesQuery } from '@/redux/features/dashboard/dashboard.api'
import { TQuiz } from '@/types/allTypes'
import Link from 'next/link'
import { CiMenuKebab } from 'react-icons/ci'
import { FiShare2 } from 'react-icons/fi'

const Quizzes = () => {
    const {data} = useQuizzesQuery(undefined);
    // console.log(data);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10'>
            {
                data?.map((quiz: TQuiz) =>
                    <div key={quiz?.id} className='bg-card border border-gray-700/50 px-6 md:py-10 py-6 rounded-lg hover:border-header/70 space-y-4'>
                        <div>
                            <h2 className='text-lg font-medium text-main mb-4 md:mb-0'>{quiz.title}</h2>
                            <div className='flex items-center md:gap-4 gap-2 text-title text-sm md:text-paragraph'>
                                <p>{quiz.questions_count} questions</p>
                                <p>•</p>
                                <p>Created {new Date(quiz.created_at).toLocaleDateString()}</p>
                            </div>
                        </div>
                        <div className='border-y border-gray-700/50 py-4 flex items-center'>
                            <div className='w-1/2'>
                                <p className='text-title text-sm md:text-paragraph'>Submissions</p>
                                <h2 className='text-subheading font-semibold text-main'>{quiz.submissions_count}</h2>
                            </div>
                            <div className='w-1/2'>
                                <p className='text-title text-sm md:text-paragraph'>Avg. Score</p>
                                <h2 className='text-subheading font-semibold text-main'>{quiz.average_score}%</h2>
                            </div>
                        </div>

                        <div className='flex items-center gap-3'>
                            <Link href={`/profile/quizzes/${quiz?.id}`} className='text-sm w-full font-medium text-center py-2 rounded-lg bg-black border border-gray-700/50 hover:bg-header/90 px-4 capitalize'>
                                View Results
                            </Link>
                            <button className='p-2 hover:bg-header/90 rounded-lg'>
                                <FiShare2 />
                            </button>
                            <button className='p-2 hover:bg-header/90 rounded-lg'>
                                <CiMenuKebab />
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Quizzes
