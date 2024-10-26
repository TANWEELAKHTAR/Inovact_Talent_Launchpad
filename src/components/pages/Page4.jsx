import React from 'react'

const Page4 = () => {
  return (
    <div className='w-full p-6 mt-8 flex flex-col gap-4 items-center'>
        <h1 className='text-2xl font-normal'>Why Inovact Talent Launchpad</h1>
        <div className="w-full  flex flex-col md:flex-row gap-4">
            <div className="w-full p-4 md:w-1/2 flex flex-col gap-2 items-center rounded-md bg-red-300">
                <h1 className='text-xl font-semibold text-red-500'>Problem </h1>
                <p className='text-sm font-light'>tract work, and freelance projects. Our mission is to bridge the talent gap and help businesses build high-performing teams that drive innovation and growth, all through a streamlined, intelligent hiring process.</p>
            </div>
            <div className="w-full p-4 md:w-1/2 flex flex-col gap-2 items-center rounded-md bg-blue-300 ">
                <h1 className='text-xl font-semibold text-blue-500'>Solution</h1>
                <p className='text-sm font-light'>tract work, and freelance projects. Our mission is to bridge the talent gap and help businesses build high-performing teams that drive innovation and growth, all through a streamlined, intelligent hiring process.</p>
            </div>
        </div>
    </div>
  )
}

export default Page4
