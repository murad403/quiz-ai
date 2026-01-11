import PageHeading from '@/components/shared/PageHeading'
import PersonalInformation from './PersonalInformation'
import ChangePassword from './ChangePassword'
import Notification from './Notification'
import DeleteAccount from './DeleteAccount'

const page = () => {
  return (
    <div className='w-full max-w-4xl mx-auto space-y-4'>
      <PageHeading title='Settings' paragraph='Manage your account settings and preferences'></PageHeading>
      <PersonalInformation></PersonalInformation>
      <ChangePassword></ChangePassword>
      <Notification></Notification>
      <DeleteAccount></DeleteAccount>
    </div>
  )
}

export default page
