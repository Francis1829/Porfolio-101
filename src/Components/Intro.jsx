import React from "react";
import Me from "../assets/ME2.png";
import { FaArrowRight } from "react-icons/fa";
import FRANCIS from "../assets/Francis.png"
import MAR from "../assets/Mar.png"
import SUBSILICA from "../assets/Subsilica.png"
function Intro() {
  const HandleClick = () => {
    window.location.href = "mailto:francissubsilica.fms@gmail.com";
  };
  return (
    <>
      <div className="bg relative top-0 w-full  h-screen z-10 bg-[url('../src/assets/Unsplash5.jpg')] bg-center bg-cover bg-no-repeat">
        <div className="bg-[#1d1f1d] absolute  w-full h-full opacity-30 -z-10"></div>
        <div className="bg-[url('../src/assets/Bg-theme.png')] absolute  w-full h-full"></div>
      </div>
      <div className="w-full h-screen absolute lg:top-24 top-12 z-30">
        <div className=" flex xl:flex-row flex-col-reverse xl:justify-around justify-center items-center text-white ">
          <div className="flex flex-col justify-center items-center intro w-auto lg:w-[70%]">
            <div className="bttn text-center lg:text-2xl md:text-lg sm:text-xl text-xl font-[satisfy]  lg:m-5 md:m-1 sm:m-3 m-4  tracking-wider">
              My Portfolio
            </div>
            <div className="lg:m-5 md:m-2 sm:m-3 m-2 flex justify-center">
              <div className="flex lg:flex-row flex-col justify-center items-center">
                <img src={FRANCIS} alt="name" className="lg:w-[240px] lg:h-[85px] md:w-[300px] md:h-[75px] md:mr-[12rem] h-[60px]  sm:mr-[6rem] lg:m-0 sm:w-[260px] w-[220px]"  />
                <img src={MAR} alt="name" className="lg:w-[120px] lg:h-[85px] md:w-[160px] md:h-[75px] sm:w-[140px]  h-[60px] w-[110px]" />
                <img src={SUBSILICA} alt="name" className="lg:w-[240px] lg:h-[85px] md:w-[300px] md:h-[75px] md:ml-[12rem] h-[60px]  sm:ml-[6rem] lg:m-0 sm:w-[260px] w-[220px]" />
              </div>
            </div>
            <div className="lg:text-xl text-base lg:m-5 md:m-2 sm:m-3 m-2 lg:mx-10 md:mx-10 mx-10 font-[grotesk] text-center">
              Hello, I'm a web developer dedicated to crafting responsive and
              user-friendly websites. With a strong foundation in programming
              and design, I excel at meeting diverse content needs. As a
              detail-oriented professional, I am eager to contribute my skills.
              Join me down below, and let's get cracking!
            </div>
            <div className="bttn md:text-base lg:text-lg text-sm font-[grotesk] lg:m-10 md:m-1 sm:m-3 m-2">
              <button
                onClick={HandleClick}
                className="lg:px-7 px-5 lg:py-3 md:py-1 py-2 mx-3 flex items-center border border-white rounded-md hover:bg-white  hover:text-black duration-300 ease-in-out"
              >
                Connect with me!
                <span className="mx-2">
                  <FaArrowRight />
                </span>
              </button>
            </div>
          </div>
          <div className="ikmg lg:w-[50%] flex justify-center items-center lg:mb-10 md:mb-1 sm:mb-3 mb-3">
            <img
              src={Me}
              alt=""
              className="lg:w-[330px] md:w-[220px] sm:w-[180px] w-[170px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
