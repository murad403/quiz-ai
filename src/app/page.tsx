import Features from '@/components/basic/Features'
import Home from '@/components/basic/Home'
import HowItsWorks from '@/components/basic/HowItsWorks'
import Testimonials from '@/components/basic/Testimonials'
import Navbar from '@/components/shared/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className="container mx-auto px-4 md:px-0">
      <Navbar></Navbar>
      <main className='space-y-32'>
        <Home></Home>
        <Features></Features>
        <HowItsWorks></HowItsWorks>
        <Testimonials></Testimonials>
      </main>
    </div>
  )
}

export default page
