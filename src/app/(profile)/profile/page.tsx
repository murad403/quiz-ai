"use client"
import PageHeading from '@/components/shared/PageHeading'
import OverviewStats from './dashboard/OverviewStats'
import RecentQuizzes from './dashboard/RecentQuizzes'
import { useOverviewQuery } from '@/redux/features/dashboard/dashboard.api';

const OverviewPage = () => {
    const { data, isLoading } = useOverviewQuery(undefined);
    // console.log(data)
    return (
        <div className='space-y-4'>
            <PageHeading title='Welcome back, Teacher' paragraph='Create and manage your AI-powered quizzes'></PageHeading>
            <OverviewStats stats={data?.stats}></OverviewStats>
            <RecentQuizzes recentQuizzes={data?.recent_quizzes}></RecentQuizzes>
        </div>
    )
}

export default OverviewPage;
