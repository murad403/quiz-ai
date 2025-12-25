import PrivacyAndTermsComponent from '@/components/ui/PrivacyAndTermsComponent'
import { privacyContactUs, privacyDataSecurity, privacyHowWeUse, privacyInformationCollected, privacyIntroduction, privacyYourRights } from '@/lib/privacy'

const PrivacyPolicy = () => {
  return (
    <div className='container mx-auto md:my-20 my-16 px-4 md:px-0'>
      <div className='flex justify-center'>
        <div className='md:w-[65%] w-full space-y-7'>
          <div>
            <h1 className='text-main text-[50px] font-bold'>Privacy Policy</h1>
            <p className='text-title font-semibold text-subheading'>Last updated: January 1, 2025</p>
          </div>
          <PrivacyAndTermsComponent privacyData={privacyIntroduction}></PrivacyAndTermsComponent>
          <PrivacyAndTermsComponent privacyData={privacyInformationCollected}></PrivacyAndTermsComponent>
          <PrivacyAndTermsComponent privacyData={privacyHowWeUse}></PrivacyAndTermsComponent>
          <PrivacyAndTermsComponent privacyData={privacyDataSecurity}></PrivacyAndTermsComponent>
          <PrivacyAndTermsComponent privacyData={privacyYourRights}></PrivacyAndTermsComponent>
          <PrivacyAndTermsComponent privacyData={privacyContactUs}></PrivacyAndTermsComponent>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
