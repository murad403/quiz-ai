import React from 'react'

const FAQBanner = () => {
    return (
        <div className='py-10 md:py-20 bg-green-500/10 px-4 md:px-0'>
            <div className='flex justify-center items-center'>
                <p className='text-sm py-1 px-5 bg-white/10 rounded-2xl text-green-500 inline-block'>
                    <span>Frequently Asked Questions</span>
                </p>
            </div>
            <h1 className='text-main md:text-[70px] text-[50px] font-bold text-center'>Got Questions?</h1>
            <h1 className='text-green-500 md:text-[70px] text-[50px] font-bold text-center'>{`We've Got Answers`}</h1>
            <p className='text-title font-semibold text-paragraph text-center'>Everything you need to know about QuizAI and how it works</p>
        </div>
    )
}

export default FAQBanner
