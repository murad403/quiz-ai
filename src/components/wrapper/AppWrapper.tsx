import React from 'react'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'
import { getCurrentToken } from '@/utils/auth';

const AppWrapper = async ({ children }: { children: React.ReactNode }) => {
    const accessToken = await getCurrentToken();
    const isAuth = !!accessToken;
    // console.log(isAuth)
    return (
        <div className=''>
            <div className='container mx-auto'>
                <Navbar isAuth={isAuth}></Navbar>
            </div>
            {children}
            <Footer></Footer>
        </div>
    )
}

export default AppWrapper
