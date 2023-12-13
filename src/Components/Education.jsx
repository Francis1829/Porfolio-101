import React from 'react'
import PageMotion from '../Motions/PageMotion'


function Education() {
  return (
    <>

<div className="bg-white text-black relative">  
        <div className="bg-[url('../src/assets/Bg-theme.png')] absolute  w-full h-full"></div>
        <div className="w-full h-full flex justify-center items-center z-30 lg:p-10 ">
          <div className="container py-10">
          <div className="bttn text-center lg:text-start text-[2.5rem] font-[satisfy] m-5 2xl:p-0 xl/lg:p-0 pt-10  tracking-wider text-[#251744] ">
            Education & Work Expercience
          </div>    
          <div className=" flex w-full justify-center items-center">
            <div className="flex font-[grotesk] text-base md:text-lg lg:text-xl py-10 2xl:flex-row xl/lg:flex-row flex-col justify-center 2xl:items-start xl/lg:items-start items-center"> 
          <div className='m-5 w-[70%] '>
            <PageMotion>
          <ul className="flex flex-col list-disc m-1 ">
                <li className='lg:text-2xl text-xl my-2'> Bachelor of Science in Computer Science</li>
                <div>Isabela State University - Cauayan Campus</div>
                <div>(2016 - 2019)</div>
            </ul>
            </PageMotion>
            </div>
            <div className='m-5 w-[70%]'>
            <PageMotion>
            <ul className=' list-disc '>
                <li className='lg:text-2xl text-xl my-2'>On The Job Training</li>
                <div>College of Computing Studies, Information and Communication Technology</div>
                <div>(May-June 2018)</div>
            </ul>
            </PageMotion>
            <PageMotion>
            <ul className=' list-disc '>
                <li className='lg:text-2xl text-xl my-2'>Hold Down Press Operator</li>
                <div>Universal Leaf Philippines Inc.</div>
                <div>(Jan 2021 – Feb 2022)</div>
            </ul>
            </PageMotion>
            <PageMotion>
            <ul className=' list-disc '>
                <li className='lg:text-2xl text-xl my-2'>Virtual Assistant</li>
                <div>HustleVA</div>
                <div>(july 2023)</div>
            </ul>  
            </PageMotion>
            </div>
          </div>
          </div>
          </div>
        
      </div>  
      </div>
    </>
  )
}

export default Education