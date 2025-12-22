import SignUpForm from './SignUpForm'
import SignUpProcess from './SignUpProcess'

const SignUp = () => {
  return (
    <div className="flex w-full flex-col md:flex-row md:gap-0 gap-20">
      <SignUpForm></SignUpForm>
      <SignUpProcess></SignUpProcess>
    </div>
  )
}

export default SignUp
