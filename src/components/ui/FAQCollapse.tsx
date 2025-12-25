"use client";
import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const FAQCollapse = ({title}) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <h1 className=''>{title}</h1>
            <div className="border border-gray-700/50 collapse hover:border-header bg-white/10 relative">
            <input
                type="checkbox"
                className="peer absolute opacity-0"
                id="faq-1"
                checked={isOpen}
                onChange={(e) => setIsOpen(e.target.checked)}
            />
            <label
                htmlFor="faq-1"
                className='size-10 bg-green-500/10 flex justify-center items-center p-3 text-green-500 rounded-full absolute right-2 top-3 cursor-pointer z-10'
            >
                <IoIosArrowDown
                    size={22}
                    className={`text-header transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                />
            </label>
            <label
                htmlFor="faq-1"
                className="collapse-title text-main text-paragraph border-gray-700/50 border-b peer-checked:text-main py-5 cursor-pointer"
            >
                How do I create an account?
            </label>
            <div
                className="collapse-content peer-checked:text-title text-title peer-checked:p-6"
            >
                Click the "Sign Up" button in the top right corner and follow the registration process.
            </div>
        </div>
        </div>
    )
}

export default FAQCollapse
