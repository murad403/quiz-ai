import SignInProcess from "./SignInProcess"
import SignInForm from "./SignInForm"

const SignIn = () => {

    return (
        <div className="flex w-full flex-col md:flex-row md:gap-0 gap-20">
            <SignInForm></SignInForm>
            <SignInProcess></SignInProcess>
        </div>
    )
}

export default SignIn
