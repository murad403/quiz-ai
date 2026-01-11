import PageHeading from '@/components/shared/PageHeading'
import CreateQuizForm from './CreateQuizForm'


const page = () => {
  return (
    <div>
      <PageHeading title='Create a New Quiz' paragraph='Let AI generate quiz questions based on your topic and context'></PageHeading>
      <CreateQuizForm></CreateQuizForm>
    </div>
  )
}

export default page
