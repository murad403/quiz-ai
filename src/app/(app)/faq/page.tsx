import React from 'react'
import FAQBanner from './FAQBanner'
import QuestionAndAnswer from './QuestionAndAnswer'
import QuestionSupport from './QuestionSupport'

const FAQ = () => {
  return (
    <div className='space-y-20 md:mb-24 mb-16'>
      <FAQBanner></FAQBanner>
      <div className='px-4 md:px-0 space-y-20'>
        <QuestionAndAnswer></QuestionAndAnswer>
        <QuestionSupport></QuestionSupport>
      </div>
    </div>
  )
}

export default FAQ
