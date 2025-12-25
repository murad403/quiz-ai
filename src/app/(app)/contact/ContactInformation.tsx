import { contactInfo, TContact } from '@/lib/contact'
import React from 'react'

const ContactInformation = () => {
    return (
        <div className='w-full md:w-1/2'>
            <div>
                <h1 className='text-main text-[40px] font-bold'>Get in Touch</h1>
                <p className='text-title text-[20px]'>{`Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.`}</p>
            </div>
            <div className='space-y-3 mt-7'>
                {
                    contactInfo.map((item: TContact) =>
                        <div className='flex gap-4 items-center' key={item.id}>
                            <h1 className='size-12 bg-green-500/10 flex justify-center items-center p-3 text-green-500 rounded-xl'>
                                {item.icon && <item.icon className='text-header' size={22}/>}
                            </h1>
                            <div>
                                <h3 className='text-main text-paragraph font-semibold'>{item?.label}</h3>
                                <p className='text-title text-small font-medium'>{item?.value}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default ContactInformation
