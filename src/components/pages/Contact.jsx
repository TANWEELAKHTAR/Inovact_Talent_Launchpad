import React from 'react'

const Contact = () => {
  return (
    <div className='w-full p-6 md:p-12 bg-[url(https://s3-alpha-sig.figma.com/img/127f/872d/6f45cd099ba040f512b74f06840565d6?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hP0-KMYhJrmqgB-Z8cKhSNLT6lutCduTPcMXFgKR6Hh10crTT0OJdcyLJpmtj3h8Av8jnqSUTEFUOkQKPAKjqhgvePSxmk~6kcnZ2Q9tY6i~hCBET8~5HKc14pgY97O68ZAd5vvYDt0At1sr8ztl86MXfPUcdqPXFtR8maBqB1Wh0xm2qfx3afdGeBnBoei6Z9s4AjHGsvr51Zwm~DqKO6tc4xfRSELxS~9Q8GAl29FKUN6rx7lDMyfljEYqRAI0~wweG0iDwdn7remWQfN3KnHQMkYSkEU6AUv~phcLGjq0MPGDSk1-uTqUUuBQ0YBHXSwgK9fDYOE93VqLY7Ph3w__)]'>
      <div className="w-full p-6 flex flex-col items-center gap-8 bg-[#f1f1f1] rounded-xl">
      <div className="social flex items-center gap-4">
        <img className='w-10 h-10' src="./X icon.svg" alt="" />
        <img className='w-10 h-10' src="./github icon.svg" alt="" />
        <img className='w-10 h-10' src="./linkedin icon.svg" alt="" />
      </div>
        <h1 className='text-2xl font-medium text-center'>"Start Hiring Smarter Today" join now </h1>
        <form className="w-full flex flex-col items-center">
          <div className="w-full flex flex-col md:flex-row gap-4">
            <input className='w-full md:w-1/2 px-4 py-2 rounded-md' type="email" placeholder='Email' />
            <input className='w-full md:w-1/2 px-4 py-2 rounded-md' type="number" placeholder='Phone Number' />
          </div>
          <button className='w-full bg-[#000] text-white px-4 py-2 rounded-md mt-4'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
