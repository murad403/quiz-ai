import React from 'react'

const WeeklySubmission = () => {
    const weeklyData = [
        { day: 'Mon', value: 28, max: 50 },
        { day: 'Tue', value: 35, max: 50 },
        { day: 'Wed', value: 42, max: 50 },
        { day: 'Thu', value: 38, max: 50 },
        { day: 'Fri', value: 45, max: 50 },
        { day: 'Sat', value: 30, max: 50 },
        { day: 'Sun', value: 30, max: 50 }
    ]
    return (
        <div className='bg-card border border-gray-700/50 rounded-lg p-4'>
            <h2 className='text-main font-medium text-xl'>Weekly Submissions</h2>
            <div className='space-y-4 mt-6 '>
                {weeklyData.map((item) => (
                    <div key={item.day} className='flex items-center gap-4'>
                        <p className='text-title font-medium text-sm w-10'>{item.day}</p>
                        <div className='flex-1 bg-gray-700/50 rounded-full h-8 relative overflow-hidden'>
                            <div
                                className='bg-header h-full rounded-full flex items-center justify-end pr-3 transition-all duration-300'
                                style={{ width: `${(item.value / item.max) * 100}%` }}
                            >
                                <span className='text-gray-900 font-semibold text-sm'>{item.value}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WeeklySubmission
