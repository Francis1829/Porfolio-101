import React from "react";
import Percent1 from "../assets/Percent1.png";
import Percent2 from "../assets/Percent2.png";
import Me from "../assets/ME2.png";
import { FaArrowRight } from "react-icons/fa6";
import Resume from '../Pages/ResumeUpdated.pdf'
import PageMotion from "../Motions/PageMotion";

function AboutMe() {
  return (
    <>
    
      <div className="bg-white text-black relative">
        <div className="bg-[url('../src/assets/Bg-theme.png')] absolute  w-full h-full"></div>
        <div className="w-full h-full flex justify-center items-center z-30 py-7 xl:p-10 lg:p-7 md:p-4 sm:p-2 ">
          <div className="container p-10">
          <div className="bttn text-center text-[#251744] lg:text-start text-[2.5rem] font-[satisfy]  tracking-wider m-5 2xl:p-0 xl/lg:p-0 pt-10 ">
            About Me
          </div>
              
          <div className="flex justify-center items-center w-full">  
          <PageMotion>
          <div className="ikmg flex justify-center items-center lg:mb-10 md:mb-1 sm:mb-3">
            <img
              src={Me}
              alt=""
              className="lg:w-[330px] md:w-[280px] w-[230px]"
            />
          </div>
            </PageMotion>
          </div>
        
          <div className=" flex xl:flex-row flex-col xl:justify-around justify-center items-center pb-8">
            <div className="flex flex-col items-center 2xl:w-[50%] xl/lg:w-[50%] w-auto my-5">
            <PageMotion>
              <div className="lg:text-xl md:text-lg text-base lg:my-10 my-7 font-[grotesk] text-center">
                Hello, I'm Francis Mar Bulusan Subsilica, but my friends call me
                Ikko. During my free time, you'll often find me immersed in
                anime or whipping up my favorite dishes in the kitchen. I'm a
                web designer based in Isabela, Philippines, passionate about
                crafting websites for small businesses in our town. Regardless
                of your location, I'm here to help you build a stunning website.
                Let's work together to bring your online presence to life!
              </div>
              </PageMotion>
              <PageMotion>
              <div className="bttn text-base lg:text-xl md:text-lg font-[grotesk] lg:m-10 m-4 relative z-30">
              <a href={Resume} download={Resume}>  <button className="lg:px-7 md:px-6 px-5  lg:py-3 py-2 mx-3 flex items-center border border-black rounded-md hover:bg-black  hover:text-white duration-300 ease-in-out">
                  Download CV
                  <span className="mx-2">
                    <FaArrowRight />
                  </span>
                </button></a>
              </div>
              </PageMotion>
            </div>
           
            <div className="ikmg flex flex-col justify-center items-center 2xl:mt-[5rem] xl/lg:mt-[5rem] mt-10 w-full">
              <div className="font-[grotesk] font-semibold ">
              <PageMotion>
                <img src={Percent1} alt="precent" className="w-[550px]" />
                <div className="ml-5 text-base mt-2 italic">95%</div>
                <div className="ml-5 text-base tracking-wide">Logo Design</div>
                </PageMotion>
              </div>
              <div className="font-[grotesk] font-semibold mt-2 ">
              <PageMotion>
                <img src={Percent2} alt="precent" className="w-[550px]" />
                <div className="ml-5 text-base mt-2 italic">90%</div>
                <div className="ml-5 text-base tracking-wide">
                  Brand Identity
                </div>
                </PageMotion>
              </div>
              <div className="font-[grotesk] font-semibold mt-2 ">
              <PageMotion>
                <img src={Percent2} alt="precent" className="w-[550px]" />
                <div className="ml-5 text-base mt-2 italic">90%</div>
                <div className="ml-5 text-base tracking-wide">Database</div>
                </PageMotion>
              </div>
              <div className="font-[grotesk] font-semibold mt-2">
              <PageMotion>
                <img src={Percent1} alt="precent" className="w-[550px]" />
                <div className="ml-5 text-base mt-2 italic">95%</div>
                <div className="ml-5 text-base tracking-wide">
                  Responsive Design
                </div>
                </PageMotion>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default AboutMe;
