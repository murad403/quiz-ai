import React from 'react'

const ResultStats = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='bg-card border border-gray-700/50 rounded-lg p-6'>
                <h3 className='text-lg text-title font-medium mb-1'>Total Submissions</h3>
                <h1 className='text-main text-heading font-bold mb-6'>12</h1>
            </div>

            <div className='bg-card border border-gray-700/50 rounded-lg p-6'>
                <h3 className='text-lg text-title font-medium mb-1'>Average Score</h3>
                <h1 className='text-main text-heading font-bold mb-6'>85%</h1>
            </div>

            <div className='bg-card border border-gray-700/50 rounded-lg p-6'>
                <h3 className='text-lg text-title font-medium mb-1'>Completion Rate</h3>
                <h1 className='text-main text-heading font-bold mb-6'>100%</h1>
            </div>
        </div>
    )
}

export default ResultStats
