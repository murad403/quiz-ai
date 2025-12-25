import React from 'react'
import Heading from '../shared/Heading'
import { howItsWorks, THowItsWorks } from '@/lib/howItsWorks'

const HowItsWorks = () => {
  return (
    <div id='how-it-works'>
      <Heading title='how-it-works' description='Create professional quizzes in three simple steps'></Heading>
      <div className='grid grid-cols-1 md:grid-cols-3 justify-between items-center'>
        {
          howItsWorks.map((item: THowItsWorks, index: number) =>
            <div className='flex flex-col gap-4 items-center md:px-18 px-0' key={index}>
              <h1 className='text-2xl size-18 bg-green-500/10 flex justify-center items-center p-3 text-green-500 rounded-full'>{index + 1}</h1>
              <h2 className='text-main text-subheading font-semibold text-center'>{item.title}</h2>
              <p className='text-title text-paragraph text-center'>{item.description}</p>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default HowItsWorks
