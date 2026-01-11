import React from 'react'

const TopPerformingQuizzes = () => {
  return (
    <div className='bg-card border border-gray-700/50 rounded-lg p-4'>
      <h2 className='text-main font-medium text-xl'>Top Performing Quizzes</h2>
      <div className='space-y-4 mt-6'>
        {
            [0, 1, 2].map((_, index) => 
                <div key={index} className='flex justify-between border border-gray-700/50 rounded-lg p-4'>
                    <div>
                        <h2 className='text-main text-lg font-medium mb-3'>World War II History</h2>
                        <p className='text-sm text-title'>45 submissions</p>
                    </div>
                    <h1 className='text-green-500 font-bold text-subheading'>85%</h1>
                </div>
            )
        }
      </div>
    </div>
  )
}

export default TopPerformingQuizzes
