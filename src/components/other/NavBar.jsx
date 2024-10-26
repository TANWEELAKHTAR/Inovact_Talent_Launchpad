import React from 'react'

const NavBar = () => {
  return (
    <nav className='absolute top-0 z-50 w-full flex justify-between items-center py-4 px-6 md:px-12 bg-[#F6F6F7]'>
      <h1 className='text-lg font-medium '>Inovact Talent Launchpad</h1>
      <div className="flex items-center gap-5">
        <h1 className='hidden sm:block text-xs'>About Us</h1>
        <button className='text-xs text-white bg-gradient-to-r from-[#1649FF] to-[#0D2C99] px-4 py-2 rounded-md'>Download The App</button>
      </div>
    </nav>
  )
}

export default NavBar
