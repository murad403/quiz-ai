import React from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='min-h-screen bg-black flex justify-center items-center md:p-0 p-4'>
      <div className='md:w-1/3 w-full'>
        {children}
      </div>
    </div>
  )
}

export default layout
