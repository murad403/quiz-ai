"use client"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import Link from 'next/link';
import { RiLoopLeftLine } from 'react-icons/ri';
import { MdSaveAlt } from 'react-icons/md';
import SaveAndPublishModal from '@/components/ui/SaveAndPublishModal';
import { quizValidation } from '@/validation/validation';
import GeneratedQuestions from './GeneratedQuestions';

type TInputs = z.infer<typeof quizValidation>;

const CreateQuizForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<TInputs>({
        resolver: zodResolver(quizValidation),
        defaultValues: {
            numberOfQuestions: 5
        }
    });

    const onSubmit = (data: TInputs) => {
        console.log(data);
    };

    return (
        <div>
            <div className="flex items-center flex-col justify-center mt-4 bg-card p-6 border border-gray-700/70 rounded-lg">
                {/* questions form */}
                <div className="w-full gap-8">
                    <div>
                        <h1 className="font-semibold text-subheading text-white">Quiz Details</h1>
                        <p className="text-title">Provide information about the quiz you want to create</p>
                    </div>

                    <div className="w-full space-y-4 mt-4">
                        {/* Quiz Topic Field */}
                        <div>
                            <label className="text-main font-semibold text-paragraph block mb-2" htmlFor="topic">
                                Quiz Topic <span>*</span>
                            </label>
                            <input
                                className="w-full appearance-none px-4 py-2 border border-gray-700/70 rounded-lg focus:outline-2 outline-header text-title"
                                placeholder="e.g. World War II, Photosynthesis, Shakespeare's Macbeth"
                                {...register("topic")}
                            />
                            {errors.topic && <p className="text-red-500 text-sm mt-2">{errors.topic.message}</p>}
                        </div>

                        {/* Context or Material Field */}
                        <div>
                            <label className="text-main font-semibold text-paragraph block mb-2" htmlFor="context">
                                Context or Material (Optional)
                            </label>
                            <textarea
                                className="w-full appearance-none px-4 py-2 border border-gray-700/70 rounded-lg focus:outline-2 outline-header text-title bg-card min-h-25 resize-y"
                                placeholder="Providing context helps generate more relevant and specific questions"
                                {...register("context")}
                            />
                            <p className="text-title text-sm mt-1">Providing context helps generate more relevant and specific questions</p>
                            {errors.context && <p className="text-red-500 text-sm mt-2">{errors.context.message}</p>}
                        </div>

                        {/* Number of Questions Field */}
                        <div>
                            <label className="text-main font-semibold text-paragraph block mb-2" htmlFor="numberOfQuestions">
                                Number of Questions
                            </label>
                            <input
                                type="number"
                                className="w-full appearance-none px-4 py-2 border border-gray-700/70 rounded-lg focus:outline-2 outline-header text-title"
                                {...register("numberOfQuestions", { valueAsNumber: true })}
                            />
                            {errors.numberOfQuestions && <p className="text-red-500 text-sm mt-2">{errors.numberOfQuestions.message}</p>}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4 pt-4">
                            <Link href={"/profile"}
                                className="text-main font-semibold w-full text-center py-2 rounded-lg border border-gray-700/50 hover:bg-header/90"
                            >
                                Cancel
                            </Link>
                            <button
                                onClick={handleSubmit(onSubmit)}
                                className="text-main font-semibold w-full text-center py-2 rounded-lg bg-header hover:bg-header/90 flex items-center justify-center gap-4"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                                </svg>
                                Generate Quiz
                            </button>
                        </div>
                    </div>
                </div>

            </div>


            <div className='max-w-6xl mx-auto mt-8'>
                <div className='flex flex-col md:flex-row gap-4 justify-between md:items-center'>
                    <div>
                        <h1 className='font-semibold text-main text-heading'>Topic</h1>
                        <p className='text-paragraph text-title'>5 questions generated</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <Link className='flex gap-4 px-4 py-2 items-center border border-gray-700/50 hover:bg-header/90 rounded-lg font-medium text-main' href={"/create-quiz"}>
                            <RiLoopLeftLine />
                            <span>Regenerate</span>
                        </Link>
                        <button onClick={() => {
                            (document.getElementById('my_modal_2') as HTMLDialogElement).showModal()
                        }} className="text-main font-semibold px-4 w-full text-center py-2 rounded-lg bg-header hover:bg-header/90 flex items-center justify-center gap-4">
                            <MdSaveAlt />
                            <span>Save & Publish</span>
                        </button>
                    </div>
                    <SaveAndPublishModal />
                </div>

                <GeneratedQuestions></GeneratedQuestions>
            </div>
        </div>
    );
};

export default CreateQuizForm;