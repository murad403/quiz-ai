import Heading from "@/components/shared/Heading"

const About = () => {
  return (
    <div className='container mx-auto md:mt-20 mt-7'>
      <div className='flex justify-center'>
        <div className='md:w-[65%] w-full space-y-10'>
          <div>
            <h1 className='text-main md:text-[60px] text-[50px] font-bold'>About QuizAI</h1>
            <p className='text-title font-semibold text-subheading'>Empowering educators with AI-powered tools to create <br />better assessments and improve learning outcomes.</p>
          </div>
          <div>
            <h1 className='text-main md:text-[40px] text-heading font-bold capitalize'>Our Mission</h1>
            <p className='text-paragraph text-title'>{`At QuizAI, we believe that creating high-quality educational assessments shouldn't be a time-consuming process. Our mission is to leverage artificial intelligence to help educators save time while maintaining the highest standards of educational quality.`}</p>
          </div>
          <div>
            <h1 className='text-main md:text-[40px] text-heading font-bold capitalize'>Why We Built QuizAI</h1>
            <p className='text-paragraph text-title'>We recognized that teachers spend countless hours crafting quizzes and assessments. Our team of educators and technologists came together to build a solution that combines the best of AI technology with pedagogical best practices to streamline the quiz creation process.</p>
          </div>


          {/* our values */}
          <div>
            <h1 className='text-main md:text-[40px] text-heading font-bold capitalize mb-2'>Our Values</h1>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
              <div className="bg-white/10 border rounded-xl space-y-1 p-7 border-gray-700/50">
                <h2 className='text-main text-subheading font-bold capitalize'>Education First</h2>
                <p className='text-paragraph text-title'>Every feature is designed with educators and students in mind.</p>
              </div>
              <div className="bg-white/10 border rounded-xl space-y-1 p-7 border-gray-700/50">
                <h2 className='text-main text-subheading font-bold capitalize'>Education First</h2>
                <p className='text-paragraph text-title'>Every feature is designed with educators and students in mind.</p>
              </div>
              <div className="bg-white/10 border rounded-xl space-y-1 p-7 border-gray-700/50">
                <h2 className='text-main text-subheading font-bold capitalize'>Education First</h2>
                <p className='text-paragraph text-title'>Every feature is designed with educators and students in mind.</p>
              </div>
              <div className="bg-white/10 border rounded-xl space-y-1 p-7 border-gray-700/50">
                <h2 className='text-main text-subheading font-bold capitalize'>Education First</h2>
                <p className='text-paragraph text-title'>Every feature is designed with educators and students in mind.</p>
              </div>
            </div>
          </div>

          <div className='w-full bg-green-500/10 border border-gray-700/70 md:px-32 px-2 md:py-20 py-6 rounded-xl'>
            <Heading title='Join Thousands of Educators' description='Start creating better quizzes today with QuizAI'></Heading>
            <div className='flex justify-center'>
              <button className='capitalize bg-header rounded-xl py-3 px-6 font-semibold text-white hover:bg-header/90 transition-all duration-200'>get start for free</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
