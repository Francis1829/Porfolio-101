import React from 'react'
import Me from '../assets/ME2.png'
import { FaArrowRight } from "react-icons/fa";

function Intro() {
  return (
    <>
    <div className="bg relative top-0 w-full  h-screen z-10 bg-[url('../src/assets/Unsplash5.jpg')] bg-center bg-cover bg-no-repeat">
      <div className="bg-[#1d1f1d] absolute  w-full h-full opacity-30 -z-10"></div>
      <div className="bg-[url('../src/assets/Bg-theme.png')] absolute  w-full h-full"></div>
    </div>
    <div className="w-full h-screen absolute lg:top-24 top-12 z-30">
    <div className=" flex lg:flex-row flex-col-reverse lg:justify-around justify-center text-white ">
        <div className="flex flex-col justify-center items-center intro w-auto lg:w-[70%]">
          <div className="bttn text-center lg:text-2xl text-base font-[satisfy]  lg:m-5 tracking-wider">
            My Portfolio
          </div>
          <div className=" uppercase text-center m-5">
            <div className=' border-b-2 font-semibold font-[gresan] text-[1.5rem] lg:text-[2.5rem] tracking-wider'>Francis mar b. subsilica</div>
            <div className='font-[grotesk] text-sm lg:text-base'>Web Developer</div>
          </div>
          <div className="lg:text-xl text-sm m-5 mx-10 font-[grotesk] text-center">Hello, I'm a web developer dedicated to crafting responsive and user-friendly websites. With a strong foundation in programming and design, I excel at meeting diverse content needs. As a detail-oriented professional, I am eager to contribute my skills. Join me down below, and let's get cracking!</div>
          <div className="bttn text-sm lg:text-lg font-[grotesk] lg:m-10 m-4">
            <button className='lg:px-7 px-5 lg:py-3 py-1 mx-3 flex items-center border border-white rounded-md hover:bg-white  hover:text-black duration-300 ease-in-out'>Connect with me!<span className='mx-2'><FaArrowRight /></span></button>
          </div> 
        </div>
        <div className="ikmg lg:w-[50%] w-auto flex justify-center items-center mb-10">
          <img src={Me} alt=""  className='lg:w-[330px] w-[200px]'/>
        </div>
      </div>
      </div>
    </>
  )
}

export default Intro