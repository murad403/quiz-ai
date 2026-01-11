"use client"
import PageHeading from '@/components/shared/PageHeading'
import AnalyticsStats from './AnalyticsStats'
import WeeklySubmission from './WeeklySubmission'
import TopPerformingQuizzes from './TopPerformingQuizzes'
import { useAnalyticsQuery } from '@/redux/features/dashboard/dashboard.api'

const AnalyticsPage = () => {
    const {data} = useAnalyticsQuery(undefined);
    // console.log(data);
    return (
        <div className='space-y-4'>
            <PageHeading title='Analytics' paragraph='Track your quiz performance and student engagement'></PageHeading>
            <AnalyticsStats stats={data?.stats}></AnalyticsStats>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <WeeklySubmission submissions={data?.weekly_submissions}></WeeklySubmission>
                <TopPerformingQuizzes quizzes={data?.top_performing_quizzes}></TopPerformingQuizzes>
            </div>
        </div>
    )
}

export default AnalyticsPage;
