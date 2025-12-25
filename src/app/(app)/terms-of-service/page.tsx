import PrivacyAndTermsComponent from '@/components/ui/PrivacyAndTermsComponent'
import { termsAcceptance, termsContactInformation, termsContentOwnership, termsLimitationOfLiability, termsModifications, termsUseLicense, termsUserAccounts } from '@/lib/terms'
import React from 'react'

const TermsOfService = () => {
  return (
    <div className='container mx-auto md:my-20 my-16 px-4 md:px-0'>
      <div className='flex justify-center'>
        <div className='md:w-[65%] w-full space-y-7'>
          <div>
            <h1 className='text-main text-[50px] font-bold'>Terms of Service</h1>
            <p className='text-title font-semibold text-subheading'>Last updated: January 1, 2025</p>
          </div>
          <PrivacyAndTermsComponent privacyData={termsAcceptance}></PrivacyAndTermsComponent>
          <PrivacyAndTermsComponent privacyData={termsUseLicense}></PrivacyAndTermsComponent>
          <PrivacyAndTermsComponent privacyData={termsUserAccounts}></PrivacyAndTermsComponent>
          <PrivacyAndTermsComponent privacyData={termsContentOwnership}></PrivacyAndTermsComponent>
          <PrivacyAndTermsComponent privacyData={termsLimitationOfLiability}></PrivacyAndTermsComponent>
          <PrivacyAndTermsComponent privacyData={termsModifications}></PrivacyAndTermsComponent>
          <PrivacyAndTermsComponent privacyData={termsContactInformation}></PrivacyAndTermsComponent>
        </div>
      </div>
    </div>
  )
}

export default TermsOfService
