import React from 'react'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className=''>
            <div className='container mx-auto'>
                <Navbar></Navbar>
            </div>
            {children}
            <Footer></Footer>
        </div>
    )
}

export default AppWrapper
