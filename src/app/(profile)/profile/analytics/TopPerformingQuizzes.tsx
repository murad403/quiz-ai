import { TTopPerformingQuiz } from '@/types/allTypes'

const TopPerformingQuizzes = ({quizzes}: {quizzes: TTopPerformingQuiz[]}) => {
  // console.log(quizzes)
  return (
    <div className='bg-card border border-gray-700/50 rounded-lg p-4'>
      <h2 className='text-main font-medium text-xl'>Top Performing Quizzes</h2>
      <div className='space-y-4 mt-6'>
        {
            quizzes?.map((quiz: TTopPerformingQuiz) => 
                <div key={quiz.id} className='flex justify-between border border-gray-700/50 rounded-lg p-4'>
                    <div>
                        <h2 className='text-main text-lg font-medium mb-3'>{quiz.title}</h2>
                        <p className='text-sm text-title'>{quiz.submissions} submissions</p>
                    </div>
                    <h1 className='text-header font-bold text-subheading'>{quiz.score_percentage}%</h1>
                </div>
            )
        }
      </div>
    </div>
  )
}

export default TopPerformingQuizzes
