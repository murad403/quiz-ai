import React from 'react'

const Heading = ({title, description}: {title: string, description: string}) => {
  return (
    <div className='text-center mb-10'>
      <h1 className='text-main md:text-[40px] text-heading font-bold capitalize'>{title}</h1>
      <p className='text-title text-paragraph md:text-subheading'>{description}</p>
    </div>
  )
}

export default Heading
