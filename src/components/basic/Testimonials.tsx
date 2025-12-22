import React from 'react'
import Heading from '../shared/Heading'
import { testimonials } from '@/lib/testimonials'

const Testimonials = () => {
    return (
        <div id='testimonials'>
            <Heading title='Trusted by Educators Worldwide' description='See what teachers are saying about QuizAI'></Heading>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 items-center'>
                { testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="bg-white/10 rounded-xl p-4 border border-gray-700/50 space-y-4">
                        {/* Stars */}
                        <div className="flex gap-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <span key={i} className="text-green-500 text-xl">★</span>
                            ))}
                        </div>

                        {/* Review Text */}
                        <p className="text-title text-small leading-relaxed">
                            {`"${testimonial.review}"`}
                        </p>

                        {/* Author */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-main font-semibold">
                                {testimonial.initials}
                            </div>
                            <div>
                                <p className="text-main text-paragraph font-medium">{testimonial.name}</p>
                                <p className="text-title text-small">{testimonial.role}</p>
                            </div>
                        </div>
                    </div>
                )) }
            </div>
        </div>
    )
}

export default Testimonials
