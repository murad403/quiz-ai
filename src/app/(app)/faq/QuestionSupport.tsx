import Heading from '@/components/shared/Heading'
import React from 'react'

const QuestionSupport = () => {
  return (
    <div className='flex justify-center'>
      <div className='w-full md:w-[45%] bg-linear-to-l to-green-500/10 from-white/10 border border-gray-700/70 md:px-32 px-2 md:py-20 py-6 rounded-xl'>
      <Heading title='Still have questions?' description={`Can't find the answer you're looking for? Our support team is here to help.`}></Heading>
      <div className='flex justify-center gap-4'>
        <button className='capitalize bg-header rounded-xl py-3 px-6 font-semibold text-white hover:bg-header/90 transition-all duration-200'>Contact support</button>
        <button className='capitalize rounded-xl py-3 px-6 font-semibold text-white hover:bg-header/90 border border-gray-700/70 transition-all duration-200'>start free trial</button>
      </div>
    </div>
    </div>
  )
}

export default QuestionSupport
