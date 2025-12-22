import React from 'react'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'

const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='px-4 md:px-0'>
            <div className='container mx-auto'>
                <Navbar></Navbar>
            </div>
            {children}
            <Footer></Footer>
        </div>
    )
}

export default Wrapper
