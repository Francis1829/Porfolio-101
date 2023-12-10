import React from 'react'

function Education() {
  return (
    <>
<div className="bg-white text-black mt-20 relative">
        <div className="bg-[url('../src/assets/Bg-theme.png')] absolute  w-full h-full"></div>
        <div className="w-full h-full z-30 lg:p-10 p-7 ">
          <div className="bttn text-center lg:text-start text-3xl font-[satisfy] m-5 tracking-wider">
            Education & Work Expercience
          </div>
          <div className=" flex xl:flex-row flex-col lg:justify-around justify-center font-[grotesk] text-base md:text-lg lg:text-xl xl:items-start items-center">
          <div className='m-1 w-[70%] '>
          <ul className="flex flex-col list-disc m-1 ">
                <li className='lg:text-2xl text-xl my-2'> Bachelor of Science in Computer Science</li>
                <div>Isabela State University - Cauayan Campus</div>
                <div>(2016 - 2019)</div>
            </ul>
            </div>
            <div className='m-1 w-[70%]'>
            <ul className=' list-disc '>
                <li className='lg:text-2xl text-xl my-2'>On The Job Training</li>
                <div>College of Computing Studies, Information and Communication Technology</div>
                <div>(May-June 2018)</div>
            </ul>
            <ul className=' list-disc '>
                <li className='lg:text-2xl text-xl my-2'>Hold Down Press Operator</li>
                <div>Universal Leaf Philippines Inc.</div>
                <div>(Jan 2021 – Feb 2022)</div>
            </ul>
            <ul className=' list-disc '>
                <li className='lg:text-2xl text-xl my-2'>Virtual Assistant</li>
                <div>HustleVA</div>
                <div>(july 2023)</div>
            </ul>
            </div>
          </div>
          </div>
      </div>
    </>
  )
}

export default Education