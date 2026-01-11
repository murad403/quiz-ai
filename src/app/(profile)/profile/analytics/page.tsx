import PageHeading from '@/components/shared/PageHeading'
import AnalyticsStats from './AnalyticsStats'
import WeeklySubmission from './WeeklySubmission'
import TopPerformingQuizzes from './TopPerformingQuizzes'

const page = () => {
    return (
        <div className='space-y-4'>
            <PageHeading title='Analytics' paragraph='Track your quiz performance and student engagement'></PageHeading>
            <AnalyticsStats></AnalyticsStats>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <WeeklySubmission></WeeklySubmission>
                <TopPerformingQuizzes></TopPerformingQuizzes>
            </div>
        </div>
    )
}

export default page
