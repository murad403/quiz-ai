import PrivacyPolicyComponent from '@/components/ui/PrivacyPolicyComponent'
import { privacyContactUs, privacyDataSecurity, privacyHowWeUse, privacyInformationCollected, privacyIntroduction, privacyYourRights } from '@/lib/privacy'
import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className='container mx-auto md:my-20 my-16'>
      <div className='flex justify-center'>
        <div className='md:w-[65%] w-full space-y-7'>
          <div>
            <h1 className='text-main md:text-[60px] text-[50px] font-bold'>Privacy Policy</h1>
            <p className='text-title font-semibold text-subheading'>Last updated: January 1, 2025</p>
          </div>
          <PrivacyPolicyComponent privacyData={privacyIntroduction}></PrivacyPolicyComponent>
          <PrivacyPolicyComponent privacyData={privacyInformationCollected}></PrivacyPolicyComponent>
          <PrivacyPolicyComponent privacyData={privacyHowWeUse}></PrivacyPolicyComponent>
          <PrivacyPolicyComponent privacyData={privacyDataSecurity}></PrivacyPolicyComponent>
          <PrivacyPolicyComponent privacyData={privacyYourRights}></PrivacyPolicyComponent>
          <PrivacyPolicyComponent privacyData={privacyContactUs}></PrivacyPolicyComponent>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
