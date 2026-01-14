import { Check } from 'lucide-react'

const SignUpProcess = () => {
    return (
        <div className="bg-card md:h-screen p-4 rounded-xl md:rounded-none md:p-0 md:border-l border-gray-700/50 w-full md:w-1/2 flex flex-col justify-center items-center">
            <div className="w-full md:w-1/2">
                <div>
                    <p className='text-sm py-1 px-5 bg-white/10 rounded-2xl text-header inline-block'>
                        <span>Getting Started</span>
                    </p>
                    <h1 className="font-semibold text-[40px] text-main">Transform your teaching with AI</h1>
                    <p className="text-paragraph text-title">Join educators who are using AI to create better assessments and track student progress more effectively.</p>
                </div>

                <div className="mt-7 space-y-3">
                    <div className="flex items-center gap-3">
                        <h1 className='size-10 bg-green-500/10 flex justify-center items-center p-3 text-header rounded-xl'>
                            1
                        </h1>
                        <div>
                            <h3 className="text-main font-semibold text-paragraph">Create your account</h3>
                            <p className="text-small text-title">Sign up in seconds and access your dashboard</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <h1 className='size-10 bg-header/10 flex justify-center items-center p-3 text-header rounded-xl'>
                            2
                        </h1>
                        <div>
                            <h3 className="text-main font-semibold text-paragraph">Generate your first quiz</h3>
                            <p className="text-small text-title">Use AI to create quizzes from any topic or material</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <h1 className='size-10 bg-header/10 flex justify-center items-center p-3 text-header rounded-xl'>
                            3
                        </h1>
                        <div>
                            <h3 className="text-main font-semibold text-paragraph">Share and track</h3>
                            <p className="text-small text-title">Share with students and monitor their performance</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpProcess
