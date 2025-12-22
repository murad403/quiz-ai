import { Check } from 'lucide-react'

const SignInProcess = () => {
    return (
        <div className="bg-white/10 md:h-screen p-4 rounded-xl md:rounded-none md:p-0 md:border-l border-gray-700/50 w-full md:w-1/2 flex flex-col justify-center items-center">
            <div className="w-full md:w-1/2">
                <div>
                    <p className='text-sm py-1 px-5 bg-white/10 rounded-2xl text-green-500 inline-block'>
                        <span>For Educators</span>
                    </p>
                    <h1 className="font-semibold text-[40px] text-main">Create engaging quizzes in minutes</h1>
                    <p className="text-paragraph text-title">Use AI to generate comprehensive quizzes from any topic. Track student progress and gain insights to improve learning outcomes.</p>
                </div>
                <div className="mt-7 space-y-3">
                    <div className="flex items-center gap-3">
                        <h1 className='size-10 bg-green-500/10 flex justify-center items-center p-3 text-green-500 rounded-xl'>
                            <Check size={19} className='text-header' />
                        </h1>
                        <div>
                            <h3 className="text-main font-semibold text-paragraph">AI-Powered Generation</h3>
                            <p className="text-small text-title">Generate quiz questions from any topic instantly</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <h1 className='size-10 bg-green-500/10 flex justify-center items-center p-3 text-green-500 rounded-xl'>
                            <Check size={19} className='text-header' />
                        </h1>
                        <div>
                            <h3 className="text-main font-semibold text-paragraph">Easy Sharing</h3>
                            <p className="text-small text-title">Share quiz links with students - no accounts needed</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <h1 className='size-10 bg-green-500/10 flex justify-center items-center p-3 text-green-500 rounded-xl'>
                            <Check size={19} className='text-header' />
                        </h1>
                        <div>
                            <h3 className="text-main font-semibold text-paragraph">Performance Tracking</h3>
                            <p className="text-small text-title">View detailed analytics and insights</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignInProcess
