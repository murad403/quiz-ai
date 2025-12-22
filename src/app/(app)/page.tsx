import Features from '@/components/basic/Features'
import Home from '@/components/basic/Home'
import HowItsWorks from '@/components/basic/HowItsWorks'
import Pricing from '@/components/basic/Pricing'
import Testimonials from '@/components/basic/Testimonials'
import Transform from '@/components/basic/Transform'

const page = () => {
  return (
    <main className='space-y-32 container mx-auto px-4 md:px-0'>
      <Home></Home>
      <Features></Features>
      <HowItsWorks></HowItsWorks>
      <Testimonials></Testimonials>
      <Pricing></Pricing>
      <Transform></Transform>
    </main>
  )
}

export default page
