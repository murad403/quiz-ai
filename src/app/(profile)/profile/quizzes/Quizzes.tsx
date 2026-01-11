import Link from 'next/link'
import { CiMenuKebab } from 'react-icons/ci'
import { FiShare2 } from 'react-icons/fi'

const Quizzes = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10'>
            {
                [0, 1, 2, 3].map((quiz, index) =>
                    <div key={index} className='bg-card border border-gray-700/50 px-6 md:py-10 py-6 rounded-lg hover:border-header/70 space-y-4'>
                        <div>
                            <h2 className='text-lg font-medium text-main mb-4 md:mb-0'>World War II History</h2>
                            <div className='flex items-center md:gap-4 gap-2 text-title text-sm md:text-paragraph'>
                                <p>10 questions</p>
                                <p>•</p>
                                <p>Created 1/15/2024</p>
                            </div>
                        </div>
                        <div className='border-y border-gray-700/50 py-4 flex items-center'>
                            <div className='w-1/2'>
                                <p className='text-title text-sm md:text-paragraph'>Submissions</p>
                                <h2 className='text-subheading font-semibold text-main'>24</h2>
                            </div>
                            <div className='w-1/2'>
                                <p className='text-title text-sm md:text-paragraph'>Avg. Score</p>
                                <h2 className='text-subheading font-semibold text-main'>78%</h2>
                            </div>
                        </div>

                        <div className='flex items-center gap-3'>
                            <Link href={`/quizzes/${1}`} className='text-sm w-full font-medium text-center py-2 rounded-lg bg-black border border-gray-700/50 hover:bg-header/90 px-4 capitalize'>
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
