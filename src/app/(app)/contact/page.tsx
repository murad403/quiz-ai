import React from 'react'
import ContactInformation from './ContactInformation'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div className='container mx-auto'>
      <div className='flex justify-center'>
        <div className='md:w-[65%] w-full flex gap-7 flex-col md:flex-row py-10 md:py-20 px-4 md:px-0'>
          <ContactInformation></ContactInformation>
          <ContactForm></ContactForm>
        </div>
      </div>
    </div>
  )
}

export default Contact
