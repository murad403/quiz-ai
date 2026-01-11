import PageHeading from '@/components/shared/PageHeading'
import Link from 'next/link'
import { GoPlus } from 'react-icons/go'
import Quizzes from './Quizzes'

const page = () => {
    return (
        <div className='space-y-4'>
            <div className='flex justify-between '>
                <PageHeading title='My Quizzes' paragraph='Manage all your created quizzes'></PageHeading>
                <button>
                    <Link href={"/profile/create-quiz"} className='flex items-center gap-2 text-main font-medium text-center py-2 rounded-lg bg-header hover:bg-header/90 px-4 capitalize'>
                        <GoPlus size={18} />
                        <span className='text-paragraph'>create quiz</span>
                    </Link>
                </button>
            </div>
            <Quizzes></Quizzes>
        </div>
    )
}

export default page
