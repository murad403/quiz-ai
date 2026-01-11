import AppWrapper from '@/components/wrapper/AppWrapper'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <AppWrapper>
                {children}
            </AppWrapper>
        </div>
    )
}

export default layout
