import React from 'react'
import FAQBanner from './FAQBanner'
import QuestionAndAnswer from './QuestionAndAnswer'
import QuestionSupport from './QuestionSupport'

const FAQ = () => {
  return (
    <div className='space-y-24'>
      <FAQBanner></FAQBanner>
      <QuestionAndAnswer></QuestionAndAnswer>
      <QuestionSupport></QuestionSupport>
    </div>
  )
}

export default FAQ
