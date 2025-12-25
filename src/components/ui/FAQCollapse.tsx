"use client";
import { TFAQ } from '@/lib/faq';
import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

type TParams = {
    title: string;
    faqData: TFAQ[];
}

const FAQCollapse = ({ title, faqData }: TParams) => {
    const [openId, setOpenId] = useState<number | null>(null);

    const toggleOpen = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <div>
            <h1 className='text-main md:text-[40px] text-heading font-bold capitalize text-center mb-3'>
                {title}
            </h1>
            <div className='space-y-4'>
                {faqData.map((faq) => {
                    const isOpen = openId === faq.id;
                    const checkboxId = `faq-${faq.id}`;

                    return (
                        <div
                            key={faq.id}
                            className="border border-gray-700/50 collapse hover:border-header bg-card relative rounded-lg overflow-hidden"
                        >
                            {/* Hidden checkbox for accessibility & peer targeting */}
                            <input
                                type="checkbox"
                                className="peer absolute opacity-0"
                                id={checkboxId}
                                checked={isOpen}
                                readOnly // আমরা নিজেরা কন্ট্রোল করবো, native toggle হবে না
                            />

                            {/* Arrow Icon */}
                            <label
                                htmlFor={checkboxId}
                                onClick={() => toggleOpen(faq.id)}
                                className='size-10 bg-green-500/10 flex justify-center items-center p-3 text-green-500 rounded-full absolute right-2 top-3 cursor-pointer z-10'
                            >
                                <IoIosArrowDown
                                    size={22}
                                    className={`text-header transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                                />
                            </label>

                            {/* Question Label */}
                            <label
                                htmlFor={checkboxId}
                                onClick={() => toggleOpen(faq.id)}
                                className="collapse-title text-main text-paragraph border-gray-700/50 border-b peer-checked:text-main py-5 cursor-pointer block px-6 pr-16" // pr-16 for arrow space
                            >
                                {faq.question}
                            </label>

                            {/* Answer Content */}
                            <div className={`collapse-content text-title overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 p-6' : 'max-h-0 p-0'}`}>
                                <div className="peer-checked:block">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default FAQCollapse;