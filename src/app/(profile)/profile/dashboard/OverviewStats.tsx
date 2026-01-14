import { TOverviewStats } from '@/types/allTypes';

const OverviewStats = ({ stats }: { stats: TOverviewStats }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
      <div className='bg-card border border-gray-700/50 rounded-lg p-6'>
        <h3 className='text-lg text-title font-medium mb-1'>Total Quizzes</h3>
        <h1 className='text-main text-heading font-bold mb-6'>{stats?.total_quizzes}</h1>
        <p className='text-sm font-medium text-title'>
          <span className='text-header'>
            {stats?.quizzes_change > 0 ? `+${stats?.quizzes_change}` : stats?.quizzes_change}
          </span> from last week</p>
      </div>

      <div className='bg-card border border-gray-700/50 rounded-lg p-6'>
        <h3 className='text-lg text-title font-medium mb-1'>Total Submissions</h3>
        <h1 className='text-main text-heading font-bold mb-6'>{stats?.total_submissions}</h1>
        <p className='text-sm font-medium text-title'>
          <span className='text-header'>
            {stats?.submissions_change > 0 ? `+${stats?.submissions_change}` : stats?.submissions_change}
          </span> from last week</p>
      </div>

      <div className='bg-card border border-gray-700/50 rounded-lg p-6'>
        <h3 className='text-lg text-title font-medium mb-1'>Average Score</h3>
        <h1 className='text-main text-heading font-bold mb-6'>{stats?.average_score}%</h1>
        <p className='text-sm font-medium text-title'>
          <span className='text-header'>
            {stats?.score_change > 0 ? `+${stats?.score_change}` : stats?.score_change}
          </span> from last week
        </p>
      </div>
    </div>
  )
}

export default OverviewStats
