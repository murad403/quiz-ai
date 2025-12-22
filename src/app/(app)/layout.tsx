import Wrapper from '@/components/wrapper/Wrapper'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Wrapper>
                {children}
            </Wrapper>
        </div>
    )
}

export default layout
