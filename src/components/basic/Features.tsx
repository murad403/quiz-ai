
import React from 'react'
import Heading from '../shared/Heading'
import { features, TFeature } from '@/lib/features'

const Features = () => {
  return (
    <div id='features'>
      <Heading title="Everything You Need to Create Better Quizzes" description="Powerful features designed for modern educators"></Heading>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
            features.map((feature: TFeature, index: number) =>
                <div className='p-7 bg-card rounded-xl space-y-5 border border-gray-700/50 hover:border-header' key={index}>
                    <div className='text-2xl bg-green-500/10 inline-block p-3 text-green-500 rounded-xl'>
                        {feature.icon && <feature.icon/>}
                    </div>
                    <h3 className='text-main text-subheading font-semibold'>{feature.title}</h3>
                    <p className='text-title text-paragraph'>{feature.description}</p>
                </div>
            )
        }
      </div>
    </div>
  )
}

export default Features
