import { Check } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Home = () => {
    return (
        <div className='md:pt-32 pt-20 md:space-y-10 space-y-7'>
            <div className='flex justify-center items-center'>
                <p className='text-sm py-1 px-5 bg-white/10 rounded-2xl text-green-500 inline-block'>
                    <span>AI-Powered Quiz Platform</span>
                </p>
            </div>
            <h1 className='text-main md:text-[70px] text-[60px] font-bold text-center'>Create Smarter <br /> Quizzes with <span className='text-green-500'>AI</span></h1>
            <p className='text-title font-semibold md:text-heading text-subheading text-center'>Generate engaging quizzes instantly. Track student <br /> performance and gain insights to improve learning outcomes.</p>
            <div className="flex justify-center items-center gap-6">
                <Link
                    href="/log-in"

                    className="bg-header rounded-xl py-3 px-6 font-semibold text-white hover:bg-header/90 transition-all duration-200"
                >
                    Start Creating Free
                </Link>
                <Link
                    href="/demo-quiz"
                    className="border border-gray-700/70 rounded-xl py-3 px-6 text-title font-semibold hover:bg-header hover:text-white transition-all duration-200"
                >
                    Try Sample Quiz
                </Link>
            </div>
            <div className="flex justify-center items-center gap-6">
                <p className='flex items-center gap-3'>
                    <Check className='text-header' />
                    <span className='text-small text-title'>No credit card required</span>
                </p>
                <p className='flex items-center gap-3'>
                    <Check className='text-header' />
                    <span className='text-small text-title'>Free to start</span>
                </p>
            </div>
        </div>
    )
}

export default Home
