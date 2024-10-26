import React from 'react'
import Swiper from '../other/Swiper'

const Hero = () => {
  return (
    <div className='px-6 md:px-12'>
      <Swiper />
    <div>
        <div className="w-full flex items-center gap-1 mt-4">
            <img className='w-10 h-10 rounded-xl' src="https://images.unsplash.com/photo-1534614971-6be99a7a3ffd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <img className='w-10 h-10 rounded-xl' src="https://images.unsplash.com/photo-1534614971-6be99a7a3ffd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <img className='w-10 h-10 rounded-xl' src="https://images.unsplash.com/photo-1534614971-6be99a7a3ffd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <p className='text-xs ml-2'>1000+ students got placed</p>
        </div>
        <div className="mt-4">
            <h1 className='text-xl font-medium'>Find Top Talent Effortlessly with <span className='text-[#1649FF]'>Inovact Talent Launchpad</span></h1>
            <p className='text-sm mt-2'>Access a diverse pool of 10,000+ skilled candidates and streamline your hiring process with data-backed insights, tailored for startups and businesses.</p>
            <button className='text-white bg-gradient-to-r from-[#1649FF] to-[#0D2C99] px-4 py-2 rounded-md mt-4'>Placement for CTA</button>
        </div>
    </div>     
    </div>
  )
}

export default Hero
