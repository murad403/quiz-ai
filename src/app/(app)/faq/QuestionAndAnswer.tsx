"use client"
import FAQCollapse from '@/components/ui/FAQCollapse'
import { faqFeaturesAndUsage, faqGettingStarted, faqPricingAndPlans, faqTechnicalAndSecurity } from '@/lib/faq'

const QuestionAndAnswer = () => {

  return (
    <div className='container mx-auto flex justify-center'>
      <div className='md:w-[65%] w-full space-y-10'>
        <FAQCollapse title='Getting Started' faqData={faqGettingStarted}></FAQCollapse>
        <FAQCollapse title='Pricing & Plans' faqData={faqPricingAndPlans}></FAQCollapse>
        <FAQCollapse title='Features & Usage' faqData={faqFeaturesAndUsage}></FAQCollapse>
        <FAQCollapse title='Technical & Security' faqData={faqTechnicalAndSecurity}></FAQCollapse>
      </div>
    </div>
  )
}

export default QuestionAndAnswer