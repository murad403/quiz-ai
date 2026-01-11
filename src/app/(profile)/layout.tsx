import ProfileWrapper from '@/components/wrapper/ProfileWrapper'
import React from 'react'

const layout = ({children} : {children: React.ReactNode}) => {
  return (
    <ProfileWrapper>
      {children}
    </ProfileWrapper>
  )
}

export default layout
