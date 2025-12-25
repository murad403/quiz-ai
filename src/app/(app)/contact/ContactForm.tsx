'use client'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { contactValidation } from '@/validation/validation'

type TInputs = z.infer<typeof contactValidation>

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<TInputs>({
        resolver: zodResolver(contactValidation)
    })

    const onSubmit: SubmitHandler<TInputs> = (data) => {
        console.log(data)
        reset()
    }

    return (
        <div className='w-full md:w-1/2'>
            <form className="w-full space-y-3 bg-card border border-gray-700/70 rounded-xl p-4" onSubmit={handleSubmit(onSubmit)}>

                {/* Name Field */}
                <div>
                    <label className="text-main font-semibold text-paragraph block mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="w-full appearance-none px-4 py-2 border border-gray-700/70 rounded-lg focus:outline-2 outline-header text-title"
                        placeholder="John Doe"
                        {...register("name")}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name.message}</p>}
                </div>

                {/* Email Field */}
                <div>
                    <label className="text-main font-semibold text-paragraph block mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        className="w-full appearance-none px-4 py-2 border border-gray-700/70 rounded-lg focus:outline-2 outline-header text-title"
                        placeholder="john@example.com"
                        {...register("email")}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>}
                </div>

                {/* Subject Field */}
                <div>
                    <label className="text-main font-semibold text-paragraph block mb-2" htmlFor="subject">
                        Subject
                    </label>
                    <input
                        className="w-full appearance-none px-4 py-2 border border-gray-700/70 rounded-lg focus:outline-2 outline-header text-title"
                        placeholder="How can we help?"
                        {...register("subject")}
                    />
                    {errors.subject && <p className="text-red-500 text-sm mt-2">{errors.subject.message}</p>}
                </div>

                {/* Message Field */}
                <div>
                    <label className="text-main font-semibold text-paragraph block mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        rows={4}
                        className="w-full appearance-none px-4 py-2 border border-gray-700/70 rounded-lg focus:outline-2 outline-header text-title"
                        placeholder="Tell us more about your inquiry..."
                        {...register("message")}
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="text-main font-semibold w-full text-center py-3 rounded-lg transition-colors bg-header hover:bg-header/90"
                >
                    Send Message
                </button>
            </form>
        </div>
    )
}

export default ContactForm