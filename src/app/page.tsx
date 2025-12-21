import Home from '@/components/basic/Home'
import Navbar from '@/components/shared/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className="container mx-auto px-4 md:px-0">
      <Navbar></Navbar>
      <main>
        <Home></Home>
      </main>
    </div>
  )
}

export default page
