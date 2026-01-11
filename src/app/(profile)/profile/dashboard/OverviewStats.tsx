"use client"
import { useOverviewQuery } from '@/redux/features/dashboard/dashboard.api';


const OverviewStats = () => {
  const { data, isLoading } = useOverviewQuery(undefined);
  // console.log(data?.stats);
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
      <div className='bg-card border border-gray-700/50 rounded-lg p-6'>
        <h3 className='text-lg text-title font-medium mb-1'>Total Quizzes</h3>
        <h1 className='text-main text-heading font-bold mb-6'>{data?.stats.total_quizzes}</h1>
        <p className='text-sm font-medium text-title'>+2 from last week</p>
      </div>

      <div className='bg-card border border-gray-700/50 rounded-lg p-6'>
        <h3 className='text-lg text-title font-medium mb-1'>Total Submissions</h3>
        <h1 className='text-main text-heading font-bold mb-6'>{data?.stats.total_submissions}</h1>
        <p className='text-sm font-medium text-title'>+36 from last week</p>
      </div>

      <div className='bg-card border border-gray-700/50 rounded-lg p-6'>
        <h3 className='text-lg text-title font-medium mb-1'>Average Score</h3>
        <h1 className='text-main text-heading font-bold mb-6'>{data?.stats.average_score}%</h1>
        <p className='text-sm font-medium text-title'>+10 from last week</p>
      </div>
    </div>
  )
}

export default OverviewStats
