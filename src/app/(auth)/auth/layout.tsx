import React from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='min-h-screen bg-black flex justify-center items-center md:px-0 px-4'>
      {children}
    </div>
  )
}

export default layout
