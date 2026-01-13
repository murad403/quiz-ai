"use client"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod';
import { quizValidation } from '@/validation/validation';
import { useCreateQuizMutation } from '@/redux/features/dashboard/dashboard.api';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

type TInputs = z.infer<typeof quizValidation>;

const CreateQuizForm = () => {
    const [createQuiz, { isLoading }] = useCreateQuizMutation();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<TInputs>({
        resolver: zodResolver(quizValidation),
        defaultValues: {
            title: 'Cybersecurity Basics',
            context: 'Covers malware, phishing, passwords, and safe browsing practices',
            num_questions: 5
        }
    });
    const router = useRouter();


    const onSubmit = async(data: TInputs) => {
        try {
            const result = await createQuiz(data).unwrap();
            toast.success("Quiz created successfully!");
            router.push(`/profile/create-quiz/${result.id}`);
        } catch (error) {
            toast.error("Failed to create quiz. Please try again.");
        }
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
                                {...register("title")}
                            />
                            {errors.title && <p className="text-red-500 text-sm mt-2">{errors.title.message}</p>}
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
                                {...register("num_questions", { valueAsNumber: true })}
                            />
                            {errors.num_questions && <p className="text-red-500 text-sm mt-2">{errors.num_questions.message}</p>}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4 pt-4">
                            {/* <button onClick={handleCancel}
                                className="text-main font-semibold w-full text-center py-2 rounded-lg border border-gray-700/50 hover:bg-header/90"
                            >
                                Cancel
                            </button> */}
                            <button
                                onClick={handleSubmit(onSubmit)}
                                className="text-main font-semibold w-full text-center py-2 rounded-lg bg-header hover:bg-header/90 flex items-center justify-center gap-4"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                                </svg>
                                {
                                    isLoading ? 'Generating...' : 'Generate Quiz'
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateQuizForm;