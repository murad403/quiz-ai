import React from 'react'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'
import { getCurrentToken } from '@/utils/auth';
import { AuthProvider } from '@/context/AuthContext';

const AppWrapper = async ({ children }: { children: React.ReactNode }) => {
    const accessToken = await getCurrentToken();
    // console.log(isAuth)
    return (
        <AuthProvider accessToken={accessToken?.accessToken} refreshToken={accessToken?.refreshToken}>
            <div className='container mx-auto'>
                <Navbar></Navbar>
            </div>
            {children}
            <Footer></Footer>
        </AuthProvider>
    )
}

export default AppWrapper
