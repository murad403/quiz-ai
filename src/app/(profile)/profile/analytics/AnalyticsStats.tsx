import React from 'react'

const AnalyticsStats = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
      <div className='bg-card border border-gray-700/50 rounded-lg p-6'>
        <h3 className='text-lg text-title font-medium mb-1'>Total Quizzes</h3>
        <h1 className='text-main text-heading font-bold mb-6'>12</h1>
      </div>

      <div className='bg-card border border-gray-700/50 rounded-lg p-6'>
        <h3 className='text-lg text-title font-medium mb-1'>Total Submissions</h3>
        <h1 className='text-main text-heading font-bold mb-6'>125</h1>
      </div>

      <div className='bg-card border border-gray-700/50 rounded-lg p-6'>
        <h3 className='text-lg text-title font-medium mb-1'>Average Score</h3>
        <h1 className='text-main text-heading font-bold mb-6'>78%</h1>
      </div>

      <div className='bg-card border border-gray-700/50 rounded-lg p-6'>
        <h3 className='text-lg text-title font-medium mb-1'>Active Students</h3>
        <h1 className='text-main text-heading font-bold mb-6'>233</h1>
      </div>
    </div>
  )
}

export default AnalyticsStats
