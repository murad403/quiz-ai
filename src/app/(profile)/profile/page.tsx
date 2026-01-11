import PageHeading from '@/components/shared/PageHeading'
import OverviewStats from './dashboard/OverviewStats'
import RecentQuizzes from './dashboard/RecentQuizzes'

const page = () => {
    return (
        <div className='space-y-4'>
            <PageHeading title='Welcome back, Teacher' paragraph='Create and manage your AI-powered quizzes'></PageHeading>
            <OverviewStats></OverviewStats>
            <RecentQuizzes></RecentQuizzes>
        </div>
    )
}

export default page
