import React from 'react'
import Heading from '../shared/Heading'

const Transform = () => {
  return (
    <div className='flex justify-center mb-32'>
      <div className='w-full md:w-[70%] bg-green-500/10 border border-gray-700/70 md:px-32 px-2 md:py-20 py-6 rounded-xl'>
        <Heading title='Ready to Transform Your Teaching?' description='Join thousands of educators using QuizAI to create better assessments and improve student outcomes.'></Heading>
        <div className='flex justify-center'>
            <button className='capitalize bg-header rounded-lg py-3 px-6 font-semibold text-white hover:bg-header/90 transition-all duration-200'>get start for free</button>
        </div>
      </div>
    </div>
  )
}

export default Transform
