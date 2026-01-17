"use client"
import React, { useState } from 'react'
import LogoutModal from '../ui/LogoutModal'
import TeacherHeader from '../shared/TeacherHeader'
import TeacherSidebar from '../shared/TeacherSidebar'

const ProfileWrapper = ({ children }: { children: React.ReactNode }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    return (
        <main className='text-white flex relative'>
            {/* Desktop Sidebar */}
            <div className='hidden lg:block lg:w-100'>
                <TeacherSidebar />
            </div>

            {/* Mobile Drawer Overlay */}
            {isSidebarOpen && (
                <div 
                    className='fixed inset-0 bg-black/50 z-40 lg:hidden'
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Mobile Drawer Sidebar */}
            <div className={`fixed top-0 left-0 h-full w-1/2 z-50 transform transition-transform duration-300 lg:hidden ${
                isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }`}>
                <TeacherSidebar onClose={() => setIsSidebarOpen(false)} />
            </div>

            {/* Main Content */}
            <div className='space-y-4 w-full px-4'>
                <TeacherHeader onMenuClick={() => setIsSidebarOpen(true)} />
                <div className='mt-4'>
                    {children}
                </div>
            </div>

            {/* Logout Modal - Outside drawer */}
            <LogoutModal />
        </main>
    )
}

export default ProfileWrapper;