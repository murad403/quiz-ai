import { TPrivacy } from '@/lib/privacy'
import React from 'react'

const PrivacyPolicyComponent = ({ privacyData }: { privacyData: TPrivacy }) => {
    return (
        <div className='space-y-3'>
            <h1 className='text-main md:text-[40px] text-heading font-bold capitalize'>{privacyData?.title}</h1>
            <p className='text-paragraph text-title leading-relaxed'>{privacyData?.description}</p>
            <ul className='space-y-1 pl-5'>
                {
                    privacyData?.features &&
                    privacyData?.features?.map((item: string, index: number) =>
                        <li className='text-paragraph text-title list-disc marker:text-title' key={index}>{item}</li>
                    )
                }
            </ul>
        </div>
    )
}

export default PrivacyPolicyComponent
