import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-white/10 pt-10 border-t border-gray-700/70 mt-32 px-4 md:px-0'>
            <div className='mx-auto container'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-4 border-b border-gray-700/70 pb-10'>
                    <div>
                        <h2 className='text-main font-semibold text-subheading'>QuizAI</h2>
                        <p className='text-small text-title'>AI-powered quiz creation platform for modern educators.</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-main font-semibold text-subheading'>Product</h2>
                        <Link className='text-title hover:text-main text-small' href={"#features"}>Features</Link>
                        <Link className='text-title hover:text-main text-small' href={"#features"}>Demo</Link>
                        <Link className='text-title hover:text-main text-small' href={"#pricing"}>Pricing</Link>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-main font-semibold text-subheading'>Company</h2>
                        <Link className='text-title hover:text-main text-small' href={"/about"}>About</Link>
                        <Link className='text-title hover:text-main text-small' href={"/faq"}>FAQ</Link>
                        <Link className='text-title hover:text-main text-small' href={"/contact"}>Contact</Link>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-main font-semibold text-subheading'>Legal</h2>
                        <Link className='text-title hover:text-main text-small' href={"/privacy-policy"}>Privacy Policy</Link>
                        <Link className='text-title hover:text-main text-small' href={"/terms-of-pervice"}>Terms of Service</Link>
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
