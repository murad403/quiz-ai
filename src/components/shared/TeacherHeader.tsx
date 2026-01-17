"use client"
import React from 'react'
import { HiMenu } from "react-icons/hi";

interface HeaderProps {
    onMenuClick: () => void
}

const TeacherHeader = ({ onMenuClick }: HeaderProps) => {
    return (
        <div className='mt-4 bg-card border border-gray-700/50 rounded-lg flex justify-between md:hidden p-4 items-center gap-4'>
            {/* Menu Button - Only visible on mobile */}
            <button 
                onClick={onMenuClick}
                className='lg:hidden text-title hover:text-main transition-colors'
                aria-label='Open menu'
            >
                <HiMenu size={24} />
            </button>
            
            <div className='md:hidden block'>
                {/* Your header content here */}
                <span className='text-main font-semibold text-subheading'>Quiz Ai</span>
            </div>
        </div>
    )
}

export default TeacherHeader;