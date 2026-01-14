import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-card pt-10 border-t border-gray-700/70 px-4 md:px-0'>
            <div className='mx-auto container'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-4 border-b border-gray-700/70 pb-10'>
                    <div className='space-y-2'>
                        <h2 className='text-main font-semibold text-subheading'>QuizAI</h2>
                        <p className='text-small text-title'>AI-powered quiz creation platform for modern educators.</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-main font-semibold text-subheading'>Product</h2>
                        <li className='list-none'>
                            <Link className='text-title hover:text-main text-small' href="#features">
                                Features
                            </Link>
                        </li>
                        <li className='list-none'>
                            <Link className='text-title hover:text-main text-small' href="/demo-quiz">
                                Demo
                            </Link>
                        </li>
                        <li className='list-none'>
                            <Link className='text-title hover:text-main text-small' href="#pricing">
                                Pricing
                            </Link>
                        </li>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <h2 className='text-main font-semibold text-subheading'>Company</h2>
                        <li className='list-none'>
                            <Link className='text-title hover:text-main text-small' href="/about">
                                About
                            </Link>
                        </li>
                        <li className='list-none'>
                            <Link className='text-title hover:text-main text-small' href="/faq">
                                FAQ
                            </Link>
                        </li>
                        <li className='list-none'>
                            <Link className='text-title hover:text-main text-small' href="/contact">
                                Contact
                            </Link>
                        </li>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <h2 className='text-main font-semibold text-subheading'>Legal</h2>
                        <li className='list-none'>
                            <Link className='text-title hover:text-main text-small' href="/privacy-policy">
                                Privacy Policy
                            </Link>
                        </li>
                        <li className='list-none'>
                            <Link className='text-title hover:text-main text-small' href="/terms-of-service">
                                Terms of Service
                            </Link>
                        </li>
                    </div>
                </div>
                <div className='py-10 text-center'>
                    <p className='text-paragraph text-title font-medium'>
                        © {new Date().getFullYear()} QuizAI. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
